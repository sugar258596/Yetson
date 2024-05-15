<template>
  <!-- 首页 -->
  <view class="full">
    <swiper-model> </swiper-model>
    <view class="mt-3">
      <view class="text-center">
        <text class="inline-block pa-4-1 text-5 bor-1-zinc-300 b-rd-5 color-zinc">
          定制流程
        </text>
      </view>
      <view class="pa-3-0 color-zinc-500 text-4">
        <view class="ma-0-5" v-for="v in start" :key="v.id">
          <view class="full h-45 b-rd-2 overflow-hidden">
            <img class="img-cover" :src="v.url" alt="" srcset="" />
          </view>
          <view class="text-center ma-0-3">
            <text class="border-b-1-blue-400 pa-7-1">{{ v.id }}</text>
          </view>
          <view class="indent-sm">
            <text class="text-3.5 "> {{ v.content }}</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import swiperModel from "./component/swiper.vue";

const start = reactive([
  {
    id: 1,
    content: `You'll receive an Impression Kit to create perfect molds of your teeth at home. Book a video call with an Impression Specialist for help with your impressions. send them back using your pre-paid shipping label.`,
    url: "../../static//image/1.webp",
  },
  {
    id: 2,
    content: ` We will provide a 3D Treatment Preview of what your straight teeth will look like. You'll have a chance to approve this before we start custom making your invisible braces.`,
    url: "../../static//image/2.webp",
  },
  {
    id: 3,
    content: ` We'll send all of your clear aligners, a set of retainers, and professional teeth whitening in the mail. imply by wearing them, straighten teeth at home for a confident smile in a few months.`,
    url: "../../static//image/3.webp",
  },
]);
</script>
<style lang="scss" scoped></style>
