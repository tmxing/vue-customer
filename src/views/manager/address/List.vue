<template>
  <div class="user">
        <x-fulllayout title="我的评价">
           <div style="padding:1.5em;">
                <div class="total">
                    <span style="margin-right:2em;">全部评论数：</span>
                    <span>{{comments.total}}</span>
                </div>
                <div class="content" v-for="item in comments.list" :key="item.id">
                    <div>订单：{{item.orderId}}</div>
                    <div>评价内容：{{item.content}}</div>
                    <div>时间：{{item.commentTime | datefmt}}</div>
                </div>
           </div>
        </x-fulllayout>
  </div>
</template>
<script>
import {mapState, mapActions} from 'vuex'
export default {
    created(){
        this.findComment(this.$route.query.id);
    },
    computed:{
        ...mapState('user',['comments'])
    },
    methods:{
        ...mapActions('user',['findComment']),
        
    },
   
  }
</script>

<style scoped>
    .user .total{
        margin-bottom:2em;border-bottom:1px solid #333333;border-top:1px solid #999999;padding:1em;font-size:1em;
    }
    .content{
        border:1px solid #f3f3f3;border-radius:1em;padding:1em;margin-bottom:1em;width: 50%;
    }
    .content>div{
        margin:1em
    }
</style>