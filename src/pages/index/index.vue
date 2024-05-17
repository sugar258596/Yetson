<template>
  <!-- 首页 -->
  <view class="full page">
    <swiper-model> </swiper-model>
    <view class="mt-3">
      <titleMode :title="'定制流程'">
        <template #content>
          <view class="pa-3-0 t-4">
            <view v-for="v in start" :key="v.id">
              <view class="full h-45 bor-rd-2">
                <img class="img-cover" :src="v.url" alt="" srcset="" lazy-load />
              </view>
              <view class="text-center ma-0-3">
                <text class="border-b-1-blue-400 pa-7-1">{{ v.id }}</text>
              </view>
              <view class="text-3.5">
                <text class="indent-sm" user-select="true">
                  {{ v.content }}</text>
              </view>
            </view>
          </view>
        </template>
      </titleMode>
      <view class="mt-5">
        <titleMode :title="'品牌优势'">
          <template #content>
            <scroll-view scroll-x>
              <view class="flex gap-3 justify-between px-2 pb-3">
                <Card class="w-50" v-for="v in 5" :key="v" style="flex: 0 0 auto">
                  <view class="full h-50">
                    <img class="img-cover" src="../../static/image/1.jpg" alt="" lazy-load />
                  </view>
                  <view class="ma-2-1">
                    <text class="t-4 indent-sm block" user-select>
                      You'll receive an Impression Kit to create perfect molds
                      of your teeth at home. Book a video call with an
                      Impression Specialist for help with your impressions. send
                      them back using your pre-paid shipping label.,
                    </text>
                  </view>
                </Card>
              </view>
            </scroll-view>
          </template>
        </titleMode>
      </view>
    </view>
    <view class="grid-3-2 ma-5-2">
      <block v-for="v in 5" :key="v">
        <view>
          <img class="img-cover" :src="`../../static/logo/logo-${v}.webp`" alt="" srcset="" lazy-load />
        </view>
      </block>
    </view>
  </view>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import swiperModel from "./component/swiper.vue";
import titleMode from "./component/titleMode.vue";

const start = reactive([
  {
    id: 1,
    content: `You'll receive an Impression Kit to create perfect molds of your teeth at home. Book a video call with an Impression Specialist for help with your impressions. send them back using your pre-paid shipping label.`,
    url: "../../static//image/1.webp",
  },
  {
    id: 2,
    content: `We will provide a 3D Treatment Preview of what your straight teeth will look like. You'll have a chance to approve this before we start custom making your invisible braces.`,
    url: "../../static//image/2.webp",
  },
  {
    id: 3,
    content: `We'll send all of your clear aligners, a set of retainers, and professional teeth whitening in the mail. imply by wearing them, straighten teeth at home for a confident smile in a few months.`,
    url: "../../static//image/3.webp",
  },
]);
</script>
<style lang="scss" scoped></style>
