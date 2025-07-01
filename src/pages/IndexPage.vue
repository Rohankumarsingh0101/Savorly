<template>
  <q-page class="scroll-container">
    <!-- Hero Section -->
    <div id="hero" class="hero-section scroll-section">
      <div class="hero-content text-center">
        <h1 class="text-h2 hero-title animated-text">Savorly</h1>
        <p class="text-h6 hero-subtitle animated-text-2">The future of dining, today.</p>
        <transition name="slide-up">
          <q-btn
            v-if="showButton"
            class="early-access-btn"
            label="Request Early Access"
            to="#early-access-form"
            unelevated
            rounded
          />
        </transition>
      </div>
    </div>

    <!-- Features Section -->
    <div id="features" class="features-section scroll-section q-pa-md">
      <h2 class="text-h4 text-center q-mb-md">Features</h2>
      <div class="row q-col-gutter-md">
        <div class="col-12 col-md-4" v-for="(feature, index) in features" :key="feature.title">
          <q-card class="text-center feature-card" :style="{ animationDelay: `${index * 0.1}s` }">
            <q-card-section>
              <q-icon :name="feature.icon" size="3em" style="color: #d4af37" />
            </q-card-section>
            <q-card-section>
              <div class="text-h6">{{ feature.title }}</div>
              <div>{{ feature.description }}</div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <!-- Team Section -->
    <div class="team-section scroll-section q-pa-md">
      <h2 class="text-h4 text-center q-mb-md">Our Team</h2>
      <div class="row q-col-gutter-md justify-center">
        <div class="col-12 col-sm-6 col-md-3" v-for="member in team" :key="member.name">
          <q-card class="text-center">
            <q-card-section>
              <q-avatar size="100px">
                <img :src="member.avatar" />
              </q-avatar>
            </q-card-section>
            <q-card-section>
              <div class="text-h6">{{ member.name }}</div>
              <div class="text-subtitle2">{{ member.role }}</div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <!-- Early Access Form Section -->
    <div id="early-access-form" class="early-access-section scroll-section q-pa-md">
      <h2 class="text-h4 text-center q-mb-md">Request Early Access</h2>
      <q-form @submit="onSubmit" class="q-gutter-md" style="max-width: 600px; margin: auto">
        <q-input
          filled
          v-model="form.name"
          label="Your Name *"
          :rules="[(val) => !!val || 'Name is required']"
        />
        <q-input
          filled
          v-model="form.email"
          label="Your Email *"
          type="email"
          :rules="[(val) => (!!val && /.+@.+\..+/.test(val)) || 'Please enter a valid email']"
        />
        <q-input
          filled
          v-model="form.restaurant"
          label="Restaurant Name *"
          :rules="[(val) => !!val || 'Restaurant name is required']"
        />
        <div>
          <q-btn id="submit-button" label="Submit" type="submit" color="primary" />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Josefin+Sans:wght@700&display=swap');

.hero-section {
  background-color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.hero-content {
  text-align: center;
  .hero-title,
  .hero-subtitle {
    font-family: 'Great Vibes', cursive;
    color: gold;
    font-weight: bold;
  }
  .hero-title {
    font-size: 6rem;
    min-height: 7rem; /* Reserve space to prevent layout shift */
  }
  .hero-subtitle {
    font-size: 3rem;
    margin-bottom: 0.5rem; /* Further reduced space */
    min-height: 4rem; /* Reserve space to prevent layout shift */
  }
  .early-access-btn {
    background-color: gold;
    color: black;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 1.2rem;
    font-weight: bold;
    padding: 0.75rem 1.5rem;
  }
}

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

.features-section {
  background: linear-gradient(to bottom, #000000, #d4af37);
}

.team-section {
  background: linear-gradient(to bottom, #d4af37, #000000);
}

.early-access-section {
  background: linear-gradient(to bottom, #000000, #d4af37);
}

.feature-card {
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.5s ease-out,
    transform 0.5s ease-out;
}

.feature-card.is-visible {
  opacity: 1;
  transform: translateY(0);
}

@keyframes draw-in {
  from {
    clip-path: inset(0 100% 0 0);
  }
  to {
    clip-path: inset(0 0 0 0);
  }
}

.animated-text {
  animation: draw-in 2s ease-out forwards;
}

.animated-text-2 {
  animation: draw-in 2s ease-out 1s forwards;
  opacity: 0;
  animation-fill-mode: forwards;
  animation-delay: 1s;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

.animated-text-2 {
  animation:
    draw-in 2s ease-out forwards,
    fadeIn 0.1s forwards;
  animation-delay: 1s, 1s;
}
</style>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const showButton = ref(false)

// Features section data
const features = ref([
  {
    title: 'QR Code Ordering',
    description: 'Streamline your ordering process with QR codes.',
    icon: 'qr_code',
  },
  {
    title: 'Live Analytics',
    description: 'Get real-time insights into your sales and performance.',
    icon: 'analytics',
  },
  {
    title: 'AI Chatbot',
    description: '24/7 customer support with our intelligent chatbot.',
    icon: 'smart_toy',
  },
  {
    title: 'Smart Refresh',
    description: 'Keep your menu and offerings up-to-date effortlessly.',
    icon: 'refresh',
  },
  {
    title: 'Dashboard',
    description: "A comprehensive overview of your restaurant's operations.",
    icon: 'dashboard',
  },
])

// Team section data
const team = ref([
  {
    name: 'AI Dev 1',
    role: 'Full-Stack AI Developer',
    avatar: 'https://cdn.quasar.dev/img/avatar1.jpg',
  },
  {
    name: 'AI Dev 2',
    role: 'Full-Stack AI Developer',
    avatar: 'https://cdn.quasar.dev/img/avatar2.jpg',
  },
  {
    name: 'AI Dev 3',
    role: 'Full-Stack AI Developer',
    avatar: 'https://cdn.quasar.dev/img/avatar3.jpg',
  },
  {
    name: 'AI Dev 4',
    role: 'Full-Stack AI Developer',
    avatar: 'https://cdn.quasar.dev/img/avatar4.jpg',
  },
])

// Form data
const form = ref({
  name: '',
  email: '',
  restaurant: '',
})

let featureObserver

onMounted(() => {
  setTimeout(() => {
    showButton.value = true
  }, 3000) // Show button after animations

  // Intersection observer for feature cards
  const featureCards = document.querySelectorAll('.feature-card')
  featureObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
      }
    })
  })

  featureCards.forEach((card) => {
    featureObserver.observe(card)
  })
})

onBeforeUnmount(() => {
  if (featureObserver) {
    featureObserver.disconnect()
  }
})

function onSubmit() {
  $q.notify({
    color: 'positive',
    message: 'Thank you for your interest! We will be in touch soon.',
    icon: 'check',
  })
  form.value = { name: '', email: '', restaurant: '' }
}
</script>
