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
      selectOption(option) {
        if (option.selected) {
          option.selected = true;
          this.selectedCategory.selected.push(option);
          console.log('indexOf', this.selectedCategory.selected.indexOf(option));
        } else {
          option.selected = false;
          console.log('indexOf', this.selectedCategory.selected.indexOf(option));
        }

        indexOfSelected(this.selectedCategory);
//        option.selected = option.selected;
//        option.selected = true;
//        this.selectedCategory.selected.push(option.selected);
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
