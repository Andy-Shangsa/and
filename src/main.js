import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "lib-flexible/flexible.js";
// 引入公共组件
import SelfCom from "./components";
// 引入要全局挂载的公共组件
import Install from "./components/lib/install";
// 引入公共样式文件
import "./assets/css/public.scss";

Vue.use(SelfCom).use(Install);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
