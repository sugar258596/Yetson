<template>
  <view class="box-show full bor-rd-2">
     <slot></slot>
  </view>
</template>

<script setup lang="ts">
defineOptions({ name: 'card' })

</script>
<style lang="scss" scoped>
.box-show {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, .4);
}
</style>