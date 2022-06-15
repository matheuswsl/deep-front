<template>
  <ListTemplate url="computer">
    <template v-slot:title>
      Computadores
    </template>
    <template v-slot:table>
      <b-table
        :data="data"
        :paginated="true"
      >

        <b-table-column id="description" label="Descrição" v-slot="props">
          {{ props.row.description }}
        </b-table-column>

        <b-table-column id="quantity" label="Quantidade" v-slot="props">
          {{ props.row.quantity }}
        </b-table-column>

        <b-table-column id="brand" label="Marca" v-slot="props">
          {{ props.row.brand }}
        </b-table-column>

        <b-table-column id="branch" label="Filial" v-slot="props">
          {{ props.row.branch.name }}
        </b-table-column>

        <b-table-column id="actions" label="Ações" width="30" v-slot="props">
          <VActionButtons :data="props.row" url="computer"/>
        </b-table-column>

      </b-table>
    </template>
  </ListTemplate>
</template>

<script>
import axios from 'axios';

export default {
  methods:{
    async deleteRegistry(id){
      const url = 'http://localhost:3000/computer/'+id
      await axios.delete(url)
    }
  },
  async asyncData(){
    const data = await axios.get("http://localhost:3000/computer")
                        .then(resp => resp.data);
    return { data }
  }
}
</script>
