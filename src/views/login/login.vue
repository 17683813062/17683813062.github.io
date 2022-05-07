<template>
  <div>
    <t-navbar @click-right="submit">
      登录
    </t-navbar>
    <div>
       <t-input v-model="username" label="用户名" type="text" clearable />
       <t-input v-model="password" label="密码" type="password" clearable />
    </div>
    <!-- <p style="font-size:0.24rem;color:red">目前未开放注册</p> -->
    <p @click="goRegister" style="color:green;font-size: 0.3rem;font-weight: bold;text-indent: 0.3rem;">去注册</p>
    <p @click="goPhoneRegister" style="color:green;font-size: 0.3rem;font-weight: bold;text-indent: 0.3rem;">手机号登录</p>
    <t-button @click="submit" theme="primary" size="large">登录</t-button>
  </div>
</template>
<script>
import { reactive, toRefs } from 'vue';
import { useStore } from 'vuex';
import { onBeforeRouteLeave, useRouter } from 'vue-router';
import { Message } from 'tdesign-mobile-vue';
import {login_api} from '../../api';
export default {
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.store.commit('changeFooter', false);
    })
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    let state = reactive({
      store: store,
      username: '',
      password: ''
    })
    let goPhoneRegister = () => {
      router.push({path:'/phone_login'})
    }
    let goRegister = () =>{ // 注册
      router.push({path:'/regist'});
    }
    let submit = async() => {
      if (!state.username || !state.password ) {
        Message.error('用户名或密码错误');
      } else {
        let params = {
          username:state.username,
          password:state.password
        }
        let res = await login_api(params);
        Message.success('登录成功');
        if (res.code == 1) {
          router.push({path:'/home'});
          localStorage.setItem('user',JSON.stringify(res.result[0]));
        } else {
          Message.error(res.msg);
        }
      }
    } 

    onBeforeRouteLeave((to, from) => {
      store.commit('changeFooter', true);
    });
    return {
      ...toRefs(state),
      submit,
      goRegister,
      goPhoneRegister
    }
  },
}
</script>