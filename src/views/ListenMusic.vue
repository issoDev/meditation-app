<template>
  <div class="music-container">
    <h1>{{ music.title }}</h1>
    <p class="text-muted"><i>if the audio player below does not work, click on musical note emoji <a :href="music.music" target="_blank">🎵</a></i></p>
    <div class="player">
      <div class="imgBx">
        <img :src="music.cover" alt="">
      </div>
      <audio controls>
        <source :src="music.music">
      </audio>
    </div>
  </div>
</template>

<script>
  import api from '@/services/api';
  const musicsService = new api();

  export default {
    name: 'ListenMusic',
    async created() {
      const id = this.$route.params.id;
      const res = await musicsService.getOneMusic(id);
      this.$store.dispatch('getMusic', res.data.content);
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

    p {
      padding-bottom: 20px;

      a, a:hover {
        text-decoration: none;
      }
    }

    .player {
      position: relative;
      background-color: #F1F3F4;
      box-shadow: 5px 5px 4px 0px rgba(0,0,0,0.56);

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
  }
</style>