<template>
  <q-page class="scroll-container">
    <div class="faq-page scroll-section q-pa-md">
      <div class="faq-content">
        <h2 class="text-h4 text-center q-mb-md">Frequently Asked Questions</h2>
        <q-list bordered class="rounded-borders">
          <q-expansion-item
            v-for="faq in faqs"
            :key="faq.question"
            :label="faq.question"
            icon="help_outline"
          >
            <q-card>
              <q-card-section>
                {{ faq.answer }}
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>
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

.faq-page {
  background: linear-gradient(to bottom, #000000, #d4af37);
}
</style>

<script setup>
import { ref } from 'vue'

const faqs = ref([
  {
    question: 'What is Savorly?',
    answer: 'It is a suite of tools to help your restaurant run more efficiently.',
  },
  {
    question: 'How does QR code ordering work?',
    answer:
      'Customers scan a QR code at their table to view the menu and place an order directly from their phone.',
  },
  {
    question: 'Can I customize the chatbot?',
    answer: "Yes, the chatbot can be trained on your restaurant's specific information.",
  },
])
</script>
