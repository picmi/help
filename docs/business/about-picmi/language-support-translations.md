# Language support and translation approach

PICMI's approach to translation focuses on flexibility and user choice rather than direct, built-in translations. The
core application supports multilingual workflows through structured text that can be translated dynamically, while
external files and videos remain in a primary language (English) with the recommendation to use external translation
tools. We do not support multilingual notifications through email. This ensures a seamless fallback to English, allows
users to choose their preferred translation service, and keeps PICMI’s workflow structure simple. For external documents
and videos, PICMI encourages the use of subtitles, browser-based translation tools, and dynamic content translation
rather than maintaining multiple static language versions.

::: prompt
PICMI is designed for third-party embedded language translation tools to help people navigate and complete workflows effectively—here's the
instructions on [translating PICMI to your language for jobseekers](../../jobseeker/article/translation-support.md)
:::

<explanation>

## Supporting translation in PICMI

PICMI is designed as an English-first application, but many jobseekers may use external translation services to
understand the interface and content. To ensure the best experience for them, PICMI follows these key principles:

### PICMI works with browser-based translators

- PICMI does not block or interfere with translation tools like Google Translate or Microsoft Translator.
- The interface is structured to ensure text can be detected and translated correctly.
- Standard HTML elements are used to maintain compatibility.

### Clear, simple english for better translations

- Content is written in plain language to improve translation accuracy.
- Complex phrasing, idioms, or jargon are avoided to prevent confusion.
- Full sentences are used instead of fragments, making translations more reliable.

### Ensuring translated interfaces remain functional

- Browser translation tools are tested to ensure buttons, links, and form inputs still work as expected.
- Critical actions (such as signing contracts) remain clear and accessible after translation.

### Allowing for text expansion in translations

- Translations often take up more space than English text. PICMI layouts are designed to handle this without breaking.
- Important text elements are placed in flexible containers to prevent layout issues.

### Providing context for translation

- Tooltips and labels help explain key terms before translation.
- PICMI’s help guide includes a definitions and explanations for important concepts and processes

### Using icons and visual cues

- Icons and symbols support understanding, even if translations are imperfect.
- Progress indicators guide jobseekers through workflows visually.

### Making error messages easy to understand

- Error messages are specific and action-oriented (e.g., "Enter a valid email" instead of "Something went wrong").
- Technical jargon is avoided to ensure translations remain clear.

### Testing common translation services

- PICMI checks workflows in **Google Translate** and **Microsoft Translator** to identify any translation issues.
- Adjustments are made where necessary to improve clarity.

</explanation>

## Using external translators

PICMI is designed in English and does not currently support built-in multilingual translations. However, you can use
browser-based translation tools, such as Google Translate or Microsoft Translator, to assist with understanding the
interface. These tools can translate page content into your preferred language in real time.

::: prompt
**Languages not well-supported in the Pacific Islands**

While external translation tools work for many languages, some Pacific Island languages may have limited or inaccurate
translations. These include:

- Bislama (Vanuatu)
- Cook Islands Māori
- Niuean
- Rotuman

see [Wikipedia on Google Translate](https://en.wikipedia.org/wiki/Google_Translate#Supported_languages) all languages
If you rely on translation, we recommend using **simplified English** in search queries and verifying important details
with someone fluent in English.
:::

## Handling external files and videos in multiple languages

PICMI includes workflows that use external files and videos. Rather than providing translations directly within PICMI,
we recommend relying on **dynamic external translation tools** to handle language differences effectively.

## Why use external translators over translating your own material?

**Allows fallback to english**

- If a translation is unavailable, users can still access the original English content.
- Ensures that users always have access to essential information rather than encountering missing or outdated
  translations.

**Gives users choice in translation services**

- Different users may prefer different translation services (e.g., Google Translate, DeepL, Microsoft Translator).
- Users can use browser-based translation tools that work best for their language and dialect.

**Simplifies the PICMI workflow structure**

- Keeping content in one primary language reduces the complexity of managing multiple translated files.
- Avoids the need to store, update, and maintain multiple versions of videos and documents within PICMI.

<explanation>

#### Examples of How This Works

- **Videos**:
    - Instead of creating separate translated versions, users can upload videos with **closed captions (subtitles)**.
    - YouTube and Vimeo provide automatic translation features that users can enable.
    - External tools like Google Translate can be used for transcribing spoken content.

- **Documents (PDFs, Guides, Policies, etc.)**:
    - Businesses can provide a **single English version** and let users apply online translation tools.
    - If required, businesses can host translated versions separately and provide links within PICMI.

</explanation>

## Additional Considerations

- **Use simple language in documents and videos**
    - Clear, structured content is easier to translate accurately.
    - Avoid complex phrases or industry-specific jargon that may not translate well.

- **Encourage users to enable browser translation**
    - Many modern browsers offer built-in translation for web pages, allowing instant conversion of text-based content.
    - Adding a prompt or guidance within PICMI can help users enable these features.
