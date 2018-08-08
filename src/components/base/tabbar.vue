<template>
  <div class="and-tabbar flex" :class="wrapCls">
    <div v-for="(tab, index) in tabs" :key="tab.label" @click="change(tab, index)" :class="{'active': innerValue === (tab.alias ? tab.alias : tab.label), 'flex-v': !inline, 'inline': inline}" class="and-tabbar-tab flex-1 flex flex-align-center flex-pack-center">
      <slot name="icon">
        <i v-if="tab.icon" class="icon" :class="tab.icon"></i>
      </slot>
      <slot>
        <p class="label">{{tab.label}}</p>
      </slot>
    </div>
    <div ref="slider" v-if="showSlider" class="and-tabbar-slider" :style="{'width': itemWidth + 'px'}"></div>
  </div>
</template>

<script>
export default {
  name: "and-tabbar",
  props: {
    value: [String, Number],
    tabs: {
      type: Array,
      default: () => {
        return [];
      }
    },
    showSlider: Boolean,
    inline: Boolean,
    position: {
      type: String,
      default: self
    }
  },
  data() {
    return {
      innerValue: this.value,
      itemWidth: 0
    };
  },
  computed: {
    wrapCls() {
      return {
        "fixed-bottom": this.position === "bottom",
        "fixed-top": this.position === "top",
        "border-top": this.position === "bottom",
        "border-bottom": this.position === "top"
      };
    }
  },
  created() {
    // this.innerValue = this.value;
    let winWidth = document.documentElement.clientWidth;
    let num = this.tabs.length;
    this.itemWidth = winWidth / num;
  },
  mounted() {
    this.$nextTick(() => {
      if (this.showSlider) {
        let index = 0;
        this.tabs.map((item, i) => {
          let _val = item.alias || item.label;
          if (_val == this.value) {
            index = i;
            return;
          }
        });
        this.$refs.slider.style.webkitTransform = `translate3d(${index *
          this.itemWidth}px, 0, 0)`;
      }
    });
  },
  methods: {
    change(tab, index) {
      this.innerValue = tab.alias || tab.label;
      this.$emit("input", this.innerValue);
      this.$emit("change");
      if (this.showSlider) {
        this.$refs.slider.style.webkitTransform = `translate3d(${index *
          this.itemWidth}px, 0, 0)`;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.and-tabbar {
  position: relative;
  height: 50px;
  background-color: #fff;
  &.fixed-bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99;
  }
  &.fixed-top {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
  }
  &-tab {
    height: 50px;
    font-size: 12px;
    &.inline {
      .label {
        margin-left: 5px;
      }
    }
    &.active {
      color: #ff511a;
    }
    .icon {
      font-size: 18px;
    }

    .label {
      vertical-align: middle;
    }
  }
  &-slider {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    min-width: 20px;
    transition: transform 0.3s;
    &::after {
      content: "\a0";
      position: absolute;
      left: 50%;
      bottom: 0;
      height: 100%;
      background-color: #ff511a;
      width: 45px;
      transform: translate3d(-50%, 0, 0);
    }
  }
}
</style>
