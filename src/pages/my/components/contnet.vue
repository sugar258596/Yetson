<template>
  <view class="mt-3">
    <slot name="title"></slot>
    <view class="grid-5-0 py-2 ">
      <block v-for="(item, index) in List" :key="item.id">
        <view class="flex flex-col items-center gap-2   py-3" @click="headleClick(item)">
          <view class="w-8 h-8" :wx:if="item.icon">
            <img class="img-cover" :src="item.icon" alt="" lazy-load>
          </view>
          <view class="t-3 color-black">{{ item.title }}</view>
        </view>
      </block>
    </view>
  </view>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { contnetProps } from './props'

defineProps({
  List: {
    type: Array as PropType<contnetProps[]>,
    required: true
  },
})

const emits = defineEmits<{
  (event: 'headleClick', tager: contnetProps): void
}>()

const headleClick = (tager: contnetProps) => {
  emits('headleClick', tager)
}

</script>
<style lang="scss" scoped></style>