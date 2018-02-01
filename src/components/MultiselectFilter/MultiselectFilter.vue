<template>
  <div class="multiselect-filter" v-click-outside="clickOutside" @click="showDropdown">
    <form class="multiselect-filter__wrapper">
      <label class="multiselect-filter__label" for="search-match">
        filter
      </label>
      <div class="multiselect-filter__selected-container">
        <div class="multiselect-filter__selected">
          <app-selected-filters class="multiselect-filter__selected-filters"
                                v-for="category in categories"
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
      <button class="multiselect-filter__button"
              type="reset" @click="resetAll">
        Reset
      </button>
    </form>
    <app-dropdown v-if="dropdownIsVisible"
                  :categories="categories"
                  :search-match="searchMatch"></app-dropdown>
  </div>
</template>

<script>
  import axios from 'axios';
  import SelectedFilters from './SelectedFilters.vue';
  import Dropdown from './Dropdown.vue';

  export default {
    data () {
      return {
        searchMatch: '',
        categories: [],
        dropdownIsVisible: false
      }
    },
    components: {
      appSelectedFilters: SelectedFilters,
      appDropdown: Dropdown
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
    methods: {
      selectionWasCleared(selection) {
        selection.selected = [];
      },

      resetAll() {
        this.searchMatch = '';
        this.categories.forEach((category) => {
          category.selected = [];
        });
      },

      showDropdown() {
        this.dropdownIsVisible = true;
      },

      clickOutside() {
        this.dropdownIsVisible = false;
      }
    },
    directives: {
      'click-outside': {
        bind(el, binding, vNode) {
          // Provided expression must evaluate to a function.
          if (typeof binding.value !== 'function') {
            const compName = vNode.context.name;
            let warn = `[Vue-click-outside:] provided expression '${binding.expression}' is not a function, but has to be`;
            if (compName) { warn += `Found in component '${compName}'` }

            console.warn(warn);
          }
          // Define Handler and cache it on the element
          const bubble = binding.modifiers.bubble;
          const handler = (e) => {
            if (bubble || (!el.contains(e.target) && el !== e.target)) {
              binding.value(e)
            }
          };
          el.__vueClickOutside__ = handler;

          // add Event Listeners
          document.addEventListener('click', handler, true)
        },

        unbind(el, binding) {
          // Remove Event Listeners
          document.removeEventListener('click', el.__vueClickOutside__, true);
          el.__vueClickOutside__ = null

        }
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
      flex-wrap: wrap;
    }

    &__selected-filters {
      margin: 5px;
    }

    &__input {
      flex-grow: 1;
      height: 100%;
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
