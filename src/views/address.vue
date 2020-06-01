<template>
  <div>
    <div class="order-address order-address1" style="margin-top: .2rem;">
      <ul>
      	<li v-for="item in addressList">
      <div class="img">{{item.name[0]}}</div>
      <div class="content">
        <div class="div"><span>收货人：{{item.name}}</span><span class="phone">{{item.phone}}</span></div>
        <div class="address">收货地址： {{item.address}}</div>
      </div>
      </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        addressList:[{
          name:"陆丹",
        phone:"18878798765",
        address:"广西壮族自治区 南宁市 江南区民族大道麻村二街",
        },{
          name:"陆丹",
        phone:"18878798765",
        address:"广西壮族自治区 南宁市 江南区民族大道麻村二街",
        }]
        
      }
    },
    methods: {}
  }
</script>

<style>

</style>