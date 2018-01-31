<template>
  <div class="multiselect-filter-options">
    <slot name="prev-step"></slot>
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
    <ul class="multiselect-filter-options__list">
      <li class="multiselect-filter-options__item"
          v-for="(option, index) in selectedCategory.options"
          :key="index">
        <label class="multiselect-filter-options__label">
          <input type="checkbox"
                 :checked="isChecked(option)"
                 :value="option.value"
                 @change="selectOption(option)">
          {{ option.label }}
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
  import { indexOfSelected } from '../../helpers/helpers';


  export default {
    props: ['selectedCategory'],
    data () {
      return {

      }
    },
    methods: {
      isChecked(option) {
        return this.findIndex(option) + 1;
      },

      selectOption(option) {
        const index = this.findIndex(option);

        if (index + 1) {
          this.selectedCategory.selected.splice(index, 1);
          return;
        }

        this.selectedCategory.selected.push(option);
      },

      findIndex(option) {
        return indexOfSelected(this.selectedCategory, option);
      }
    }
  }
</script>

<style lang="scss">
  .multiselect-filter-options {

    &__info {
      padding: 10px;
    }

    &__info-block:not(:last-child) {
      &:after {
        content: ';';
      }
    }

    &__label {
      display: block;
      padding: 10px;
      cursor: pointer;

      &:hover {
        background-color: #a2dac1;
      }
    }
  }
</style>
