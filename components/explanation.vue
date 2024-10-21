<template>
  <div class="explanation-box">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.explanation-box {
  display: block;
  width: 90%;
  margin: 2em;
  padding: 0.75rem 3rem;
  border: 2px #e5e7eb solid;
  border-radius: 1rem;

  h2 {
    margin: unset;
    border-top: none;
  }

  > ul, > ol {
    padding-right: 1.25rem;
  }
}


</style>
