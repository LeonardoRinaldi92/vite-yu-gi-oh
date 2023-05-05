<script >
  import headerComp from './components/headerComp.vue';
  import mainComponent from './components/mainComponent.vue'

  export default {
      name: 'App',
      components: {
        headerComp,
        mainComponent,
      }
    }
</script>

<template >
  <header>
    <headerComp/>
  </header>
  <main>
    <mainComponent/>
  </main>
  <footer>
    
  </footer>
</template>

<style lang="scss">
@use './style/main.scss';
</style>
