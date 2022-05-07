<template>
  <t-fab @click="pickEdit" class="demo-fab-button editBtn"></t-fab>
  <t-popup v-model="show" placement="bottom">
    <div class="popBox">
      <div @click="pickOprate(item.title)" v-for="(item,index) in list" :key="index" class="item">
        <div v-if="item.title == '上传图片'">
          <van-uploader multiple :after-read="afterRead">
            <t-avatar shape="circle">{{item.head}}</t-avatar>
            <p>{{item.title}}</p>
          </van-uploader>
        </div>
        <div v-if="item.title != '上传图片'">
          <t-avatar shape="circle">{{item.head}}</t-avatar>
          <p>{{item.title}}</p>
        </div>
      </div>
    </div>
  </t-popup>

  <t-popup v-model="show1" placement="center">
    <div style="width: 200px; height: 200px; background: #fff;position: relative;overflow: hidden;">
      <t-input v-model="dirName" style="margin-top:0.4rem" placeholder="文件夹名称" />
      <div style="width:100%;display:flex;justify-content:space-around;position: absolute;
          bottom:0.4rem">
        <t-button @click="cancleCreateDir">取消</t-button>
        <t-button @click="enterCreateDir" theme="primary">确认</t-button>
      </div>
    </div>
  </t-popup>

  <!-- 删除 -->
  <t-popup v-model="moreShow" placement="bottom">
    <div class="popBox">
      <div @click="pickOprate(item.title)" v-for="(item,index) in list1" :key="index" class="item">
        <div v-if="item.title != '上传图片'">
          <t-avatar shape="circle">{{item.head}}</t-avatar>
          <p>{{item.title}}</p>
        </div>
      </div>
    </div>
  </t-popup>
  <ul class="dirBox">
    <li @click="goDirIn(item)" v-for="(item,index) in dirList" :key="index+'_dir'">
      <t-image v-if="item.split('.')[1]" class="image-container" :src="server+item" alt="一张图片"></t-image>
      <t-image v-else class="image-container" :src="image" alt="一张图片"></t-image>
      <p>{{item}}</p>
      <div @click.stop="goMore(item)" class="more">
        <img :src="dotImg" alt="">
      </div>
    </li>
  </ul>
  <t-image-viewer v-model="showViewer" v-model:images="images" :initial-index="0">
  </t-image-viewer>

  <van-dialog @confirm="goLogin" title="请登录！！！" v-model:show="flag" />
