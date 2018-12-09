import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('Postslist.vue', () => {
  it('renders all posts lists', () => {
    const posts = [{
    	id:1,
    	title:'First post',
    	body:'Helloworld one two threee'
    },{
    	id:2,
    	title:'Second Post',
    	body:' Helloworld two three four'
    }]
    const wrapper = shallowMount(HelloWorld, {
      propsData: {posts: posts,loading:false },
      created(){
      	return this.posts = posts;
      }

    })
    console.log(wrapper.html());
    let allTitles = wrapper.findAll('h2');
    expect(allTitles.length).toEqual(2);
    //expect(wrapper.text()).toMatch(msg)
  })
})
