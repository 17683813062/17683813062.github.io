<template>
  <div v-html="htmlData" class="main">

  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue'
import { useRoute } from 'vue-router'
export default {
  setup() {
    const route = useRoute();
    let state = reactive({
      htmlData:''
    })
    onMounted(()=>{
      state.htmlData = route.params.html;
      console.log(route.params)
    })

    return {
      ...toRefs(state)
    }
  },
}
</script>

<style lang="scss" scoped>
.main{
  width: 100%;
  height: 100%;
  position: fixed;
  top:0;
  left:0;
}
</style>