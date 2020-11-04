<template>
  <div class="home">
    <div class="showcase">
      <div class="showcase-content">
        <div class="container">
          <div class="showcase-text">
            <h1>Listen to our selection and relax</h1>
          </div>
          <div class="showcase-img-container">

          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
  import api from '@/services/api';
  const musicsService = new api();

  export default {
    name: 'Home',
    async created() {
      const res = await musicsService.getMusics();
      let musics = res.data.map(m => m.content)
      this.$store.dispatch('getMusics', musics);
    },
    computed: {
      musics() {
        return this.$store.state.musics;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .home {
    min-height: 100vh;
    width: 100%;
  }
  .showcase {
    min-height: 40vh;
    background-color: #343a40;

    .showcase-content {
      display: flex;
      height: 100%;
      min-height: 40vh;

      .showcase-text, .showcase-showcase-img-container {
        flex: 1
      }
      .showcase-text {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;

        h1 {
          color: white;
        }
      }
    }
  }
</style>