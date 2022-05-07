<template>
  <t-navbar>
    知识清单
  </t-navbar>
  <t-fab @click="add()" class="demo-fab-button"></t-fab>
  <t-pull-down-refresh v-model="refreshing" @refresh="onRefresh">
    <t-list :async-loading="pullloading" @scroll="(e) => onScroll(e, 2)">
      <t-swipe-cell v-for="(item,index) in list" :key="index">
        <t-cell @click="goDetail(item._id)" align="top">
          <template #title>
            {{item.title}}
          </template>
          <template #description>
            创建人：{{item.creator.name}} &nbsp;&nbsp;
            时间：{{getTime(item.timestamp)}}
          </template>
        </t-cell>
        <template #right>
          <t-button theme="danger" shape="square" @click="removeStudy(item._id)">删除</t-button>
        </template>
      </t-swipe-cell>
    </t-list>
  </t-pull-down-refresh>
</template>
<script>
import { defineComponent, onMounted, reactive, toRefs } from 'vue';
import { onBeforeRouteLeave, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { getStudy, removeStudy_api } from '../../api'
export default defineComponent({
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.store.commit('changeFooter', false);
    })
  },
  setup() {
    let store = useStore();
    const router = useRouter();
    let state = reactive({
      store:store,
      list: [],
      refreshing: false,
      loading: false
    })
    let goDetail = (_id) => {
      router.push({ path: '/studydetail', query: { _id: _id } });
    }
    let add = () => {
      router.push({ path: '/studyAdd' })
    }
    onMounted(() => {
      getStudyFunc();
    })
    const getTime = (time) => {
      let date = new Date(time * 1);
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      let hour = date.getHours();
      let minute = date.getMinutes();
      let second = date.getSeconds();
      console.log(year, month);
      month = month < 10 ? '0' + month : month;
      day = day < 10 ? '0' + day : day;
      hour = hour < 10 ? '0' + hour : hour;
      minute = minute < 10 ? '0' + minute : minute;
      second = second < 10 ? '0' + second : second;
      return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
    }
    const onRefresh = () => { // 下拉刷新
      state.refreshing = true;
      onLoad(true);
    };
    const onLoad = (isRefresh) => {
      state.loading = true;
      getStudyFunc();
      setTimeout(() => {
        state.loading = false;
        state.refreshing = false;
      }, 800)
    };
    let getStudyFunc = async () => {
      let res = await getStudy();
      state.list = res.result;
    }
    let removeStudy = async(_id) => {
      let res = await removeStudy_api({_id});
      console.log(res, '删除');
      getStudyFunc();
    }
    onBeforeRouteLeave((to, from) => {
      store.commit('changeFooter', true);
    });
    return {
      ...toRefs(state),
      add,
      onRefresh,
      getTime,
      removeStudy,
      goDetail
    }
  },
})
</script>
<style lang="scss" scoped>
.demo-fab-button {
  position: fixed;
  right: 0.1rem;
  top: 70%;
  z-index: 10;
}
</style>
