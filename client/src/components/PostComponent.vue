<template>
    <div>
        <b-card-group style="display: list-item; list-style-type: none;" v-for="post in posts" :key="post.id" align="center">
            <b-card class="m-5 b-card" align="center">
                <b-card-title class="font-weight-bold justify-content-right">{{post.title}}</b-card-title>
                <b-card-subtitle class="font-weight">{{post.date}}</b-card-subtitle>
                <b-card-text class="text">{{post.description}}</b-card-text>

                <b-card-footer footer-bg-variant="transparent" footer-border-variant="light" style=" position: absolute;width: 92%;">
                    <router-link :to="{path: '/post/' + actualPost.id}">
                        <b-button :id="post.id" @click="getPostDetails($event)" v-b-modal.modal-center variant="success">
                            See more
                        </b-button>
                    </router-link>
                </b-card-footer>
            </b-card>

        </b-card-group>
    </div> 
    
</template>

<script>
 import PostService from '@/services/posts.services.js'

export default {
    name: 'PostComponent',
    props: [
        'posts'
    ],
    data() {
        return {
            actualPost: '',
            search: '',
        }
    },
    methods: {
        getPostDetails(event) {
            PostService.getPost(event.currentTarget.id).then(
                response => {
                    this.actualPost = response.data[0]
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
