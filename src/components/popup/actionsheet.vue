<template>
  <transition name="show-wrap">
    <popup @maskClick="maskClick" v-show="showPopup['actionsheet']">
      <transition name="show-actionsheet">
        <div class="and-actionsheet" v-show="showPopup['actionsheet']">
          <div class="main">
            <div class="item" v-for="item in list" :key="item.name" @click="callback(item)">
              {{item.name}}
            </div>
          </div>
          <div class="cancel" @click="hide">{{cancelText}}</div>
        </div>
      </transition>
    </popup>
  </transition>
</template>
<script>
import { mapGetters } from "vuex";
import Popup from "./index";
export default {
  name: "and-actionsheet",
  props: {
    maskHide: {
      type: Boolean,
      default: true
    },
    list: {
      type: Array,
      default: () => {
        return {};
      }
    },
    showCancel: {
      type: Boolean,
      default: true
    },
    cancelText: {
      type: String,
      default: "取消"
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
      if (this.showPopup["actionsheet"]) {
        return;
      }
      this.$store.dispatch("updatePopup", { actionsheet: true });
    },
    hide() {
      this.$store.dispatch("updatePopup", { actionsheet: false });
    },
    callback(item) {
      this.hide();
      item.method &&
        typeof item.method === "function" &&
        item.method.call(this.$parent);
    }
  }
};
</script>

<style lang="scss" scoped>
.and-actionsheet {
  background-color: #fff;
  transform: translate3d(0, 0, 0);
  .main {
    min-height: 50px;
    .item {
      position: relative;
      height: 50px;
      line-height: 50px;
      font-size: 14px;
      text-align: center;
    }

    .item + .item {
      @include mini-border(top);
    }
  }
  .cancel {
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    border-top: 5px solid #e6e5ea;
    text-align: center;
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

.show-actionsheet-enter-active,
.show-actionsheet-leave-active {
  transition: all 0.3s ease-in-out;
}
.show-actionsheet-enter,
.show-actionsheet-leave-active {
  transform: translate3d(0, 100%, 0);
  opacity: 0;
}
</style>
