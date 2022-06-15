<template>
  <ListTemplate>
    <template v-slot:title>
      Filiais
    </template>
    <template v-slot:table>
      <b-table
          :data="data"
          :paginated="true"
        >
          <b-table-column id="name" label="Nome" v-slot="props">
            {{ props.row.name }}
          </b-table-column>

          <b-table-column id="description" label="Descrição" v-slot="props">
            {{ props.row.description }}
          </b-table-column>

          <b-table-column id="actions" label="Ações" v-slot="props">
            <VActionButtons :data="props.row" url="branch-office"/>
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
      const url = 'http://localhost:3000/branch-office/'+id
      await axios.delete(url)
    }
  },
  async asyncData(){
    const data = await axios.get("http://localhost:3000/branch-office")
                        .then(resp => resp.data);
    return { data }
  }
}
</script>
