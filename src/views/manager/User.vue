<template>
  <div class="user">
    <div class="header">
      <div class="photo">
        <img :src="info.avatar" alt=""/>
      </div>
      <div class="name" style="border:1px solid #333333;margin:2em 12em;border-radius:10px;padding:0">你好,{{info.name}}</div>
    </div>
    <div class="money">
      <div>
        <div  style="font-size:12px">账户余额</div>
        <div style="color:#FF6633">￥0</div>
      </div>
      <span style="border:1px solid #f3f3f3;margin:.5em"></span>
      <div style="color:#FF6633;">充值</div>
    </div>
    <div class="line" @click="toAddressHandler">
      新增地址
    </div>
    <van-row class="line" @click='commentHandler'>
      <van-col span="20">
          <div>我的评价</div>
      </van-col>
      <van-col span="4">
          <van-icon size='26' class-prefix="iconfont icon-youjiantou" name="extra" />
      </van-col>
    </van-row>
    
    <button class="logOut" @click="logoutHandler">退出登录</button>
  </div>
</template>
<script>
import {mapState, mapActions} from 'vuex'
export default {
  computed:{
    ...mapState('user',['info','comments'])
  },
  methods:{
    ...mapActions('user',['logout','findComment']),
    // 我的评论
    commentHandler(){
      this.$router.push({
        path:'/manager/comment',
        query:{id:this.info.id}
      })
    },
    // 新增地址
    toAddressHandler(){
      this.$router.push({
        path:'/manager/address_add'
      })
    },
    logoutHandler(){
      this.logout()
      .then(()=>{
        this.$router.push({path:'/login'})
      })
    }
  },
  computed:{
    ...mapState("user",["info"])
  }
}
</script>

<style scoped>
.header {
  padding-top: 46px;
  text-align: center;
}
.header .photo {
  margin: 0 auto;
  width: 10em;
  height: 10em;
  border-radius: 50%;
  box-sizing: border-box;
  border:1px solid #eedded;
  overflow:hidden;
  padding: 1em;
}
.header .name {
  line-height: 3em;
  font-size: 10px;
}
.header .photo img {
 width: 100%;
}
.line {
  cursor: pointer;
  line-height: 4em;
  border-bottom: 1px solid #ededed;
  padding-left: 4em;
}
.logOut{
  width: 50%;
  margin: 1em 25%;
  background-color: white;
  border-style: none;
  border: 1px solid #999999;
  color: #999999;
  border-radius: 5px;
  padding: 1em 2em;
  font-size: 16px;
}
.money{
  margin: 1em 2em;
  border: 1px solid #333333;
  text-align: center;
  font-size: 24px;
   display: flex;
  justify-content: space-between;
}
.money>div{
  padding: .5em;
  width: 40%;
  text-align: center;
}
</style>