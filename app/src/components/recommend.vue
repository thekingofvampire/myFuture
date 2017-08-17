<template>
    <div>
        <div class="container1">
            <!-- 头部搜索框 --> 
            <div class="toububg">
                <div class="toubu">
                    <img src="../../static/img/plus.png" alt="" class="img1" @click="openBottomSheet">
                    
                    <input type="text" placeholder="菜谱、食材">
                    <img src="../../static/img/xiaoxi.png" alt="" class="img2">
                </div>
                 <!-- 加号模态框 -->
                <div class="mymodel">
                    <p>生活不止诗和远方，还有眼前的汤和肉</p>
                </div>

                <!-- 类别 -->
                <div class="menu">
                    <ul>
                        <li v-for="(item,key) in fenlei" @click="showthis(key)">{{item}}
                            <div></div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="contentbg">
	              <div class="content">
	                    <recommend1></recommend1>
	                    <group></group>
	                    <caipu></caipu>
	                    <special class="special"></special>
	              </div>
            </div>
        </div>
    </div>
</template>

<script>

    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import recommend1 from "./recommend1.vue"
    import group from "./group.vue"
    import caipu from "./caipu.vue"
    import special from "./special.vue"
    import "../../static/1.css"
    import $ from 'jquery'
    export default {
        components: {
            swiper,
            swiperSlide,
            recommend1,
            group,
            caipu,
            special
        },
        data () {
            var that = this;
            return {
              
                fan:"早餐",
                fenlei:['推荐','智能组菜','菜谱分类','专题'],
                imgs:['http://img5.imgtn.bdimg.com/it/u=623743778,406639215&fm=26&gp=0.jpg',
                      'http://img2.imgtn.bdimg.com/it/u=1267607011,2727279265&fm=26&gp=0.jpg',
                      'http://img3.imgtn.bdimg.com/it/u=3304891689,1427484976&fm=26&gp=0.jpg'],
                swiperOption: {
                    notNextTick: true,
                    autoplay: 3000,
                    spaceBetween: 10,
                    slidesPerView: 1,
                    setWrapperSize :true,
                    pagination : '.swiper-pagination',
                    paginationClickable :true,
                    debugger: true,
                    onTransitionStart(swiper){
                        // console.log(swiper)


                        // console.log(that)
                        
                        if($(".swiper-pagination-bullet").eq(0).hasClass('swiper-pagination-bullet-active')){
                            // console.log("早餐");
                            that.fan = "早餐";
                            // console.log();
                        }else if($(".swiper-pagination-bullet").eq(1).hasClass('swiper-pagination-bullet-active')){
                            // console.log("午餐");
                            that.fan = "午餐";
                        }else{
                            // console.log("晚餐");
                            that.fan = "晚餐";
                        }
                        // console.log(that.fan);
                    }
                },
                swiperOption1: {
                    pagination: '.swiper-pagination',
                    paginationClickable: true
                }
            }
        },
        methods:{
            openBottomSheet(){
                console.log(111);
                if($(".img1").css("transform") == "matrix(1, 0, 0, 1, 0, 0)"){
                    console.log("正十字")
                    $(".img1").css({transform: "matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, 0)"});
                    $(".mymodel").animate({top: "100vh"}, 200);
                }else{
                    console.log("斜的")
                    $(".img1").css({transform: "matrix(1, 0, 0, 1, 0, 0)"});
                    $(".mymodel").animate({top: "0"}, 200);
                }
            },
            showthis(key){
                $(".menu ul li").eq(key).css('color','red').siblings().css('color','#C1C1C2');
                $(".menu ul li").eq(key).children('div').finish().animate({left: 0, width: "100%"}, 200).parent().siblings().children('div').finish().animate({left: "50%", width: 0}, 200)
                $(".contentbg").css('left','-'+key*100+'vw');

            }
        },
       mounted(){
            $(".menu ul li").eq(0).css('color','red');
            $(".menu ul li").eq(0).children('div').finish().animate({left: 0, width: "100%"}, 200).parent().siblings().children('div').finish().animate({left: "50%", width: 0}, 200)
       },
       created(){
          
       }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
    #app{
        margin-top: 20px;
    }
    .container1{
        margin-top: 100px;
        /*margin-bottom: 20px;*/
    }
    .toububg{
        margin: 0;
        width: 100%;
        background: white;
        position: fixed;
        z-index: 100;
        top:0;
    }
    .toubu{
        margin:0 auto;
    }
    .toubu .img1{
        width: 25px;
        height: 25px;
        vertical-align: middle;
        transform: rotateZ(45deg);
        margin-left: 2%;
        transition: 0.3s;
        position: relative;
        z-index: 20141280;
    }
    .toubu .img2{
        width: 45px;
        height: 45px;
        vertical-align: middle;
        margin-left: 1%;
    }
    .toubu input{
        width: 70%;
        height: 35px;
        outline: 0;
        border-radius: 2px;
        padding-left: 10px;
        border:0;
        background: #ccc;
        margin-left: 2%;
    }
    /*点击出现的模态框信息*/
    .mymodel{
        height: 100vh;
        width: 100vw;
        background: rgba(255,255,255,.9);
        position: fixed;
        z-index: 100;
        top:100vh;
        left:0;
    }
    .mymodel p{
        width: 70%;
        font-size: 25px;
        margin:30% auto;
        text-align: left;
        line-height: 150%;
    }
    
    /*类别*/
    .menu ul{
        margin-top: 10px;
    }
    .menu ul li{
        color: #C1C1C2;
        position: relative;
    }
    .menu ul li div{
        width: 0;
        height: 2px;
        background: red;
        position: absolute;
        left:50%;
        bottom: -15px;
    }

    /*轮播图*/
    .sancan ul{
        display: flex;
        width: 90%;
        margin:0 auto;
    }
    .sancan ul li{
        width: 50%;
        margin:0;
        padding:5px;
    }
    .sancan ul li p{
        margin:0;
        line-height: 25px;
    }
    .sancan ul li img{
        width: 95%;
    }
    .swiper-pagination-clickable{
        bottom: -6px;
    }
    .sancanHeader{
        width: 87%;
        margin:0 auto;
        display: flex;
        justify-content: space-between;
    }
    .sancanHeader p{
        text-align: left;
        font-size:18px;
    }
    .sancanHeader p:last-child{
        text-align: left;
        font-size:14px;
        line-height: 32px;
        color: #ccc;
    }
    .todayrecommend{
        width: 90%;
        margin:40px auto;
        
    }
    .swiper-slide{
        margin-bottom: 15px;
    }
    /*今日推荐*/
    .todayrecommend p{
        text-align: left;
        font-size: 18px;
        margin-bottom: 15px;
    }
    .todayrecommend img{
        width: 100%;
    }
    .buybg{
        padding:0 20px;
    }
    .buy{
        margin:10px auto;
        padding-bottom: 5px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #ccc;
    }
    .buy .img{
        width: 40%;
    }
    .buy .img img{
        width: 100%;
    }
    .buy .msg{
        width: 55%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .buy .msg div h3{
        margin-bottom: 5px;
    }
    .buy .msg :first-child p{
        margin-top:0;
    }
    .buy .msg div,.buy .msg div h3{
        margin-top:0px;
        text-align: left;
    }
    .buy .msg .zhekou{
        display: block;
        background: red;
        width: 35px;
        color:white;
        text-align: center;
        font-size:10px;
    }
    .buy .msg div:last-child{
        height: 55px;
        /*display: flex;*/
    }
    .buy .msg div:last-child p{
        display: inline-block;
        margin:0;
        margin-top: 5px;
    }
    .buy .msg div:last-child img{
        width: 24px;
        /*background: red;*/
        vertical-align: middle;
        float: right;
        margin-top: 5px;
    }
    .buy .msg div:last-child p span:first-child{
        color:red;
        font-size:18px;
    }
    .buy .msg div:last-child p span:last-child{
        /*color:red;*/
        font-size:12px;
        text-decoration-line: line-through;
    }
    .freshfood{
        margin-bottom: 80px;
    }
    .freshfood div:last-child{
        padding:0 15px; 
    }
    .freshfood .sancanHeader p:last-child{
        font-size: 13px;
    }
    .freshfood div:last-child img{
        width: 100%;   
    }
    .contentbg{
        height: 76vh;
        position: relative;
    }
    .content{
        height: 76vh;
        overflow: hidden;
    }
    /*special模板*/
    .special{
		position: absolute;
		top:0;
		left:300vw;
		height: 76vh;
		overflow-y: auto;
        width: 100vw;
    }
</style>
