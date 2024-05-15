<template>
  <view>
    <view class="text-center mb-3">
      <text class="inline-block pa-4-1 text-5 bor-1-zinc-300 b-rd-5 color-zinc">
        {{ title }}
      </text>
    </view>
    <slot name="content"></slot>
  </view>
</template>

<script setup lang="ts">
defineOptions({ name: 'titleMode' })

defineProps<{
  title: string
}>()

</script>
<style lang="scss" scoped></style>