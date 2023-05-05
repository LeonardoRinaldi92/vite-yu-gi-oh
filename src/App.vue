<script >
  import headerComp from './components/headerComp.vue';

  export default {
      name: 'App',
      components: {
        headerComp,
      }
    }
</script>

<template >
  <header>
    <headerComp/>
  </header>
  <main>
  </main>
  <footer>
    
  </footer>
</template>

<style lang="scss">
@use './style/main.scss';
</style>
