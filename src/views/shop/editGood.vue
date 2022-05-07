<template>
  <div>
    <t-navbar @click-right="submit">
      编辑商品
    </t-navbar>
    <van-field v-model="title" rows="1" autosize label="商品名称" type="textarea" placeholder="请输入商品名称" />
    <van-field v-model="desc" rows="1" autosize label="商品简介" type="textarea" placeholder="请输入商品简介" />
    <van-field v-model="price" rows="1" autosize label="商品价格" type="textarea" placeholder="请输入商品价格" />
    <ul class="fileList">
      <li @click="removeFileList(index)" v-for="(item, index) in fileList1" :key="index">
        <div :style="'background: url(' + item.url + ') top center no-repeat;background-size: cover;'" class="imgBox">
        </div>
        <!-- <div  class="imgBox"></div> -->
        <!-- <img src="https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg" alt=""> -->
      </li>
    </ul>
    <van-uploader multiple :after-read="afterRead" />
    <t-button @click="editGood()" theme="primary" size="large">编辑商品</t-button>
    <div>
      <t-divider>编辑富文本</t-divider>
      <t-button @click="editEditorData()" theme="primary" size="small">上传富文本</t-button>
      <t-button @click="getOnlinePath" style="margin-left:0.2rem" theme="primary"
        size="small">获取图片在线链接</t-button>
      <div id="toolbar-container" class="toolbar"></div>
      <div id="text-container" :style="'max-height:'+editorMaxHeight+'px'" class="text"></div>
    </div>
    <!-- <van-dialog style="z-index:10000" :showConfirmButton="false" v-model:show="show" title="选择商品类型">
      <van-picker :columns-field-names="customFieldName" title="选择" :columns="typeList" @confirm="onConfirm1"
        @cancel="onCancel1" @change="onChange" />
    </van-dialog> -->
  </div>
</template>
<script>
import { reactive } from 'vue'
import { toRefs } from 'vue';
import { onMounted } from 'vue';
import { useRoute, onBeforeRouteLeave, useRouter } from 'vue-router';
import { getGoodDetail_api, upload_dictionary, editGood_api, editEditor_api } from '../../api';
import wangeditor from 'wangeditor';
import { Message } from 'tdesign-mobile-vue';
import { useStore } from 'vuex';
import {serverUrl} from '../../config_url';
export default {
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.store.commit('changeFooter', false);
    })
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    let state = reactive({
      store: store,
      // show:true,
      serverUrl: serverUrl,
      _id: '',
      title: '',
      desc: '',
      price:null,
      html: '',
      fileList1: [],

      editor: null,
      editorMaxHeight: null,
      editorContent: ''
    });

    let getOnlinePath = () => { // 获取在线链接
      router.push({path:'/getOnlinePath'})
    }
    let editEditorData = async () => { // 编辑富文本
      let params = {
        _id: state._id,
        html: state.editor.txt.html()
      }
      let res = await editEditor_api(params);
      if (res.code == 1) {
        Message.success('富文本编辑成功')
      }
    }
    let editGood = async () => {
      let params = {
        _id: state._id,
        title: state.title,
        desc: state.desc,
        price: Number(state.price),
        bannerList: state.fileList1,
      }
      let res = await editGood_api(params);
      if (res.code == 1) {
        Message.success('编辑商品成功')
      }
    }
    let removeFileList = (index) => {
      state.fileList1.splice(index, 1);
    }
    let afterRead = (fileList) => {
      console.log(fileList);
      if (!fileList.length) {
        fileList = [fileList]
      }
      var formData = new FormData();
      formData.enctype = "multipart/form-data";
      fileList.forEach(function(file) {
        formData.append("myfile", file.file);//循环遍历把文件对象插到formData对象上
      });
      upload_dictionary(formData).then(result => {
        let list = state.fileList1;
        result.fileList.forEach(item => {
          list.push({ url: state.serverUrl + item.filename });
        })
        state.fileList1 = list;
        Message.success('上传图片成功')
      })
    }

    let createEditor = () => {
      state.editorMaxHeight = window.innerHeight - 300;
      // console.log(window.innerHeight);
      state.editor = new wangeditor('#toolbar-container', '#text-container');
      // let flag = true;
      state.editor.config.onchange = function(newHtml) {
        state.editorContent = newHtml;
      };
      state.editor.create();
    }
    let getGoodsDetail = async () => {
      let res = await getGoodDetail_api({ _id: state._id });
      state.title = res.result[0].title;
      state.desc = res.result[0].desc;
      state.price = res.result[0].price;
      state.html = res.result[0].html;
      state.fileList1 = JSON.parse(res.result[0].bannerList);
      state.editor.txt.html(state.html);
    }
    onMounted(() => {
      state._id = route.query._id;
      getGoodsDetail();
      createEditor();
    })
    onBeforeRouteLeave((to, from) => {
      store.commit('changeFooter', true);
    });
    return {
      ...toRefs(state),
      getOnlinePath,
      editGood,
      afterRead,
      removeFileList,
      editEditorData
    }
  },
}
</script>

<style lang="scss" scoped>
.fileList {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  li {
    width: 33%;
    list-style: none;

    .imgBox {
      width: 100%;
      height: 2.5rem;
    }
  }
}
</style>