<template>
  <NuxtLink :to="path">
    <b-icon class="button" icon="pencil-outline"/>
  </NuxtLink>
</template>

<script>
import qs from 'qs';

export default {
  props:{
    data: {
      type: Object
    }
  },
  computed:{
    path(){
      return 'edit?'+ qs.stringify(this.data)
    }
  }
}
</script>
