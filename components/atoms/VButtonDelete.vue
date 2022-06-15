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
      await axios.delete(fullUrl);
      this.$router.go(0);
    }
  }
}
</script>
