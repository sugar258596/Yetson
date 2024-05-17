<template>
  <!-- 商品 -->
  <view class="page px-3 pt-2">
    <ProductCardModel :title="'商品类别'" :list="List"></ProductCardModel>
    <ProductCardModel :title="'商品类别'" :list="List"></ProductCardModel>
  </view>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

import ProductCardModel from './components/product-card.vue'


const List = reactive([
  {
    url: "../../../static/image/4.jpg",
    name: "商品名称",
    price: 9.99
  },
  {
    url: "../../../static/image/4.jpg",
    name: "商品名称",
    price: 9.99
  }
])


</script>
<style lang="scss" scoped></style>