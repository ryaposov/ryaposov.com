<template>
  <AppText
    v-highlight
    :size="[18, 20]"
    :html="text"
    :color="false"
    class="content app-mt-20 app-mb-60"
    weight="medium"
  />
</template>

<script>
import AppText from '@ryaposov/essentials/AppText.vue'

import '~/assets/css/prism-theme.css'

export default {
  name: 'PostsIdContent',
  components: {
    AppText
  },
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
  .content :deep() {
    h1,
    h2,
    h3,
    h4,
    h5 {
      color: var(--app-atext-1);
    }

    p, li {
      color: var(--app-atext-2);
    }

    p {
      margin-bottom: 20px;
    }

    p:last-child {
      margin-bottom: initial;
    }

    h3,
    h4,
    h5 {
      font-weight: 700;
      margin-top: 2.2em;
      margin-bottom: 0.8em;
    }

    h3:first-child,
    h4:first-child,
    h5:first-child {
      margin-top: initial;
    }

    h3 {
      font-size: 20px;
    }

    h4 {
      font-size: 18px;
    }

    h5 {
      font-size: 16px;
    }

    a {
      text-decoration: none;
      position: relative;
      transition: color 300ms ease-in-out;

      &:after {
        content: '';
        position: absolute;
        bottom: 2px;
        left: 0;
        width: 100%;
        border-bottom: 1px solid var(--app-aborder-opposite);
        transition: all 300ms ease-in-out;
        opacity: 0.3;
      }

      &:hover {
        color: var(--app-atext-1);
      }

      &:hover:after {
        border-color: var(--app-aborder-brand);
        opacity: 1;
      }
    }

    .backtick {
      border-radius: 4px;
      padding: 0 4px 2px;
      border-width: 1px;
      border-style: solid;
      font-family: Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace;
      font-size: 0.85em;
      margin-left: 1px;
      margin-right: 1px;

      color: var(--app-atext-1);
      background: var(--app-abg-2);
      border-color: var(--app-aborder-2);
    }

    img,
    .code,
    .embed {
      margin-bottom: 28px;
    }

    img,
    .embed {
      border: 1px solid var(--app-aborder-1);
      border-radius: 12px;
      overflow: hidden;
    }

    img {
      margin-top: 28px;
      margin-left: auto;
      margin-right: auto;
    }

    img:not([src*="w="]) {
      width: 100%;
      height: auto;
    }

    .code {
      width: 100%;
      margin-left: auto;
      margin-right: auto;
      overflow: hidden;
      font-size: 14px;
      margin-top: 28px;

      > pre {
        width: 100%;
        margin: 0;
        box-shadow: 0px 10px 60px rgba(0, 0, 0, 0.25);
        border-radius: 12px;
        border: none;
      }
    }

    div pre[class*="language-"] {
      box-shadow: none;
      background-image: none;
      padding-top: 16px;
      padding-left: 20px;
      padding-bottom: 16px;
    }

    @media (--md) {
      h3 {
        font-size: 24px;
      }

      h4 {
        font-size: 20px;
      }

      h5 {
        font-size: 18px;
      }

      .code {
        margin-top: 24px;
        font-size: 16px;
      }

      div pre[class*="language-"] {
        padding-top: 24px;
        padding-left: 24px;
        padding-bottom: 24px;
      }
    }
  }
</style>
