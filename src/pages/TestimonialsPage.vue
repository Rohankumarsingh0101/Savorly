<template>
  <q-page class="scroll-container">
    <div class="testimonials-page scroll-section q-pa-md">
      <div class="testimonials-content">
        <h2 class="text-h4 text-center q-mb-md">What Our Clients Say</h2>
        <q-carousel
          v-model="slide"
          transition-prev="slide-right"
          transition-next="slide-left"
          swipeable
          animated
          control-color="primary"
          navigation
          padding
          arrows
          height="300px"
          class="bg-secondary shadow-1 rounded-borders"
        >
          <q-carousel-slide
            v-for="(testimonial, index) in testimonials"
            :key="index"
            :name="index"
            class="column no-wrap flex-center"
          >
            <q-avatar size="100px">
              <img :src="testimonial.avatar" />
            </q-avatar>
            <div class="q-mt-md text-center">
              <p>"{{ testimonial.quote }}"</p>
              <p class="text-weight-bold">- {{ testimonial.name }}</p>
            </div>
          </q-carousel-slide>
        </q-carousel>
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

.testimonials-page {
  background: linear-gradient(to bottom, #000000, #d4af37);
}
</style>

<script setup>
import { ref } from 'vue'

const slide = ref(0)
const testimonials = ref([
  {
    name: 'John Doe',
    quote: 'This service is amazing!',
    avatar: 'https://cdn.quasar.dev/img/avatar1.jpg',
  },
  {
    name: 'Jane Smith',
    quote: "I don't know how we managed without it.",
    avatar: 'https://cdn.quasar.dev/img/avatar2.jpg',
  },
  {
    name: 'Peter Jones',
    quote: 'A game changer for our restaurant.',
    avatar: 'https://cdn.quasar.dev/img/avatar3.jpg',
  },
])
</script>
