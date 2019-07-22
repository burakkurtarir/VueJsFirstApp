<template>
  <div>
    <h2>Blog Detail {{ id }}</h2>
    <div id="post">
      {{ post.body }}
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return {
      id: this.$route.params.id,
      post: {}
    }
  },
  components: {

  },
  created(){
    //Web servisinden post detail çekilecek
    var url = 'https://jsonplaceholder.typicode.com/posts/';
    axios.get(url + this.id)
    .then((response) => {
      this.post = response.data;
      console.log(this.post);
    });
  }
 }

</script>

<style>
*{
  box-sizing: border-box;
}
#post{
  border: 1px solid gray;
  max-width: 1200px;
  margin: 8px auto;
  padding: 8px;
}
h2{
  text-align: center;
}
div{
  color: white;
}
</style>
