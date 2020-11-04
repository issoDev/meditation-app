<template>
  <div class="container">
    <h4>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit mollitia nihil reiciendis esse! Consectetur corporis, eaque nesciunt amet excepturi optio saepe accusamus quibusdam ea qui maiores voluptatum quam. Aut a repudiandae quos corrupti porro ducimus placeat commodi quis. Itaque earum ab vero perspiciatis dicta distinctio fugiat, adipisci dolore quidem facilis excepturi culpa impedit unde harum, eos, iusto minima! Magni enim deleniti labore necessitatibus voluptatem aliquid quidem repellendus, sed, iure, et unde delectus assumenda maiores! Nam excepturi a beatae nemo culpa.
    </h4>
    <router-link to='/'>
      <p>Back to home</p>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'About'
  }
</script>

<style lang="scss" scoped>
  h4 {
    padding-top: 60px;
    text-align: justify;
    letter-spacing: .3px;
    word-spacing: .1px;
    line-height: 32px;
  }

  a {
    text-decoration: none;

    &:hover {
      text-decoration: none;
    }

    p {
      padding-top: 25px;
      font-size: 1.2rem;
      color: #1d5e9e;
      cursor: pointer;
      transition: .2s all ease;

      &:hover {
        transform: translateX(20px);
      }
    }
  }
  
</style>