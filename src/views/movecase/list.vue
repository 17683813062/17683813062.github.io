<template>
  <t-navbar style="position:fixed;top:0;left:0;width:100%;background-color: #fff;z-index: 5;" >
    动态广场
  </t-navbar>
  <div class="box">
    <div class="talkBox">
      <h6>今日热门话题</h6>
      <ul>
        <li v-for="item in list" :key="item">
          <span>{{item.title}}</span>
        </li>
        <li style="position: absolute;right:0;bottom:0rem;padding:0.1rem 0.2rem;">查看更多</li>
      </ul>
    </div>
    <div class="manBox">
      <h6>今日活跃成员</h6>
      <ul>
        <li v-for="item in manList" :key="item">
          <span>{{item.name}}</span>
        </li>
        <li style="position: absolute;right:0;bottom:0rem;padding:0.1rem 0.2rem;">查看更多</li>
      </ul>
    </div>
  </div>
  <!-- 悬浮按钮 -->
  <t-fab @click="addcase" style="position:fixed;right:0.1rem;bottom:30%"></t-fab>

  <ul class="listBox">
    <li v-for="(item,index) in caseList" :key="index">
      <div class="top">
        <div class="headImg">
          <t-avatar class="imgBox" image="https://tdesign.gtimg.com/site/avatar.jpg" :hide-on-load-failed="false">
          </t-avatar>
          <span>{{item.username}}</span>
        </div>
        <!-- <div class=""></div> -->
      </div>
      <div class="bottom">
        {{item.text}}
      </div>
      <div class="imgBoxContent">
        <div class="box_img" :style="'background:url('+item1.url+') no-repeat;background-size:cover;'"
          v-for="(item1,index1) in JSON.parse(item.imgList)" :key="index1+'_img'">
        </div>
      </div>
      <div class="time">
        {{item.time}}
      </div>
    </li>
  </ul>
</template>
<script>
import { defineComponent, onMounted, reactive, ref, toRefs } from 'vue'
import { onBeforeRouteLeave, useRouter } from 'vue-router'
import { useStore } from 'vuex';
import { getMoveCase_api } from '../../api';

export default defineComponent({
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.store.commit('changeFooter', false);
    })
  },
  setup() {
    let store = useStore();
    let router = useRouter();
    let state = reactive({
      store: store,
      list: [{ title: '#吃饭圣诞节撕开' }, { title: '#抽点时间数据是' }, { title: '#付文峰哥哥哥' }, { title: '#付文峰哥哥哥' }, { title: '#付文峰哥哥哥' }],
      manList: [{ name: '小木虫' }, { name: '防风网' }, { name: '大V人的' }, { name: '佛山市分' }],
      caseList: [] // 动态列表

    })
    let addcase = () => {
      router.push({ path: '/addcase' })
    }

    let getCaseList = async () => {
      let res = await getMoveCase_api();
      console.log(res, '动态列表');
      // let list = res.result;
      // list .forEach(item=>{
      //   let res = new RegExp("( #[\u4e00-\u9fa5] ) ",'g');
      //   item.text = text = text.replace(res,"<span style='color:red;'>" + this.searchText+"</span>");
      // })
      state.caseList = res.result;
    }

    onMounted(() => {
      getCaseList();
    });
    onBeforeRouteLeave((to, from) => {
      store.commit('changeFooter', true);
    });
    return {
      ...toRefs(state),
      addcase
    }
  },
})
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  padding: 0.3rem 0.3rem;
  box-sizing: border-box;
  display: flex;
  .talkBox {
    width: 56%;
    margin-right: 3%;
    h6 {
      margin: 0;
      line-height: 0.8rem;
      font-size: 0.3rem;
      text-align: center;
    }
    ul {
      width: 100%;
      height: 4rem;
      border: 1px solid #ccc;
      padding-top: 0.2rem;
      padding-left: 0.2rem;
      box-sizing: border-box;
      position: relative;
      li {
        font-size: 0.28rem;
        font-weight: bold;
        line-height: 0.6rem;
        span {
          width: 100%;
          display: inline-block;
        }
      }
    }
  }
  .manBox {
    width: 40%;
    h6 {
      margin: 0;
      line-height: 0.8rem;
      font-size: 0.3rem;
      text-align: center;
    }
    ul {
      width: 100%;
      height: 4rem;
      border: 1px solid #ccc;
      padding-top: 0.2rem;
      padding-left: 0.2rem;
      box-sizing: border-box;
      position: relative;
      li {
        font-size: 0.28rem;
        font-weight: bold;
        line-height: 0.6rem;
        span {
          width: 100%;
          display: inline-block;
        }
      }
    }
  }
}

.listBox {
  width: 100%;
  li {
    width: 100%;
    padding: 0.3rem 0.4rem;
    box-sizing: border-box;
    .top {
      width: 100%;
      .headImg {
        width: 100%;
        height: 1.2rem;
        .imgBox {
          width: 1.2rem;
          height: 1.2rem;
        }
        span {
          font-weight: bold;
          font-size: 0.34rem;
          display: inline-block;
          margin-left: 0.4rem;
        }
      }
    }
    .bottom {
      width: 100%;
      min-height: 1rem;
      // background-color: #ccc;
      margin: 0.1rem auto;
      padding: 0.1rem 0.2rem;
      box-sizing: border-box;
    }
    .imgBoxContent {
      width: 100%;
      .box_img {
        width: 30%;
        height: 2rem;
        border: 0.01rem solid #ccc;
        display: inline-block;
        margin-right: 3.5%;
      }
      .box_img:nth-child(3n) {
        margin-right: 0;
      }
    }
    .time {
      font-size: 0.24rem;
      font-weight: bold;
    }
  }
}
</style>
