<template>
  <div>
    <t-button @click="addShop" theme="primary">添加商品</t-button>
    <van-dialog @cancel="onCancel" @confirm="submitGoods()" v-model:show="show" title="添加商品" show-cancel-button>
      <t-input v-model="title" label="标题" type="text" clearable />
      <t-input v-model="desc" label="简介" type="text" clearable />
      <t-input v-model="price" label="价格" type="number" clearable />
      <t-input @click="pickType" v-model="type" label="选择类型" type="text" />
      <ul class="fileList">
        <li @click="removeFileList(index)" v-for="(item, index) in fileList1" :key="index">
          <div :style="'background: url(' + item.url + ') top center no-repeat;background-size: cover;'" class="imgBox">
          </div>
        </li>
      </ul>
      <van-uploader multiple :after-read="afterRead" />
    </van-dialog>

    <t-button @click="addShopType" theme="primary">添加商品类型</t-button>
    <van-dialog @confirm="addGoodType()" v-model:show="show1" title="添加商品类型" show-cancel-button>
      <van-field v-model="goodType" label="商品类型" placeholder="请输入商品类型" />
    </van-dialog>
    <van-dialog :showConfirmButton="false" v-model:show="show2" title="选择商品类型">
      <van-picker :columns-field-names="customFieldName" title="选择" :columns="typeList" @confirm="onConfirm1"
        @cancel="onCancel1" @change="onChange" />
    </van-dialog>
  </div>
</template>
<script>
import { upload_dictionary, addGoods_api, addGoodType_api, getGoodType_api } from "../../api";
import { reactive, toRefs, ref, onMounted } from 'vue'
import { Message } from 'tdesign-mobile-vue';
import {serverUrl} from '../../config_url';
export default {
  setup() {
    let state = reactive({
      serverUrl:serverUrl,
      show: false,
      show1: false,
      show2: false,
      title: '',
      desc: '',
      price:null,
      type: '',
      goodType: '',
      typeObj: {},
      fileList1: [],
      typeList: [],
      customFieldName: {
        text: 'name',
        value: '_id'
      }
    })
    let onConfirm1 = (value, index) => {
      state.typeObj = value;
      state.type = value.name;
      state.show2 = false;
      console.log(state.type)
    }
    let addGoodType = async () => {
      let res = await addGoodType_api({ type: state.goodType });
      if (res.code == 1) {
        getGoodTypeData();
        Message.success('添加商品类型成功')
      }
    }
    let onCancel1 = () => {
      state.show2 = false;
      state.typeObj = {}
      state.type = '';
    }
    let pickType = () => {
      state.show2 = true;
    }
    let addShopType = () => { // 添加商品类型
      state.show1 = true;
    }
    let addShop = () => {
      state.show = true;
    }
    let submitGoods = async () => {
      const { title, desc, price, fileList1, typeObj } = state;
      if (!title || !desc || !price || !typeObj._id){
        Message.error('请正确填写内容');
        return;
      }
      let res = await addGoods_api({ title, desc, price, fileList1, typeId: typeObj._id, typeName: typeObj.name });
      state.show = false;
      if (res.code == 1) {
        state.title = '';
        state.fileList1 = [];
        state.desc = '';
        state.typeObj = {};
        state.type = '';
        state.price = '';
        Message.success('添加商品成功')
      }
    }
    let onCancel = () => {
      state.show = false;
      state.title = '';
      state.desc = '';
      state.fileList1 = [];
      state.typeObj = {}
      state.type = '';
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
      upload_dictionary(formData).then(result => {
        let list = state.fileList1;
        result.fileList.forEach(item => {
          list.push({ url: state.serverUrl + item.filename });
        })
        state.fileList1 = list
        console.log('上传成功1', state.fileList1, list);
      })
    }

    let getGoodTypeData = async () => {
      let res = await getGoodType_api();
      state.typeList = res.result;
    }
    onMounted(() => {
      getGoodTypeData();
    })
    return {
      ...toRefs(state),
      onConfirm1,
      onCancel1,
      pickType,
      addGoodType,
      addShopType,
      removeFileList,
      addShop,
      submitGoods,
      onCancel,
      afterRead,
    }
  },
}
</script>

<style lang="scss" scoped>
.fileList {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  li {
    width: 33%;
    list-style: none;

    .imgBox {
      width: 100%;
      height: 2rem;
    }
  }
}
</style>