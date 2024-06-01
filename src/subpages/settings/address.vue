<template>
  <view class="full">
    <view v-for="v in 3" :key="v" class="address">
      <van-swipe-cell right-width="65" async-close @close="onClose">
        <addCardItem @headle-edit="headleEdit"></addCardItem>
        <view slot="right" class="flex-center full color-white bg-red w-60px">删除</view>
      </van-swipe-cell>
    </view>
    <van-dialog id="van-dialog" />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Dialog from '@/wxcomponents/vant/dialog/dialog';
import addCardItem from './components/addCard.vue'

const onClose = (event: any) => {
  const { position, instance } = event.detail;

  switch (position) {
    case 'left':
    case 'cell':
      instance.close();
      break;
    case 'right':
      Dialog.confirm({
        message: '确定删除吗？',
      }).finally(() => {
        instance.close();
      }).catch((err) => {
        //抛出异常
        throw new Error('取消删除');
      });
      break;
  }
}

const headleEdit = () => {
  console.log('修改');

}

</script>
<style lang="scss" scoped>
.address {
  &:not(:last-of-type) {
    border-bottom: 1px solid #e3e3e3;
  }
}
</style>