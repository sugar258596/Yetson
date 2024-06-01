<template>
  <view>
    <van-cell-group>
      <van-field :value="formData.name" label="昵称" placeholder="请输入昵称" clearable :showClear="true" />
      <van-field :value="formData.phone" label="手机号" placeholder="请输入手机号" type="number" clearable maxlength="11"
        :showClear="true" />
      <van-field :value="formData.address" label="地址区域" placeholder="请输入地址区域" @focus="headlerInput" />
      <van-field :value="formData.details" label="详细地址" placeholder="请输入详细地址" type="textarea" clearable autosize
        :showClear="true" />
    </van-cell-group>
    <van-popup :show="show" round position="bottom" custom-style="height: 70%;" @close="headlerClose">
      <van-area :area-list="areaList" @confirm="headleConfirm" />
    </van-popup>

  </view>
</template>

<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app';
import { ref, reactive } from 'vue'
import { areaList } from '../../wxcomponents/area-data/index.esm.mjs'


const show = ref(false)

const formData = reactive({
  name: 'tang',
  phone: 12345678912,
  address: 'XX省XX市XX区',
  details: 'XX街道XX路XX花园（楼盘）XX栋XX单元XX号'
})


onLoad(() => {
  uni.setNavigationBarTitle({
    title: '修改地址'
  })
})


const headlerInput = () => {
  console.log('点击了');
  show.value = !show.value
}

const headlerClose = () => {
  console.log('111111');

}

const headleConfirm = (arr) => {
  show.value = !show.value
  let address = ''
  arr.target.values.forEach(e => {
    address = address + e.name
  });
  formData.address = address
}

</script>
<style lang="scss" scoped></style>