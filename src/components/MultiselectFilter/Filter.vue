<template>
  <div class="multiselect-filter-options">
    <slot name="prev-step"></slot>
    <h1>{{ selectedCategory.options.length }}</h1>
    <ul class="multiselect-filter-options__list">
      <li class="multiselect-filter-options__item" v-for="option in selectedCategory.options">
        <label class="multiselect-filter-options__label">
          <input type="checkbox"
                 v-model="option.selected"
                 :value="option.value"
                 @change="selectOption(option)">
          {{ option.label }}
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ['selectedCategory'],
    data () {
      return {

      }
    },
    methods: {
      selectOption(option) {
        option.selected = true;
        this.selectedCategory.selected.push(option.selected);
      }
    },
    beforeDestroy() {
      console.log('destroooy Filter');
    }
  }
</script>

<style lang="scss">
  .multiselect-filter-options {

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
