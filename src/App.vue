<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

import listBlogs from './components/listBlogs.vue';

export default {
  name: 'app',
  data(){
    return {
      title: 'Burak'
    }
  },
  components: {
    listBlogs
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
  font-family: 'Arial';
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
}
</style>
