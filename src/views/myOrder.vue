<template>
  <div>
    <div class="order-detail-choose">
      <ul>
      	<li v-for="item,i in orderStatus" @click="queryStatus(i)" :class="{active:status==i}">{{item}}</li>
      </ul>
    </div>
    <div class="comfirm-list order-detail-list my-order-list">
      <ul>
      	<li v-for="item in confirmList">
      	  <div class="title"><img :src="item.img" class="sign" alt="" /><span class="from">{{item.from}}</span><span class="status">{{item.status}}</span></div>
      	  <div class="content">
      	    <img :src="item.pic" class="pic" alt="" />
      	    <div class="right">
      	     <div class="name">{{item.name}}</div>
      	     <div class="type">型号：A10241 <span class="number">x2</span></div>
      	     <div class="type">颜色：蓝色</div>
      	     <span class="price"><img src="" alt="" class="coin" />{{item.price}}</span>
      	    </div>
      	  </div>
      	  <div class="total"><span class="ji">合计：<span class="sub">{{item.sub}}LoveBird币</span></span></div>
      	</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        orderStatus:['全部','待付款','待发货','待收货'],
        status:null,
        name:"陆丹",
        phone:"18878798765",
        address:"广西壮族自治区 南宁市 江南区民族大道麻村二街",
        confirmList:[
        {img:"",from:"砖石码头",name:"南非蓝宝石钻石",price:1600,pic:"/static/img/ic_mall_advertisement@2x.png",sub:"12",total:2,coinType:"loveBird",status:"待付款"}
        ]
      }
    },
    created(){
      this.queryStatus(0)
    },
    methods: {
      queryStatus(i){
        this.status=i
      }
    }
  }
</script>

<style>

</style>