<template>
  <div class="columns" style="width:fit-content;">
    <div class="column">
      <VButtonEdit :data="data"/>
    </div>
    <div class="column">
      <VButtonDelete :id="data.id" :url="url"/>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    data:{
      type: Object
    },
    url:{
      type: String
    }
  }
}
</script>

<style scoped>
  .column{
    padding-left: 6px;
    padding-right: 6px;
  }
</style>
