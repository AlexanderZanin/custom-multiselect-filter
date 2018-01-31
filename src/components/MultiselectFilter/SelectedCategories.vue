<template>
  <div class="multiselect-filter">
    <form class="multiselect-filter__wrapper">
      <label class="multiselect-filter__label" for="search-match">
        filter
      </label>
      <div class="multiselect-filter__selected-container">
        <div class="multiselect-filter__selected">
          <app-selected-filters v-for="category in categories"
                                v-if="category.selected.length"
                                :selected-category="category"
                                :key="category.name"
                                @selectionWasCleared="selectionWasCleared"></app-selected-filters>
        </div>
        <input class="multiselect-filter__input"
               type="text"
               id="search-match"
               v-model="searchMatch" />
      </div>
      <button class="multiselect-filter__button" type="reset">
        Reset
      </button>
    </form>
    <div class="multiselect-filter__dropdown">
      <app-categories v-if="!currentDropdownStep"
                      :categories="categories"
                      @categoryWasClicked="categoryWasClicked"></app-categories>

      <app-options v-else
                  :selected-category="selectedCategory">
        <app-prev-step slot="prev-step"
                       @backToPrevStep="backToPrevStep">
          back to filter options
        </app-prev-step>
      </app-options>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import SelectedFilters from './SelectedFilters.vue';
  import Categories from './Categories.vue';
  import PrevStep from './PrevStep.vue';
  import Options from './Options.vue';

  export default {
    data () {
      return {
        searchMatch: '',
        categories: [],
        currentDropdownView: 'Category',
        currentDropdownStep: 0,
        selectedCategory: {},
        selectedFilters: []
      }
    },
    computed: {
      showSelectedFilters() {
        return this.selectedCategory.selected && this.selectedCategory.selected.length;
      }
    },
    components: {
      appSelectedFilters: SelectedFilters,
      appCategories: Categories,
      appPrevStep: PrevStep,
      appOptions: Options
    },
    created() {
      axios.get('src/static/filters.json')
        .then((response) => {
          this.categories = Object.values(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    watch: {
      currentDropdownStep() {
        switch (this.currentDropdownStep) {
          case 0:
            this.currentDropdownView = 'Category';
            break;
          case 1:
            this.currentDropdownView = 'Options';
            break;
          default:
            this.currentDropdownView = 'Category'
        }
      }
    },
    methods: {
      categoryWasClicked(category) {
        this.currentDropdownStep += 1;
        this.selectedCategory = category
      },

      backToPrevStep() {
        this.currentDropdownStep -= 1;
      },

      selectionWasCleared(selection) {
        selection.selected = [];
      }
    }
  }
</script>

<style lang="scss">
  .multiselect-filter {
    $borderColor: #e8e8e8;
    $borderRadius: 5px;

    &__wrapper {
      display: flex;
      border-radius: $borderRadius;
    }

    &__label {
      padding: 10px;
      background-color: #dde6e9;
      border-top-left-radius: inherit;
      border-bottom-left-radius: inherit;
    }

    &__selected-container {
      flex-grow: 1;
      border: 1px solid $borderColor;
      border-top-right-radius: inherit;
      border-bottom-right-radius: inherit;
      padding-left: 15px;
      display: flex;
      align-items: center;
    }

    &__selected {
      display: flex;
    }

    &__input {
      flex-grow: 1;
      height: 100%;
      width: 100%;
      border: none;
      background-color: transparent;
      font-size: 18px;
      padding: 5px;
    }

    &__button {
      border: 1px solid $borderColor;
      border-radius: 3px;
      padding: 5px 15px;
    }

    &__dropdown {
      border-radius: $borderRadius;
      border: 1px solid $borderColor;
      box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.1);
      max-height: 500px;
      overflow: auto;
    }
  }
</style>
