<template>
  <van-tabs v-model:active="active">
    <van-tab title="王者点券充值">
      <div class="navBox">
        <p
          style="line-height:0.6rem;font-size:0.28rem;font-weight:bold;color:red;padding:0;pading:0;text-indent: 0.3rem;">
          王者荣耀 安卓QQ区 点券充值</p>
        <div>
          <t-input placeholder="请输入区域号" v-model="zoneid" label="大区" />
          <t-input placeholder="请输入点券数" v-model="n" label="点券数" />
          <t-input placeholder="请输入QQ号" v-model="u" label="QQ号" />
          <t-button @click="goPayFor" size="large" theme="primary">充值</t-button>
        </div>
      </div>
    </van-tab>
    <!-- <van-tab title="标签 2">
      <div class="navBox"></div>
    </van-tab>
    <van-tab title="标签 3"></van-tab>
    <van-tab title="标签 4"></van-tab> -->
  </van-tabs>
  <van-divider />
  <t-grid :column="5">
    <t-grid-item @click="goPage(item.path)" v-for="(item,index) in navList" :key="index" :text="item.text"
      :image="item.imgUrl" />
  </t-grid>

  <!-- <div class="scrollBox">
    <van-sidebar style="width:30%" v-model="sideActive">
      <van-sidebar-item title="抖音去水印" />
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
    </van-sidebar>
    <div v-if="sideActive==0" class="rightBox">
      <p>抖音去水印</p>
      <van-field v-model="dyurl" rows="4" autosize type="textarea" placeholder="请输入抖音链接" />
      <van-divider />
      <t-button @click="getDyUrl()" size="small" style="float:right;margin-bottom:0.2rem;" theme="primary">确认</t-button>
      <div v-show="videoFlag">
        <vue3VideoPlay :src="options.src" />
      </div>
      <p>{{videoObj.title}}</p>
      <a :href="options.src">下载</a>
      <t-button @click="seeDyVideo()" size="large" theme="primary">查看视频</t-button>
    </div>
  </div> -->
