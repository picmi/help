import { onBeforeUnmount, onMounted, ref } from 'vue';

const featureStorageKey = 'picmi-help:aiexplain-enabled';
const aiExplainEnabled = ref(false);

let mountedConsumers = 0;
let featureToggleHandler: ((event: KeyboardEvent) => void) | null = null;
let storageHandler: ((event: StorageEvent) => void) | null = null;

function readStoredState() {
    return window.localStorage.getItem(featureStorageKey) === 'true';
}

function setAiExplainEnabled(enabled: boolean) {
    aiExplainEnabled.value = enabled;
    window.localStorage.setItem(featureStorageKey, enabled ? 'true' : 'false');
}

function isAiExplainToggleShortcut(event: KeyboardEvent) {
    return event.metaKey &&
        event.shiftKey &&
        !event.altKey &&
        event.key.toLowerCase() === 'b';
}

function addGlobalHandlers() {
    if (featureToggleHandler) return;

    featureToggleHandler = (event: KeyboardEvent) => {
        if (!isAiExplainToggleShortcut(event)) return;

        event.preventDefault();
        event.stopPropagation();
        setAiExplainEnabled(!aiExplainEnabled.value);
    };

    storageHandler = (event: StorageEvent) => {
        if (event.key === featureStorageKey) {
            aiExplainEnabled.value = event.newValue === 'true';
        }
    };

    window.addEventListener('keydown', featureToggleHandler, true);
    window.addEventListener('storage', storageHandler);
}

function removeGlobalHandlers() {
    if (featureToggleHandler) {
        window.removeEventListener('keydown', featureToggleHandler, true);
        featureToggleHandler = null;
    }

    if (storageHandler) {
        window.removeEventListener('storage', storageHandler);
        storageHandler = null;
    }
}

export function useAiExplainFeatureToggle() {
    onMounted(() => {
        mountedConsumers += 1;
        aiExplainEnabled.value = readStoredState();
        addGlobalHandlers();
    });

    onBeforeUnmount(() => {
        mountedConsumers = Math.max(0, mountedConsumers - 1);

        if (mountedConsumers === 0) {
            removeGlobalHandlers();
        }
    });

    return {
        aiExplainEnabled,
        setAiExplainEnabled,
    };
}
