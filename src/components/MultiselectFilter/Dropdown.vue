<template>
  <div class="multiselect-filter-dropdown">
    <app-categories v-if="!currentDropdownStep"
                    :categories="categories"
                    :search-match="searchMatch"
                    @categoryWasClicked="categoryWasClicked"></app-categories>

    <app-options v-else
                 :search-match="searchMatch"
                 :selected-category="selectedCategory">
      <app-prev-step slot="prev-step"
                     @backToPrevStep="backToPrevStep">
        back to filter options
      </app-prev-step>
    </app-options>
  </div>
</template>

<script>
  import Categories from './Categories.vue';
  import PrevStep from './PrevStep.vue';
  import Options from './Options.vue';

  export default {
    props: ['searchMatch', 'categories'],
    data () {
      return {
        currentDropdownStep: 0,
        selectedCategory: {}
      }
    },
    components: {
      appCategories: Categories,
      appPrevStep: PrevStep,
      appOptions: Options
    },
    methods: {
      categoryWasClicked(category) {
        this.currentDropdownStep += 1;
        this.selectedCategory = category
      },

      backToPrevStep() {
        this.searchMatch = '';
        this.currentDropdownStep -= 1;
      },
    },
  }
</script>

<style lang="scss">
  $borderColor: #e8e8e8;
  $borderRadius: 5px;

  .multiselect-filter-dropdown {
    border-radius: $borderRadius;
    border: 1px solid $borderColor;
    box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.1);
    max-height: 600px;
    overflow: auto;
  }
</style>
