<template>
  <div class="instruction-box">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.instruction-box {
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
}


</style>
