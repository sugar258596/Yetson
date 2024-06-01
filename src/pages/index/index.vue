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
                <img class="img-contain" :src="v.url" alt="" srcset="" lazy-load />
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
      <view class="pt-5 bg-linear">
        <titleMode :title="'品牌优势'" class=" color-white">
          <template #content>
            <scroll-view scroll-x>
              <view class="flex gap-3 justify-between px-2 pb-3">
                <unCard class="w-50" v-for="v in 5" :key="v" style="flex: 0 0 auto">
                  <view class="full h-50">
                    <img class="img-contain" src="../../static/image/1.jpg" alt="" lazy-load />
                  </view>
                  <view class="ma-2-1">
                    <text class="t-4 indent-sm" user-select>
                      You'll receive an Impression Kit to create perfect molds
                      of your teeth at home. Book a video call with an
                      Impression Specialist for help with your impressions. send
                      them back using your pre-paid shipping label.,
                    </text>
                  </view>
                </unCard>
              </view>
            </scroll-view>
          </template>
        </titleMode>
      </view>
    </view>
    <view class="grid-3-2 ma-5-2">
      <block v-for="v in 5" :key="v">
        <view>
          <img class="img-contain" :src="`../../static/logo/logo-${v}.webp`" alt="" srcset="" lazy-load />
        </view>
      </block>
    </view>
    <!-- 新加 -->
    <view class="p-5 color-white bg-linear text-center ">
      <view class="text-8 ">
        <text>是什麽讓我們更出色？</text>
        <text>WHAT MAKES US BETTER?</text>
      </view>
      <view class="text-3 mt-5">
        <text>
          Boost Aligners™薄適透牙齒矯正系統由 EssixACE®高性能納米塑膠製成,與其他市面上大品牌的多壓膠相比，其可用力一貫地高出 54%
        </text>
      </view>
      <view class="flex justify-between px-8 py-2 font-black text-4 mt-5 color-black bg-white bor-rd-1 ">
        <view>
          <text>EssixACE®</text>
        </view>
        <view>
          <text>多層壓膠 Multi-laminate*</text>
        </view>
      </view>
      <view class="text-3 grid-2-5 text-center">
        <block v-for="v in table.grid" :key="v.id">
          <view class="py-5 border-b-1-black b-b-dashed">
            <text>{{ v.content }}</text>
          </view>
        </block>
      </view>
      <view class="flex flex-col gap-2 justify-center my-5 text-3 font-600">
        <block v-for="v in table.iocnText" :key="v.id">
          <view class="flex-center gap-3">
            <view class="w-12 h-12 bor-rd-10 bg-white"></view>
            <view class="flex flex-col gap-1 w-60 bg-white bor-rd-10 px-8 py-1 color-black">
              <span>{{ v.content }}</span>
              <span> {{ v.English }}</span>
            </view>
          </view>
        </block>
      </view>
      <view class="w-full bor-2-zinc color-black font-600 text-3 py-2 px-3">
        <view>
          <text> 衆多牙醫和矯正專科醫生信賴的透明牙套</text>
        </view>
        <view class="mt-1">
          <text> THE CLEAR ALIGNERS THAT DOCTORS TRUST</text>
        </view>
      </view>
      <view class="mt-3  text-left">
        <view class="text-3">
          <text>
            市面上大部分透明牙套品牌都使用多層壓膠
          </text>
        </view>
        <view class="text-2">
          <text>
            * Multi-laminate plastic is used by major leading brands in the market.
          </text>
        </view>
      </view>
    </view>
    <!-- footer -->
    <view class="p-3">
      <view class="t-3 font-black">
        <view>
          <text>已獲得全球主要醫療監管機構的注冊，批准及認可：</text>
        </view>
        <view class="mt-1">
          <text>Approved by major regulatory agencies worldwide:</text>
        </view>
      </view>
      <view class="grid-3-3">
        <block v-for=" v in 5" :key="v">
          <view class="h-10">
            <img class="img-contain" :src="`../../static/home/footer-${v}.jpg`" alt="" srcset="">
          </view>
        </block>
      </view>
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

const table = reactive({
  grid: [

    {
      id: 1,
      content: "在整個治療過程中保持其溫和矯齒力量長達 14 天"
    },
    {
      id: 2,
      content: "在24小時後已經減弱了 45%的矯齒力量"
    },
    {
      id: 3,
      content: "更多的可用力，因此可以用於矯正各種咬合不正和牙齒不整齊"
    },
    {
      id: 4,
      content: "可用力較少，因此不能用於矯正比較複雜的咬合不正"
    },
    {
      id: 5,
      content: "保證牙套的清晰度及長期透明度，不變色"
    },
    {
      id: 6,
      content: "很容易被咖啡或茶染成啡黃色；牙套很短時間内便會變黃"
    },
    {
      id: 7,
      content: "美國藥管局 FDA Cleared (K062828)"
    },
    {
      id: 8,
      content: "資料不齊全、模糊"
    },
  ],
  iocnText: [
    {
      id: 1,
      content: '性價比更高的治療',
      English: 'Cost Effective Treatment',
      icon: ""
    },
    {
      id: 2,
      content: '更快的治療過程',
      English: 'Quick Process',
      icon: ""
    },
    {
      id: 3,
      content: '新一代療程',
      English: 'Next Generation Treatment',
      icon: ""
    },
  ]


})
</script>
<style lang="scss" scoped></style>
