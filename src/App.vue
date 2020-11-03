<template>
  <div>
    <the-header/>
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader';

export default {
  name: 'App',
  components: {TheHeader}
}
</script>

<style>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }

  *::after,
  *::before {
    box-sizing: border-box;
  }
</style>
