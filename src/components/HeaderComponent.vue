<template>
  <header class="header">
    <img src="@/assets/bitcoin.svg" alt="Logo" class="logo" />
    <h1 class="title">Bitcoin</h1>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HeaderComponent',
})
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: #f8f9fa;
}

.logo {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 25%;
  margin-right: 0.5rem;
  transition:
    width 0.3s ease,
    height 0.3s ease;
}

.title {
  font-size: 1.5rem;
  transition: font-size 0.3s ease;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .logo {
    width: 2rem;
    height: 2rem;
  }

  .title {
    font-size: 1.25rem;
  }
}

@media (max-width: 480px) {
  .header {
    flex-direction: column;
    text-align: center;
    padding: 1.5rem;
  }

  .logo {
    width: 1.5rem;
    height: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .title {
    font-size: 1rem;
  }
}
</style>
