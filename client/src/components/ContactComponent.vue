<template>
  <div>
    <b-form class="m-5">    
      <b-form-input
        id="input-1"
        v-model="form.email"
        type="email"
        placeholder="Enter email"
        required
        >
      </b-form-input>

      <br/>
    
      <b-form-textarea
          id="textarea"
          placeholder="Text"
          rows="3"
          max-rows="10"
      ></b-form-textarea>

      <br/>

      <b-button variant="success">Send</b-button>
    </b-form>

    <div class="espacio">
      <b-icon icon="twitter" 
      class="h3 butt"
      variant="info"
      >
      </b-icon> 

      <b-icon icon="facebook" 
      class="h3 butt"
      variant="info">
      </b-icon>

      <b-icon icon="instagram" 
      class="h3 butt"
      variant="info">
      </b-icon>

    </div>   
  </div>

</template>

<script>
export default {
    name: 'ContactComponent',
    data() {
      return {
        form: {
          email: ''
        },
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      }
    }
}
</script>

<style>
.espacio{
    display: flex;
    flex-direction:row;
    justify-content:center;
}

.butt{
    margin-left: 20px;
}

</style>

