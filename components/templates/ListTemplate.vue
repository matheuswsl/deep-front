<template>
  <div class="indexColumns">
    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <div class="columns">
          <div class="column">
            <p class="is-size-2">
              <slot name="title"></slot>
            </p>
          </div>
          <div class="column homeIcon">
            <NuxtLink to="edit">
              <b-icon class="button is-medium" icon="folder-plus-outline"/>
            </NuxtLink>
            <NuxtLink to="/">
              <b-icon class="button is-medium" icon="home-outline"/>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <slot name="table"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
  @import '~/assets/indexColumn.css';

  .homeIcon{
    text-align: right;
  }
</style>
