<template>
  <q-page class="scroll-container">
    <div class="pricing-page scroll-section q-pa-md">
      <div class="pricing-content">
        <h2 class="text-h4 text-center q-mb-md">Pricing</h2>
        <div class="row q-col-gutter-md justify-center">
          <div class="col-12 col-md-4" v-for="tier in pricingTiers" :key="tier.name">
            <q-card>
              <q-card-section class="bg-primary text-white text-center">
                <div class="text-h6">{{ tier.name }}</div>
                <div class="text-h4">{{ tier.price }}</div>
              </q-card-section>
              <q-list>
                <q-item v-for="feature in tier.features" :key="feature">
                  <q-item-section avatar>
                    <q-icon color="primary" name="check" />
                  </q-item-section>
                  <q-item-section>{{ feature }}</q-item-section>
                </q-item>
              </q-list>
              <q-card-actions align="center">
                <q-btn color="primary" label="Choose Plan" />
              </q-card-actions>
            </q-card>
          </div>
        </div>

        <h3 class="text-h5 text-center q-mt-xl q-mb-md">Feature Comparison</h3>
        <q-table
          :rows="featureComparison.rows"
          :columns="featureComparison.columns"
          row-key="name"
          hide-bottom
        />
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

.pricing-page {
  background: linear-gradient(to bottom, #000000, #d4af37);
}
</style>

<script setup>
import { ref } from 'vue'

const pricingTiers = ref([
  {
    name: 'Basic',
    price: '$29/mo',
    features: ['QR Code Ordering', 'Basic Analytics', 'Email Support'],
  },
  {
    name: 'Pro',
    price: '$79/mo',
    features: ['All in Basic', 'AI Chatbot', 'Live Analytics', 'Priority Support'],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: ['All in Pro', 'Dedicated Account Manager', 'Custom Integrations'],
  },
])

const featureComparison = ref({
  columns: [
    { name: 'feature', label: 'Feature', field: 'feature', align: 'left' },
    { name: 'basic', label: 'Basic', field: 'basic', align: 'center' },
    { name: 'pro', label: 'Pro', field: 'pro', align: 'center' },
    { name: 'enterprise', label: 'Enterprise', field: 'enterprise', align: 'center' },
  ],
  rows: [
    { feature: 'QR Code Ordering', basic: '✔️', pro: '✔️', enterprise: '✔️' },
    { feature: 'Basic Analytics', basic: '✔️', pro: '✔️', enterprise: '✔️' },
    { feature: 'AI Chatbot', basic: '❌', pro: '✔️', enterprise: '✔️' },
    { feature: 'Live Analytics', basic: '❌', pro: '✔️', enterprise: '✔️' },
    { feature: 'Priority Support', basic: '❌', pro: '✔️', enterprise: '✔️' },
    { feature: 'Dedicated Account Manager', basic: '❌', pro: '❌', enterprise: '✔️' },
    { feature: 'Custom Integrations', basic: '❌', pro: '❌', enterprise: '✔️' },
  ],
})
</script>
