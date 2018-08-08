<template>
  <!-- 注意动画时长，子组件动画依赖于父组件不是立刻消失 -->
  <transition name="show-wrap">
    <popup @maskClick="maskClick" v-show="showPopup['picker']">
      <transition name="show-picker">
        <div class="and-picker" v-show="showPopup['picker']">
          666
        </div>
      </transition>
    </popup>
  </transition>
</template>
<script>
import { mapGetters } from "vuex";
import Popup from "./index";
export default {
  name: "and-picker",
  props: {
    maskHide: {
      type: Boolean,
      default: true
    }
  },
  components: {
    popup: Popup
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["showPopup"])
  },
  methods: {
    maskClick() {
      this.maskHide && this.hide();
    },
    show() {
      if (this.showPopup["picker"]) {
        return;
      }
      this.$store.dispatch("updatePopup", { picker: true });
    },
    hide() {
      this.$store.dispatch("updatePopup", { picker: false });
    }
  }
};
</script>

<style lang="scss" scoped>
.and-picker {
  height: 300px;
  background-color: #fff;
  transform: translate3d(0, 0, 0);
}

.show-wrap-enter-active,
.show-wrap-leave-active {
  transition: all 0.3s ease-in-out;
}
.show-wrap-enter,
.show-wrap-leave-active {
  opacity: 0;
}

.show-picker-enter-active,
.show-picker-leave-active {
  transition: all 0.3s ease-in-out;
}
.show-picker-enter,
.show-picker-leave-active {
  transform: translate3d(0, 100%, 0);
  opacity: 0;
}
</style>
