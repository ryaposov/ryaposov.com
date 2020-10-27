<template>
  <AppText
    v-highlight
    class="content app-mt-20 app-mb-60"
    size="20"
    weight="medium"
    :html="text"
  />
</template>

<script>
import AppText from '@/components/AppText.vue'

import 'vue-code-highlight/themes/window.css'
import 'vue-code-highlight/themes/prism-tomorrow.css'

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
  .content {
    >>> {
      p {
        margin-bottom: 20px;
        color: var(--app-text-2);
      }

      h1,
      h2,
      h3,
      h4,
      h5 {
        color: var(--app-text-1);
      }
      
      p:last-child {
        margin-bottom: initial;
      }

      h3,
      h4,
      h5 {
        font-weight: 700;
        margin-top: 2em;
        margin-bottom: 1em;
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

      .backtick {
        border-radius: 4px;
        padding: 0 4px;
        border-width: 1px;
        border-style: solid;
        font-family: monospace;
        font-size: 0.9em;
        
        @media (--light) {
          background: rgb(240, 240, 240);
          border-color: rgb(226, 226, 226);
        }
        
        @media (--dark) {
          background: #3e3e3e;
          border-color: #6f6f6f;
        }
      }

      img,
      .code,
      .embed {
        margin-bottom: 24px;
      }

      img,
      .embed {
        border: 1px solid rgba(0, 0, 0, .1);
        border-radius: 4px;
      }
      
      img {
        width: 100%;
        height: auto;
        margin-top: 24px;
        margin-left: auto;
        margin-right: auto;
      }

      .code {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        overflow: hidden;
        font-size: 16px;
        margin-top: 28px;

        > pre {
          width: 100%;
          margin: 0;
          box-shadow: 0px 10px 60px rgba(0, 0, 0, 0.25);
          border-radius: 4px;
        }
      }

      div pre[class*="language-"] {
        box-shadow: none;
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
        }
      }
    }
  }
</style>