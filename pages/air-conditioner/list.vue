<template>
  <ListTemplate>
    <template v-slot:title>
      Ar Condicionados
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

        <b-table-column id="btu" label="BTU" v-slot="props">
          {{ props.row.btu }}
        </b-table-column>

        <b-table-column id="branch" label="Filial" v-slot="props">
          {{ props.row.branch.name }}
        </b-table-column>

        <b-table-column id="actions" label="Ações" v-slot="props">
          <VActionButtons :data="props.row" url="air-conditioner"/>
        </b-table-column>
      </b-table>
    </template>
  </ListTemplate>
</template>

<script>
import axios from 'axios';

export default {
  async asyncData(){
    const data = await axios.get("http://localhost:3000/air-conditioner")
                        .then(resp => resp.data);
    return { data }
  }
}
</script>
