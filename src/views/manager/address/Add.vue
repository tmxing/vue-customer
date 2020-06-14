<template>
  <div class="add">
    <!-- /address/saveOrUpdate -->
    <x-fulllayout title="新增地址">
      <van-field v-model="address_form.telephone" label="手机号" placeholder="请输入手机号" />
      <van-field @click="showPopup" v-model="address_form.showAddress" label="地址" placeholder="请选择" is-link />

      <van-popup v-model="show" position="bottom" :style="{htight:'30%'}">
          <van-area title="省区" :area-list="areaList" value="110101" @confirm="choiceAddress"/>
      </van-popup>
      <van-field  v-model="address_form.address" label="详细地址" placeholder="请输入详细地址"/>
      
      <van-button type="primary" block @click="saveAddressHandler">保存地址</van-button>

    </x-fulllayout>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
import areaList from "@/assets/areaList";
import { Toast } from 'vant';

export default {
  data() {
    return {
      address_form: {},
      areaList,
      show:false
    }
  },
  computed:{
      ...mapState('user',['info'])
  },
  methods:{
      ...mapActions('address',['saveAddress']),
        //   保存地址
        saveAddressHandler(){
            this.address_form.customerId = this.info.id;
            this.saveAddress(this.address_form).then((res)=>{
                Toast.success(res.statusText)
                this.$router.push({
                    path:'/manager/user'
                })
            });
        },
    //   确认选择地址
      choiceAddress(val){
        //   console.log(val)
        this.address_form.showAddress =  val[0].name+' ' +val[1].name+' ' +val[2].name;
        this.address_form.province = val[0].name;
        this.address_form.city = val[1].name;
        this.address_form.area = val[2].name;
        this.show=false;
      },
      showPopup(){
          this.show = true;
      },
  }
};
</script>

