<template>
  <div class="add">
    <!-- 导航栏 -->
    <t-navbar @click-right="submit">
      添加知识清单
      <template #right>
        <sound-icon></sound-icon>
      </template>
    </t-navbar>
    <t-back-top style="z-index:999" text="顶部" :onToTop="submit" :target="myDOMTarget" v-show="true" />
    <div>
      <t-input v-model="title" label="标题" clearable placeholder="标题" />
      <div id="toolbar-container" class="toolbar"></div>
      <div id="text-container" :style="'max-height:'+editorMaxHeight+'px'" class="text"></div>
      <!-- <span id="gundong" ref="myDOM">111</span> -->
    </div>
  </div>
</template>
<script>
import { defineComponent, onMounted, reactive, toRefs, ref, watch } from 'vue'
import { SoundIcon } from 'tdesign-icons-vue-next';
import wangeditor from 'wangeditor';
import { Message } from 'tdesign-mobile-vue';
import {submitStudy} from '../../api'
import { onBeforeRouteLeave, useRouter } from 'vue-router';
import { useStore } from 'vuex';
export default defineComponent({
  beforeRouteEnter(to,from,next){
    next(vm=>{
      vm.store.commit('changeFooter',false);
    })
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    let state = reactive({
      store:store,
      title: '',
      user:{},
      editor: null,
      editorMaxHeight:null,
      editorContent: ''
    });
    onMounted(() => {
      state.editorMaxHeight = window.innerHeight - 300;
      // console.log(window.innerHeight);
      state.editor = new wangeditor('#toolbar-container', '#text-container');
      // let flag = true;
      state.editor.config.onchange = function(newHtml) {
        state.editorContent = newHtml;
      };
      state.editor.create();
    });
    let submit = async() => {
      let res = await submitStudy({
        user:{name:'作者'},
        html:state.editor.txt.html(),
        title:state.title
      });
      console.log(res, '添加成功')
      Message.success('添加知识清单成功');
      router.go(-1);
    }
    
    onBeforeRouteLeave((to,from)=>{
      store.commit('changeFooter',true);
    });
    return {
      ...toRefs(state),
      SoundIcon,
      submit,
    }
  },
})
</script>
<style lang="scss" scoped>
.add {
  .toolbar {
    border: 1px solid #ccc;
  }
  .text {
    border: 1px solid #ccc;
    min-height: 400px;
    overflow-y: scroll;
  }
}
</style>
