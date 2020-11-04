<template>
  <div class="music-container">
    <h1>{{ music.title }}</h1>
    <div class="player">
      <div class="imgBx">
        <img :src="music.cover" alt="">
      </div>
      <audio controls>
        <source src="https://soundcloud.com/meditation-music/the-coming-race-download-1-hour-of-music-for-free" type="text/html">
      </audio>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ListenMusic',
    mounted() {
      const id = parseInt(this.$route.params.id);
      this.$store.dispatch('getMusic', id);
      console.log(this.$store.state.music);
    },
    computed: {
      music() {
        return this.$store.state.music;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .music-container {
    min-width: 90vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 40px;

    h1 {
      padding-bottom: 20px;
    }

    .imgBx {
      position: relative;
      width: 350px;
      height: 400px;
    }

    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      top: 0;
      left: 0;
    }

    audio {
      width: 100%;
      outline: none;
      border-radius: none;
    }
  }
</style>