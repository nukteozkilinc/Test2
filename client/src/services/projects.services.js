import axios from 'axios';
import store from '@/store.js'

const API_URL = 'http://localhost:3000/projects/';

class ProjectService {
    getProjects(search, page, limit) {
        return axios.get(API_URL, {params: {'search': search, 'page': page, 'limit': limit}});
    }

    getProject(id) {
        return axios.get(API_URL + id);
    }
    
    deleteProject(id){
        return axios.delete(API_URL,  {data: {'id': id}, headers: {'authorization': 'Bearer ' + store.getters.getToken}})
    }

    createProject(title, image, description, date){
        return axios.post(API_URL, {'title': title, 'image': image, 'description': description, 'date': date}, {headers: {'authorization': 'Bearer ' + store.getters.getToken}})
    }

    modifyProject(id, title, image, description, date){
        return axios.put(API_URL, {'id': id, 'title': title, 'image': image, 'description': description, 'date': date}, {headers: {'authorization': 'Bearer ' + store.getters.getToken}})
    }
}

export default new ProjectService();