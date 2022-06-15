<template>
  <b-field :label="label">
    <b-input></b-input>
  </b-field>
</template>

<script>
  export default {
    props:{
      label:{
        type: String,
        require: true
      }
    }
  }
</script>
