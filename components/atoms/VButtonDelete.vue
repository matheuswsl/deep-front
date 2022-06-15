<template>
  <div @click="deleteRegistry">
    <b-icon class="button" icon="delete-outline"/>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props:{
    id: {
      type: String
    },
    url:{
      type:String,
      default: ''
    }
  },
  methods:{
    async deleteRegistry(){
      console.log('entrei')
      const fullUrl = 'http://localhost:3000/'+this.url+'/'+this.id
      await axios.delete(fullUrl)
        .then(()=>{
          this.$buefy.toast.open({
            duration: 2000,
            message: "Registro excluído com sucesso",
            type: 'is-success'
          })
          var that = this
          setTimeout(function(){
            that.$router.go(0);
          },1000);
        })
        .catch(()=>{
          this.$buefy.toast.open({
            duration: 2000,
            message: "Não foi possível excluir o registro",
            type: 'is-danger'
          })
        });
    }
  }
}
</script>
