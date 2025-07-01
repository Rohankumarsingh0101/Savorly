<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-black" :class="{ 'header-hidden': !showHeader }">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="/icons/Savorly.logo.png" />
          </q-avatar>
          Savorly
        </q-toolbar-title>

        <q-space />

        <q-btn flat to="/" label="Home" style="color: #d4af37" />
        <q-btn flat to="/pricing" label="Pricing" style="color: #d4af37" />
        <q-btn flat to="/testimonials" label="Testimonials" style="color: #d4af37" />
        <q-btn flat to="/faq" label="FAQ" style="color: #d4af37" />
        <q-btn flat to="/blog" label="Blog" style="color: #d4af37" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer
      class="footer-black"
      :class="{ 'footer-visible': showFooter }"
      style="
        min-height: 40px;
        border-top: none;
        background: linear-gradient(to bottom, #d4af37, #000000);
      "
    >
      <q-toolbar class="justify-center">
        <q-toolbar-title class="row items-center no-wrap">
          <q-avatar>
            <img src="/icons/Savorly.logo.png" />
          </q-avatar>
        </q-toolbar-title>
        <q-btn
          flat
          round
          dense
          icon="fab fa-facebook"
          href="https://facebook.com"
          target="_blank"
          style="color: #000000"
        />
        <q-btn
          flat
          round
          dense
          icon="fab fa-xing"
          href="https://twitter.com"
          target="_blank"
          style="color: #000000"
        />
        <q-btn
          flat
          round
          dense
          icon="fab fa-instagram"
          href="https://instagram.com"
          target="_blank"
          style="color: #000000"
        />
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const showHeader = ref(true)
const showFooter = ref(false)

let heroObserver
let footerObserver

onMounted(() => {
  const heroEl = document.getElementById('hero')
  if (heroEl) {
    heroObserver = new IntersectionObserver(
      ([entry]) => {
        showHeader.value = entry.isIntersecting
      },
      { rootMargin: '-300px 0px 0px 0px' },
    )
    heroObserver.observe(heroEl)
  }

  const footerTriggerEl = document.getElementById('submit-button')
  if (footerTriggerEl) {
    footerObserver = new IntersectionObserver(([entry]) => {
      showFooter.value = entry.isIntersecting
    })
    footerObserver.observe(footerTriggerEl)
  }
})

onBeforeUnmount(() => {
  if (heroObserver) {
    heroObserver.disconnect()
  }
  if (footerObserver) {
    footerObserver.disconnect()
  }
})
</script>
