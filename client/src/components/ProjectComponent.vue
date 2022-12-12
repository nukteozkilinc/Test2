<template>
    <div>
            <b-card-group style="display: list-item; list-style-type: none;" v-for="project in projects" :key="project.id" align="center">
                <b-card class="m-5 b-card" align="center">
                    <b-card-title class="font-weight-bold justify-content-right">{{project.title}}</b-card-title>
                    <b-card-subtitle class="font-weight">{{project.date}}</b-card-subtitle>
                    <b-card-text class="text">{{project.description}}</b-card-text>

                    <b-card-footer footer-bg-variant="transparent" footer-border-variant="light" style=" position: absolute;width: 92%;">
                        <b-button :id="project.id" @click="getProjectDetails($event)" v-b-modal.modal-center variant="success">
                            See more
                        </b-button>
                    </b-card-footer>
                </b-card>

            </b-card-group>
    </div> 
    
</template>

<script>
 import ProjectService from '@/services/projects.services.js'

export default {
    name: 'ProjectComponent',
    props: [
        'projects'
    ],
    data() {
        return {
            actualProject: '',
            search: ''
        }
    },
    methods: {
        getProjectDetails(event) {
            ProjectService.getProject(event.currentTarget.id).then(
                response => {
                    this.actualProject = response.data[0]
                }
            )
        }
    },
    watch: {
        search() {
            this.$emit('updateSearch', this.search)
        }
    }
}
</script>


<style>
li {
  list-style-type: none;
}
.b-card {
    max-width: 800px;
    max-height:500px;
    background-color: aliceblue;
}
.busqueda {
    max-width:200px;
}
.espaciado {
    margin-left: 6em;
}
.text {
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
}
</style>