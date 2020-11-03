<template>
  <div class="container">
    <h1>musics</h1>
  </div>
</template>

<script>
  import api from '@/services/api';
  const musicsService = new api();
  export default {
    name: 'Home',
    async created() {
      const res = await musicsService.getMusics();
      this.$store.dispatch('getMusics', res.data);
    },
    mounted() {
      console.log(this.$store.state.musics)
    },
  }
</script>

<style lang="scss" scoped>
  
</style>