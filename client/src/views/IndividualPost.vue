<template>
    <div class="">
      <NavBar/>
      <div class="m-3" align="center">
        <h1 style="font-family: ">Posts</h1>
      </div>
    </div>
</template>
  
<script>
  // @ is an alias to /src
  import NavBar from '@/components/NavBar.vue'
  //import PostService from '@/services/posts.services.js'
  
  export default {
    name: 'IndividualPost',
    components: {
      NavBar
    },
    props: [
        'posts'
    ],
    }
</script>