<template>
  <div class="multiselect-filter-categories">
    <app-category v-for="category in categories"
                  :category="category"
                  :key="category.name"
                  @categoryWasClicked="categoryWasClicked"></app-category>
    <!--<div class="multiselect-filter-categories__item"
         v-for="category in categories"
         :category="category"
         :key="category.name"
         @click="selectCategory(category)">
      {{ category.name }}
    </div>-->
  </div>
</template>

<script>
  import Category from './Category.vue';

  export default {
    props: ['categories'],
    data () {
      return {

      }
    },
    components: {
      appCategory: Category
    },
    methods: {
      categoryWasClicked(category) {
        this.$emit('categoryWasClicked', category);
      }
    },

    mounted() {
      console.log('mounted Category');
    },
    beforeDestroy() {
      console.log('destroooy Category');
//      axios.put('http://localhost:3000/DS_SourceName', {'test': {}});
    }
  }
</script>

<style lang="scss">

</style>
