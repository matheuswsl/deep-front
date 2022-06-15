<template>
  <EditTemplate :data="data" url="branch-office">
    <template v-slot:title>
      Filial
    </template>
    <template v-slot:form>
      <b-field label="Nome">
        <b-input v-model="data.name"></b-input>
      </b-field>

      <b-field label="Descrição">
        <b-input
          type="textarea"
          maxlength="250"
          v-model="data.description"
        ></b-input>
      </b-field>
    </template>
  </EditTemplate>
</template>

<script>
  export default {
    data(){
      return{
        data: {
          description: '',
          name: '',
          id: ''
        }
      }
    },
    mounted(){
      this.data = this.$route.query
    }
  }
</script>