</template>
<script>
import { onMounted, reactive, toRefs } from 'vue';
import { initCode_api, newDir_api, readDirList_api, removeDir_api } from '../../api/wp';
import { upload_dictionary_img } from '../../api';
import { getUser_api } from '../../api';
import { Message } from 'tdesign-mobile-vue';
import dirImg from '../../assets/dir.png';
import dotImg from '../../assets/dot.png';
import { useRouter } from 'vue-router';
import { server } from '../../config_url';
import { ImagePreview, Dialog } from 'vant';
export default {
  components: {
    [Dialog.Component.name]: Dialog.Component,
  },
  setup() {
    let router = useRouter();
    let state = reactive({
      show: false,
      show1: false,
      moreShow: false,
      user: JSON.parse(localStorage.getItem('user')),
      list: [{ title: '新建文件夹', head: '新建' }, { title: '上传图片', head: '上传' }],
      list1: [{ title: '删除', head: '删除' }],
      dirName: '',
      image: dirImg,
      dotImg: dotImg,
      dirList: [],
      fileList1: [],
      server: '',
      showViewer: false,
      images: [],
      removeDir: '',
      flag: localStorage.getItem('user') ? false : true
    });

    let goLogin = () => {
      router.push({ path: '/mine' })
    }

    let goMore = (item) => {
      state.moreShow = true;
      state.removeDir = item
      // console.log(state.removeDir)
    }

    let afterRead = (fileList) => {
      if (!fileList.length) {
        fileList = [fileList]
      }
      var data = new FormData();
      data.enctype = "multipart/form-data";
      data.append('mypath', 'public/wp/' + state.user.username + '_code')
      fileList.forEach(function(file) {
        data.append("myfile", file.file);//循环遍历把文件对象插到formData对象上
      });
      upload_dictionary_img(data).then(result => {
        let list = state.fileList1;
        result.fileList.forEach(item => {
          list.push({ url: state.serverUrl + item.filename });
        })
        state.fileList1 = list;
        state.show = false;
        getDirList();
      })
    }

    let goDirIn = (item) => {
      if (item.split('.')[1]) {
        ImagePreview([state.server + item]);
        // state.images = [state.server+item]
        // state.showViewer = true;
        // 查看图片
      } else { // 进入文件夹内部
        router.push({ name: 'wpdir', params: { dir: item, fullDir: '' } });
      }
    }

    let cancleCreateDir = () => {
      state.show1 = false;
      state.dirName = '';
    }
    let enterCreateDir = async () => { // 创建文件夹
      let res = await newDir_api({ dir: state.dirName, username: state.user.username });
      if (res.code == 1) {
        Message.success(res.msg);
        state.show = false;
        state.show1 = false;
        state.dirName = '';
        getDirList();
      }
    }

    let getDirList = async (dir = 'public/wp/' + state.user.username + '_code') => { // 获取文件夹目录
      let params = {
        dir
      }
      let res = await readDirList_api(params);
      state.dirList = res.result;
      // console.log(res, '获取文件夹目录')
    }


    let pickOprate = async (title) => {
      if (title == '新建文件夹') {
        state.show1 = true;
      }
      if (title == '删除') {
        let res = await removeDir_api({ dirpath: 'public/wp/' + state.user.username + '_code/' + state.removeDir })
        // console.log('删除', res);
        state.moreShow = false;
        getDirList();
      }
    }
    let pickEdit = () => {
      state.show = true;
    }

    let initWp = async () => { // 初始化网盘
      let useMsg = await getUser_api({ username: state.user.username });
      // console.log(useMsg.result[0])
      localStorage.setItem('user', JSON.stringify(useMsg.result[0]));
      if (useMsg.result[0].wp) {
        // let res = await initCode_api({username:state.user.username});
        // console.log('存在');
      } else {
        let res = await initCode_api({ username: state.user.username });
        // console.log(res, '不存在');
      }
    }
    onMounted(() => {
      // console.log(localStorage.getItem('user'), '111')
      if (localStorage.getItem('user')) {
        state.server = server + '/wp/' + JSON.parse(localStorage.getItem('user'))['username'] + '_code/';
        initWp();
        getDirList();
      }
    })
    return {
      ...toRefs(state),
      pickEdit,
      pickOprate,
      cancleCreateDir,
      enterCreateDir,
      goDirIn,
      afterRead,
      goMore,
      goLogin
    }
  },
}
</script>

<style lang="scss" scoped>
.editBtn {
  position: fixed;
  right: 0.1rem;
  bottom: 10%;
}
.popBox {
  width: 90%;
  height: 4rem;
  background-color: #fff;
  margin: auto;
  overflow: hidden;
  .item {
    width: 1.6rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 0.2rem;
    float: left;
    p {
      margin: 0;
      line-height: 0.66rem;
      font-weight: bold;
      font-size: 0.28rem;
      text-align: center;
    }
  }
}
.dirBox {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 0.1rem 0.2rem;
  box-sizing: border-box;
  li {
    width: calc(100% / 4);
    margin-bottom: 0.3rem;
    .image-container {
      width: 100%;
    }
    .more {
      width: 40%;
      height: 0.4rem;
      background: #ccc;
      margin: auto;
      border-radius: 0.16rem;
      margin-top: 0.16rem;
      img {
        width: 60%;
        display: block;
        margin: auto;
      }
    }
    p {
      width: 100%;
      margin: 0;
      text-align: center;
      font-size: 0.34rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 0.6rem;
    }
  }
}
</style>