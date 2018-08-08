import AndTabbar from "./base/tabbar.vue";
import AndCell from "./base/cell.vue";
import AndSwiper from "./base/swiper.vue";
import AndSwiperitem from "./base/swiper-item.vue";
import AndPicker from "./popup/picker.vue";
import AndActionsheet from "./popup/actionsheet.vue";
import AndField from "./form/field";
const components = {
  install: function(Vue) {
    Vue.component("and-tabbar", AndTabbar);
    Vue.component("and-cell", AndCell);
    Vue.component("and-swiper", AndSwiper);
    Vue.component("and-swiper-item", AndSwiperitem);
    Vue.component("and-picker", AndPicker);
    Vue.component("and-actionsheet", AndActionsheet);
    Vue.component("and-field", AndField);
  }
};
export default components;
