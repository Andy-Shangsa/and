<template>
  <div class="and-swiper-item" :style="style">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "and-swiper-item",
  data() {
    return {
      offset: 0
    };
  },
  computed: {
    style() {
      const { vertical, width, height } = this.$parent;
      return {
        width: width + "px",
        height: vertical ? height + "px" : "100%",
        transform: `translate${vertical ? "Y" : "X"}(${this.offset}px)`
      };
    }
  },
  beforeCreate() {
    this.$parent.swipes.push(this);
  },
  destroyed() {
    this.$parent.swipes.splice(this.$parent.swipes.indexOf(this), 1);
  }
};
</script>
<style lang="scss" scoped>
.and-swiper-item {
  float: left;
}
</style>
