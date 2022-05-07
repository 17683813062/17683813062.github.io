<template>
  <t-navbar @click-right="submit">
    手机号登录
  </t-navbar>

  <t-input label="手机号" v-model="phone" placeholder="手机号" />
  <t-input label="密码" v-model="password" placeholder="密码" />

  <p @click="goPhoneRegister" style="color:green;font-size: 0.3rem;font-weight: bold;text-indent: 0.3rem;">手机号注册</p>
</template>

<script>
import { reactive, toRefs } from 'vue';
import { useStore } from 'vuex';
import { onBeforeRouteLeave, useRouter } from 'vue-router';
export default {
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.store.commit('changeFooter', false);
    })
  },
  setup() {
    let store = useStore();
    const router = useRouter();
    let state = reactive({
      store
    });

    let goPhoneRegister = () => {
      router.push({path:'/phone_regist'})
    }
    onBeforeRouteLeave((to, from) => {
      store.commit('changeFooter', true);
    });
    return {
      ...toRefs(state),
      goPhoneRegister
    }
  },
}
</script>