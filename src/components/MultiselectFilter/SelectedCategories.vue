<template>
  <div class="multiselect-filter">
    <form class="multiselect-filter__wrapper">
      <label class="multiselect-filter__label" for="search-match">
        filter
      </label>
      <div class="multiselect-filter__selected-container">
        <div class="multiselect-filter__selected">

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
      <component v-for="category in categories"
                 :category="category"
                 :is="currentDropdownView">

      </component>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import CategoriesDropdown from './CategoriesDropdown.vue';

  export default {
    data () {
      return {
        searchMatch: '',
        categories: {},
        currentDropdownView: 'CategoriesDropdown',
        currentDropdownStep: 0
      }
    },
    components: {
      CategoriesDropdown
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
            this.currentDropdownView = 'CategoriesDropdown';
            break;
          case 1:
            this.currentDropdownView = 'CategoriesDropdown';
            break;
          default:
            this.currentDropdownView = 'CategoriesDropdown'
        }
      }
    }
  }
</script>

<style lang="scss">
  .multiselect-filter {
    $borderColor: #e8e8e8;

    &__wrapper {
      display: flex;
      border-radius: 5px;
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
    }

    &__input {
      display: block;
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
  }
</style>
