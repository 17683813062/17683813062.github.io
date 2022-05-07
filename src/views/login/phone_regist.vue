<template>
  <t-navbar @click-right="submit">
    手机号注册
  </t-navbar>

  <t-input v-model="phone" placeholder="请输入手机号码">
    <template #suffix>
      <t-button :disabled="count==60?false:true" @click="sendCode" variant="text">{{count==60?'发送验证码':count}}</t-button>
    </template>
  </t-input>
  <t-input v-model="code" label="验证码" placeholder="输入验证码">
    <!-- <template #suffix>
      <div>XYDZ</div>
    </template> -->
  </t-input>
  <t-input label="密码" v-model="password" placeholder="密码" />

  <t-button @click="goRegister()" size="large" theme="primary">注册</t-button>
</template>

<script>
import { reactive, toRefs } from 'vue';
import { useStore } from 'vuex';
import { onBeforeRouteLeave } from 'vue-router';
import axios from 'axios';
export default {
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.store.commit('changeFooter', false);
    })
  },
  setup() {
    let store = useStore();
    let state = reactive({
      store,
      timer: null,

      count: 60,

      phone: null,
      code: null,
      password: '',

      sendCode: null,
      flag:true,
    });

    let sendCode = () => { // 发送验证码
      if (state.count == 60 && state.flag) {
        state.flag = false;
        state.timer = setInterval(() => {
          state.count--;
          if (state.count == 0) {
            state.flag = true;
            state.count = 60;
            clearInterval(state.timer);
          }
        }, 1000);
        axios({
          url:'https://business.sms.musicwall.top/sms/send',
          method:'POST',
          phone:state.phone,
          secret:'57048cbf5a176cb559b725fd1f90862af04954447a3fa2e6cd2bae56534d0cbe',
          content:'【美团外卖】您的注册验证码为：'
        }).then(res=>{
          console.log(res, '验证码');
        })
      }
    }
    let goRegister = () => {
      let { phone, code, password } = state;
      console.log(phone, code, password);
    }
    onBeforeRouteLeave((to, from) => {
      store.commit('changeFooter', true);
    });
    return {
      ...toRefs(state),
      goRegister,
      sendCode
    }
  },
}
</script>