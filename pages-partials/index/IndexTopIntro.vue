<template>
  <div
    class="app-flex app-flex-col app-px-20 app-py-20 md:app-px-40 md:app-py-32"
    :class="rootClasses"
  >
    <span
      class="app-text-brand"
      :class="headingClasses"
      v-text="heading"
    />
    <span
      class="app-br app-text-secondary app-tracking-tight app-mt-8 md:app-mt-12 md:app-tracking-normal"
      :class="textClasses"
      v-html="text"
    />
    <span
      class="app-flex app-flex-wrap app-mt-8 app-items-center app-tracking-tight app-text-primary md:app-mt-12 md:app-tracking-normal"
      :class="linkClasses"
    >
      <span
        class=""
        v-text="email"
      />
      <span
        class="app-w-4 app-h-4 app-rounded-full app-mx-8 app-bg-tertiary"
        v-text="''"
      />
      <span
        class=""
        v-text="twitter"
      />
    </span>
  </div>  
</template>

<script>
export default {
  name: 'IndexTopIntro',
  props: {
    heading: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    email: {
      type: String,
      default: ''
    },
    twitter: {
      type: String,
      default: ''
    }
  },
  computed: {
    rootClasses () {
      return [
        ...{
          true: ['app-bg-primary', 'app-border-brand', 'app-border'],
          false: ['app-bg-secondary']
        }[this.$MD]
      ]
    },
    headingClasses () {
      return [
        ...{
          true: ['app-heading-28-bold '],
          false: ['app-heading-24-bold ']
        }[this.$MD]
      ]
    },
    textClasses () {
      return [
        ...{
          true: ['app-text-19-regular'],
          false: ['app-text-19-semibold', 'app-text-tertiary']
        }[this.$MD]
      ]
    },
    linkClasses () {
      return [
        ...{
          true: ['app-text-19-medium'],
          false: ['app-text-19-semibold']
        }[this.$MD]
      ]
    }
  }
}
</script>

<style>

</style>