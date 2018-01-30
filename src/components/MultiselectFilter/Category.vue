<template>
  <div class="multiselect-filter-category" @click="selectCategory">
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
    methods: {
      selectCategory() {
        this.$emit('categoryWasClicked', this.category);
      }
    },
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
