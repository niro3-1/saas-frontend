<template>
  <div>
    <h1>Chart Component</h1>
    <p v-if="!data">Loading data...</p>
    <div v-else>
      <!-- Chart rendering logic -->
      <p>Data loaded: {{ data }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: null
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        // Simulate API call
        const response = await fetch('https://api.example.com/data');
        this.data = await response.json();
      } catch (error) {
        console.error('Failed to fetch data:', error);
        this.data = { fallback: 'Fallback data' };
      }
    }
  }
};
</script>