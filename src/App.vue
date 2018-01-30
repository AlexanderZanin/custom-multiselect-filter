<template>
  <div id="app">
    <selected-categories></selected-categories>
  </div>
</template>

<script>
  import SelectedCategories from './components/MultiselectFilter/SelectedCategories.vue';

  export default {
    data() {
      return {

      }
    },
    components: {
      SelectedCategories
    },
  }
</script>

<style lang="scss">
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font: 22px/1.3 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  a {
    color: #42b983;
  }
</style>
