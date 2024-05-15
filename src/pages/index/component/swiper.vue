<template>
  <view class="uni-margin-wrap">
    <swiper circular indicatorDots autoplay interval="2000" duration="500">
      <block v-for="v in swiperLise" :key="v.id">
        <swiper-item class="w-full h-full">
          <img class="img-cover" :src="v.url" />
        </swiper-item>
      </block>
    </swiper>
  </view>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const swiperLise = reactive([
  {
    id: 1,
    url: "../../../static/image/1.jpg",
  },
  {
    id: 2,
    url: "../../../static/image/2.jpg",
  },
  {
    id: 3,
    url: "../../../static/image/3.jpg",
  },
  {
    id: 4,
    url: "../../../static/image/4.jpg",
  },
]);
</script>
<style lang="scss" scoped></style>
