<template>
  <div class="hello">    
    <h3>Here we have list of posts</h3>
    <p v-if="loading"> Loading .... </p>      
    <article v-for="post in posts" :key="post.id">
      <h2><router-link :to="`/posts/${post.id}`">{{post.title}}</router-link></h2>
      <p>{{post.body}}</p>
    </article>
  </div>
</template>

<script>
import BlogPostAPI from '@/services/api/blogposts'
export default {
  name: 'HelloWorld',
  props: {
    msg: String    
  },
  data(){
    return {
      loading:true,
      posts:[]
    }
  },
  created(){
  BlogPostAPI.getPosts()
    .then(posts => {
      return this.posts = posts
    })
    .catch(err => {
      //console.log(err);
    })
    .finally(() => {
      this.loading = false;
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
