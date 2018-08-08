<template>
  <div class="and-popup" :style="{'z-index': zIndex}">
    <div class="and-popup-mask" @click="maskClick" :class="{'mask': showMask}">
      <!-- 可自定义蒙层样式，如图片背景 -->
      <slot name="mask"></slot>
    </div>
    <div class="and-popup-wrap" :class="wrapCls" :style="{'z-index': zIndex + 1}">
      <div class="content" v-if="$slots.default">
        <slot></slot>
      </div>
      <div class="default" v-else v-html="content"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "and-popup",
  props: {
    zIndex: {
      type: [String, Number],
      default: 100
    },
    position: {
      type: String,
      default: "bottom"
    },
    showMask: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    wrapCls() {
      // slot内容位置
      return {
        center: this.position === "center",
        bottom: this.position === "bottom",
        left: this.position === "left",
        top: this.position === "top"
      };
    }
  },
  methods: {
    // 点击蒙层
    maskClick() {
      this.$emit("maskClick");
    }
  }
};
</script>
<style lang="scss" scoped>
.and-popup {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  &-mask {
    position: absolute;
    width: 100%;
    height: 100%;
    &.mask {
      background-color: $mask-bg;
    }
  }
  &-wrap {
    &.center {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
    }
    &.top {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
    }
    &.bottom {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
}
</style>
