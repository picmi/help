<template>
  <blockquote class="prompt">
    <h3 class="a11y-title">note</h3>
    <div class="prompt__wrapper prompt__wrapper--type-note">
      <svg class="wt-icon wt-icon_size_m prompt__icon" viewBox="0 0 24 24">
        <path
            d="M21 12a9 9 0 1 1-9-9 9 9 0 0 1 9 9zM10.5 7.5A1.5 1.5 0 1 0 12 6a1.5 1.5 0 0 0-1.5 1.5zm-.5 3.54v1h1V18h2v-6a.96.96 0 0 0-.96-.96z"></path>
      </svg>
      <div class="prompt__content">
        <slot></slot>
      </div>
    </div>
  </blockquote>
</template>

<style lang="scss">

blockquote.prompt {
  quotes: none;
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
}

.prompt {

  .a11y-title {
    overflow: hidden;
    height: 0;
    margin-top: 0 !important;
  }

  &__wrapper {
    display: inline-flex;
    box-sizing: border-box;
    min-width: 100%;
    padding: 16px;
    border-radius: 6px;
    letter-spacing: 0.0015em;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;

    &--type-note {
      background: rgba(77, 187, 95, 0.2);

      .prompt__icon {
        color: #4dbb5f;
      }
    }

  }

  &__icon {
    flex-shrink: 0;
    margin-right: 16px;
    margin-top: 16px;

    &.wt-icon_size_m, &.wt-icon_size_s {
      width: 24px;
      height: 24px;
    }
  }

  &__content {
    > p {
      line-height: 24px;
    }
  }
}

.wt-icon {
  fill: currentColor;
}


</style>
