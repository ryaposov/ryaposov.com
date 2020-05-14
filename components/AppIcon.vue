<template>
  <svg
    :class="rootClasses"
    :style="rootStyles"
    class="app-icon"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    :data-name="$NAME"
    v-on="$listeners"
  >
    <use
      :xlink:href="iconPath"
      :href="iconPath"
    />
  </svg>
</template>

<script>
  export default {
    name: 'AppIcon',
    props: {
      icon: {
        type: String,
        default: ''
      },
      size: {
        type: [String, Boolean],
        default: false
      },
      width: {
        type: [String, Boolean],
        default: false
      },
      height: {
        type: [String, Boolean],
        default: false
      }
    },
    computed: {
      rootClasses () {
        return [
          this.dir ? 'app-icon--' + this.dir : ''
        ]
      },
      rootStyles () {
        return this.size || (this.width && this.height) ? {
          width: this.size || this.width,
          height: this.size || this.height
        } : {}
      },
      iconPath () {
        return (this.$appIconSpritePath || '') + '#app-icon-' + this.icon
      }
    }
  }
</script>

<style>
  .app-icon {
    width: 16px;
    height: 16px;
    display: inline-block;
    color: inherit;
    vertical-align: middle;
    fill: currentColor;

    &-up {
      transform: rotate(0deg);
    }

    &-right {
      transform: rotate(90deg);
    }

    &-down {
      transform: rotate(180deg);
    }

    &-left {
      transform: rotate(-90deg);
    }
  }
</style>
