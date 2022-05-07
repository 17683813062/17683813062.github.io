<template>
  <div class="detail">
    <t-navbar>
      {{obj.title}}
    </t-navbar>
    <t-loading :loading="loadFlag" theme="spinner" text="加载中..." />
    <div class="domHtml" v-html="obj.html">

    </div>
  </div>
</template>
<script>
import { findStudy } from "../../api";
import { onMounted, reactive, toRefs } from 'vue';
import {onBeforeRouteLeave, useRoute } from 'vue-router';
import { useStore } from 'vuex';
export default {
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.store.commit('changeFooter', false);
    })
  },
  setup() {
    let store = useStore();
    let route = useRoute();
    let state = reactive({
      store: store,
      obj: {},
      loadFlag: true
    });
    onMounted(() => {
      findStudyFunc();
    })
    let findStudyFunc = async () => {
      let r1 = await findStudy({ _id: route.query._id });
      state.obj = r1.result[0];
      state.loadFlag = false;
      console.log(r1, '请求');
    }
    onBeforeRouteLeave((to, from) => {
      store.commit('changeFooter', true);
    });
    return {
      ...toRefs(state)
    }
  },
}
</script>

<style lang="scss" scoped>
.detail {
  .domHtml {
    width: 96%;
    margin: auto;
    word-wrap: break-word;
    white-space: pre-wrap;
  }
}
</style>