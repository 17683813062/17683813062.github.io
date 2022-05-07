<template>
  <div>
    <iframe class="iframe" :src="tmm" frameborder="0"></iframe>
  </div>
</template>
<script>
import { defineComponent, reactive, toRef, toRefs } from 'vue'
import { useStore } from 'vuex'
import { onBeforeRouteLeave } from 'vue-router';
import {tmm} from '../../config_url';
export default defineComponent({
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.store.commit('changeFooter', false);
    })
  },
  setup() {
    const store = useStore();
    const state = reactive({
      store: store,
      tmm
    });
    onBeforeRouteLeave((to, from) => {
      store.commit('changeFooter', true);
    });
    return {
      ...toRefs(state)
    }
  },
})
</script>

<style lang="scss" scoped>
.iframe{
  width: 100%;
  height: 100%;
  position: fixed;
  top:0;
  left:0;
}
</style>