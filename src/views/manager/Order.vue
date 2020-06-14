<template>
  <div class="order">
    <van-nav-bar title="我的订单" style="padding:0" />
    <van-tabs v-model="active" style="margin-bottom:80px">
      <van-tab title="所有订单">
        <div v-if="allOrder==''" style="backgroud-color:#333333;text-align:center;margin-top:40%">
          <div>
            <img src="../../assets/unwaiting.png" style="border-radius:100%;" alt />
          </div>您还没有下单
        </div>
        <div v-else>
          <x-order-item v-for="item in allOrder" :data="item" :key="item.id"></x-order-item>
        </div>
      </van-tab>
      <van-tab title="待支付">
        <div v-if="ordersStatusFilter('待支付')==''" style="backgroud-color:#333333;text-align:center;margin-top:40%">
          <div>
            <img src="../../assets/unwaiting.png" style="border-radius:100%;" alt />
          </div>您还没有下单
        </div>
        <div v-else>
          <x-order-item v-for="item in ordersStatusFilter('待支付')" :data="item" :key="item.id"></x-order-item>
        </div>
      </van-tab>
      <van-tab title="待服务">
        <div v-if="ordersStatusFilter('待服务')==''" style="backgroud-color:#333333;text-align:center;margin-top:40%">
          <div>
            <img src="../../assets/unwaiting.png" style="border-radius:100%;" alt />
          </div>您还没有待揽件订单...
        </div>
        <div v-else>
          <x-order-item v-for="item in ordersStatusFilter('待服务')" :data="item" :key="item.id"></x-order-item>
        </div>
      </van-tab>
      <van-tab title="待评价">
        <div
          v-if="ordersStatusFilter('待评价')==''"
          style="backgroud-color:#333333;text-align:center;margin-top:40%"
        >
          <div>
            <img src="../../assets/unwaiting.png" style="border-radius:100%;" alt />
          </div>您未有需要评价的订单
        </div>
        <div v-else>
          <x-order-item v-for="item in ordersStatusFilter('待评价')" :data="item" :key="item.id"></x-order-item>
        </div>
      </van-tab>
      <van-tab title="已完成">
        <div v-if="ordersStatusFilter('已完成')==''" style="text-align:center;margin-top:40%;height:100%">
          <div>
            <img src="../../assets/unwaiting.png" style="border-radius:100%;" alt />
          </div>您还没有已完成订单
        </div>
        <div v-else>
          <x-order-item v-for="item in ordersStatusFilter('已完成')" :data="item" :key="item.id"></x-order-item>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      active: 1,
    };
  },
  created() {
    this.findAllByUserId(this.info.id);
  },
  computed: {
    ...mapState("user", ["info"]),
    ...mapState("order", ["allOrder"]),
    ...mapGetters("order", ["ordersStatusFilter"])
  },
  methods: {
    ...mapActions("order", ["findAllByUserId"])
  }
};
</script>
<style scoped>
</style>