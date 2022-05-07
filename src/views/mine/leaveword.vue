<template>
  <div class="leaveWord">
    <t-navbar @click-right="submit">
      留言
    </t-navbar>
    <div class="item">
      <p>1. 请输入您的姓名</p>
      <t-textarea v-model="name" maxlength="15" style="height:1rem">请输入姓名</t-textarea>
    </div>
    <div class="item">
      <p>2. 请输入您的微信号</p>
      <t-textarea v-model="wxphone" maxlength="20" style="height:1rem">请输入微信号</t-textarea>
    </div>
    <div class="item">
      <p>2. 请输入您的留言内容</p>
      <t-textarea v-model="content" maxlength="500" autosize>请输入留言内容</t-textarea>
    </div>
    <t-button @click="submit" style="float: right;margin-top:0.3rem;" theme="primary" size="small">提交</t-button>
  </div>
</template>
<script>
import { reactive, toRefs } from 'vue';
import { useStore } from 'vuex';
import { onBeforeRouteLeave } from 'vue-router';
import { leaveword_api } from '../../api';
import { Message } from 'tdesign-mobile-vue';
export default {
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.store.commit('changeFooter', false);
    })
  },
  setup() {
    let store = useStore();
    let state = reactive({
      store: store,
      name: '',
      wxphone: '',
      content: ''
    });
    let getToday = () => {
      let myDate = new Date();
      let year = myDate.getFullYear();
      let month = myDate.getMonth() + 1;
      if (Number(month) < 10) {
        month = '0' + month;
      }
      var date = myDate.getDate()
      if (Number(date) < 10) {
        date = '0' + date;
      }
      return year + '-' + month + '-' + date
    }
    let submit = async () => { // 留言
      let { name, wxphone, content } = state;
      let params = {
        name,
        wxphone,
        content,
        time: getToday()
      }
      let res = await leaveword_api(params);
      if (res.code == 1) {
        Message.success(res.msg);
        state.name = '';
        state.wxphone = '';
        state.content = '';
      } else {
        Message.error(res.msg);
      }
    }
    onBeforeRouteLeave((to, from) => {
      store.commit('changeFooter', true);
    });
    return {
      ...toRefs(state),
      submit
    }
  },
}
</script>
<style lang="scss" scoped>
.leaveWord {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #f6f6f6;
  padding: 0.1rem 0.2rem;
  box-sizing: border-box;
  .item {
  }
}
</style>