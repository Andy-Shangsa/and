<template>
  <transition name="show-wrap">
    <popup @maskClick="maskClick" position="center" v-show="showToast" :showMask="false">
      <transition name="show-toast">
        <div v-if="showToast" :class="wrapCls" class="and-toast box flex flex-v flex-align-center flex-pack-justify">
          <template v-if="icon && icon != 'none'">
            <template v-if="icon == 'loading'">
              <img v-if="type == 'white'" src="../../assets/fonts/loading.svg" fill="white" width="32" height="32" />
              <img v-else src="../../assets/fonts/loading-white.svg" fill="white" width="32" height="32" />
            </template>
            <i v-else :class="iconCls"></i>
          </template>
          <p class="content">{{content}}</p>
        </div>
      </transition>
    </popup>
  </transition>
</template>
<script>
import Popup from "./index";
export default {
  name: "and-toast",
  props: {
    maskHide: {
      type: Boolean,
      default: false
    }
  },
  components: {
    popup: Popup
  },
  data() {
    return {
      showToast: false,
      content: "",
      icon: "none",
      type: "black"
    };
  },
  computed: {
    iconCls() {
      if (!this.icon || (this.icon && this.icon === "none")) {
        return "";
      }
      let map = {
        loading: "iconfont icon-loading",
        success: "iconfont icon-is-right",
        warn: "iconfont icon-warn",
        error: "iconfont icon-close"
      };
      return map[this.icon];
    },
    wrapCls() {
      return {
        white: this.type == "white",
        black: this.type == "black",
        "has-icon": this.icon && this.icon != "none",
        "no-icon": !this.icon || (this.icon && this.icon === "none")
      };
    }
  },
  methods: {
    maskClick() {
      this.maskHide && this.cancel();
    },
    open() {
      if (this.showToast) {
        return;
      }
      this.showToast = true;
    },
    hide() {
      this.showToast = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.and-toast {
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.1);
  &.white {
    background-color: #fff;
    color: #ff942f;
  }
  &.black {
    background-color: rgba(37, 38, 45, 0.9);
    color: #fff;
  }
  &.has-icon {
    padding: 20px 10px;
    height: 110px;
    width: 130px;
  }
  &.no-icon {
    padding: 0 15px;
    height: 40px;
    line-height: 40px;
    max-width: 300px;
    min-width: 130px;
  }
  i {
    font-size: 28px;
    &.loading {
      animation: loading 2s ease-in infinite;
    }
  }
  .content {
    font-size: 15px;
    text-align: center;
    white-space: nowrap;
  }
}

.show-wrap-enter-active,
.show-wrap-leave-active {
  transition: all 0.3s ease-in-out;
}
.show-wrap-enter,
.show-wrap-leave-active {
  opacity: 0;
}

.show-toast-enter-active {
  animation: showToast 0.6s ease-in-out;
}
.show-toast-leave-active {
  animation: hideToast 0.3s ease-in-out;
}

@keyframes loading {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes showToast {
  0% {
    transform: scale(0.6);
  }

  50% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes hideToast {
  from {
    transform: scale(1);
  }

  to {
    transform: scale(0.6);
  }
}
</style>
