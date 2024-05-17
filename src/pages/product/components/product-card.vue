<template>
  <view class="py-3">
    <view class="t-5 text-center fw-black color-black ">
      <text class="p-2  underline">商品类别</text>
    </view>
    <view class="grid-2-3 mt-3">
      <block v-for="(v, i) in list" :key="i">
        <Card class="">
          <view class="h-40 w-full">
            <img class="img-cover" :src="v.url" alt="" lazy-load>
          </view>
          <view class=" color-zinc-600 text-center flex flex-col pt-1 pb-3">
            <text class="font-black">{{ v.name }}</text>
            <text class="t-3">${{ v.price }}</text>
          </view>
        </Card>
      </block>
    </view>
  </view>
</template>

<script setup lang="ts">

import type { ProductCardProps } from './props'

defineOptions({ name: 'ProductCardModel' })


defineProps<{
  title: string,
  list: ProductCardProps[]
}>()

</script>
<style lang="scss" scoped></style>