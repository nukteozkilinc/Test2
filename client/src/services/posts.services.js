import axios from 'axios';
import store from '@/store.js'

const API_URL = 'http://localhost:3000/posts/';

class PostService {
    getPosts(search, page, limit) {
        return axios.get(API_URL, {params: {'search': search, 'page': page, 'limit': limit}});
    }

    getPost(id) { 
        return axios.get(API_URL + id);
    }

    deletePost(id){
        return axios.delete(API_URL, {data: {'id': id}, headers: {'authorization': 'Bearer ' + store.getters.getToken}})
    }

    createPost(title, image, description, date){
        return axios.post(API_URL, {'title': title, 'image': image, 'description': description, 'date': date}, {headers: {'authorization': 'Bearer ' + store.getters.getToken}})
    }

    modifyPost(id, title, image, description, date){
        return axios.put(API_URL, {'id': id, 'title': title, 'image': image, 'description': description, 'date': date}, {headers: {'authorization': 'Bearer ' + store.getters.getToken}})
    }
}

export default new PostService();