<template>
  <div>
    <div class="search-box">
      <input type="text" class="input" placeholder="搜索商品、品牌" />
      <img src="/static/img/ic_mall_search@2x.png" class="img" alt="search" />
      <div class="text">搜索</div>
  </div>
    <!-- swiper -->
    <swiper :options="swiperOption">
      <swiper-slide v-for="slide in swiperSlides" :key="slide.img"><img :src="slide.img" class="img" alt="轮播" /></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  <div class="scroll-box">
    <ul>
    	<li v-for="item in classify">
    	  <img :src="item.img" class="img" alt="" />
    	  <div class="text">{{item.title}}</div>
    	</li>
    </ul>
  </div>
  <div class="to-zone">
    <img src="/static/img/ic_btc_box@2x.png" class="img" alt="loveBird" />
    <img src="/static/img/ic_love_bird_box@2x.png" class="img" alt="BTC" />
  </div>
  <div class="choose-brand">
    <div class="title"><span class="span">精选品牌</span></div>
    <ul>
    	<li v-for="item in brand">
    	  <img :src="item.img" class="img" alt="品牌图片" />
    	  <div class="text">{{item.text}}</div>
    	</li>
    </ul>
  </div>
  <div class="choose-brand maybe-like">
    <div class="title"><span class="span">你可能还喜欢</span></div>
    <ul>
      <li v-for="item in like">
        <img :src="item.img" class="img" alt="商品" />
        <div class="text">{{item.text}}</div>
        <div class="price">
          <img src="" class="coin" alt="" /><span class="money">{{item.money}}</span>
        </div>
      </li>
    </ul>
  </div>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    data() {
      return {
        swiperOption: {
          autoplay: 3500,
          setWrapperSize: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          mousewheelControl: true,
          observeParents: true,
          autoplayDisableOnInteraction:false,
          loop:true
        },
        swiperSlides: [
          {
            img: "/static/img/ic_mall_advertisement@2x.png"
          },
          {
            img: "/static/img/ic_mall_search@2x.png"
          },
        ],
        classify:[
          {
            img:"/static/img/ic_mall_watch@2x.png",
            title:"腕表"
          },
          {
            img:"/static/img/ic_mall_bag@2x.png",
            title:"箱包"
          },
        ],
        brand:[
          {
            img:"/static/img/ic_mall_advertisement@2x.png",
            text:"施华洛世奇"
          },
          {
            img:"/static/img/ic_mall_advertisement@2x.png",
            text:"施华洛世奇"
          },
          {
            img:"/static/img/ic_mall_advertisement@2x.png",
            text:"施华洛世奇"
          },
           {
            img:"/static/img/ic_mall_advertisement@2x.png",
            text:"施华洛世奇"
          },
          {
            img:"/static/img/ic_mall_advertisement@2x.png",
            text:"施华洛世奇"
          },
          {
            img:"/static/img/ic_mall_advertisement@2x.png",
            text:"施华洛世奇"
          },
        ],
        like:[
          {
            img:"/static/img/ic_mall_advertisement@2x.png",
            text:"施华洛世奇施华洛世奇施华洛世奇",
            money:"5202.49"
          },
          {
            img:"/static/img/ic_mall_advertisement@2x.png",
            text:"施华洛世奇",
            money:"5202.49"
          },
          {
            img:"/static/img/ic_mall_advertisement@2x.png",
            text:"施华洛世奇",
            money:"5202.49"
          },
          {
            img:"/static/img/ic_mall_advertisement@2x.png",
            text:"施华洛世奇",
            money:"5202.49"
          },
          {
            img:"/static/img/ic_mall_advertisement@2x.png",
            text:"施华洛世奇",
            money:"5202.49"
          },
          {
            img:"/static/img/ic_mall_advertisement@2x.png",
            text:"施华洛世奇",
            money:"5202.49"
          },
        ]
      }
    },
    components: {
      swiper,
      swiperSlide,
    },
    methods: {}
  }
</script>

<style>

</style>