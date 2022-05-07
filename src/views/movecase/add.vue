<template>
  <div class="main">
    <t-navbar @click-right="submit">
      添加动态
    </t-navbar>
    <div class="content">
      <t-textarea style="padding-bottom:0.2rem;max-height:8rem" autosize v-model="text" :maxcharacter="400">请输入文字
      </t-textarea>
      <t-button @click="addTalk" theme="primary" size="small">#添加话题</t-button>
    </div>

    <div>
      <ul class="fileList">
        <li @click="removeFileList(index)" v-for="(item, index) in fileList1" :key="index">
          <div :style="'background: url(' + item.url + ') top center no-repeat;background-size: cover;'" class="imgBox">
          </div>
        </li>
      </ul>
      <van-uploader multiple :after-read="afterRead" />
    </div>

    <div style="width:100%;">
      <t-button style="float:right;margin-left:0.2rem" theme="ghost">取消</t-button>
      <t-button @click="submit" style="float:right;" theme="primary">确认</t-button>
    </div>
  </div>

  <van-dialog v-model:show="show" title="添加话题" show-cancel-button>
    <t-button @click="addTalkFunc" theme="primary" size="small">添加</t-button>
    <t-input @change="filterList" v-model="addTalkText" style="width:70%;display:inline-block;margin-left:5%" placeholder="话题" />
    <ul class="tagBox">
      <li @click="addTagList(item)" v-for="item in talkList1" :key="item">{{item.title}}</li>
    </ul>
  </van-dialog>
</template>
<script>
import { onMounted, reactive, toRefs } from 'vue';
import { onBeforeRouteLeave, useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { upload_dictionary1, saveMoveCase_api, addTalkText_api, findTalkText_api } from '../../api';
import { Message } from 'tdesign-mobile-vue';
import { server } from '../../config_url';
import { getToday, getTimeStamp } from '../../utils';
export default {
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.store.commit('changeFooter', false);
    })
  },
  setup() {
    let store = useStore();
    let route = useRoute();
    let router = useRouter();
    let state = reactive({
      store: store,
      user: JSON.parse(localStorage.getItem('user')),
      text: '',
      serverUrl:server+'/movecase/',
      fileList1: [],

      // talk: [], // 标签 - 选中话题
      // 弹窗 
      talkList: [], // 所有话题
      talkList1:[],
      show: false,
      addTalkText: ''
    })
    let addTagList = (item) => { // 点击添加标签
      state.text = state.text + ' #' + item.title + ' ';
      state.show = false;
      // state.talk.push(item);
    }
    let filterList = (value) => { // 筛选
      console.log(value)
      let list = state.talkList;
      let newList = list.filter((item) => {
        console.log(item.title, value, item.title.indexOf(value) != -1)
        return item.title.indexOf(value) != -1;
      });
      state.talkList1 = newList;
    }
    let addTalkFunc = async () => { // 添加话题
      if (!state.addTalkText) {
        Message.error('还未填写');
      } else {
        let params = {
          title: state.addTalkText,
          count: 1,
          timestamp: getTimeStamp()
        }
        let res = await addTalkText_api(params);
        if (res.code == 1) {
          Message.success(res.msg);
          getAllTalkText();
        } else {
          Message.error(res.msg)
        }
      }
    }
    let addTalk = () => { // 添加话题
      state.show = true;
    }
    let submit = async () => { // 提交动态
      let { text, fileList1, talk } = state;
      if (text || fileList1.length) {
        let params = {
          user: state.user,
          username: state.user.username,
          text,
          fileList1,
          time: getToday(),
          timestamp: getTimeStamp()
        }
        let res = await saveMoveCase_api(params);
        console.log(res, '添加动态成功');
        Message.success('添加动态成功');
        router.go(-1);
      } else {
        Message.success('请至少填写一项');
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
      upload_dictionary1(formData).then(result => {
        let list = state.fileList1;
        result.fileList.forEach(item => {
          list.push({ url: state.serverUrl + item.filename });
        })
        state.fileList1 = list
        console.log('上传成功1', state.fileList1, list);
      })
    }
    let getAllTalkText = async () => {
      let res = await findTalkText_api();
      state.talkList = res.result;
      state.talkList1 = res.result;
      console.log(res, '查找所有话题');
    }
    onMounted(() => {
      getAllTalkText();
    })
    onBeforeRouteLeave((to, from) => {
      store.commit('changeFooter', true);
    });

    return {
      ...toRefs(state),
      afterRead,
      removeFileList,
      submit,
      addTalk,
      addTalkFunc,
      filterList,
      addTagList
    }
  },
}
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #f6f6f6;
  .content {
    width: 90%;
    margin: 0.2rem auto;
  }

  .fileList {
    width: 100%;
    min-height: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    li {
      width: 33%;
      list-style: none;

      .imgBox {
        width: 100%;
        height: 2.3rem;
        border: 1px solid #ccc;
      }
    }
  }
}

.tagBox {
  width: 100%;
  height: 8rem;
  overflow: auto;
  padding-left: 0.4rem;
  box-sizing: border-box;
  margin-top: 0.3rem;
  li {
    font-size: 0.34rem;
    font-weight: bold;
    line-height: 0.8rem;
    color: #337ab7;
  }
}
</style>