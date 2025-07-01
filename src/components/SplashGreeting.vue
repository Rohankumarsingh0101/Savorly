<template>
  <transition name="fade-out" @after-leave="$emit('fully-hidden')">
    <q-page v-if="!isFadingOut" class="fullscreen-greeting" :style="{ backgroundColor: '#000000' }">
      <div class="text-container">
        <transition name="fade">
          <div v-if="typed[0]" class="line line-1">{{ typed[0] }}</div>
        </transition>
        <transition name="fade">
          <div v-if="typed[1]" class="line line-2">{{ typed[1] }}</div>
        </transition>
      </div>
      <transition name="slide-up">
        <q-btn
          v-if="showButton"
          class="early-access-btn"
          label="Request Early Access"
          unelevated
          rounded
        />
      </transition>
    </q-page>
  </transition>
</template>

<script setup>
import { ref, onMounted, defineEmits } from 'vue'

const emit = defineEmits(['fully-shown', 'fully-hidden'])

const lines = ['Savorly', 'The future of dining, today.']
const typed = ref(['', ''])
const currentLine = ref(0)
const showButton = ref(false)
const isFadingOut = ref(false)

const delay = (ms) => new Promise((res) => setTimeout(res, ms))

const typeLine = async (idx) => {
  const line = lines[idx]
  for (let i = 1; i <= line.length; i++) {
    await delay(100)
    typed.value[idx] = line.slice(0, i)
  }
}

onMounted(async () => {
  await typeLine(0)
  await delay(500)
  currentLine.value = 1
  await typeLine(1)
  await delay(300)
  showButton.value = true
  emit('fully-shown')
  await delay(500) // Wait before starting fade-out
  isFadingOut.value = true
})
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Tangerine:wght@400;700&display=swap');

.fullscreen-greeting {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: gold;
  font-family: 'Tangerine', cursive;
}

.fade-out-leave-active {
  transition: opacity 0.5s;
}

.fade-out-leave-to {
  opacity: 0;
}

.text-container {
  margin-bottom: 2rem;
}

.line {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.line-2 {
  font-size: 2rem;
}

.early-access-btn {
  background-color: gold;
  color: black;
  font-family: 'Tangerine', cursive;
  font-size: 1.2rem;
  padding: 0.75rem 1.5rem;
}
</style>