</template>
<script>
import { defineComponent, onMounted, reactive, ref, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { chickServer } from '../../config_url';
import { Message } from 'tdesign-mobile-vue';
import axios from 'axios';
export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();
    // let scroll = ref(null);
    let state = reactive({
      navList: [{ text: '知识清单', imgUrl: 'https://tdesign.gtimg.com/mobile/%E5%9B%BE%E7%89%87.png', path: '/study' }, { text: '商城', imgUrl: 'https://tdesign.gtimg.com/mobile/%E5%9B%BE%E7%89%87.png', path: '/shop' }, { text: '动态', imgUrl: 'https://tdesign.gtimg.com/mobile/%E5%9B%BE%E7%89%87.png', path: '/movecase' }, { text: '汤姆猫', imgUrl: 'https://tdesign.gtimg.com/mobile/%E5%9B%BE%E7%89%87.png', path: '/tmm' }, { text: '小鸡', imgUrl: 'https://tdesign.gtimg.com/mobile/%E5%9B%BE%E7%89%87.png', path: '/chick' }],
      active: 0,

      zoneid: null,
      n: null,
      u: null,

      sideActive: 0,
      options: {
        width: "100%", //播放器高度
        height: "3.5rem", //播放器高度
        color: "#409eff", //主题色
        title: "", //视频名称
        src: "https://v95-a.douyinvod.com/f390f9b43b1cc4a0503fd44b8416e8e3/62760d44/video/tos/cn/tos-cn-ve-15c001-alinc2/69843b81aae04aba93e017b1a85b03bd/?a=1128&amp;ch=0&amp;cr=0&amp;dr=0&amp;cd=0%7C0%7C0%7C0&amp;cv=1&amp;br=2880&amp;bt=2880&amp;cs=0&amp;ds=3&amp;ft=6klTKjjM95MxrKqoZmCTeK_ScoAw0XqVAtaVJERBwjfvPD&amp;mime_type=video_mp4&amp;qs=0&amp;rc=N2ZpOjMzPDtpNTtoN2lnaUBpM244ODo6Zjc4PDMzNGkzM0A0YC8yLmE1Xy8xYi9hNTEyYSNoLmhwcjRnZG1gLS1kLS9zcw%3D%3D&amp;l=2022050713095901021207507626069DF1", //视频源
        muted: false, //静音
        webFullScreen: false,
        speedRate: ["0.75", "1.0", "1.25", "1.5", "2.0"], //播放倍速
        autoPlay: false, //自动播放
        loop: false, //循环播放
        mirror: false, //镜像画面
        ligthOff: false, //关灯模式
        volume: 0.3, //默认音量大小
        control: true, //是否显示控制
        controlBtns: [
          "audioTrack",
          "quality",
          "speedRate",
          "volume",
          "setting",
          "pip",
          "pageFullScreen",
          "fullScreen",
        ], //显示所有按钮,
      },
      videoFlag:true,
      dyurl: '',
      videoObj:{
        music:'',
        nickname:'',
        play:'',
        title:''
      }

    });
    onMounted(() => {
      // window.addEventListener('scroll', handleScrollx, true)
    })

    let seeDyVideo = () => {
      window.location.href = state.options.src
    }

    let getDyUrl = async() => {
      if (!state.dyurl) {
        Message.error('请填写抖音地址');
        return;
      }
      let res = await axios({
        url:'/new/douyin/api.php?url='+state.dyurl,
        method:'GET'
      })
      state.videoFlag = true;
      state.videoObj = res.data;
      console.log(res,'抖音去水印');
    }

    // let handleScrollx = () => {
    //   state.scrollTop = scroll.value.getBoundingClientRect().top;
    //   // console.log('距离顶部高度', scroll.value.getBoundingClientRect().top)
    //   console.log(state.scrollTop, 'scroll');
    // }
    let goPayFor = () => {
      let { zoneid, n, u } = state;
      if (!zoneid || !n || !u) {
        Message.error('请正确填写！！！');
        return;
      }
      // console.log('跳转', `
      // https://pay.qq.com/h5/index.shtml?m=buy&c=game&dialog=0&midasApiVersion=5&transactionid=CC8E5656-EEC9-4ADD-865E-D4D81C258D691558348901265&dh=1&pf=mds_storeopen_qb-_mds_default_v1_0_0.navgame_v1.0-android&appid=1450002258&zoneid=${1010+Number(zoneid)}&n=${n}&as=1&aid=''&wxAppid2=wx951bdcac522929b6&u=${u}
      // `);
      location.href = `
      https://pay.qq.com/h5/index.shtml?m=buy&c=game&dialog=0&midasApiVersion=5&transactionid=CC8E5656-EEC9-4ADD-865E-D4D81C258D691558348901265&dh=1&pf=mds_storeopen_qb-_mds_default_v1_0_0.navgame_v1.0-android&appid=1450002258&zoneid=${1010 + Number(zoneid)}&n=${n}&as=1&aid=''&wxAppid2=wx1d5858390bbb31e6&u=${u}
      `;
      // axios({
      //   url:'/api/h5/index.shtml',
      //   method:'GET',
      //   data:{
      //     m:'buy',
      //     c:'game',
      //     dialog:0,
      //     midasApiVersion:5,
      //     transactionid:'CC8E5656-EEC9-4ADD-865E-D4D81C258D691558348901265',
      //     dh:1,
      //     pf:'mds_storeopen_qb-_mds_default_v1_0_0.navgame_v1.0-android',
      //     appid:1450002258,
      //     zoneid:1010+Number(zoneid),
      //     n:Number(n),
      //     as:1,
      //     aid:'',
      //     wxAppid2:'wx951bdcac522929b6',
      //     u:u
      //   }
      // }).then(res=>{
      //   // router.push({name:'pay', params:{html:res.data}})
      //   console.log(res, '充值成功');
      //   wzPayFor_api(res.data).then(r1=>{
      //     console.log(r1,'点券充值');
      //   })
      // })
    }
    let goPage = (path) => {
      if (path == '/chick') {
        location.href = chickServer;
      } else {
        router.push({ path });
      }
    }

    return {
      ...toRefs(state),
      goPage,
      goPayFor,
      getDyUrl,
      seeDyVideo
      // scroll
    }
  },
})
</script>

<style lang="scss" scoped>
.navBox {
  width: 100%;
  height: 4.8rem;
  // background-color: #ccc;
}

.scrollBox {
  width: 100%;
  padding-top: 0.2rem;
  padding-bottom: 1rem;
  // background-color: red;
  position: relative;
  .rightBox {
    position: absolute;
    width: calc(100% - 30%);
    height: 100%;
    right: 0;
    top: 0;
  }
}
</style>

