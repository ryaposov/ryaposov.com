<template>
  <nav>
    <ul>
      <li>
        <AppLogo />
      </li>
      <li>
        <NuxtLink :to="{ name: 'index' }">
          Home
        </NuxtLink>
      </li>
      <li>
        <NuxtLink :to="{ name: 'post-id' }">
          Post ID
        </NuxtLink>
      </li>
      <li>
        <NuxtLink :to="{ name: 'posts-id' }">
          Post Category
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
import AppLogo from './AppLogo.vue'

export default {
  name: 'AppHeader',
  components: {
    AppLogo
  }
}
</script>

<style>

</style>