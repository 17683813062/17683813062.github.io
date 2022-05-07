<template>
  <t-button style="float:right" @click="onLogin()" theme="primary" size="small">登录</t-button><br />
  <van-image round width="2rem" height="2rem" src="https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
  <p>&nbsp;&nbsp;&nbsp;&nbsp;{{user?(user.username?'登录成功！！！ 欢迎登录： '+ user.username:'用户名不存在'):' 未登录'}}</p>

  <div>
    <t-cell @click="goMapPage" note="仅可登录用户查看">
      <template #title>
        <span>附近的人</span>
      </template>
    </t-cell>
    <t-cell @click="goSpeakPage" note="有问题可以在这留言">
      <template #title>
        <span>留言</span>
      </template>
    </t-cell>
  </div>
</template>
<script>
import { defineComponent, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  setup() {
    const router = useRouter();
    let state = reactive({
      user: JSON.parse(localStorage.getItem('user'))
    })
    let goMapPage = () =>{ // 附近的人
      if (!state.user || !state.user.username) {
        return;
      }
      router.push({path:'/nearMan'})
    } 
    let goSpeakPage = () => { // 留言
      router.push({ path: '/leaveword' });
    }
    let onLogin = () => {
      router.push({ path: '/login' })
    }
    return {
      ...toRefs(state),
      onLogin,
      goSpeakPage,
      goMapPage
    }
  },
})
</script>
