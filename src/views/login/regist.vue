<template>
  <div>
    <t-navbar @click-right="submit">
      注册
    </t-navbar>
    <div>
       <t-input v-model="username" label="用户名" type="text" clearable />
       <t-input v-model="pwd" label="密码" type="password" clearable />
       <t-input v-model="password" label="确认密码" type="password" clearable />
    </div>
    <!-- <p style="font-size:0.24rem;color:red">目前未开放注册</p> -->
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
import { Message } from 'tdesign-mobile-vue';
import {regist_api} from '../../api';
import { useRouter } from 'vue-router';
export default {
  setup() {
    const router = useRouter();
    let state = reactive({
      username:'',
      pwd:'',
      password:''
    });

    let submit = async() =>{
      let {username,pwd,password} = state;
      if(!username || !pwd || !password){
        Message.error('还有未填写');
      } else {
        if (pwd != password) {
           Message.error('两次密码不一致');
        } else {
          let res = await regist_api({username,password});
          if (res.code == 1) {
             Message.success('注册成功');
              router.go(-1);
          } else {
             Message.error(res.msg);
          }
        }
      }
    }

    return {
      ...toRefs(state),
      submit
    }
  },
}
</script>