<template>
  <q-page class="scroll-container">
    <div class="blog-page scroll-section q-pa-md">
      <div class="blog-content">
        <h2 class="text-h4 text-center q-mb-md">Our Blog</h2>
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-4" v-for="post in blogPosts" :key="post.slug">
            <q-card>
              <q-img :src="post.image" :ratio="16 / 9" />
              <q-card-section>
                <div class="text-h6">{{ post.title }}</div>
                <div class="text-subtitle2">{{ post.date }}</div>
              </q-card-section>
              <q-card-section>
                {{ post.excerpt }}
              </q-card-section>
              <q-card-actions>
                <q-btn flat color="primary" :to="`/blog/${post.slug}`">Read More</q-btn>
              </q-card-actions>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style lang="scss" scoped>
.scroll-container {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}

.scroll-section {
  height: 100vh;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.blog-page {
  background: linear-gradient(to bottom, #000000, #d4af37);
}
</style>

<script setup>
import { ref } from 'vue'

const blogPosts = ref([
  {
    title: 'The Future of Dining',
    date: 'June 28, 2024',
    excerpt: 'How AI is changing the restaurant industry.',
    slug: 'future-of-dining',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    title: '5 Ways to Boost Restaurant Efficiency',
    date: 'June 20, 2024',
    excerpt: 'Tips and tricks to streamline your operations.',
    slug: 'boost-efficiency',
    image:
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
])
</script>
