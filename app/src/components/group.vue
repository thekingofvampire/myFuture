<template>
    <div class="group"  v-finger:touch-start="touchStart" v-finger:touch-move="touchMove" v-finger:touch-end="touchEnd"> 
        <div class="content">
            <ul>
                <li v-for="(item,key) in shicai">
                    <img :src="item.icon" alt="">
                    <span>{{item.title}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
import pinyin from 'pinyin'
export default {
    data () {
        return {
            fenlei:['推荐','智能组菜','菜谱分类','达人攻略'],
            shicai:[],
            touchStartClient:'',
            touchEndClient:'',
            touchSpeed:'',
            touchMoveDistance:'',
            width:window.innerWidth
        }
    },
    methods:{
        // 记录起始坐标
        touchStart: function(event) { 
            this.touchStartClient = event.changedTouches[0].clientX;
        },
        // 记录移动过程中移动距离以及结束坐标还有速度
        touchMove: function(event) {
            this.touchEndClient = event.changedTouches[0].clientX;
            this.touchMoveDistance = this.touchStartClient - this.touchEndClient;
            if(this.touchMoveDistance<=-55){
                $(".contentbg").css({'left':-(this.touchMoveDistance+this.width+55)})
            }else if(this.touchMoveDistance>=55){
                $(".contentbg").css({'left':-(this.touchMoveDistance+this.width-55)})
            }else{
                return;
            }
            this.touchSpeed = event.deltaX
        },
        // 根据速度滑动方向和滑动速度还有滑动距离判断
        touchEnd: function(event) {

            var touchSpeed = Math.abs(this.touchSpeed)
            // console.log(this.touchMoveDistance)

            // 左滑页面往右
            if(event.direction == "Left" && touchSpeed>20 || this.touchMoveDistance>=this.width/2){

                $(".contentbg").animate({'left':'-200vw'},300)
                $(".menu ul li").eq(2).css('color','red').siblings().css('color','#C1C1C2');
                $(".menu ul li").eq(2).children('div').finish().animate({left: 0, width: "100%"}, 200).parent().siblings().children('div').finish().animate({left: "50%", width: 0}, 200)
                this.touchMoveDistance = ''
            // 右滑页面往左
            }else if(event.direction == "Right"  && (touchSpeed>20 || -this.touchMoveDistance>=this.width/2)){

                $(".contentbg").animate({'left':'0'},300)
                $(".menu ul li").eq(0).css('color','red').siblings().css('color','#C1C1C2');
                $(".menu ul li").eq(0).children('div').finish().animate({left: 0, width: "100%"}, 200).parent().siblings().children('div').finish().animate({left: "50%", width: 0}, 200)
                this.touchMoveDistance = ''

            }else{

                $(".contentbg").animate({'left':'-100vw'},300)
                this.touchMoveDistance = ''
            }
        },

    },
    mounted(){
        $.ajax({
            url:this.siteUrl+"/shicai"
        })
        .then((data)=>{
            var a = data.data;
            this.shicai = a;
        })
    }
}
</script>

<style scoped>
    *{
        padding:0;
        margin: 0;
        text-decoration: none;
        list-style: none;
    }
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
    .group{
        width: 100vw;
        position: absolute;
        top: 0px;
        height: 76vh;
        overflow: auto;
        left: 100vw;
        /*float: left;*/
        /*padding-bottom: 80px;*/
        
    }
    .container1{
        /*margin-top: 100px;*/
    }
    .toububg{
        margin: 0;
        width: 100%;
        background: white;
        position: fixed;
        z-index: 100;
        top:0;
        border-bottom: 1px solid #ccc
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
    
    
    /*食材*/
    .content ul{
        /*margin-top: 95px;*/
        /*margin-bottom: 80px;*/
        padding-left: 15px;
        padding-right: 15px;
    }
    .content ul li{
        padding:10px 0px;
        /*width: 100%;*/
        display: block;
        font-size: 14px;
        text-align: left;
        border-bottom: 1px solid #ccc;
    }
    .content ul li img{
        display: inline-block;
        border-radius: 100%;
        width: 40px;
        vertical-align: middle;
    }
    .content ul li span{
        margin-left: 15px;
    }
</style>
