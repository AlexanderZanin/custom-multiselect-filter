<template>
  <div class="multiselect-filter-category" @click="selectCategory">
    {{ category.name }}
    <b v-if="category.selected.length"
       class="multiselect-filter-category__selected-count">
      ({{ category.selected.length }})
    </b>
  </div>
</template>

<script>
  export default {
//    render(h) {
//      return h(this.tag || 'div' ,{
//        domProps: {
//          innerHTML: (function () {
//            let selectedLength = this.category.selected.length;
//            let count = selectedLength ? `(${selectedLength})` : '';
//
//            return this.category.name + count
//          }.bind(this)())
//        },
//        content: this.category.name,
//        'class': 'multiselect-filter-category',
//        on: {
//          click: this.selectCategory
//        }
//      }, [
//        h('b', {
//          domProps: {
//            innerHTML: this.category.selected.length
//          },
//        })
//      ])
//    },
    props: ['category'],
    data () {
      return {

      }
    },
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
