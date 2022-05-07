<template>
  <div class="main">
    <div class="title">武汉</div>
    <div class="box">
      <!-- <div class="box-item">
      </div>
      <div class="box-item">
        <span class="count">+1</span>
        <span class="text">本土无症状</span>
      </div>
      <div class="box-item">
        <span class="count">+1</span>
        <span class="text">高风险地区</span>
      </div>
      <div class="box-item">
        <span class="count">+1</span>
        <span class="text">中风险地区</span>
      </div> -->
      <div class="box-item">
        <span class="count">{{wuhanObj.today?wuhanObj.today.confirm:''}}</span>
        <span class="text">新增确诊</span>
      </div>
      <div class="box-item">
        <span class="count">{{wuhanObj.total?wuhanObj.total.heal:''}}</span>
        <span class="text">累计治愈</span>
      </div>
      <div class="box-item">
        <span class="count">{{wuhanObj.total?wuhanObj.total.confirm:''}}</span>
        <span class="text">累计确诊</span>
      </div>
      <div class="box-item">
        <span class="count">{{wuhanObj.total?wuhanObj.total.dead:''}}</span>
        <span class="text">累计死亡</span>
      </div>
    </div>
    <div class="title">湖北</div>
    <div class="box">
      <div class="box-item">
        <span class="count">{{hubeiObj.today?hubeiObj.today.confirm:''}}</span>
        <span class="text">新增确诊</span>
      </div>
      <div class="box-item">
        <span class="count">{{hubeiObj.total?hubeiObj.total.heal:''}}</span>
        <span class="text">累计治愈</span>
      </div>
      <div class="box-item">
        <span class="count">{{hubeiObj.total?hubeiObj.total.confirm:''}}</span>
        <span class="text">累计确诊</span>
      </div>
      <div class="box-item">
        <span class="count">{{hubeiObj.total?hubeiObj.total.dead:''}}</span>
        <span class="text">累计死亡</span>
      </div>
    </div>
    <div class="title">中国</div>
    <div class="box">
      <div class="box-item">
        <span class="count">{{chinaObj.today?chinaObj.today.confirm:''}}</span>
        <span class="text">新增确诊</span>
      </div>
      <div class="box-item">
        <span class="count">{{chinaObj.total?chinaObj.total.heal:''}}</span>
        <span class="text">累计治愈</span>
      </div>
      <div class="box-item">
        <span class="count">{{chinaObj.total?chinaObj.total.confirm:''}}</span>
        <span class="text">累计确诊</span>
      </div>
      <div class="box-item">
        <span class="count">{{chinaObj.total?chinaObj.total.dead:''}}</span>
        <span class="text">累计死亡</span>
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted, reactive, toRefs } from 'vue';
import axios from 'axios';
export default {
  setup() {
    let state = reactive({
      wuhanObj: {},
      hubeiObj: {},
      chinaObj: {},
      list: []
    })

    onMounted(() => {
      getData();
    })
    let getData = async () => {
      let date = new Date();
      let minute = date.getMinutes();
      if (localStorage.getItem('minute') == minute) {
        console.log(minute);
        localStorage.setItem('minute', minute);
        let res = JSON.parse(localStorage.getItem('res'));

        let areaTree = res.data.data.areaTree;
        let chinaDayList = res.data.data.chinaDayList;
        let chinaTotal = res.data.data.chinaTotal;
        let lastUpdateTime = res.data.data.lastUpdateTime;
        let overseaLastUpdateTime = res.data.data.overseaLastUpdateTime;

        let chinaObj = areaTree.filter((item) => {
          return item.name == '中国';
        })[0]
        state.chinaObj = chinaObj;
        let provinceList = chinaObj.children;
        let hubeiObj = provinceList.filter((item) => {
          return item.name == '湖北'
        })[0]
        state.hubeiObj = hubeiObj;
        let hubeiList = hubeiObj.children;
        let wuhanObj = hubeiList.filter(item => {
          return item.name == '武汉'
        })[0];
        state.wuhanObj = wuhanObj;
        console.log(hubeiObj, '湖北');
      } else {
        let date = new Date();
        let minute = date.getMinutes();
        if (minute != localStorage.getItem('minute')) {
          let res = await axios({
            url: '/yq/ug/api/wuhan/app/data/list-total'
          });
          localStorage.setItem('minute', minute);
          localStorage.setItem('res', JSON.stringify(res));
          // console.log(res);
          let areaTree = res.data.data.areaTree;
          let chinaDayList = res.data.data.chinaDayList;
          let chinaTotal = res.data.data.chinaTotal;
          let lastUpdateTime = res.data.data.lastUpdateTime;
          let overseaLastUpdateTime = res.data.data.overseaLastUpdateTime;

          let chinaObj = areaTree.filter((item) => {
            return item.name == '中国';
          })[0]
          state.chinaObj = chinaObj;
          let provinceList = chinaObj.children;
          let hubeiObj = provinceList.filter((item) => {
            return item.name == '湖北'
          })[0]
          state.hubeiObj = hubeiObj;
          let hubeiList = hubeiObj.children;
          let wuhanObj = hubeiList.filter(item => {
            return item.name == '武汉'
          })[0];
          state.wuhanObj = wuhanObj;
          console.log(hubeiObj, '湖北');
        }
      }
      return;
      // https://www.free-api.com/doc/437
      let res = await axios({
        url: '/yq/ug/api/wuhan/app/data/list-total'
      });
      console.log(res);
      let areaTree = res.data.data.areaTree;
      let chinaDayList = res.data.data.chinaDayList;
      let chinaTotal = res.data.data.chinaTotal;
      let lastUpdateTime = res.data.data.lastUpdateTime;
      let overseaLastUpdateTime = res.data.data.overseaLastUpdateTime;

      let chinaObj = areaTree.filter((item) => {
        return item.name == '中国';
      })[0]
      state.chinaObj = chinaObj;
      let provinceList = chinaObj.children;
      let hubeiObj = provinceList.filter((item) => {
        return item.name == '湖北'
      })[0]
      state.hubeiObj = hubeiObj;
      let hubeiList = hubeiObj.children;
      let wuhanObj = hubeiList.filter(item => {
        return item.name == '武汉'
      })[0];
      state.wuhanObj = wuhanObj;
      console.log(hubeiObj, '湖北');
      // let list = eval(res.data.data); 
      // console.log(list, '疫情', typeof(list), res.data.data);
      //       confirm	int	较上日新增确诊个数
      // heal	int	较上日治愈个数
      // dead	int	较上日死亡个数
      // storeConfirm	int	较上日现有确诊
      // input	int	较上日境外输入确诊个数
      // confirm	int	累计确诊个数
      // heal	int	累计治愈个数
      // dead	int	累计死亡个数
    }
    return {
      ...toRefs(state)
    }
  },
}
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  .box {
    width: 80%;
    height: 3rem;
    // background-color: red;
    margin: 0.2rem auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .box-item {
      width: calc((100% / 4) - 2%);
      height: 1.4rem;
      background-color: #fffaf7;
      margin-bottom: 0.2rem;
      position: relative;
      .count {
        width: 100%;
        position: absolute;
        top: 0.4rem;
        font-size: 0.4rem;
        font-weight: bold;
        text-align: center;
      }
      .text {
        width: 100%;
        position: absolute;
        top: 0.9rem;
        font-size: 0.2rem;
        font-weight: bold;
        text-align: center;
      }
    }
    .box-item:nth-child(5) {
      background-color: #fffaf7;
      .count {
        color: rgb(229, 118, 49);
      }
    }
    .box-item:nth-child(6) {
      background-color: rgb(254, 247, 255);
      .count {
        color: rgb(174, 58, 198);
      }
    }
    .box-item:nth-child(7) {
      background-color: rgb(255, 244, 244);
      .count {
        color: rgb(190, 33, 33);
      }
    }
    .box-item:nth-child(8) {
      background-color: rgb(255, 251, 235);
      .count {
        color: rgb(240, 110, 38);
      }
    }
    .box-item:nth-child(1) {
      background-color: rgb(255, 250, 247);
      .count {
        color: rgb(229, 118, 49);
      }
    }
    .box-item:nth-child(2) {
      background-color: rgb(254, 247, 255);
      .count {
        color: rgb(174, 58, 198);
      }
    }
    .box-item:nth-child(3) {
      background-color: rgb(255, 244, 244);
      .count {
        color: rgb(230, 28, 29);
      }
    }
    .box-item:nth-child(4) {
      background-color: rgb(243, 246, 248);
      .count {
        color: rgb(78, 90, 101);
      }
    }
    .box-item:nth-child(4n) {
      margin-right: 0;
    }
  }
  .title {
    width: 80%;
    margin: auto;
    font-size: 0.34rem;
    font-weight: bold;
    line-height: 1rem;
  }
}
</style>