<template>
  <div>
    <div class="order-address">
      <img src="/static/img/ic_order_details_map@2x.png" class="img" alt="" />
      <div class="content">
        <div v-if="hasAddress">
          <div class="div"><span>收货人：{{name}}</span><span class="phone">{{phone}}</span></div>
          <div class="address">收货地址： {{address}}</div>
        </div>
        <div v-else>
          <div class="add">请添加收货地址</div>
        </div>
      </div>
      <img src="/static/img/ic_right@2x.png" class="right"/>
    </div>
    
    <div class="comfirm-list fix">
      <ul>
      	<li v-for="item in confirmList">
      	  <div class="title"><img :src="item.img" class="sign" alt="" /><span class="from">{{item.from}}</span></div>
      	  <div class="content">
      	    <img :src="item.pic" class="pic" alt="" />
      	    <div class="right">
      	     <div class="name">{{item.name}}<span class="price"><img src="" alt="" class="coin" />{{item.price}}</span></div>
      	     <div class="type">型号：A10241 <span class="number">x{{item.number}}</span></div>
      	     <div class="type">颜色：蓝色</div>
      	    </div>
      	  </div>
      	  <div class="way">配送方式<span>快递 免邮</span></div>
      	  <div class="way" @click="peisong=true">配送签收<span><img src="/static/img/ic_right@2x.png" alt="" class="right-pic" /></span></div>
      	  <div class="way">买家留言：<textarea name="" placeholder="选填，请输入您对本次交易的说明或其他" cols="30" rows="10"></textarea></div>
      	  <div class="total">共{{item.total}}件商品<span class="ji">小计：<span class="sub color"><img src="" alt="" class="coin" />{{item.sub}}</span></span></div>
      	</li>
      </ul>
    </div>
    <div class="fixed-bottom">
      合计：<img src="" alt="" class="coin" /><span class="color">6415</span><div class="submit" @click="server=true">提交订单</div>
    </div>
    <div class="context-shadow" v-if="peisong||server||server1" @click="hideChosen"></div>
    <div class="peisong clearfix" :class="{active:peisong}">
      <div class="name">
        配送签收<img src="/static/img/ic_close-circle-o@2x.png" @click="close" alt=""  class="close" />
      </div>
      <div class="need clearfix">
        <img src="/static/img/ic_delivery _service@2x.png" class="left"/>
        <div class="right">
          <div class="title">送货上门</div>
          <div class="content">本商城会根据您的收货地址自动为您匹配发货 仓库及快递公司，暂不接受指定快递派送，感 谢您的支持与理解。</div>
        </div>
      </div>
      
      <div class="need clearfix" style="margin-top: .3rem;">
        <img src="/static/img/ic_signing _service@2x.png" class="left"/>
        <div class="right">
          <div class="title">签收服务</div>
          <div class="content">快递请本人当面签收，如有任何包装损坏，请
确保产品质量是否有破损，如有破损请当面拒
收，如非本人签收，则视为产品签收无误。</div>
        </div>
      </div>
    </div>
      <div class="pei user-confirm clearfix" :class="{active:server}">
      <div class="name">
        再次确认支付信息<img src="/static/img/ic_close-circle@2x.png" alt="" class="close" />
      </div>
      <div class="info">本人姓名：黄如意</div>
      <div class="info">交易所账号：153648421</div>
      <div class="btn" @click="server1=true;server=false">下一步</div>
    </div>
    <div class="pei user-confirm user-confirm1 clearfix" :class="{active:server1}">
      <div class="name">
        输入交易所安全密码<img src="/static/img/ic_close-circle@2x.png" alt="" class="close" />
      </div>
      <div class="balance">
        0.000457487BTC
      </div>
      <div class="relative">
        <input type="password" class="password" placeholder="请输入交易所安全密码" name="" id="" value="" />
        <div class="confirm" @click="$router.push({name:'success'})">确认</div>
      </div>
      <div class="forget">忘记密码？</div>
      <div class="warm">温馨提示: <br />
        1、支付成功后，系统降自动扣除您交易所币，请到交易所查看交易记录。 <br />
        2、支付成功后，交易所自动扣除您相应手续费。
        3、支付成功后，系统立即赠送等价值的额度并存入额度账户中。
        4、确认收货后，不支持退换货
      </div>
    </div>
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