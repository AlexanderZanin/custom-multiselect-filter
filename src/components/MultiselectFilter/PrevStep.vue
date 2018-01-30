<template>
  <div class="prev-step" @click="prevStep">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    methods: {
      prevStep() {
        this.$emit('backToPrevStep');
      }
    }
  }
</script>

<style lang="scss">
  .prev-step {
    cursor: pointer;

    &:before {
      content: '«';
    }

  }
</style>
