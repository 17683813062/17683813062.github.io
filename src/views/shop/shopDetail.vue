<template>
  <div>
    <t-navbar>
      详情
      <template #right>
        <sound-icon></sound-icon>
      </template>
    </t-navbar>
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="item in goodObj.bannerList" :key="item">
        <van-image width="100%" height="7rem" fit="cover" :src="item.url" />
      </van-swipe-item>
    </van-swipe>
    <div class="goodsMsg">
      <t-button @click="editGoods()" v-if="user?(user.username=='111'):false" theme="primary" size="small">编辑商品</t-button>
      <t-button style="margin-left:0.2rem" @click="removeGoods()" v-if="user?(user.username=='111'):false" theme="primary" size="small">删除商品</t-button>
      <h6>￥{{goodObj.price}}</h6>
      <p>{{goodObj.title}}</p>
      <p>类型：{{goodObj.typeName}}</p>
      <p>{{goodObj.desc}}</p>

      <div class="goodHtml" v-html="goodObj.html">

      </div>
    </div>
  </div>
</template>
<script>
import { onMounted } from 'vue';
import { reactive, toRefs } from 'vue';
import { defineComponent } from 'vue';
import { useRoute, useRouter, onBeforeRouteLeave } from 'vue-router';
import { getGoodDetail_api, removeGoods_api } from '../../api';
import { useStore } from 'vuex';
export default defineComponent({
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.store.commit('changeFooter', false);
    })
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    let state = reactive({
      store: store,
      user: JSON.parse(localStorage.getItem('user')),
      goodObj: {
        _id: '',
        bannerList: [],
        title: '',
        desc: '',
        price:null,
        html: '',
        typeName: '',
        typeId: '',
      }
    })
    let removeGoods = async() => {
      let res = await removeGoods_api({_id:state.goodObj._id});
      console.log(res, '删除商品');
      router.push({path:'/shop'});
    }
    let editGoods = () => { // 编辑商品
      router.push({ path: '/editgood', query: { _id: state.goodObj._id } });
    }
    let getGoodDetail = async (_id) => {
      let res = await getGoodDetail_api({ _id });
      state.goodObj.bannerList = JSON.parse(res.result[0].bannerList);
      state.goodObj.title = res.result[0].title;
      state.goodObj.desc = res.result[0].desc;
      state.goodObj.price = res.result[0].price;
      state.goodObj.html = res.result[0].html;
      state.goodObj.typeName = res.result[0].typeName;
      state.goodObj.typeId = res.result[0].typeId;
    }
    onMounted(() => {
      state.goodObj._id = route.query._id;
      // console.log(route.query, '参数');
      getGoodDetail(route.query._id);
    })
    onBeforeRouteLeave((to, from) => {
      store.commit('changeFooter', true);
    });
    return {
      ...toRefs(state),
      editGoods,
      removeGoods
    }
  },
})
</script>

<style lang="scss" scoped>
.goodsMsg {
  width: 100%;
  padding: 0.1rem 0.2rem;
  box-sizing: border-box;
  padding-bottom: 1rem;
  h6 {
    color: red;
    font-weight: bold;
    font-size: 0.4rem;
    margin: 0;
  }
  p {
    font-size: 0.28rem;
    font-weight: bold;
  }
  .goodHtml {
    margin-top: 0.8rem;
  }
}
</style>
