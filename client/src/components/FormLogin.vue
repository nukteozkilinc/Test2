<template>
    <div align="center">
      <b-card
        title="Login"
        style="max-width: 20rem;"
        border-radius=100px
      >
        <!-- Using components -->
        <form @submit.prevent="checkLogin">
          <b-input-group prepend="Username" class="mt-3">
            <b-form-input required v-model="user.username"></b-form-input>
          </b-input-group>
    
          <b-input-group prepend="Password" class="mt-3">
            <b-form-input required type=password v-model="user.password"></b-form-input>
          </b-input-group>
          <br>
          <b-button type=submit variant="outline-success">Go</b-button>
        </form>
      </b-card>
    </div>
    </template>
    
    <script>  
    import AuthService from '@/services/auth.services.js'
    export default{
      name: 'FormLogin',
      data() {
        return {
          user: {
            username: '',
            password: ''
          }
        }
      },
      methods: {
        checkLogin(){
          //TODO hacer llamada al servicio auth
          if(AuthService.login(this.user.username, this.user.password)){
            this.$router.push('/admin')
          }
        } 
      },
    }
    </script>