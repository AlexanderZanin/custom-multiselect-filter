<template>
  <div class="multiselect-filter-options">
    <slot name="prev-step"></slot>
    <div class="multiselect-filter-options__tools">
      <div class="multiselect-filter-options__info">
        <span class="multiselect-filter-options__info-block">
          Filter:
          <b class="multiselect-filter-options__higligted">{{ selectedCategory.name }}</b>
        </span>
        <span class="multiselect-filter-options__info-block">
          Selected:
          <b class="multiselect-filter-options__higligted">{{ selectedCategory.selected.length }}</b>
        </span>
      </div>
      <div class="multiselect-filter-options__buttons">
        <button class="multiselect-filter-options__btn" @click="selectAll">
          ☑ All
        </button>
        <button class="multiselect-filter-options__btn" @click="deselectAll">
          □ None
        </button>
      </div>
    </div>
    <div class="multiselect-filter-options__list">
      <app-option v-for="(option, index) in selectedCategory.options"
                  :key="index"
                  :option="option"
                  :selected-category="selectedCategory"></app-option>
    </div>
  </div>
</template>

<script>
  import { indexOfSelected } from '../../helpers/helpers';
  import Option from './Option.vue';


  export default {
    props: ['selectedCategory'],
    components: {
      appOption: Option
    },
    methods: {
      selectAll() {
        this.selectedCategory.selected = this.selectedCategory.options.slice();
      },

      deselectAll() {
        this.selectedCategory.selected = [];
      }
    }
  }
</script>

<style lang="scss">
  .multiselect-filter-options {

    &__tools {
      padding: 10px;
    }

    &__info {
      padding: 10px;
    }

    &__info-block:not(:last-child) {
      &:after {
        content: ';';
      }
    }

    &__btn {
      border: none;
      border-radius: 5px;
      font-size: 14px;
      color: #fff;
      padding: 10px 20px;
      min-width: 100px;
      background-color: #609ee9;

      & + & {
        margin-left: 10px;
      }

      &:hover {
        background-color: darken(#609ee9, 10%);
      }

      &:active {
        background-color: #609ee9;
      }
    }
  }
</style>
