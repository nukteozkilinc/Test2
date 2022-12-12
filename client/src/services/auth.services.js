import axios from 'axios';
import store from '@/store.js'

const API_URL = 'http://localhost:3000/';

class AuthService {
    login(user, password) {
        return axios.post(API_URL + 'login', {
            login: user,
            password: password,
        })
        .then(
            response => {
                if(response.status==200){
                    store.dispatch('login', [response.data.user,response.data.member, response.data.Bearer])
                }
            }
        )
    }
    logout(){
        store.dispatch('logout')
    }
}

export default new AuthService()