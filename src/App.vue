<template>
  <ul v-show="store.state.footer" id="footer">
    <li v-for="(item,index) in routeList" :key="index">
      <router-link v-if="user?(user.username == item.role?true:(item.role=='all'?true:false)):(item.role=='all'?true:false)" :to="item.path">{{item.text}}</router-link>
    </li>
    <!-- v-if="user.username == item.role?true:(item.role=='all'?true:false)" -->
  </ul>
  <router-view></router-view>
</template>
<script setup>
import { onMounted, reactive, ref } from 'vue';
import { useStore } from 'vuex';
let store = useStore();
let routeList = ref([{text:'首页',path:'/home',role:'all'},{text:'网盘',path:'/wp',role:'all'}, 
{text:'疫情',path:'/hospital_list',role:'all'},
{text:'我的',path:'/mine',role:'all'},
{text:'字典表', path:'/diction_list',role:'111'}, {text:'留言列表', path:'/leaveList',role:'111'}]);
let user = reactive(JSON.parse(localStorage.getItem('user')));
onMounted(() => {
  console.log(store.state.footer, routeList);
  // localStorage.setItem('user','{}')
})

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 0.26rem;
}
#footer {
  width: 100%;
  margin: 0;
  padding: 0;
  position: fixed;
  bottom: 0.1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  background-color: #f7f7f7;
  z-index: 10;
  li {
    list-style: none;
    flex: 1;
    text-align: center;
    height: 0.8rem;
    a {
      text-decoration: none;
      color: initial;
      display: inline-block;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.28rem;
    }
    .router-link-active {
      color: red;
    }
  }
}
</style>
