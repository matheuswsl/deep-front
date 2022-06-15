<template>
  <NuxtLink :to="pathToRedirect">
    <div class="card">
      <div class="card-image">
        <figure class="image">
          <img :src="imageFullPath"/>
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          <p class="has-text-centered is-size-4 has-text-weight-bold">{{ content }}</p>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
  export default {
    props:{
      imageName:{
        type: String,
        require: true
      },
      content:{
        type: String
      },
      pathToRedirect:{
        type: String
      }
    },
    computed:{
      imageFullPath(){
        return `/${this.imageName}`;
      }
    }
  }
</script>

<style>
  .card{
    box-shadow: 0 0 0.7em lightgray;
    cursor:pointer;
  }

  .card:active{
    box-shadow: none !important;
  }
</style>
