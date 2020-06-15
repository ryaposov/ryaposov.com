<template>
  <main
    :data-name="$NAME"
    class="app-pt-60 md:app-pt-160"
  >
    <PostsIdTop
      :date="post.date"
      :link="{ name: 'posts' }"
    />
    <PostsIdContent />
    <AppBorder />
    <PostsIdOther />
  </main>
</template>

<script>
import AppBorder from '@/components/AppBorder.vue'
import PostsIdTop from '@/pages-partials/posts/PostsIdTop.vue'
import PostsIdContent from '@/pages-partials/posts/PostsIdContent.vue'
import PostsIdOther from '@/pages-partials/posts/PostsIdOther.vue'

export default {
  name: 'PostsIdPage',
  components: {
    AppBorder,
    PostsIdTop,
    PostsIdContent,
    PostsIdOther
  },
  asyncData ({ $http }) {
    return {}
  },
  data: () => ({
    post: {}
  }),
  computed: {
    
  }
}
</script>