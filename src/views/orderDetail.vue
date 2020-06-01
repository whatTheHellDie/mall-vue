<template>
  <div class="order-detail-status">
    <img src="/static/img/ic_order_details_send_out@2x.png" class="order-detail-img"/>
    <img src="/static/img/ic_order_details_banner_delivers@2x.png" v-if="false" class="order-detail-img"/>
    <img src="/static/img/ic_order _details_banner@2x.png"  v-if="false" class="order-detail-img"/>
    <div class="order-address">
      <img src="/static/img/ic_order_details_map@2x.png" class="img" alt="" />
      <div class="content">
        <div class="div"><span>收货人：{{name}}</span><span class="phone">{{phone}}</span></div>
        <div class="address">收货地址： {{address}}</div>
      </div>
      <img src="/static/img/ic_right@2x.png" class="right"/>
    </div>
    
    <div class="comfirm-list">
      <ul>
      	<li v-for="item in confirmList">
      	  <div class="title"><img :src="item.img" class="sign" alt="" /><span class="from">{{item.from}}</span></div>
      	  <div class="content">
      	    <img :src="item.pic" class="pic" alt="" />
      	    <div class="right">
      	     <div class="name">{{item.name}}<span class="price"><img src="" alt="" class="coin" />{{item.price}}</span></div>
      	     <div class="type">型号：A10241 <span class="number">x2</span></div>
      	     <div class="type">颜色：蓝色</div>
      	    </div>
      	  </div>
      	  <div class="way">共2件商品</div>
      	  <div class="way">运费（快递）<span class="right-span">包邮</span></div>
      	  <div class="way">支付方式<span class="right-span">LoveBird币</span></div>
      	  <div class="way way-true">实际支付<span class="right-type color"><img src="" alt="" class="coin" />3200LoveBird币</span></div>
      	</li>
      </ul>
      <div class="way-top">
        <div class="way">订单编号：1234556677897</div>
        <div class="way">下单时间：2018-08-07  23:00:17</div>
        <div class="way">支付时间：2018-08-02  23:00:17</div>
        <div class="way">买家留言：这个砖石真棒！</div>
        <div class="flex">
          <div class="btn">删除订单</div>
          <div class="btn">确认收货</div>
        </div>
      </div>
    </div>
    <div class="context-shadow" v-if="peisong||server||server1" @click="hideChosen"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        server:false,
        peisong:false,
        server1:false,
        name:"陆丹",
        phone:"18878798765",
        address:"广西壮族自治区 南宁市 江南区民族大道麻村二街",
        confirmList:[
        {img:"",from:"砖石码头",name:"南非蓝宝石钻石",price:1600,pic:"/static/img/ic_mall_advertisement@2x.png",sub:"12",total:2,coinType:"loveBird"}
        ]
      }
    },
    components: {
    },
    methods: {
      close(){
        this.peisong=false;
        this.server=false
        this.server1=false
      },
      hideChosen(){
        this.peisong=false;
        this.server=false
        this.server1=false
        
      }
    }
  }
</script>

<style>

</style>