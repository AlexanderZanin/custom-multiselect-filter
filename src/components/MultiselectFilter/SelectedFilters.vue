<template>
  <div class="selected-filters">
    <span class="selected-filters__category">
      {{ selectedCategory.name }}:
    </span>
    <b class="selected-filters__count">
      {{ selectedCategory.selected.length }} selected
    </b>
    <button class="selected-filters__remove" @click.prevent="clearSelection">
      x
    </button>
  </div>
</template>

<script>
  export default {
    props: ['selectedCategory'],
    methods: {
      clearSelection() {
        this.$emit('selectionWasCleared', this.selectedCategory);
      }
    }
  }
</script>

<style lang="scss">
  .selected-filters {
    font-size: 14px;
    color: #fff;
    display: flex;
    align-items: center;
    background-color: #47b784;
    border-radius: 5px;
    padding-left: 5px;
    overflow: hidden;

    &__count {
      white-space: nowrap;
      margin-left: 3px;
    }

    &__remove {
      font-family: Helvetica, sans-serif;
      border: none;
      margin-left: 5px;
      cursor: pointer;
      padding: 8px;
      background-color: #299d68;
      font-weight: 700;
      color: transparentize(#000, .6);

      &:hover {
        background-color: darken(#299d68, 5%);
      }

      &:active {
        background-color: #299d68;
      }
    }
  }
</style>
