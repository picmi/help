# Ensuring the latest information

When using PICMI (like any website or application), you might encounter issues that seem confusing—like seeing outdated information or changes not reflecting right away. This could be due to a **cache problem**.

## Understanding cache problems  
A **cache** is like a storage space where frequently used data is saved to make things load faster. For example, your browser or an app might save images, settings, or other data so it doesn’t have to load them every time. However, sometimes the cache doesn’t update properly, causing you to see old content or preventing new changes from showing up.

To fix this, clearing the cache is often the best solution. This removes the saved data, allowing PICMI to load fresh content and resolve any display or performance issues. We should only do this temporarily.

<instructions>

## Refresh application status

1. Click <span class="mdi mdi-refresh"></span> **Refresh** at the top-right

<prompt>

If this still does not look right, continue with [update old information](#update-old-information) below

</prompt>

</instructions>

<instructions>

## Update old information

1. At the top-right of PICMI, click <span class="mdi mdi-menu"></span> **Menu**
2. Select **Update old information**
3. Update the **Reset in seconds** (if longer is needed)
4. Click **FORCE UPDATE** when you are ready
5. Continue using PICMI — usually, [Refresh](#refresh-application-status) the applications

<prompt>

PICMI will revert to its default behaviour after the reset in seconds time

</prompt>

</instructions>

## Disable cache in browser

This technique only works for as long as your **Developer Tools** are open. Once you close the Developer Tools, the browser will revert to its default caching behaviour.

Here’s how to disable the cache in Developer Tools:

<instructions>

### Chrome, Edge, and Firefox

1. Open Developer Tools:
    - Press `F12` or `Ctrl + Shift + I` (Windows/Linux) or `Cmd + Option + I` (Mac) to open Developer Tools
2. Once Developer Tools is open, click on the **Network** tab
3. Check the **Disable Cache** box near the top of the Network tab to turn off caching
4. Keep the Developer Tool pane open
5. **Reload** the page using the browser button at the top-left and continue using PICMI
6. Close **Developer Tools** to restore normal cache behaviour

</instructions>
