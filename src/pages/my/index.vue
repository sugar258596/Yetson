<template>
  <!--我的 -->
  <view class="page bg-linear">
    <!-- 未登录状态 -->
    <view class="pa-4-2 flex gap-3">
      <view class=" w-15 h-15  bor-rd-5 bg-amber">
        <img class="img-contain" src="../../static/th.jpg" alt="" lazy-load>
      </view>
      <view class="pa-0-2">
        <view class="t-4 font-700 color-black">点击显示微信头像</view>
        <view class="color-orange pa-0-2 text-3 font-700">
          <text class="bg-amber-200  pa-2-1 bor-rd-4 ">会员中心</text>
        </view>
      </view>
    </view>
    <view class="mx-5  px-3 color-zinc-300  b-rd-t-3 bg-black ">
      <view class="flex justify-between py-2 text-3">
        <view><text>成为会员享受会员价</text></view>
        <view> <text>立即注册></text></view>
      </view>
    </view>

    <view class="mt-3">
      <unCard>
        <contnetModel :List="iconList">
          <template #title>
            <view class="flex justify-between px-3 t-3">
              <view class="color-black font-700">
                <text>我的订单</text>
              </view>
              <view>
                <text>查看全部订单></text>
              </view>
            </view>
          </template>
        </contnetModel>
      </unCard>
    </view>

    <view class="mt-3">
      <unCard>
        <contnetModel :List="titltLsit" @headle-click="goAddress">
        </contnetModel>
      </unCard>
    </view>
    <view class="mt-3">
      <unCard>
        <contnetModel :List="afterSalesList">
          <template #title>
            <view class="flex justify-between px-3 t-4">
              <view class="color-black font-700"> 售后服务 </view>
            </view>
          </template>
        </contnetModel>
      </unCard>
    </view>
    <button @click="routerTo">
      跳转2
    </button>
    <button @click="login">登录</button>
  </view>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import contnetModel from './components/contnet.vue';


const iconList = reactive([
  {
    id: 1,
    title: '待付款',
    icon: '../../../static/icon/daifukuan.png'
  }, {
    id: 2,
    title: '待发货',
    icon: '../../../static/icon/daifahuo.png'
  }, {
    id: 3,
    title: '待收货',
    icon: '../../../static/icon/daishouhuo.png'
  },
  {
    id: 4,
    title: '待使用/完成',
    icon: '../../../static/icon/daishiyong.png'
  }, {
    id: 5,
    title: '退款/售后',
    icon: '../../../static/icon/shouhou.png'
  }
])

const titltLsit = reactive([
  {
    id: 1,
    title: '购物车',
    url: "module"
  }, {
    id: 2,
    title: '收货地址',
    url: "address"
  }, {
    id: 3,
    title: '客户咨询',
    url: "consult"
  }, {
    id: 4,
    title: '优惠卷',
    url: "coupon"
  },
  {
    id: 6,
    title: '个人信息',
    url: 'info'
  }
])

const afterSalesList = reactive([
  {
    id: 1,
    title: '进度查询',
  }, {
    id: 2,
    title: '照片回传',
  }, {
    id: 3,
    title: '常见问题',
  }
])


const routerTo = () => {
  uni.navigateTo({
    url: '/subpages/shop/details'
  });
}

const login = () => {
  uni.login({
    provider: 'weixin',
    success: function (res) {
      console.log('登录成功', res);
    }
  });
}

const goAddress = (e: any) => {
  uni.navigateTo({
    url: `/subpages/settings/${e.url}`
  });
}

</script>
<style lang="scss" scoped></style>