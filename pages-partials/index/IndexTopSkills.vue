<template>
  <div class="index-top-skills app-flex app-flex-col app-justify-center app-px-44 app-py-44 app-bg-primary">
    <span
      class="app-label-16-semibold app-text-tertiary"
      v-text="heading"
    />
    <ul class="app-mt-20 app-whitespace-no-wrap app-text-primary">
      <li
        v-for="(item, index) in list"
        :key="index"
        class="app-heading-24-semibold app-mb-8 last:app-mb-initial"
        v-text="item"
      />
    </ul>
  </div>  
</template>

<script>
export default {
  name: 'IndexTopSkills',
  props: {
    heading: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>

<style>
  .index-top-skills {
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.08);
  }
</style>