<template>
  <div class="hello">
	<h3><router-link :to="`/`">Home</router-link></h3>
    <p v-if="loading"> Loading .... </p>
    <article v-if="post">
      <h2>{{post.title}}</h2>
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
  }, data(){
  	return {
      loading:true,
      post:null
    }
  },
  created(){
    BlogPostAPI.getPost(this.$route.params.id)
    	.then(response => {    		
    		return this.post= response;
    	})
    	.catch(err => {
	      console.log(err);
	    })
	    .finally(() => {
	      this.loading = false;
	    })
  }
  }
 </script>
