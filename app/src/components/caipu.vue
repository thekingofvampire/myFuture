<template>
    <div class="caipu" v-finger:touch-start="touchStart1" v-finger:touch-move="touchMove1"  v-finger:touch-end="touchEnd1">
        <div class='main_con'>
            <div class='c_left'>
                <ul class='c_left_ul'>
                    <li v-for="(item,key) in caipu" @click='dianji(key)'><img :src="item.url" alt=""><br>{{item.type}}</li>
                </ul>
            </div>
            <div class='c_right'>
                <div class="type" v-finger:touch-start="touchStart" v-finger:touch-move="touchMove" v-finger:touch-end="touchEnd">
                    <!--每日三餐-->
                    <ul>
                       <li>早餐</li>
                       <li>午餐</li>
                       <li>晚餐</li>
                       <li>下午茶</li>
                       <li>夜宵</li>
                    </ul>
                    <!--主食-->
                    <ul>
                       <li>炒饭</li>
                       <li>焖饭</li>
                       <li>烩饭</li>
                       <li>饭</li>
                       <li>方便面</li>
                       <li>焖面</li>
                       <li>拌面</li>
                       <li>面</li>
                       <li>饼</li>
                       <li>包子</li>
                       <li>饺子</li>
                       <li>馄饨</li>
                       <li>粥</li>
                    </ul>
                    <!--家常菜谱-->
                    <ul>
                       <li>热菜</li>
                       <li>凉菜</li>
                       <li>素菜</li>
                       <li>靓汤</li>
                       <li>粥品</li>
                       <li>主食</li>
                       <li>点心</li>
                       <li>卤味</li>
                       <li>微波炉</li>
                       <li>海鲜</li>
                       <li>火锅</li>
                       <li>酱料蘸料</li>
                       <li>干果零食</li>
                       <li>饮品</li>
                       <li>美容</li>
                       <li>瘦身</li>
                    </ul>
                    <!--烘焙-->
                    <ul>
                       <li>蛋糕面包</li>
                       <li>饼干配方</li>
                       <li>甜品点心</li>
                       <li>蛋糕</li>
                       <li>面包</li>
                       <li>翻糖</li>
                       <li>烘焙原材</li>
                       <li>烘焙工具</li>
                       <li>烘焙常识</li>
                       <li>烘焙原料</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
var key = 0;
export default {
    data () {
        return {
            fenlei:['推荐','智能组菜','菜谱分类','达人攻略'],
            caipu:[
                {
                    url:'http://www.ddzrp.com:3001/static/img/draw_vector_recipe_detail_calorie.png',
                    type:'每日三餐'
                },
                {
                    url:'http://www.ddzrp.com:3001/static/img/recommend1.png',
                    type:'主食'
                },
                {
                    url:'http://www.ddzrp.com:3001/static/img/draw_vector_talent_main.png',
                    type:'家常菜谱'
                },
                {
                    url:'http://www.ddzrp.com:3001/static/img/store1.png',
                    type:'烘焙'
                },
            ],
            touchStartClient:'',
            touchEndClient:'',
            touchSpeed:'',
            touchMoveDistance:'',
            width:window.innerWidth
        }
    },
    methods:{
        dianji(k){
            key = k;
            $(".c_left_ul li").eq(k).css('color','#ff3232')
                    .siblings()
                    .css('color','black');
            $(".c_right .type").stop().animate({"margin-top": "-"+k*76+"vh"}, 500)
        },
        touchStart: function(event) {

        },
        touchMove: function(event) {

        },
        touchEnd: function(event) {
            if(event.direction == "Up"){
                if(key == 3){
                    return;
                }
                key+=1;
                $(".c_left_ul li").eq(key).css('color','#ff3232')
                                    .siblings()
                                    .css('color','black');
                $(".c_right .type").stop().animate({"margin-top": "-"+key*76+"vh"}, 200);
            }else if(event.direction == "Down"){
                if(key == 0){
                    return;
                }
                key-=1;
                $(".c_left_ul li").eq(key).css('color','#ff3232')
                                        .siblings()
                                        .css('color','black');
                $(".c_right .type").stop().animate({"margin-top": "-"+key*76+"vh"}, 200);
            }
        },
        touchStart1: function(event) {
            this.touchStartClient = event.changedTouches[0].clientX;
        },
        touchMove1: function(event) {
            this.touchEndClient = event.changedTouches[0].clientX;
            this.touchMoveDistance = this.touchStartClient - this.touchEndClient;
            if(this.touchMoveDistance<=-55){
                $(".contentbg").css({'left':-(this.touchMoveDistance+this.width*2+55)})
            }else if(this.touchMoveDistance>=55){
                $(".contentbg").css({'left':-(this.touchMoveDistance+this.width*2-55)})
            }else{
                return;
            }
            this.touchSpeed = event.deltaX
        },
        touchEnd1: function(event){
            var touchSpeed = Math.abs(this.touchSpeed)
            if(event.direction == "Left" && (touchSpeed>20 || this.touchMoveDistance>=this.width/2)){

                this.touchMoveDistance = ''
            }else if(event.direction == "Right"  && touchSpeed>20 || -this.touchMoveDistance>=this.width/2){

                $(".contentbg").animate({'left':'-100vw'},300)
                $(".menu ul li").eq(1).css('color','red').siblings().css('color','#C1C1C2');
                $(".menu ul li").eq(1).children('div').finish().animate({left: 0, width: "100%"}, 200).parent().siblings().children('div').finish().animate({left: "50%", width: 0}, 200)
                this.touchMoveDistance = ''
            }else{
                $(".contentbg").animate({'left':'-200vw'},300)
                this.touchMoveDistance = ''
            }
        }
    },
    mounted(){
        $(".c_left_ul li").eq(0).css('color','#ff3232')
                    .siblings()
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
    .caipu{
        width: 100vw;
        position: absolute;
        left: 200vw;
        top: 0px;
        height: 76vh;
        /*overflow: hidden;*/
        /*float: left;*/
        /*padding-bottom: 80px;*/
        
    }
    .main_con{
        border-top:1px solid #eee;
        display: flex;
        justify-content: space-between; 
    }
    .c_left{
        height: 76vh;
        width: 23%;
        text-align: center;
        border-right: 1px solid #eee;
    }
    .c_left ul li{
        height: 100px;
        line-height:30px;
        font-size: 13px;
    }
    .c_left ul li img{
        margin-top: 10px;
        width: 30px;
        height: 30px;
    }
    .c_right{
        width:77%;
        height: 76vh;
        overflow: hidden;
    }
    .c_right .type{
        height: 100%;
        margin-top: 0;
    }
    .c_right ul{
        padding:20px 10px 0px;
        height: 76vh;
    }
    .c_right ul:after{
        display: block;
        content: '';
        clear: both;
    }
    .c_right ul li{
        float: left;
        width: 25%;
        height: 30px;
        margin: 5px 8px;
        line-height: 30px;
        text-align: center;
        border:1px solid #eee;
    }
</style>
