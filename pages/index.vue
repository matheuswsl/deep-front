<template>
  <div class="indexColumns">
    <div class="columns" style="height:100%;">
      <div :class="defineClass">
        <IndexCard
          imageName="branch.jpg"
          content="Filial"
          pathToRedirect="branch-office/list"
        />
      </div>
      <div class="column is-one-fifth" v-if="hasBranch">
        <IndexCard
          imageName="computer.jpg"
          content="Computador"
          pathToRedirect="computer/list"
        />
      </div>
      <div class="column is-one-fifth" v-if="hasBranch">
        <IndexCard
          imageName="air.jpg"
          content="Ar Condicionados"
          pathToRedirect="air-conditioner/list"
        />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        hasBranch: false
      }
    },
    computed:{
      defineClass(){
        if(this.hasBranch){
          return "column is-one-fifth is-offset-one-fifth"
        }
        return "column is-one-fifth is-offset-5"
      }
    },
    asyncData({$getBranch}){
      return $getBranch();
    },
    created(){
      if(this.dataBranchOffice && !!this.dataBranchOffice.length){
        this.hasBranch = true
      }
    }
  }
</script>

<style scoped>
  .indexColumns {
    position:fixed;
    left: 0;
    right: 0;
    height:100%;
  }

  .column{
    margin-top:auto;
    margin-bottom: auto;
  }
</style>
