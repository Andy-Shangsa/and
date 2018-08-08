<template>
  <div class="home">
    <and-tabbar v-model="value" position="top" :tabs="topTabs" showSlider></and-tabbar>
    <and-tabbar v-model="select" position="bottom" :tabs="tabs"></and-tabbar>
    <and-swiper  :autoplay="3000">
      <and-swiper-item>1</and-swiper-item>
      <and-swiper-item>2</and-swiper-item>
      <and-swiper-item>3</and-swiper-item>
    </and-swiper>
    <and-cell title="主题" label="副主题" value="值" desc="描述" is-link>
      <img slot="icon" src="../assets/imgs/logo.png">
    </and-cell>
    <and-cell icon="iconfont icon-home" title="打开picker" @click.native="openPopup" is-link>
    </and-cell>
    <and-cell icon="iconfont icon-home" title="打开dialog" @click.native="openDialog" is-link>
    </and-cell>
    <and-cell icon="iconfont icon-home" title="打开toast" @click.native="openToast" is-link>
    </and-cell>
    <and-cell icon="iconfont icon-home" title="打开actionsheet" @click.native="openSheet" is-link>
    </and-cell>
    <and-picker ref="picker"></and-picker>
    <and-actionsheet ref="actionsheet" :list="list"></and-actionsheet>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      logo: "logos",
      value: "women",
      select: "home",
      topTabs: [
        {
          label: "男装",
          alias: "men"
        },
        {
          label: "女装",
          alias: "women"
        },
        {
          label: "童装",
          alias: "child"
        }
      ],
      tabs: [
        {
          label: "首页",
          alias: "home",
          icon: "iconfont icon-home"
        },
        {
          label: "组件",
          alias: "component",
          icon: "iconfont icon-module"
        },
        {
          label: "个人中心",
          alias: "my",
          icon: "iconfont icon-my"
        }
      ],
      list: [
        {
          name: "选项一",
          method: () => {
            this.$toast.show("点击了选项一");
          }
        },
        {
          name: "选项二",
          method: () => {
            this.$toast.show("点击了选项二");
          }
        }
      ]
    };
  },
  methods: {
    openDialog() {
      this.$dialog({
        type: "alert",
        content: "确认执行该操作？"
      }).then(
        res => {
          console.log("你点击了确认");
        },
        err => {
          console.log("你点击了取消");
        }
      );
    },
    openToast() {
      this.$toast.show("请输入正确的手机号");
    },
    openPopup() {
      this.$refs.picker.show();
    },
    openSheet() {
      this.$refs.actionsheet.show();
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  padding: 50px 0;

  .cell-img {
    height: 200px;
    width: 200px;
    background-image: url("../assets/imgs/logo.png");
  }
}
</style>
