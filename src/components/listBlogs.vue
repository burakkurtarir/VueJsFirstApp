<template>
  <div id="posts">
    <article v-for="post in posts">
      <router-link v-bind:to="'/blogDetail/' + post.id">{{ post.id }} -- {{ post.title }}</router-link>
    </article>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return {
      posts: []
    }
  },
  methods: {
    test: function(){
      alert('SASA');
    }
  },
  created(){
    var url = 'https://jsonplaceholder.typicode.com/posts';
    axios.get(url)
    .then((response) => {
      this.posts = response.data;
    });
  }
}
</script>

<style scoped>
*{
  box-sizing: border-box;
}
a{
  text-decoration: none;
  color: #E0E0E3;
}
#posts{

}
#posts article{
  border: 1px solid gray;
  border-radius: 4px;
  margin: 8px auto;
  padding: 8px;
  max-width: 1200px;
  background-color: #D2500F;
  transition: .3s;
}
#posts article:hover{
  background-color: #8C2D04;
  box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.75);
}

</style>
