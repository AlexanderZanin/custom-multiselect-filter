<template>
  <div class="multiselect-filter-options">
    <slot name="prev-step"></slot>
    <h1>{{ selectedCategory.options.length }}</h1>
    <ul class="multiselect-filter-options__list">
      <li class="multiselect-filter-options__item" v-for="option in selectedCategory.options">
        <label class="multiselect-filter-options__label">
          <input type="checkbox"
                 :value="option.value" @change="selectOption(option)">
          {{ option.label }}
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    props: ['selectedCategory'],
    data () {
      return {
        selected: this.selectedCategory.selected
      }
    },
    methods: {
      selectOption(option) {
        console.log(option);
      }
    },
    beforeDestroy() {
      console.log('destroooy Filter');
//      axios.put('http://localhost:3000/DS_SourceName', {'test': {}});
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
