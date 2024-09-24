import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// qiankun
if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

let app = null;

function run(props) {
  console.log("props", props);

  const app = createApp(App);
  app.use(router);
  app.mount("#app");

  return app;
}

if (!window.__POWERED_BY_QIANKUN__) {
  app = run();
}

export function bootstrap() {
  return new Promise((resolve, reject) => {
    console.log("app bootstrap");
    resolve(null);
  });
}

export function mount(props) {
  return new Promise((resolve, reject) => {
    console.log("app mount");

    try {
      app = run(props);

      resolve(null);
    } catch (err) {
      reject(err);
    }
  });
}

export function unmount(props) {
  return new Promise(async (resolve, reject) => {
    console.log("app unmount");

    try {
      app.unmount();
      app = null;

      resolve(null);
    } catch (err) {
      reject(err);
    }
  });
}
