<template>
  <div class="and-cell flex box">
    <div class="and-cell-main flex flex-align-center" :class="{'flex-1': main === 'left'}">
      <slot name="icon">
        <!-- 可以加入icon图标或者slot插入图片 -->
        <i v-if="icon" class="icon" :class="icon"></i>
      </slot>
      <div class="main-wrap flex-1 flex flex-v flex-pack-center">
        <slot>
          <p v-if="title" class="cell-title">{{title}}</p>
        </slot>
        <slot name="label">
          <p v-if="label" class="cell-label">{{label}}</p>
        </slot>
      </div>
    </div>
    <div class="and-cell-right flex flex-align-center" :class="{'flex-1': main === 'right'}">
      <div class="right-wrap flex-1 flex flex-v flex-pack-center">
        <slot name="value">
          <p v-if="value" class="cell-value">{{value}}</p>
        </slot>
        <slot name="desc">
          <p v-if="desc" class="cell-desc">{{desc}}</p>
        </slot>
      </div>
      <i v-if="isLink" class="iconfont icon-arrow"></i>
    </div>
  </div>
</template>

<script>
/**
 * 说明：对于图片静态资源处理可以自定义插槽，或者class放背景图片动态引入class（注意scope）
 * @props ['main'] 设置当前左边还是右边是主要显示区域
 * @props ['is-link'] 设置是否显示箭头
 */
export default {
  name: "and-cell",
  props: {
    title: [String, Number],
    label: [String, Number],
    value: [String, Number],
    desc: [String, Number],
    icon: String,
    main: {
      type: String,
      default: "left"
    },
    "is-link": Boolean
  }
};
</script>

<style lang="scss" scoped>
.and-cell {
  position: relative;
  padding: 10px 25px;
  min-height: 48px;
  background-color: #fff;
  height: auto;

  & + & {
    @include mini-border(top);
    &::before {
      left: 25px;
    }
  }
  &-main {
    img {
      width: 32px;
      height: 32px;
    }
    .icon {
      font-size: 24px;
    }
    & > :first-child + .main-wrap {
      margin-left: 15px;
    }
    .main-wrap {
      .cell-title {
        font-size: 15px;
        color: #333;
      }
      .cell-label {
        font-size: 13px;
        color: #333;
      }
      .cell-title + .cell-label {
        margin-top: 6px;
      }
    }
  }
  &-right {
    .right-wrap {
      .cell-value {
        text-align: right;
        font-size: 15px;
        color: #999;
      }
      .cell-desc {
        text-align: right;
        font-size: 13px;
        color: #999;
      }
      .cell-value + .cell-desc {
        margin-top: 6px;
      }
    }

    .right-wrap + i {
      margin-left: 10px;
    }
  }
}
</style>
