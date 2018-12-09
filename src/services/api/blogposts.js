import axios from 'axios'

const baseURL = 'https://jsonplaceholder.typicode.com';

export default {
	getPosts(){
		return axios.get(baseURL+'/posts')
			.then(response => {
				return response.data
			});
	},

	getPost(id){
		return axios.get(baseURL+'/posts/'+id)
			.then(response => {
				return response.data
			});
	}
}