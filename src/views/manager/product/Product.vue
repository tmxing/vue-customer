<template>
  <div class="product">
    <!-- 调用自定义组件，全屏显示 -->
    <x-fulllayout title="产品页面">
      <van-row gutter="20" style="margin-bottom:80px">
        <van-col span="6">
          <!-- 左侧栏目导航栏 -->
          <van-sidebar v-model="activeKey">
            <van-sidebar-item
              v-for="item in allCategory"
              :key="item.id"
              :title="item.name"
              @click="findProductHandler(item.id)"
            />
          </van-sidebar>
        </van-col>
        <van-col span="18">
          <!-- {{product}} -->
          <!-- 点击左侧  右侧显示点击栏目下的产品 -->
          <x-product-item v-for="item in product" :key="item.id" :data="item"></x-product-item>
        </van-col>
      </van-row>
      <div class="saveDiv">
        <van-col span="12">金额：￥{{total}}</van-col>
        <van-col span="12">
          <span @click="toOrderHandler" style="cursor:pointer">立即预约</span>
        </van-col>
      </div>
    </x-fulllayout>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      activeKey: 0
    };
  },
  computed: {
    ...mapState("home", ["allCategory", "product"]),
    // 总额
    ...mapGetters("shopcar", ["total"])
  },
  created() {
    // 点击首页中对应的栏目，跳转到产品页面相对于的栏目
    (this.activeKey = this.$route.query.index),
      this.findAllCategory().then(() => {
        if (this.$route.query.id) {
          this.findProductById(this.$route.query.id);
        } else {
          this.findProductById(this.allCategory[0].id);
        }
      });
  },
  methods: {
    ...mapActions("home", ["findAllCategory", "findProductById"]),
    // 立即预约
    toOrderHandler() {
      this.$router.push({
        // 跳转到 订单确认 页面
        path: "/manager/order_confirm"
      });
    },
    // 根据栏目id查询其所有产品
    findProductHandler(id) {
      this.findProductById(id);
    }
  }
};
</script>

<style scoped>
.saveDiv {
  height: 40px;
  background-color: rgb(68, 67, 67);
  position: fixed;
  bottom: 0;
  width: 100%;
  padding-top: 2em;
  font-size: 1em;
  text-align: center;
  color: #f4f4f4;
}
</style>