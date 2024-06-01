<template>
  <view class="flex h-15 px-3 py-2">
    <view class="flex-center h-full w-15 bg-zinc-200 aspect-ratio-square bor-rd-10 ">
      <text class="t-6"> 糖</text>
    </view>
    <view class="flex justify-between items-center flex-auto  mx-1">
      <view class="t-3 flex-1 flex flex-col px-2">
        <view>
          <text>名字</text>
          <text>1234567890</text>
        </view>
        <view class="line-clamp-2">
          <text>XX省XX市XX区XX街道XX路XX花园（楼盘）XX栋XX单元XX号</text>
        </view>
      </view>
      <view class="text-4 border-l-1-zinc-200 p-2" @click="headleEdit">
        <text class="color-zinc-300">修改</text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineOptions({ name: 'addCard' })

const emits = defineEmits<{
  (event: 'headleEdit'): void
}>()

const headleEdit = () => {
  emits('headleEdit')
}

</script>
<style lang="scss" scoped></style>