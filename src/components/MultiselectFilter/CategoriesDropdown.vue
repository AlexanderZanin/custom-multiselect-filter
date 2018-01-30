<template>
  <div class="multiselect-filter-category">
    {{ category.name }}
  </div>
</template>

<script>
  export default {
    props: ['category'],
    data () {
      return {

      }
    },
    created() {

    }
  }
</script>

<style lang="scss">
  .multiselect-filter-category {
    padding: 10px;
    cursor: pointer;

    &:before {
      content: '»';
    }

    &:hover {
      background-color: transparentize(#000, .97);
    }
  }
</style>
