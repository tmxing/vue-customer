<template>
    <div class="address">
        <x-fulllayout title='地址列表'>
            <x-address-item v-for='item in addresses' :key='item.id' :data='item'></x-address-item>
        </x-fulllayout>
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
    computed:{
        ...mapState('user',['info']),
        ...mapState('address',['addresses']),
    },
    created(){
        this.findAddressById(this.info.id)
    },
    methods:{
        ...mapActions('address',['findAddressById']),
        
    }
}
</script>