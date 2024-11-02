<template>
  <div class="container">
    <div class="icon">
      <img :src="data.logo" :alt="data.currencyName" class="icon-image" />
    </div>
    <div class="info">
      <h1>{{ data.currencyName }}</h1>
      <div class="currency-pair">{{ data.currencyPair }}</div>
      <div class="price">
        <span class="price-value">{{ data.priceValue }}</span>
        <span class="currency">{{ data.currencyType }}</span>
      </div>
      <p class="timestamp">{{ data.timestamp }}</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'LivepriceComponent',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.container {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: row; /* Ensure it's set to column */
  align-items: center; /* Center horizontally */
  justify-content: center; /* Center vertically */
  gap: 15px;
}

.icon {
  width: 12rem;
  height: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
}

.icon-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.info {
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  justify-content: center; /* Center vertically within .info */
  align-items: center; /* Center horizontally */
}

.info h1 {
  margin: 0;
}

.current-type {
  font-size: 1rem;
  color: gray;
}

.price {
  display: flex;
  align-items: baseline;
  gap: 0.3rem;
}

.price-value {
  font-size: 3rem;
  font-weight: bold;
}

.currency {
  font-size: 1rem;
  color: gray;
}

.timestamp {
  color: gray;
  font-size: 1rem;
  margin-top: 4px;
}

.currency-pair {
  margin-top: 10px;
  padding: 10px;
  background-color: #e0f7fa;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  transition: background-color 0.3s ease;
}

.currency-pair:hover {
  background-color: #b2ebf2;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .container {
    padding: 15px;
  }

  .icon {
    width: 5rem;
    height: 5rem;
  }

  .current-type {
    font-size: 0.875rem;
  }

  .price-value {
    font-size: 1.5rem;
  }

  .currency,
  .currency-pair {
    font-size: 0.875rem;
  }
}

@media (max-width: 480px) {
  .container {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 10px;
    gap: 10px;
  }

  .icon {
    width: 4rem;
    height: 4rem;
  }

  .current-type {
    font-size: 0.8rem;
  }

  .price-value {
    font-size: 1.25rem;
  }

  .currency {
    font-size: 0.8rem;
  }

  .timestamp {
    font-size: 0.7rem;
  }

  .currency-pair {
    font-size: 0.8rem;
  }
}
</style>
