<template>
  <nav>
    <ul>
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
export default {
  name: 'AppHeader'
}
</script>

<style>

</style>