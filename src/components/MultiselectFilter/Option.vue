<template>
  <div class="multiselect-filter-option">
    <label class="multiselect-filter-option__label">
      <input class="multiselect-filter-option__input"
             type="checkbox"
             :checked="isChecked(option)"
             :value="option.value"
             @change="toggleOption(option)">
      <template  v-if="option.label">
        {{ option.label }}
      </template>
      <template v-else>
        {{ option }}
      </template>

    </label>
  </div>
</template>

<script>
  import { indexOfSelected } from '../../helpers/helpers';

  export default {
    props: ['option', 'selectedCategory'],
    methods: {
      isChecked(option) {
        return this.findIndex(option) + 1;
      },

      toggleOption(option) {
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
  .multiselect-filter-option {
    &--with-indent {
      .multiselect-filter-option__label {
        padding-left: 40px;
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
