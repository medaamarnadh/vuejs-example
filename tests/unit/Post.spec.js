import { shallowMount } from '@vue/test-utils'
import Post from '@/components/Post.vue'

describe('Post.vue', () => {
  it('renders single post content', () => {
    const post ={
    	id:1,
    	title:'First post',
    	body:'Helloworld one two threee'
    };
    const $route = {params:{id:1}};
    const wrapper = shallowMount(Post, {
      propsData: {post:post,loading:false},
      created(){
        return this.post = post;
      },
      mocks:{
        $route
      }

      
    });
    console.log(wrapper.html());
    let title = wrapper.find('h2').text();
    expect(title).toMatch(post.title)
  })
})
