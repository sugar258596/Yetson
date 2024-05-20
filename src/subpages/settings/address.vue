<template>
  <view>
    <van-swipe-cell>
      <view slot="left" class="van-swipe-cell__left">选择</view>
      <van-cell-group>
        <van-cell title="单元格" value="内容" />
      </van-cell-group>
      <view slot="right" class="van-swipe-cell__right">删除</view>
    </van-swipe-cell>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

</script>
<style lang="scss" scoped></style>