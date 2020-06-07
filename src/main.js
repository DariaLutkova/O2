import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "ant-design-vue/dist/antd.css";
import "./styles/index.scss";

import { Button } from "ant-design-vue";
import { Input } from "ant-design-vue";
import { InputNumber } from "ant-design-vue";

Vue.use(Button);
Vue.use(Input);
Vue.use(InputNumber);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

// store.subscribe((mutation, state) => {
//   const types = [
//     "incrementCartItem",
//     "decrementCartItem",
//     "pushCartItem",
//     "removeCartItem"
//   ];
//   if (types.find(type => type === mutation.type)) {
//     console.log("save");
//     localStorage.cart = state.cartManager.cart;
//   }
// });
