<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { VetradocsChat, VetradocsFloatingBar } from 'vetradocs-vitepress/theme'

const { Layout } = DefaultTheme

const apiEndpoint = import.meta.env.DEV
  ? 'http://localhost:5000/kb/chat'
  : 'https://api.picmi.io/kb/chat'
const accentColor = '#42b883'

const needsIndex = Symbol('needs-index')
const featureStorageKey = 'picmi-help:vetradocs-enabled'
const vetradocsEnabled = ref(false)
let knownDocUrls: string[] = []
let linkIndexLoaded = false
let linkIndexPromise: Promise<void> | null = null
let chatLinkObserver: MutationObserver | null = null
let featureToggleHandler: ((event: KeyboardEvent) => void) | null = null

function splitHref(href: string) {
  const match = href.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/)

  return {
    path: match?.[1] || '',
    query: match?.[2] || '',
    hash: match?.[3] || ''
  }
}

function normalizeDocsPath(path: string) {
  let normalized = path
    .replace(/\\/g, '/')
    .replace(/\/+/g, '/')
    .replace(/\.md$/i, '')
    .replace(/\.html$/i, '')
    .replace(/\/index$/i, '/')

  if (normalized !== '/') {
    normalized = normalized.replace(/\/$/, '')
  }

  return normalized || '/'
}

function normalizeRootHref(href: string) {
  const { path, query, hash } = splitHref(href)
  const normalizedPath = normalizeDocsPath(path)

  return `${normalizedPath.startsWith('/') ? normalizedPath : `/${normalizedPath}`}${query}${hash}`
}

