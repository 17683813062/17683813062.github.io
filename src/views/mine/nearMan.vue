<template>
  <div class="main">
    <div class="map" id="mapContainer"></div>
  </div>
</template>
<script>
import { useStore } from 'vuex';
import { onBeforeRouteLeave } from 'vue-router';
import { nextTick, onMounted, reactive, toRefs } from 'vue';
import { savePeopleMsg_api, getPeopleLocation_api } from '../../api';
// import AMapLoader from '@amap/amap-jsapi-loader';
// import { shallowRef } from '@vue/reactivity';
export default {
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.store.commit('changeFooter', false);
    })
  },
  setup() {
    const store = useStore();
    // let map = shallowRef(null);
    let state = reactive({
      store: store,
      localObj: {
        lng:'',
        lat:'',
        address:''
      },
      timer:null,
      user: JSON.parse(localStorage.getItem('user')),
      peopleList: []
    })
    let map = null;
    let marker = null;
    onMounted(() => {
      nextTick(() => {
        initMap();
      })
    })
    const initMap = () => {
      // https://blog.csdn.net/weixin_44727080/article/details/122927028
      map = new AMap.Map('mapContainer', {
        zoom: 12,
        // center: new AMap.LngLat(116.401337, 39.907886),
        pitch: 45, // 地图俯仰角度，有效范围 0 度- 83 度
        viewMode: '3D' // 地图模式
      })
      marker = new AMap.Marker({
        position: new AMap.LngLat(116.401337, 39.907886),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
        title: '北京',
        offset: new AMap.Pixel(-8, -3)
      });
      let content = [
        `<h6 style='font-size:0.34rem;padding:0;margin:0;line-height:0.8rem;margin-top:0.5rem'>未发货危废间</h6>`,
        `<p style='padding:0;margin:0;'>222</p>`,
        `<button onclick="goGDmap(116.401337, 39.907886})" >导航</button>`
      ];
      let infoWindow = new AMap.InfoWindow({
        content: content.join("")  //传入 dom 对象，或者 html 字符串
      });
      getLocation();
      infoWindow.open(map, [116.401337, 39.907886]);
      marker.on('click', () => {
        infoWindow.open(map, [116.401337, 39.907886]);
      })
      map.add(marker);
    }

    const getLocation = () => { // 自身定位
      AMap.plugin('AMap.Geolocation', function() {
        var geolocation = new AMap.Geolocation({
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: true,
          // 设置定位超时时间，默认：无穷大
          timeout: 10000,
          // 定位按钮的停靠位置的偏移量
          offset: [10, 20],
          //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          zoomToAccuracy: true,
          //  定位按钮的排放位置,  RB表示右下
          position: 'RB'
        })

        geolocation.getCurrentPosition(function(status, result) {
          if (status == 'complete') {
            onComplete(result)
          } else {
            onError(result)
          }
        });

        function onComplete(data) {
          // data是具体的定位信息
          state.localObj.lng = data.position.lng; // 114.38
          state.localObj.lat = data.position.lat; // 30.630
          state.localObj.address = data.formattedAddress;
          console.log(JSON.stringify(state.localObj));
          // 保存到数据库
          savePeopleMsg(data);
          getProjectLocation();
          // 
          marker = new AMap.Marker({
            position: new AMap.LngLat(state.localObj.lng, state.localObj.lat),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
            title: '我的',
            offset: new AMap.Pixel(-8, -3)
          });
          let content = [
            `<h6 style='font-size:0.3rem;padding:0;margin:0;line-height:0.5rem;margin-top:0.8rem'>${state.localObj.address}</h6>`,
            "<p style='padding:0;margin:0;'>您当前位置</p>"
          ];
          let infoWindow = new AMap.InfoWindow({
            content: content.join("")  //传入 dom 对象，或者 html 字符串
          });
          marker.on('click', () => {
            infoWindow.open(map, [state.localObj.lng, state.localObj.lat]);
          })
          infoWindow.open(map, [state.localObj.lng, state.localObj.lat]);
          map.add(marker);
          map.setCenter(new AMap.LngLat(state.localObj.lng, state.localObj.lat))
          // alert(JSON.stringify(state.localObj.lng+';'+ state.localObj.lat+';'+state.localObj.address));
          // console.log(data, 'data是具体的定位信息')
        }

        function onError(data) {
          // alert('定位出错');
          console.log(data, '定位出错');
          // savePeopleMsg(data);
          // 定位出错
        }
      })
    }


    const savePeopleMsg = async (data) => {
      let params = {
        lng: data.position.lng,
        lat: data.position.lat,
        address: data.formattedAddress,
        user: state.user
      }
      // let params = {
      //   lng:114.286461,
      //   lat:30.58485,
      //   address:'武汉江汉路',
      //   user:{username:'333',password:'333'}
      // }
      console.log(JSON.stringify(params));
      console.log('保存用户信息1');
      let res = await savePeopleMsg_api(params);
      console.log(JSON.stringify(res), '保存用户信息2');
    }
    const getProjectLocation = async () => { // 项目人员定位
      let res = await getPeopleLocation_api({ user: state.user });
      state.peopleList = res.result;
      alert(JSON.stringify(state.peopleList))
      state.peopleList.forEach(item => {
        let marker = new AMap.Marker({
          position: new AMap.LngLat(item.lng, item.lat),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
          title: item.username,
          offset: new AMap.Pixel(-8, -3)
        });
        let content = [
          `<h6 style='font-size:0.34rem;padding:0;margin:0;line-height:0.5rem;margin-top:0.5rem'>${item.username}</h6>`,
          `<p style='padding:0;margin:0;line-height:0.6rem;margin-top:0.2rem'>${item.address}</p>`,
          `<button style='float:left' disabled >私聊</button><button style='float:right' onclick="goGDmap(${item.lng+','+item.lat+','+item.address})" >导航</button>`
        ];
        let infoWindow = new AMap.InfoWindow({
          content: content.join("")  //传入 dom 对象，或者 html 字符串
        });
        marker.on('click', () => {
          infoWindow.open(map, [item.lng, item.lat]);
        })
        window.goGDmap = function(lng,lat,address) {
          // alert()
        alert(lng +';'+lat+';'+`https://uri.amap.com/navigation?from=${state.localObj.lng},${state.localObj.lat},${localObj.address}&to=${lng},${lat},${address}&mode=walk&callnative=1&coordinate=wgs84&src=mypage`)
         state.timer = setTimeout(()=>{
            window.location.href = `https://uri.amap.com/navigation?from=${state.localObj.lng},${state.localObj.lat}&to=${lng},${lat}&mode=walk&callnative=1&coordinate=wgs84&src=mypage`;
            clearTimeout(state.timer);
            // window.location.href = `androidamap://navi?sourceApplication=appname&amp;poiname=fangheng&amp;lat=${lat}&amp;lng=${lng}&amp;dev=1&amp;style=2`
         },1000)
        }
        map.add(marker);
      })
      console.log(res, '人员定位信息', state.peopleList);
    }
    onBeforeRouteLeave((to, from) => {
      store.commit('changeFooter', true);
    });
    return {
      ...toRefs(state),
      // map
    }
  },
}
</script>

<style lang="scss" scoped>
.main {
  #mapContainer {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
  }
}
</style>