<template>
  <ul class="multiselect-filter-categories">
    <app-category v-for="category in filterBy(categories, 'name', searchMatch)"
                  tag="li"
                  :category="category"
                  :key="category.name"
                  @categoryWasClicked="categoryWasClicked"></app-category>
  </ul>
</template>

<script>
  import Category from './Category.vue';
  import { filterBy } from './helpers/helpers';

  export default {
    props: ['categories', 'searchMatch'],
    components: {
      appCategory: Category
    },
    methods: {
      filterBy,

      categoryWasClicked(category) {
        this.$emit('categoryWasClicked', category);
      }
    }
  }
</script>

<style lang="scss">
  .multiselect-filter-categories {
    margin: 0;
  }
</style>
