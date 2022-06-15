<template>
  <EditTemplate :data="data" url="air-conditioner">
    <template v-slot:title>
      Ar Condicionado
    </template>
    <template v-slot:form>
      <b-field label="Quantidade">
        <b-input v-model="data.quantity"></b-input>
      </b-field>

      <b-field label="BTU">
        <b-input v-model="data.btu"></b-input>
      </b-field>

      <b-field label="Filial">
        <b-select
          placeholder="Selecione uma filial"
          style="width:100%;"
          v-model="data.branch"
          >
            <option
                v-for="(branch,index) in dataBranchOffice"
                :value="branch.id"
                :key="index">
                {{ branch.name }}
            </option>
        </b-select>
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
  import qs from 'qs';
  import transformData from '~/lib/transformData.lib'

  export default {
    mixins:[
      transformData
    ],
    data(){
      return{
        data: {
          description: '',
          quantity: 0,
          btu: '',
          branch: '',
          id: ''
        }
      }
    },
    mounted(){
      const data = this.$route.query;
      if (data){
        this.data = this.transformData(qs.parse(data));
      }
    },
    async asyncData({$getBranch}){
      return $getBranch();
    },
  }
</script>

<style>
  select, span.select{
    width:100% !important;
  }
</style>
