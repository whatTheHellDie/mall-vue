<template>
  <div>
    <!-- swiper -->
    <div class="detail-banner">
      <img src="/static/img/ic_left_o@2x.png" class="back" />
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="slide,i in swiperSlides" :key="slide.img"><img :src="slide.img" class="img" alt="轮播" /></swiper-slide>
      </swiper>
      <div class="custom-page">{{realIndex+1}}/{{swiperSlides.length}}</div>
    </div>
    <div class="price-tab">
      <div class="price">
        <img src="" class="coin" alt="" /><span class="money">{{money}}</span>
      </div>
      <div class="name">{{name}}</div>
      <div class="express">快递: {{express}}</div>
    </div>
    <div class="choose-item" @click="server=true">
      <span class="span">售后服务</span>服务说明
    </div>
    <div class="choose-item" @click="showList=true">
      <span class="span">选择</span>请选择尺码
    </div>
    <div class="detail-intro">
      <div class="title"><span class="span">详情</span></div>
      <div class="top">详情介绍</div>
      <div class="content"></div>
    </div>
    <div class="context-shadow" v-if="showList||server" @click="hideChosen"></div>
    <div class="bottom-box">
      <div class="btn" @click="showList=true">立即购买</div>
    </div>
    <div class="bottom-slide" :class="{active:showList}">
      <div class="close" @click="showList=false"></div>
      <img src="/static/img/ic_mall_advertisement@2x.png" alt="" class="img" />
      <div class="right">
        <div><img src="" alt="" class="coin" /><span class="money">123456</span></div>
        <div class="type">型号规格:{{type}}</div>
      </div>
      <div class="type-list-wrap">
        <div class="type-list">
          <div class="title">型号规格</div>
          <ul>
            <li v-for="item,i in typeList" :class="{active:i===typeActive}" @click="addActive(i)">{{item.name}}</li>
          </ul>
        </div>
        <div class="type-list">
          <div class="title">型号规格</div>
          <ul>
            <li v-for="item,i in typeList" :class="{active:i===typeActive}" @click="addActive(i)">{{item.name}}</li>
          </ul>
        </div>
      </div>
      <div class="buy-number">
        <span class="span">购买数量</span>
        <div class="compute">
          <img src="/static/img/ic_selection_information_minus@2x.png" @click="reduce" class="reduce" />
          <input type="text" v-model="buyNumber" @blur="blurNumber" class="number" />
          <img src="/static/img/ic_selection_information_plus@2x.png" @click="add" alt="" class="reduce" />
        </div>
      </div>
      <div class="btn" @click="$router.push({name:'confirmOrder'})">确认</div>
      
    </div>
  <div class="pei clearfix" :class="{active:server}">
      <div class="name">
        服务说明<img src="/static/img/ic_close-circle@2x.png" alt="" onclick="window.history.back()" class="close" />
      </div>
      <div class="content-wrap">
        <div class="need clearfix">
          <img src="/static/img/zheng1.png" class="left"/>
          <div class="right">
            <div class="title">关于正品</div>
            <div class="content">本商城会根据您的收货地址自动为您匹配发货 仓库及快递公司，暂不接受指定快递派送，感 谢您的支持与理解。</div>
          </div>
        </div>
        
        <div class="need clearfix" style="margin-top: .3rem;">
          <img src="/static/img/weixiu_icon@3x.png" class="left"/>
          <div class="right">
            <div class="title">关于退换货</div>
            <div class="content">产品一旦发货不支持退换货；若产品在运输过程中发生损坏、缺失等问题了联系客服协商解决<br />客服热线:400 086 2860
            
            </div>
          </div>
        </div>
        <div class="need clearfix" style="margin-top: .3rem;">
          <img src="/static/img/mianze_icon@3x.png" class="left"/>
          <div class="right">
            <div class="title">免责条款</div>
            <div class="content">订单付款后7天内发货，节假日、物流管制等特殊情况顺延。</div>
          </div>
        </div>
        <div class="need clearfix" style="margin-top: .3rem;">
          <img src="/static/img/fapiao_icon@3x.png" class="left"/>
          <div class="right">
            <div class="title">关于发票</div>
            <div class="content">使用数字资产购物暂不纳入国家发票系统，暂不提供发票，敬请谅解</div>
          </div>
        </div>
      </div>
      <div class="btn" @click="server=false">确认</div>
      
    </div>
  </div>
</template>

<script>
  import searchBox from '@/components/searchBox'
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    data() {
      return {
        server:false,
        showList:false,
        buyNumber:1,
        typeActive:null,
        typeList: [{
            name: "五彩斑斓的黑色的"
          },
          {
            name: "白色"
          },
          {
            name: "黑色"
          },
          {
            name: "白色"
          }, {
            name: "黑色"
          },
          {
            name: "白色"
          }, {
            name: "黑色"
          },
          {
            name: "白色"
          },
        ],
        type: "请选择",
        express: "免邮",
        name: "连衣裙",
        money: "123",
        realIndex: null,
        swiperOption: {
          autoplay: 3500,
          setWrapperSize: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          mousewheelControl: true,
          observeParents: true,
          autoplayDisableOnInteraction: false,
          loop: true,
          onTransitionStart: (swiper) => {
            this.realIndex = swiper.realIndex
          }

        },
        swiperSlides: [{
            img: "/static/img/ic_mall_advertisement@2x.png"
          },
          {
            img: "/static/img/ic_mall_search@2x.png"
          },
        ],
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    watch:{
      buyNumber(val,oldVal){
        if(val==""){
          return ;
        }
        if(isNaN(Number(val))){
          this.buyNumber=oldVal
        }
        if(val<1){
          this.buyNumber=1
        }
      }
    },
    components: {
      swiper,
      swiperSlide,
      searchBox
    },
    methods: {
      hideChosen(){
        this.showList=false
        this.server=false
      },
       blurNumber(){
        this.buyNumber=this.buyNumber===""?1:this.buyNumber
      },
      add(){
        this.buyNumber++
      },
      reduce(){
        if(this.buyNumber===1){return;}
        this.buyNumber--
      },
      addActive(i){
        this.typeActive=i;
        this.type=this.typeList[i].name
      }
    }
  }
</script>

<style>

</style>