<template>
  <div>
    <ul ref="ulDom" id="ul">
      <li ref="bottom" v-for="(item,index) in list" :key="index">{{index == list.length-1?'111':''}}</li>
      <!-- <div style="height:10px;width:100%" ref="bottom"></div> -->
    </ul>
  </div>
</template>
<script>
import { defineComponent, onMounted, reactive, ref, toRefs } from 'vue'

export default defineComponent({
  setup() {
    let state = reactive({
      list:[0,1,2,3,4,5,6]
      // BottomDom:null
    })
    // let BottomDom = ref(null);
    // let ulDom = ref(null);
    let bottom = ref(null);
    // let index = state.length -1;
    // BottomDom = 'bottom_'+state.list.length -1;
    onMounted(()=>{
      console.log(bottom.value)
      bottom.value[state.list.length-1].scrollIntoView();
      // console.log(ulDom.value);
      // ulDom.value.scrollTop = ulDom.value.scrollHeight; //  获取页面的实际宽高
      // console.log(ulDom.value.scrollTop, ulDom.value.scrollHeight); /// 设置根元素的内容垂直滚动的距离
    });
    return {
      ...toRefs(state),
      // ulDom,
        bottom,
      // BottomDom
    }
  },
})
</script>
<style lang="scss" scoped>
#ul{
  width: 100%;
  height: 400px;
  background-color: red;
  margin:0;
  padding:0;
  overflow-y: scroll;
  li{
    width: 100%;
    height: 60px;
    background-color: blue;
    margin:0 0 10px 0;
    list-style: none;
    font-size: 30px;
    color:#fff;
  }
}
</style>
