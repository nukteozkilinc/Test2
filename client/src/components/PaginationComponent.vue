<template>
    <div>
    <b-pagination
          v-model="currentPage"
          :total-rows="paging.total"
          :per-page="paging.limit"
          aria-controls="my-table"
          align="center"
        ></b-pagination>
    </div>
    </template>
    
    <script>
    export default {
        name: 'PaginationComponent',
        components: {
        
        },
        props: [
          'paging'
        ],
        data() {
          return {
            page: ''
          }
        },
        computed: {
          currentPage:{
            get() {
              return this.paging.currentPage
            },
            set(newPage) {
              this.$emit('updatePaging', newPage)
            }
          }
        }
    }
    </script>