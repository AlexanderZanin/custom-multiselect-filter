<!--<template>
  <div class="multiselect-filter-category" @click="selectCategory">
    {{ category.name }}
    <b v-if="category.selected.length"
       class="multiselect-filter-category__selected-count">
      ({{ category.selected.length }})
    </b>
  </div>
</template>-->

<script>
  export default {
    render(createElement) {
      let selectedCount;

      if (this.category.selected.length) {
        selectedCount = createElement('b', {
          'class': 'multiselect-filter-category__selected-count',
          domProps: {
            innerHTML: ` (${this.category.selected.length})`
          },
        })
      }

      return createElement(this.tag || 'div' ,{
        content: this.category.name,
        'class': 'multiselect-filter-category',
        on: {
          click: this.selectCategory
        }
      }, [ this.category.name, selectedCount])
    },
    props: ['category', 'tag'],
    methods: {
      selectCategory() {
        this.$emit('categoryWasClicked', this.category);
      }
    },
  }
</script>

<style lang="scss">
  .multiselect-filter-category {
    padding: 10px;
    cursor: pointer;

    &:before {
      content: '»';
    }

    &:hover {
      background-color: transparentize(#000, .97);
    }
  }
</style>
