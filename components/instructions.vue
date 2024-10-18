<template>
  <div class="ui-instruction-box">
    <slot></slot>
  </div>
</template>

<style lang="scss">

.ui-instructions-box {
  margin: 48px 0 16px;
  border: 1px solid #ddd;
  padding: 1em;
  border-radius: 5px;

  > h2 {
    border-top: unset;
    margin: unset;
  }

  h3 {
    margin-top: 0;
    border-bottom: 1px solid #ddd;
    padding-bottom: 0.5em;
    font-size: 1.2em;
  }

  ol {
    list-style: decimal;
    padding-left: 1.5em;
  }

  ol li {
    margin: 0.5em 0;
  }
}

</style>
