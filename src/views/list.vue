<template>
  <div>
    <div class="search-box search-box1">
      <img src="/static/img/ic_arrowleft@2x.png" alt="" class="back" />
      <input type="text" class="input" placeholder="搜索商品、品牌" />
      <img src="/static/img/ic_mall_search@2x.png" class="img" alt="search" />
      <div class="text">搜索</div>
  </div>
  <div class="choose-brand maybe-like list-chose">
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
    },
    methods: {}
  }
</script>

<style>

</style>