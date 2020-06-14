<template>
  <div class="home" style="margin-bottom:80px">
    <!-- 轮播 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" >
      <van-swipe-item><img src="../../assets/wm.jpg" alt="" style="background-size:contain;width: 100%;"></van-swipe-item>
      <van-swipe-item><img src="../../assets/wm2.jpg" alt="" style="background-size:contain;width: 100%;"></van-swipe-item>
      <van-swipe-item><img src="../../assets/wm3.jpg" alt="" style="background-size:contain;width: 100%;"></van-swipe-item>
    </van-swipe>

    <!-- 一行3列 所有栏目 -->
    <van-grid :border="false" :column-num="3">
      <van-grid-item @click="toProductHandler(item.id,index)" v-for="(item,index) in allCategory" :key="item.id" v-show="index<5">
        <img v-if="index===0" src="../../assets/lb3.jpg" style="width:60%;height:100%"/>
        <img v-else :src="item.icon" style="width:60%;"/>
        <div>{{item.name}}</div>
      </van-grid-item>
      <van-grid-item>
        <van-grid-item style="width:60%;" @click="loadMore" icon="add-o" />
        <div>加载更多</div>
      </van-grid-item>
    </van-grid>
    <!-- 所有产品 -->
    <van-grid :border="false" :column-num="1" :center="false">
      <van-row gutter="20" v-for="item in allProduct" :key="item.id">
        <van-col span="8">
          <van-image :src="item.photo" />
        </van-col>
        <van-col span="16">
          <div>商品名：{{item.name}}</div>
          <div>单价：￥{{item.price}}</div>
          <div>描述：{{item.description}}</div>
        </van-col>
      </van-row>
    </van-grid>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState("home", ["allProduct", "allCategory"]),
    ...mapGetters("home", ["newAllProduct"])
  },
  created() {
    this.findAllProduct();
    this.findAllCategory();
  },
  methods: {
    ...mapActions("home", ["findAllProduct", "findAllCategory"]),
    // 跳转到产品页面
    toProductHandler(id,index) {
      this.$router.push({
        path: "/manager/product",
        query: { id, index }
      });
    },
    // 加载更多
    loadMore() {
      this.$router.push({
        path: "/manager/product"
      });
    }
  }
};
</script>
<style scoped>
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    height: 200px;
    
  }
</style>