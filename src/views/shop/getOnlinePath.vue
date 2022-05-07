<template>
  <div>
    <t-navbar>
      获取在线链接
    </t-navbar>
    <ul class="fileList">
      <li @click="removeFileList(index)" v-for="(item, index) in fileList1" :key="index">
        <div :style="'background: url(' + item.url + ') top center no-repeat;background-size: cover;'" class="imgBox">
        </div>
        <!-- <div  class="imgBox"></div> -->
        <!-- <img src="https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg" alt=""> -->
      </li>
    </ul>
    <van-uploader :after-read="afterRead" />

    <p style="text-align:center">{{fileList1.length? fileList1[0].url:''}}</p>
    <t-button @click="copyUrl()" theme="primary" size="large">点击复制</t-button>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
import { useStore } from 'vuex';
import { upload_dictionary } from '../../api';
import { Message } from 'tdesign-mobile-vue';
import {serverUrl} from '../../config_url';
export default {
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.store.commit('changeFooter', false);
    })
  },
  setup() {
    const store = useStore();
    let state = reactive({
      store: store,
      fileList1: [],
      serverUrl: serverUrl,
    })
    let copyUrl = () => {
      if (! state.fileList1.length) {
        Message.error('暂无可复制内容');
        return;
      }
      const input = document.createElement('input');
      document.body.appendChild(input);
      input.setAttribute('readonly', 'readonly');
      input.setAttribute('value', state.fileList1[0].url);
      input.select();
      if (document.execCommand('copy')) {
        document.execCommand('copy');
        Message.success('复制成功')
      }
       document.body.removeChild(input);
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
    onBeforeRouteLeave((to, from) => {
      store.commit('changeFooter', true);
    });
    return {
      ...toRefs(state),
      afterRead,
      copyUrl
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