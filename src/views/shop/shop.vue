<template>
  <div ref="listDom" id="shoplist1" class="shopList">
    <van-sticky :offset-top="0">
      <t-navbar @click-text="returnTop">
        商城
      </t-navbar>
    </van-sticky>
    <!-- <t-sticky style="width:100%" offset-top="0">
    <div style="width:100%;height:1rem">

    </div>
    </t-sticky> -->
    <t-swiper class="my-swiper" :autoplay="false" :height="180" direction="horizontal"
      :navigation="{ type: 'fraction' }">
      <t-swiper-item class="swiper-item--demo"><img src="https://tdesign.gtimg.com/site/swiper/02.png" alt="">
      </t-swiper-item>
      <t-swiper-item class="swiper-item--demo">
        <t-image fit="contain" lazy class="image-container" src="https://tdesign.gtimg.com/site/swiper/02.png"
          alt="一张图片"></t-image>
      </t-swiper-item>
    </t-swiper>
    <t-grid>
      <t-grid-item @click="filterData('all')" text="全部" :image="imgUrl" />
      <t-grid-item @click="filterData(item.name)" v-for="(item,index) in typeList" :key="index" :text="item.name"
        :image="imgUrl" />
    </t-grid>
    <p style="font-size:0.3rem;font-weight:bold;text-indent:0.2rem;line-height: 1rem;">即将上新</p>
    <ul class="list">
      <li @click="goDetail(item._id)" v-for="(item,index) in flutureList" :key="index">
        <t-tag size="small" class="tag" theme="primary" variant="light-outline">{{item.typeName}}</t-tag>
        <van-image width="86%" height="3rem" fit="cover" :src="JSON.parse(item.bannerList)[0]['url']" />
        <p class="price">￥{{item.price}}</p>
        <p>{{item.title}}</p>
        <p>{{item.desc}}</p>
      </li>
    </ul>
    <t-divider></t-divider>
    <p style="font-size:0.3rem;font-weight:bold;text-indent:0.2rem;line-height: 1rem;">全部商品</p>
    <ul class="list list1">
      <li @click="goDetail(item._id)" v-for="(item,index) in goodsList" :key="index">
        <!-- <t-tag size="small" class="tag" theme="primary" variant="light-outline">{{item.typeName}}</t-tag> -->
        <van-tag class="tag" plain type="primary">{{item.typeName}}</van-tag>
        <van-image width="86%" height="3rem" fit="cover" :src="JSON.parse(item.bannerList)[0]['url']" />
        <p class="price">￥{{item.price}}</p>
        <p>{{item.title}}</p>
        <p>{{item.desc}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import { defineComponent, onMounted, reactive, ref, toRefs } from 'vue';
import { useRouter, onBeforeRouteLeave } from 'vue-router';
import { getGoods_api, getGoodType_api, getGoodFilter_api } from "../../api";
import icon from "../../assets/icon.png";
import { Message } from 'tdesign-mobile-vue';
import { useStore } from 'vuex';
export default defineComponent({
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (from.path == '/shopdetail') {
        vm.scroll = localStorage.getItem('scrollTop');
        vm.isType = localStorage.getItem('isType');
      } else {
        vm.scroll = 0;
        vm.isType = 'all';
        //  vm.listDom.value.scrollTop = 0;
        localStorage.removeItem('scrollTop');
        localStorage.removeItem('isType');
      }
      console.log(from, 'from');
      vm.store.commit('changeFooter', false);
    })
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    let listDom = ref(null);
    let state = reactive({
      listDom: listDom,
      store: store,
      imgUrl: icon,
      goodsList: [],
      typeList: [],
      flutureList: [],
      scroll: null,
      isType: 'all',
      timer:''
    });
    let returnTop = () => { // 返回顶部
      state.timer = setTimeout(() => {
        listDom._value.scrollTop = 0;
        clearTimeout(state.timer);
      }, 100)
    }
    let getGoodTypeData = async () => {
      let res = await getGoodType_api();
      state.typeList = res.result.filter((item) => {
        return item.name != '即将上新'
      })
    }
    let goDetail = (_id) => {
      router.push({ path: '/shopdetail', query: { _id } });
      // console.log(listDom.value.scrollTop);
      localStorage.setItem('scrollTop', listDom.value.scrollTop)
    }
    let getGoodsData = async () => {
      if (state.isType == 'all') {
        let res = await getGoods_api();
        state.goodsList = res.result;
      } else {
        getGoodFilterData(state.isType);
      }
    }

    let getGoodFilterData = async (type) => {
      if (type == 'all') {
        let res = await getGoods_api();
        state.goodsList = res.result;
      } else {
        let res = await getGoodFilter_api({ type });
        if (res.code == 1) {
          Message.success('筛选成功')
        }
        console.log(type, res.result);
        if (type == '即将上新') {
          state.flutureList = res.result;
        } else {
          state.goodsList = res.result;
          console.log(state.goodsList, '筛选');
        }
      }
    }
    let filterData = (type) => {
      state.isType = type;
      getGoodFilterData(type);
    }
    onBeforeRouteLeave((to, from) => {
      if (to.path == '/shopdetail') {
        localStorage.setItem('isType', state.isType);
      }
      store.commit('changeFooter', true);
    });
    onMounted(() => {
      // let a = document.getElementById('shoplist1')
      // a.scrollTop = 1000;
      // console.log(a);
      // listDom.value.scrollTop = state.scroll;
      getGoodsData();
      getGoodTypeData();
      getGoodFilterData('即将上新');
      state.timer = setTimeout(() => {
        listDom._value.scrollTop = state.scroll;
        clearTimeout(state.timer);
      }, 100)
    })
    return {
      ...toRefs(state),
      listDom,
      goDetail,
      filterData,
      returnTop
    }
  },
})
</script>
<style lang="scss" scoped>
.shopList {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow: auto;
  img {
    width: 100%;
  }
  .my-swiper {
    width: 100%;
    height: 2rem;
  }
  .list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    li {
      width: 50%;
      height: 5.2rem;
      list-style: none;
      box-sizing: border-box;
      margin-bottom: 0.1rem;
      text-align: center;
      position: relative;
      .price {
        color: red;
        font-size: 0.4rem;
        font-weight: bold;
      }
      .tag {
        position: absolute;
        left: 0.3rem;
        top: 0.1rem;
        z-index: 1;
      }
      p {
        text-align: left;
        padding: 0.06rem 0.3rem;
        margin: 0;
        font-weight: bold;
      }
    }
    li p:nth-child(4) {
      margin-top: 0.1rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    li p:nth-child(5) {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      padding: 0;
      padding-left: 0.3rem;
      padding-right: 0.3rem;
      padding-top: 0.1rem;
    }
  }
  .list1 {
    padding-bottom: 1rem;
    box-sizing: border-box;
  }
}
</style>
