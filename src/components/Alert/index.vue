<template>
  <div class="alert">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Alert",
};
</script>

<style lang="scss" scoped>
@import "./styles/alert";
</style>
