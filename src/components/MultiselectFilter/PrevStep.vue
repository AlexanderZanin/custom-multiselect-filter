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
    padding: 10px;

    &:before {
      content: '«';
    }

    &:hover {
      background-color: #faffb3;
    }

  }
</style>
