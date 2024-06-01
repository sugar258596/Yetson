<template>
  <!-- 案例 -->
  <view class="page">
    <view class="grid-2-3 pa-3-2 ">
      <view class="bg-red  grid-box h-35" v-for=" v  in  6 " :key="v">
        {{ v }}
        <!-- <img class="img-contain" src="../../static/image/1.jpg" alt=""> -->
      </view>
    </view>
    <!-- 新加 -->
    <view class="py-3 px-4">
      <view class="text-center ">
        <view class="text-5 font-black color-blue-400">
          <text>可治愈案例</text>
        </view>
        <view class="t-3 mt-2">
          <text>Boost Aligners 无需使用任何金属或金属丝（如牙套）即可矫正您的牙齿。您将接受检查并接受医生的监控，以确保您的治疗安全、易懂且有效。</text>
        </view>
      </view>
      <view class="grid-2-3 mt-5">
        <block v-for="v in tooth" :key="v.id">
          <view>
            <view class="h-25">
              <img class="img-cover" :src="v.url" alt="" mode="aspectFit">
            </view>
            <view class="text-4 text-center">
              <view class="color-blue-400 font-black">
                <text>{{ v.title }}</text>
              </view>
              <view class="mt-2 text-3">
                <text> {{ v.content }} </text>
              </view>
            </view>
          </view>
        </block>
      </view>
    </view>
    <view class="px-3 py-2" v-for=" v  in  3 " :key="v">
      <view class="full h-60 bor-rd-3">
        <img src="../../static/image/4.webp" alt="" class="img-cover" mode="widthFix">
      </view>
      <view class="my-2">
        <view class="t-0 text-center font-black">
          <text class=" text-5 ">Fast, easy and simple!</text>
        </view>
        <view class="indent-2">
          <text class="t-3" user-select> Having a big smile and a good laugh is very important to me on the daily.
            That’s why I’ve
            decided to start my invisible braces journey with NewSmile®</text>
        </view>
        <view></view>

      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const tooth = reactive([
  {
    id: 1,
    title: '擁擠',
    content: '牙齿间隙过大会导致牙齿无法正常生长。牙齿可能会旋转或重叠',
    url: '../../static/case/tooth-1.jpg'
  },
  {
    id: 2,
    title: '過度覆合',
    content: '当上下牙齿不能正确咬合时就会发生这种情况，在某些情况下还会向外突出。',
    url: '../../static/case/tooth-2.jpg'
  },
  {
    id: 3,
    title: '反颌',
    content: '当下牙延伸超过上前牙时就会发生这种情况',
    url: '../../static/case/tooth-3.jpg'
  },
  {
    id: 4,
    title: '间距',
    content: '当您有多余的空间时，就会发生这种情况，从而导致牙齿之间出现缝隙。',
    url: '../../static/case/tooth-4.jpg'
  },
])

</script>
<style lang="scss" scoped>
.grid-box {
  &:nth-child(3n+1) {
    grid-column: 1 / 3;
    grid-row: (n+1) / 4n;
  }
}
</style>