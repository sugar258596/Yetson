<template>
  <view class="page  ">
    <swiper circular indicatorDots autoplay interval="2000" duration="500" class="h-95">
      <swiper-item v-for="v in details" :key="v.id">
        <view class="h-full">
          <img :src="v.url" alt="" srcset="" class="img-cover" lazy-load>
        </view>
      </swiper-item>
    </swiper>
    <unCard>
      <view class="py-3 mx-2">
        <view class="text-5 font-black accent-black">
          <text>商品名称</text>
        </view>
        <view class="t-3 indent-sm line-clamp-3">
          <text user-select>Ecommerce personalization is the art of delivering a shopping experience that targets
            individuals. It allows you to be an active part of the customer journey and interact with customers
            throughout their journey, even online.</text>
        </view>
        <view class="flex justify-between pt-1">
          <view class="flex-center gap-2">
            <!-- 优惠价 -->
            <text class="t-4 font-700 color-red">￥100</text>
            <!-- 商品价格 -->
            <text class="t-3 color-zinc-300 line-through">￥200</text>
            <!-- 折扣 -->
            <text class="t-3 color-white bg-red bor-rd-1 px-1">5折</text>
          </view>
          <view class="t-3 color-zinc-400">
            <text>库存：100</text>
          </view>
        </view>
      </view>
    </unCard>

    <view class="my-3">
      <unCard>
        <view class="h-10 flex-center gap-5 t-4">
          <view v-for="v in titleList" :key="v.id">· {{ v.title }}</view>
        </view>
      </unCard>
    </view>

    <view>
      <img class="img-cover" src="../../static/90.jpg" alt="" mode="widthFix" lazy-load>
    </view>

  </view>
  <van-goods-action>
    <van-goods-action-icon icon="chat-o" text="客服" />
    <van-goods-action-button text="立即购买" />
  </van-goods-action>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const details = reactive([
  {
    id: 1,
    url: '../../static/image/1.jpg'
  }, {
    id: 2,
    url: '../../static/image/2.jpg'
  }, {
    id: 3,
    url: '../../static/image/3.jpg'

  }, {
    id: 4,
    url: '../../static/image/4.jpg'
  }
])

const titleList = reactive([
  {
    id: 1,
    title: '免运费'
  }, {
    id: 2,
    title: '品质保证',

  }, {
    id: 3,
    title: '专属客服'

  }, {
    id: 4,
    title: '先行赔付'
  }
])

</script>
<style lang="scss" scoped></style>