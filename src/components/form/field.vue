<template>
    <div class="and-field">
        <input :type="type">
    </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: "text"
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
