import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Post from './components/Post'
import HelloWorld from './components/HelloWorld'


Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    // dynamic segments start with a colon
    { path: '/posts/:id', component: Post },
    { path: '/', component:HelloWorld}
  ]
})


Vue.config.productionTip = false




new Vue({
	router,
	render: h => h(App)
	
  
}).$mount('#app')
