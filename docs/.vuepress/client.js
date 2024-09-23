import { onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import {addLabelImg} from "./utils/client.js"
export default {
  setup() {
    const router = useRouter();

    // 页面初次加载时执行的逻辑
    onMounted(() => {
      setTimeout(()=>{
        addLabelImg()
      },0)
    });

    // 路由跳转时执行的逻辑
    watch(
      () => router.currentRoute.value,
      (to, from) => {
        setTimeout(()=>{
          addLabelImg()
        },0)
      }
    );

  }
};
