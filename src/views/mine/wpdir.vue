<template>
  <div>
    <van-nav-bar :title="parentFullDir" left-text="返回" left-arrow @click-left="onClickLeft" />
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
        <t-image v-if="item.split('.')[1]" class="image-container"
          :src="server+'/wp/' + user.username + '_code/'+ uploadPath+'/'+item" alt="一张图片"></t-image>
        <t-image v-else class="image-container" :src="image" alt="一张图片"></t-image>
        <p>{{item}}</p>
        <div @click.stop="goMore(item)" class="more">
          <img :src="dotImg" alt="">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { newDir_api, readDirList_api, removeDir_api } from '../../api/wp';
import { upload_dictionary_img } from '../../api';
import { Message } from 'tdesign-mobile-vue';
import dirImg from '../../assets/dir.png';
import dotImg from '../../assets/dot.png';
import { server } from '../../config_url';
import { ImagePreview } from 'vant';
export default {
  setup() {
    let route = useRoute();
    const router = useRouter();
    let state = reactive({
      list: [{ title: '新建文件夹', head: '新建' }, { title: '上传图片', head: '上传' }],
      list1: [{ title: '删除', head: '删除' }],
      parentDir: '', // 当前文件夹
      lastDir: '', // 上一级文件夹
      parentFullDir: '', // 上一级父文件路径
      show: false,
      show1: false,
      moreShow:false,
      dirName: '',
      dirList: [],
      fileList1: [],
      image: dirImg,
      dotImg: dotImg,
      user: JSON.parse(localStorage.getItem('user')),
      fullDir: 'public/wp/' + JSON.parse(localStorage.getItem('user')).username + '_code',
      uploadPath: '',
      server: server,

      removeDir:''
    });

    onMounted(() => {
      // console.log(route.params.dir, state.fullDir);
    })

    let goMore = (item) => {
      const {parentFullDir} = state;
      state.moreShow = true;
      state.removeDir = parentFullDir + '/' + item
    }
    let afterRead = (fileList) => {
      if (!fileList.length) {
        fileList = [fileList]
      }
      var data = new FormData();
      data.enctype = "multipart/form-data";
      data.append('mypath', 'public/wp/' + state.user.username + '_code/' + state.uploadPath)
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

    let pickEdit = () => {
      state.show = true;
    }
    let pickOprate = async (title) => {
      if (title == '新建文件夹') {
        state.show1 = true;
      }
      if (title == '删除') {
        let res = await removeDir_api({dirpath:'public/wp/'+ state.user.username+'_code/' + state.removeDir})
        Message.success('删除成功');
        state.moreShow = false;
        getDirList();
      }
    }
    let cancleCreateDir = () => {
      state.show1 = false;
      state.dirName = '';
    }
    let enterCreateDir = async () => { // 创建文件夹
      let res = await newDir_api({ dir: state.parentFullDir + '/' + state.dirName, username: state.user.username });
      if (res.code == 1) {
        Message.success(res.msg);
        state.show = false;
        state.show1 = false;
        state.dirName = '';
        getDirList();
      }
    }
    let getDirList = async (dir = 'public/wp/' + state.user.username + '_code/' + state.parentFullDir) => { // 获取文件夹目录
      let params = {
        dir
      }
      let res = await readDirList_api(params);
      state.dirList = res.result;
      // console.log(res, '获取文件夹目录')
    }
    let goDirIn = (item) => { // 进入文件夹
      if (item.split('.')[1]) {
        // console.log(state.server +'/wp/'+ + JSON.parse(localStorage.getItem('user'))['username'] + '_code/' + state.uploadPath+'/' + item)
        ImagePreview([state.server + '/wp/' + + JSON.parse(localStorage.getItem('user'))['username'] + '_code/' + state.uploadPath + '/' + item]);
      } else {
        if (route.params.dir) {
          state.parentFullDir = state.parentFullDir + '/' + item;
          state.lastDir = state.parentFullDir;
          state.parentDir = item;
          // console.log(state.lastDir, '上一个文件夹1')
          state.uploadPath = state.lastDir;
          getDirList()
        } else {
          router.push({ name: item, params: { dir: item } });
        }
      }
    }
    let onClickLeft = () => { // 返回
      if (state.parentFullDir.indexOf('/') != -1) {
        state.parentFullDir = state.parentFullDir.replace('/' + state.parentDir, '');
        state.lastDir = state.parentFullDir;
        let arr = state.lastDir.split('/');
        state.parentDir = arr[arr.length - 1];
        getDirList();
        // console.log(state.lastDir, '上一个文件夹2');
        state.uploadPath = state.lastDir;
      } else {
        router.go(-1);
      }
      // let 
    }
    onMounted(() => {
      state.parentFullDir = route.params.dir; // 上一级父文件夹
      state.parentDir = route.params.dir; // 上一级父文件夹
      state.uploadPath = state.parentDir;
      getDirList();
    })
    return {
      ...toRefs(state),
      pickEdit,
      pickOprate,
      cancleCreateDir,
      enterCreateDir,
      goDirIn,
      onClickLeft,
      afterRead,
      goMore
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
    }
  }
}
</style>