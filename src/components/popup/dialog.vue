<template>
  <!-- 注意动画时长，子组件动画依赖于父组件，不是立刻消失 -->
  <transition name="show-wrap">
    <popup @maskClick="maskClick" position="center" v-show="showDialog">
      <transition name="show-dialog">
        <div class="and-dialog" v-if="showDialog">
          <div class="and-dialog-main">
            <p v-if="!hideTitle" class="main-title">{{title}}</p>
            <p class="main-content" :class="{'no-title': hideTitle}">{{content}}</p>
          </div>
          <div class="and-dialog-foot border-top flex">
            <div v-if="type == 'confirm'" class="dialog-button flex-1" @click="cancel">
              {{cancelText}}
            </div>
            <div class="dialog-button flex-1 button-confirm" @click="confirm">
              {{confirmText}}
            </div>
          </div>
        </div>
      </transition>
    </popup>
  </transition>
</template>
<script>
import Popup from "./index";
export default {
  name: "and-dialog",
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
      showDialog: false,
      type: "alert",
      hideTitle: false,
      title: "提示",
      cancelText: "取消",
      confirmText: "确认",
      content: ""
    };
  },
  methods: {
    maskClick() {
      this.maskHide && this.cancel();
    },
    open() {
      this.showDialog = true;
    },
    cancel() {
      this.showDialog = false;
    },
    confirm() {
      this.showDialog = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.and-dialog {
  width: 270px;
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
  &-main {
    .main-title {
      height: 45px;
      line-height: 45px;
      font-size: 14px;
      color: #666;
      text-align: center;
    }
    .main-content {
      padding: 10px 20px;
      min-height: 50px;
      text-align: center;
      font-size: 14px;
      &.no-title {
        padding-top: 30px;
      }
    }
  }
  &-foot {
    height: 45px;
    font-size: 13px;
    .dialog-button {
      position: relative;
      height: 45px;
      line-height: 45px;
      text-align: center;
      &.button-confirm {
        color: #308cf8;
      }
    }
    .dialog-button + .dialog-button {
      @include mini-border(left);
    }
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

.show-dialog-enter-active {
  animation: showDialog 0.6s ease-in-out;
}
.show-dialog-leave-active {
  animation: hideDialog 0.3s ease-in-out;
}

@keyframes showDialog {
  0% {
    transform: scale(0.75);
  }

  50% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes hideDialog {
  from {
    transform: scale(1);
  }

  to {
    transform: scale(0.8);
  }
}
</style>
