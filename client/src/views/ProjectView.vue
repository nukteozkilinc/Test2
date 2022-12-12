<template>
  <div class="first">
    <NavBar/>
    <div class="m-3" align="center">
      <h1 style="font-family: ">Projects</h1>
    </div>
    <ProjectComponent :projects="projects" @reloadProjects="reloadProjects" @updateSearch="updateSearch"/>
    <PaginationComponent :paging="paging"  @updatePaging="updatePaging"></PaginationComponent>

  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import ProjectComponent from '@/components/ProjectComponent.vue'
import PaginationComponent from '../components/PaginationComponent.vue'
import ProjectService from '@/services/projects.services.js'

export default {
  name: 'ProjectView',
  components: {
    NavBar,
    ProjectComponent,
    PaginationComponent
  },
  data() {
  return {
    projects: '',
    paging: '',
    search: '',
    currentPage: ''
  }
},
created() {
    ProjectService.getProjects().then(
        response => {
          this.projects = response.data.data
          this.paging = response.data.paging
        },
    )
},
methods: {
  reloadProjects(){
    ProjectService.getProjects().then(
      response => {
        this.projects = response.data.data
        this.paging = response.data.paging
      }
    )
  },
  updateSearch(search){
    this.search=search
    ProjectService.getProjects(this.search,this.paging.currentPage).then(
      response => {
        this.projects = response.data.data
        this.paging = response.data.paging
      }
    )
  },
  updatePaging(currentPage){
    this.currentPage=currentPage
    ProjectService.getProjects(this.search,this.currentPage).then(
      response => {
        this.projects = response.data.data
        this.paging = response.data.paging
      }
    )
  }
}

}
</script>
  