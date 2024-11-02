<template>
  <footer class="footer">
    <p>&copy; 2024 Crypto Tracker</p>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FooterComponent',
})
</script>

<style scoped>
.footer {
  padding: 1rem;
  background-color: #f8f9fa;
  text-align: center;
  font-size: 1rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 2rem;
    font-size: 0.8rem;
  }
}
</style>
