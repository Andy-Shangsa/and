import Dialog from "../popup/dialog.vue";
import Toast from "../popup/toast.vue";
export default {
  install(Vue) {
    // 注入dialog
    let dialog = Vue.extend(Dialog);
    let $dialog = new dialog();
    document.body.appendChild($dialog.$mount().$el);

    // 注入toast
    let toast = Vue.extend(Toast);
    let $toast = new toast();
    document.body.appendChild($toast.$mount().$el);

    // 打开dialog组件
    Vue.prototype.$dialog = model => {
      $dialog.type = model.type || "alert";
      $dialog.hideTitle = !!model.hideTitle;
      $dialog.content = model.content || "";
      return new Promise((resolve, reject) => {
        $dialog.open();
        let confirm = $dialog.confirm;
        let cancel = $dialog.cancel;
        // event
        $dialog.confirm = () => {
          confirm();
          resolve();
        };
        $dialog.cancel = () => {
          cancel();
          reject();
        };
      });
    };

    // 打开toast组件
    Vue.prototype.$toast = {
      show: (model = {}) => {
        if (typeof model == "string" || typeof model == "number") {
          model = { content: model };
        }
        $toast.type = model.type || "black";
        $toast.icon = model.icon || "none";
        $toast.content = model.content || "加载中...";
        let during = model.during == 0 || model.during ? model.during : "1500";
        return new Promise((resolve, reject) => {
          $toast.open();
          if (isNaN(Number(during)) || Number(during) <= 0) {
            console.log("during为0");
            return;
          }
          setTimeout(() => {
            $toast.hide();
            resolve();
          }, during);
        });
      },
      hide: () => {
        $toast.hide();
      }
    };

    /**
     * end
     */
  }
};
