<template>
  <div class="leaveBox">
    <div @click="picktIME" class="pickTime">{{time}}</div>
    <div class="scrollBox">
      <div v-for="(item,index) in leaveList" :key="index" class="scroll-item">
        <h6>{{item.name}}</h6>
        <p>{{item.content}}</p>
        <div class="foot">
          <p>{{item.wxphone}}</p>
          <p>{{item.time}}</p>
        </div>
      </div>
    </div>
  </div>
  <t-date-time-picker v-if="timeFlag" v-model="time" :mode="['year', 'month']" title="选择年月" @confirm="onConfirm"
    @cancel="onCancel" />
</template>
<script>
import { onMounted, reactive, toRefs } from 'vue';
import { findLeaveword_api } from '../../api';
export default {
  setup() {
    let state = reactive({
      leaveList: [],
      timeFlag: false,
      time: ''
    })

    let onConfirm = (context) => { // 确认
      state.timeFlag = false;
      state.time = context.value;
      getLeaveListData(context.value);
    }
    let onCancel = () => { // 取消-选择时间
      state.timeFlag = false;
      state.time = getToday();
    }
    let picktIME = () => {
      state.timeFlag = true;
    }

    onMounted(() => {
      state.time = getToday();
      getLeaveListData(state.time);
    })
    let getToday = () => {
      let myDate = new Date();
      let year = myDate.getFullYear();
      let month = myDate.getMonth() + 1;
      if (Number(month) < 10) {
        month = '0' + month
      }
      console.log(year + '-' + month);
      return year + '-' + month
    }
    let getLeaveListData = async (time) => { // 留言列表
      let res = await findLeaveword_api({time});
      state.leaveList = res.result;
      console.log(res, '留言列表');
    }

    return {
      ...toRefs(state),
      onConfirm,
      onCancel,
      getToday,
      picktIME
    }
  },
}
</script>

<style lang="scss" scoped>
.leaveBox {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  .pickTime {
    width: 100%;
    height: 8%;
    border-bottom: 1px solid #e7e7e7;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.4rem;
  }
  .scrollBox {
    width: 100%;
    height: calc(100% - 8%);
    padding-bottom: 1.3rem;
    box-sizing: border-box;
    overflow-y: scroll;
    .scroll-item{
      width: 100%;
      height: 2.3rem;
      border-bottom: 1px solid #e7e7e7;
      padding:0.1rem 0.2rem;
      box-sizing: border-box;
      position: relative;
      h6{
        margin: 0;
        font-size: 0.36rem;
        margin-bottom:0.1rem;
      }
      p{
        font-size: 0.28rem;
        margin: 0;
        line-height: 0.5rem;
        overflow:hidden;
        text-overflow:ellipsis;
        display:-webkit-box;
        -webkit-line-clamp:2;
        -webkit-box-orient:vertical;
      }
      .foot{
        width: 100%;
        box-sizing: border-box;
        height: 0.6rem;
        line-height: 0.6rem;
        display: flex;
        justify-content: space-between;
        position: absolute;
        left:0;
        bottom:0;
        font-size: 0.3rem;
        padding:0rem 0.2rem;
      }
    }
  }
}
</style>