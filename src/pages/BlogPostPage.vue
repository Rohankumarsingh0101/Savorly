<template>
  <q-page class="blog-post-page q-pa-md">
    <div class="blog-post-content">
      <q-btn flat icon="arrow_back" @click="$router.go(-1)" label="Back to Blog" />
      <div v-if="post">
        <h2 class="text-h4 q-mb-md">{{ post.title }}</h2>
        <div class="text-subtitle2 q-mb-md">{{ post.date }}</div>
        <q-img :src="post.image" :ratio="16 / 9" class="q-mb-md" />
        <div v-html="post.content"></div>
      </div>
      <div v-else>
        <p>Post not found.</p>
      </div>
    </div>
  </q-page>
</template>

<style lang="scss" scoped>
.blog-post-page {
  background-color: $ivory;
  @include section-fade(transparent, transparent);
}
</style>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const post = ref(null)

const blogPosts = {
  'future-of-dining': {
    title: 'The Future of Dining',
    date: 'June 28, 2024',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    content:
      "<p>The restaurant industry is on the cusp of a revolution, and artificial intelligence is leading the charge. From personalized recommendations to automated inventory management, AI is poised to transform every aspect of the dining experience.</p><p>Imagine a world where your favorite restaurant knows your dietary preferences and suggests dishes you'll love, or where a chatbot can answer your questions and make reservations 24/7. This is not science fiction; it's the future of dining, and it's happening now.</p>",
  },
  'boost-efficiency': {
    title: '5 Ways to Boost Restaurant Efficiency',
    date: 'June 20, 2024',
    image:
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    content:
      '<p>Efficiency is key to a successful restaurant. Here are five ways you can streamline your operations and boost your bottom line:</p><ol><li>Implement a QR code ordering system.</li><li>Use an AI-powered chatbot for customer service.</li><li>Automate your inventory management.</li><li>Use data analytics to optimize your menu.</li><li>Train your staff on new technologies.</li></ol>',
  },
}

onMounted(() => {
  const slug = route.params.slug
  post.value = blogPosts[slug]
})
</script>
