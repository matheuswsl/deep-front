<template>
  <div class="indexColumns">
    <div class="columns" style="height:100%;">
      <div class="column is-one-fifth is-offset-one-fifth">
        <IndexCard
          imageName="filial.jpeg"
          content="Filial"
          pathToRedirect="branch-office/list"
        />
      </div>
      <div class="column is-one-fifth">
        <IndexCard
          imageName="filial.jpeg"
          content="Computador"
          pathToRedirect="computer/list"
        />
      </div>
      <div class="column is-one-fifth">
        <IndexCard
          imageName="filial.jpeg"
          content="Ar Condicionados"
          pathToRedirect="air-conditioner/list"
        />
      </div>
    </div>
  </div>
</template>

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
