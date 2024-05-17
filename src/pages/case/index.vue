<template>
  <!-- 案例 -->
  <view class="page">
    <view class="grid-2-3 pa-3-2">
      <view class="bg-red  grid-box h-35" v-for="v in 6" :key="v">
        {{ v }}
        <!-- <img class="img-cover" src="../../static/image/1.jpg" alt=""> -->
      </view>
    </view>
    <view class="px-3 py-2" v-for="v in 3" :key="v">
      <view class="full h-60 bor-rd-3">
        <img src="../../static/image/4.webp" alt="" class="img-cover">
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
import { ref } from 'vue'

</script>
<style lang="scss" scoped>
.grid-box {
  &:nth-child(3n+1) {
    grid-column: 1 / 3;
    grid-row: (n+1) / 4n;
  }
}
</style>