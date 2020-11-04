<template>
  <div class="home">
    <div class="showcase">
      <div class="showcase-content">
        <div class="container">
          <div class="showcase-text">
            <h1>Listen to our selection and relax</h1>
          </div>
          <div class="showcase-img-container">
            <img src="../assets/relax.svg" width="180" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="musics" >
      <div class="container">
        <div class="musics-container">
          <div v-for="music in musics" :key="music.id">
            <router-link class="music-box" :to="{name: 'listen-music', params: { id: music.id}}">
              <div class="music">
                <div class="imgBx">
                  <img :src="music.cover" alt="">
                </div>
                <div class="textBx">
                  <p>{{ music.title }}</p> 
                </div>
              </div>
            </router-link>
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

    .container {
      display: flex !important;
      .showcase-text, .showcase-img-container {
        flex: 1;
        min-height: 40vh;
        width: 100%;
      }
      .showcase-text {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;

        h1 {
          color: white;
          font-size: 50px;
          text-shadow: 2px 2px 2px rgba(128, 128, 128, 0.424);
        }
      }
      .showcase-img-container {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  .musics {
    min-height: 55vh;
    width: 100%;
    background-color: #f8f9fa;
  }

  .musics-container {
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    .music {
      position: relative;
      background-color: white;
      box-shadow: 5px 5px 4px 0px rgba(0,0,0,0.56);
      margin: 30px 50px 0;
      transition: .3s;

      &:hover {
        transform: translateX(20px);
      }

      .imgBx {
        position: relative;
        width: 250px;
        height: 270px;
      }

      img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        top: 0;
        left: 0;
        transition: .3s;

        &:hover {
          filter: grayscale(100%);
        }
      }

      .textBx {
        text-align: center;
        height: 50px;

        p {
          line-height: 50px;
          color: #343a40;
        }
      }
    }
  }

  .music-box {
    text-decoration: none;
    transition: .3s;
  }

  
</style>