function relativeLookupKey(path: string) {
  return normalizeDocsPath(path)
    .replace(/^(\.\/)+/, '')
    .replace(/^(\.\.\/)+/, '')
    .replace(/^\//, '')
}

async function loadLinkIndex() {
  if (linkIndexLoaded) return
  if (linkIndexPromise) return linkIndexPromise

  linkIndexPromise = fetch('/search-index.json')
    .then(async (response) => {
      if (!response.ok) return

      const body = await response.text()
      const urls = new Set<string>()

      for (const match of body.matchAll(/"url":"([^"]+)"/g)) {
        const url = match[1].replace(/\\\//g, '/')

        if (url.startsWith('/')) {
          urls.add(normalizeDocsPath(url))
        }
      }

      knownDocUrls = [...urls].sort()
    })
    .catch((error) => {
      console.warn('[PICMI Help] Unable to load chat link index:', error)
    })
    .finally(() => {
      linkIndexLoaded = true
      linkIndexPromise = null
    })

  return linkIndexPromise
}

function chooseKnownDocUrl(candidates: string[]) {
  if (candidates.length === 0) return null
  if (candidates.length === 1) return candidates[0]

  const currentPath = window.location.pathname
  const currentAudience = currentPath.startsWith('/jobseeker')
    ? '/jobseeker'
    : currentPath.startsWith('/business')
      ? '/business'
      : ''

  return candidates.find((candidate) => currentAudience && candidate.startsWith(currentAudience)) || candidates[0]
}

function resolveRelativeDocHref(href: string) {
  const { path, query, hash } = splitHref(href)
  const lookupKey = relativeLookupKey(path)

  if (!lookupKey) return null
  if (!linkIndexLoaded) return needsIndex

  const rootCandidate = `/${lookupKey}`
  const matches = knownDocUrls.filter((url) => (
    url === rootCandidate ||
    url.endsWith(`/${lookupKey}`) ||
    url.endsWith(`/${lookupKey.split('/').pop()}`)
  ))
  const knownUrl = chooseKnownDocUrl(matches)

  return `${knownUrl || rootCandidate}${query}${hash}`
}

function normalizeChatHref(href: string) {
  const trimmedHref = href.trim()

  if (
    !trimmedHref ||
    trimmedHref.startsWith('#') ||
    trimmedHref.startsWith('?') ||
    /^(mailto|tel|sms|data|blob|javascript):/i.test(trimmedHref)
  ) {
    return null
  }

  if (/^https?:\/\//i.test(trimmedHref)) {
    const url = new URL(trimmedHref)

    return url.origin === window.location.origin
      ? normalizeRootHref(`${url.pathname}${url.search}${url.hash}`)
      : null
  }

  if (trimmedHref.startsWith('/')) {
    return normalizeRootHref(trimmedHref)
  }

  return resolveRelativeDocHref(trimmedHref)
}

function normalizeVetradocsLinks() {
  const anchors = document.querySelectorAll<HTMLAnchorElement>('.vetradocs-message-content a[href]')
  let waitingForIndex = false

  anchors.forEach((anchor) => {
    const rawHref = anchor.getAttribute('href')

    if (!rawHref || anchor.dataset.picmiNormalizedHref === rawHref) return

    const normalizedHref = normalizeChatHref(rawHref)

    if (normalizedHref === needsIndex) {
      waitingForIndex = true
      return
    }

    if (normalizedHref) {
      anchor.setAttribute('href', normalizedHref)
      anchor.dataset.picmiNormalizedHref = normalizedHref
    }
  })

  if (waitingForIndex) {
    void loadLinkIndex().then(() => normalizeVetradocsLinks())
  }
}

function startChatLinkNormalization() {
  void loadLinkIndex().then(() => normalizeVetradocsLinks())

  void nextTick(() => {
    normalizeVetradocsLinks()

    if (chatLinkObserver) return

    chatLinkObserver = new MutationObserver(() => normalizeVetradocsLinks())
    chatLinkObserver.observe(document.body, {
      childList: true,
      subtree: true
    })
  })
}

function stopChatLinkNormalization() {
  chatLinkObserver?.disconnect()
  chatLinkObserver = null
}

function setVetradocsEnabled(enabled: boolean) {
  vetradocsEnabled.value = enabled
  window.localStorage.setItem(featureStorageKey, enabled ? 'true' : 'false')
}

function isVetradocsToggleShortcut(event: KeyboardEvent) {
  return event.metaKey &&
    event.shiftKey &&
    !event.altKey &&
    event.key.toLowerCase() === 'b'
}

watch(vetradocsEnabled, (enabled) => {
  if (enabled) {
    startChatLinkNormalization()
  } else {
    stopChatLinkNormalization()
  }
})

onMounted(() => {
  vetradocsEnabled.value = window.localStorage.getItem(featureStorageKey) === 'true'

  featureToggleHandler = (event: KeyboardEvent) => {
    if (!isVetradocsToggleShortcut(event)) return

    event.preventDefault()
    event.stopPropagation()
    setVetradocsEnabled(!vetradocsEnabled.value)
  }

  window.addEventListener('keydown', featureToggleHandler, true)
})

onBeforeUnmount(() => {
  stopChatLinkNormalization()

  if (featureToggleHandler) {
    window.removeEventListener('keydown', featureToggleHandler, true)
    featureToggleHandler = null
  }
})
</script>

<template>
  <Layout>
    <template #layout-bottom>
      <VetradocsFloatingBar
        v-if="vetradocsEnabled"
        :api-endpoint="apiEndpoint"
        index-path="/search-index.json"
        placeholder="Ask about PICMI help..."
        :accent-color="accentColor"
        position="bottom-right"
      />
      <VetradocsChat
        v-if="vetradocsEnabled"
        :api-endpoint="apiEndpoint"
        index-path="/search-index.json"
        title="PICMI Help Assistant"
        :accent-color="accentColor"
      />
    </template>
  </Layout>
</template>

<style>
.vetradocs-backdrop {
  background: rgba(17, 24, 39, 0.36) !important;
  backdrop-filter: blur(2px) !important;
}

.vetradocs-sidebar {
  top: 24px !important;
  right: 24px !important;
  bottom: 24px !important;
  width: min(440px, calc(100vw - 48px)) !important;
  max-width: none !important;
  overflow: hidden !important;
  background: var(--vp-c-bg) !important;
  border: 1px solid var(--vp-c-divider) !important;
  border-radius: 10px !important;
  box-shadow: 0 24px 80px rgba(17, 24, 39, 0.24) !important;
}

.vetradocs-header {
  padding: 16px 18px !important;
  background: var(--vp-c-bg) !important;
  border-bottom: 1px solid var(--vp-c-divider) !important;
}

.vetradocs-header-title {
  gap: 10px !important;
  color: var(--vp-c-text-1) !important;
  font-size: 16px !important;
  font-weight: 700 !important;
}

.vetradocs-icon {
  color: var(--vp-c-brand-1) !important;
}

.vetradocs-header-actions {
  gap: 6px !important;
}

.vetradocs-btn-icon {
  width: 32px !important;
  height: 32px !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  color: var(--vp-c-text-2) !important;
  border-radius: 6px !important;
}

.vetradocs-btn-icon:hover {
  background: var(--vp-c-bg-soft) !important;
  color: var(--vp-c-text-1) !important;
}

.vetradocs-messages {
  padding: 18px !important;
  gap: 14px !important;
  background: var(--vp-c-bg) !important;
}

.vetradocs-empty h4 {
  color: var(--vp-c-text-1) !important;
}

.vetradocs-empty p,
.vetradocs-loading {
  color: var(--vp-c-text-2) !important;
}

.vetradocs-message {
  align-items: flex-start !important;
}

.vetradocs-message.user .vetradocs-message-content {
  max-width: min(82%, 320px) !important;
  background: var(--vp-c-brand-1) !important;
  color: #fff !important;
  border-radius: 12px 12px 4px 12px !important;
  box-shadow: none !important;
}

.vetradocs-message.assistant .vetradocs-message-content {
  max-width: calc(100% - 36px) !important;
  background: var(--vp-c-bg-soft) !important;
  color: var(--vp-c-text-1) !important;
  border: 1px solid var(--vp-c-divider) !important;
  border-radius: 12px 12px 12px 4px !important;
}

.vetradocs-message-content {
  padding: 10px 13px !important;
  font-size: 14px !important;
  line-height: 1.55 !important;
  overflow-wrap: anywhere !important;
}

.vetradocs-message-content p,
.vetradocs-message-content ul,
.vetradocs-message-content ol {
  margin-top: 0 !important;
}

.vetradocs-message-content p {
  margin-bottom: 10px !important;
}

.vetradocs-message-content p:last-child,
.vetradocs-message-content ul:last-child,
.vetradocs-message-content ol:last-child {
  margin-bottom: 0 !important;
}

.vetradocs-message-content ul,
.vetradocs-message-content ol {
  margin-bottom: 12px !important;
  padding-left: 1.35rem !important;
}

.vetradocs-message-content ul {
  list-style: disc outside !important;
}

.vetradocs-message-content ol {
  list-style: decimal outside !important;
}

.vetradocs-message-content li {
  display: list-item !important;
  margin: 4px 0 !important;
  padding-left: 2px !important;
}

.vetradocs-message-content li > ul,
.vetradocs-message-content li > ol {
  margin: 5px 0 6px !important;
}

.vetradocs-message-content li > ul {
  list-style-type: disc !important;
}

.vetradocs-message-content li > ol {
  list-style-type: lower-alpha !important;
}

.vetradocs-message-content strong {
  color: var(--vp-c-text-1) !important;
  font-weight: 700 !important;
}

.vetradocs-message-content code {
  padding: 1px 5px !important;
  color: var(--vp-c-text-1) !important;
  background: var(--vp-c-default-soft) !important;
  border-radius: 4px !important;
  font-size: 0.92em !important;
}

.vetradocs-message-content a {
  color: var(--vp-c-brand-1) !important;
  text-decoration: underline !important;
  text-underline-offset: 2px !important;
}

.vetradocs-message.user .vetradocs-message-content a {
  color: #fff !important;
}

.vetradocs-avatar {
  width: 28px !important;
  height: 28px !important;
  background: color-mix(in srgb, var(--vp-c-brand-1) 16%, transparent) !important;
  border-radius: 7px !important;
}

.vetradocs-avatar svg {
  color: var(--vp-c-brand-1) !important;
}

.vetradocs-input-container {
  padding: 14px 18px !important;
  background: var(--vp-c-bg) !important;
  border-top: 1px solid var(--vp-c-divider) !important;
}

.vetradocs-input-wrapper {
  gap: 10px !important;
  padding: 8px !important;
  background: var(--vp-c-bg-soft) !important;
  border: 1px solid var(--vp-c-divider) !important;
  border-radius: 10px !important;
}

.vetradocs-input {
  min-height: 24px !important;
  padding: 8px 10px !important;
  color: var(--vp-c-text-1) !important;
  font-size: 14px !important;
}

.vetradocs-input::placeholder,
.vetradocs-floating-input::placeholder {
  color: var(--vp-c-text-3) !important;
  opacity: 1 !important;
}

.vetradocs-send-btn {
  width: 36px !important;
  height: 36px !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  color: #fff !important;
  background: var(--vp-c-brand-1) !important;
}

.vetradocs-send-btn:disabled {
  opacity: 0.45 !important;
}

.vetradocs-branding {
  padding: 10px 18px !important;
  background: var(--vp-c-bg) !important;
  color: var(--vp-c-text-3) !important;
  border-top: 1px solid var(--vp-c-divider) !important;
}

.vetradocs-branding a {
  color: var(--vp-c-text-2) !important;
}

.vetradocs-floating-bar {
  bottom: 24px !important;
}

.vetradocs-floating-container {
  width: 360px !important;
  height: 50px !important;
  background: var(--vp-c-bg) !important;
  border: 1px solid var(--vp-c-divider) !important;
  border-radius: 10px !important;
  box-shadow: 0 16px 48px rgba(17, 24, 39, 0.18) !important;
}

.vetradocs-floating-container.expanded {
  max-width: 620px !important;
}

.vetradocs-floating-input {
  color: var(--vp-c-text-1) !important;
}

.vetradocs-floating-send {
  color: #fff !important;
  background: var(--vp-c-brand-1) !important;
  border-color: var(--vp-c-brand-1) !important;
}

.vetradocs-floating-send:disabled {
  opacity: 0.45 !important;
}

.vetradocs-shortcut {
  color: var(--vp-c-text-2) !important;
}

.vetradocs-hint-icon {
  background: color-mix(in srgb, var(--vp-c-brand-1) 12%, transparent) !important;
  border-color: color-mix(in srgb, var(--vp-c-brand-1) 30%, transparent) !important;
}

.vetradocs-hint-icon svg {
  color: var(--vp-c-brand-1) !important;
}

@media (max-width: 640px) {
  .vetradocs-sidebar {
    inset: 8px !important;
    width: auto !important;
    border-radius: 10px !important;
  }

  .vetradocs-header {
    padding: 14px 16px !important;
  }

  .vetradocs-messages {
    padding: 16px !important;
  }

  .vetradocs-input-container {
    padding: 12px 16px !important;
  }

  .vetradocs-floating-bar.position-right {
    right: 12px !important;
    left: 12px !important;
    bottom: 16px !important;
  }

  .vetradocs-floating-container {
    width: 100% !important;
  }
}
</style>
