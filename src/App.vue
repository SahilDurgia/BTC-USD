<template>
  <div class="app">
    <HeaderComponent />
    <main class="main">
      <Liveprice
        v-if="bitcoinStore.bitcoinData"
        :data="bitcoinStore.bitcoinData"
      />
      <p v-else-if="loading">Loading data...</p>
      <p v-else>Error loading data. Please try again.</p>
    </main>
    <FooterComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useBitcoinStore } from '@/stores/bitcoinStore'
import HeaderComponent from '@/components/HeaderComponent.vue'
import Liveprice from '@/components/LivepriceComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default defineComponent({
  name: 'App',
  components: {
    HeaderComponent,
    Liveprice,
    FooterComponent,
  },
  setup() {
    const bitcoinStore = useBitcoinStore()
    const loading = ref(true) // Track loading state

    // Fetch Bitcoin data when the component is mounted
    onMounted(async () => {
      await bitcoinStore.fetchBitcoinData()
      loading.value = false // Set loading to false after data fetch
    })

    return { bitcoinStore, loading }
  },
})
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

@media (max-width: 768px) {
  .main {
    padding: 0.5rem;
  }
}

@media (max-width: 480px) {
  .main {
    padding: 0.25rem;
    text-align: center;
  }
}
</style>
