<template>
    <div class="first">
      <NavBar/>
      <div class="m-3" align="center">
        <h1 style="font-family: ">Posts</h1>
      </div>
      <PostComponent :posts="posts" @reloadPosts="reloadPosts" @updateSearch="updateSearch"/>
      <PaginationComponent :paging="paging"  @updatePaging="updatePaging"></PaginationComponent>

    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import NavBar from '@/components/NavBar.vue'
  import PostComponent from '@/components/PostComponent.vue'
  import PaginationComponent from '../components/PaginationComponent.vue'
  import PostService from '@/services/posts.services.js'
  
  export default {
    name: 'PostView',
    components: {
      NavBar,
      PostComponent,
      PaginationComponent
    },
    data() {
    return {
      posts: '',
      paging: '',
      search: '',
      currentPage: ''
    }
  },
  created() {
      PostService.getPosts().then(
          response => {
            this.posts = response.data.data
            this.paging = response.data.paging
          },
      )
  },
  methods: {
    reloadPosts(){
      PostService.getPosts().then(
        response => {
          this.posts = response.data.data
          this.paging = response.data.paging
        }
      )
    },
    updateSearch(search){
      this.search=search
      PostService.getPosts(this.search,this.paging.currentPage).then(
        response => {
          this.posts = response.data.data
          this.paging = response.data.paging
        }
      )
    },
    updatePaging(currentPage){
      this.currentPage=currentPage
      PostService.getPosts(this.search,this.currentPage).then(
        response => {
          this.posts = response.data.data
          this.paging = response.data.paging
        }
      )
    }
  }

  }
  </script>
  