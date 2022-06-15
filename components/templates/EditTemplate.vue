<template>
    <div class="indexColumns">
    <div class="columns">
      <div class="column">
        <section class="branch-office-section">
          <p class="is-size-2">
            <slot name="title"></slot>
          </p>
        </section>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <section class="branch-office-section">
          <div class="form">
            <slot name="form"></slot>
          </div>
        </section>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <section class="branch-office-section">
          <div class="columns">
            <div class="column is-one-half" style="text-align:center;">
              <b-button @click="saveButton">Salvar</b-button>
            </div>
            <div class="column is-one-half" style="text-align:center;">
              <b-button @click="$router.push(`/${url}/list`)">Cancelar</b-button>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return {
      baseUrl: 'http://localhost:3000/'
    }
  },
  props:{
    data:{
      type: Object,
      default: ()=>{}
    },
    url:{
      type: String,
      require: true
    }
  },
  methods:{
    async createRegistry(){
      const fullUrl = this.baseUrl + this.url
      await axios.post(fullUrl,this.data)
        .then(()=>{
          this.$buefy.toast.open({
            duration: 2000,
            message: "Registro criado com sucesso",
            type: 'is-success'
          })
        })
        .catch(()=>{
          this.$buefy.toast.open({
            duration: 2000,
            message: "Não foi possível criar um novo registro",
            type: 'is-danger'
          })
        });
      this.$router.push(`/${this.url}/list`);
    },
    async updateRegistry(){
      const fullUrl = this.baseUrl+this.url+'/'+this.data.id + 5
      await axios.put(fullUrl, this.data)
        .then(()=>{
          this.$buefy.toast.open({
            duration: 2000,
            message: "Registro atualizado com sucesso",
            type: 'is-success'
          })
        })
        .catch(()=>{
          this.$buefy.toast.open({
            duration: 2000,
            message: "Não foi possível atualizar o registro",
            type: 'is-danger'
          })
        });
      this.$router.push(`/${this.url}/list`);
    },
    async saveButton(){
      const {id} = this.data;
      if(id){
        await this.updateRegistry();
      }else{
        await this.createRegistry();
      }
    }
  }
}
</script>

<style scoped>
  @import '~/assets/indexColumn.css';

  .branch-office-section{
    width:50%;
    margin:auto;
  }
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
