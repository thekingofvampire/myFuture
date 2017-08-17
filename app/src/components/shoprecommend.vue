<template>
    	<div class="shoprecommend">
        	<div>
            		<div class="content">
                		<swiper :options="swiperOption">
	                    		<swiper-slide v-for="(item,key) in imgs" :key="key"><img :src="item" alt=""></swiper-slide>
	                    		<div class="swiper-pagination" slot="pagination"></div>
               		 </swiper>
            		</div> 
            	<div class="youxuan">
                <div></div>
                <p>每日优选</p>
                <div></div>
            	</div>
	            <div class="buybg">
	                <div class="buy" v-for="(item,key) in menus" @click="show_goodslistdetail(item._id)" :key="key">
	                    <div class="img">
	                        <img :src="item.img" alt="">
	                    </div>
	                    <div class="msg">
	                        <div>
	                            <h3>{{item.title}}</h3>
	                            <p>{{item.tags}}</p>
	                        </div>
	                        <div>
	                            <span class="zhekou">7 折</span>
	                            <p><span>优选价￥{{item.newprice}}</span> <span>原价￥{{item.oldprice}}</span></p>
	                        </div>
	                    </div>
	                </div>
	            </div>
            		<mu-drawer  right :open="open" class="xiangqing">
                        <div class="shareandback">
                            <a class="backTohongbei" @click="backtoindex"></a>
                            <p class="title">{{title}}</p>
                            <a class="share"></a>
                        </div>
                        <router-view class="goodsdetail" :detailId="detailId" v-on:aaa="receptmsg"></router-view>
                     </mu-drawer>
        </div>

    </div>
</template>

<script>
export default {
       data () {
            return {
            	key:6,
            	loading: false,
     		scroller: null,
            	open:false,
            	sendId:'',
            	detailId:'',
           	 title:'',
            	scrollData: {
                    noFlag: false //暂无更多数据显示
             	},	
            	menus:[],
            	swiperOption: {
                	pagination: '.swiper-pagination',
                	paginationClickable: true
            	},
           	 imgs:[
                	'http://ntpush.cn:3999/05470607962488344.jpg',
                	'http://ntpush.cn:3999/05497423466798307.jpg',
                	'http://ntpush.cn:3999/05503396889508582.jpg'
            	]
            }
    	},
    methods:{
        receptmsg:function(val){
                this.title = val;
            },
        show_goodslistdetail(id){
                this.open = !this.open
                this.detailId=id;
                this.$router.replace('/shop/goodslist_detail');
            },

            backtoindex(){
                this.open = false;
                this.$router.push('/shop')
            }
        
        
    },
    created(){
      axios({
                    method:"get",
                    url:this.siteUrl+"/caipuCarousel"
            })
            .then((data)=>{
                this.menus = data.data.data;
                // console.log(this.menus)
            })
    },
    mounted(){
    		 this.scroller = this.$el
    }
}
</script>

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
    
    /*大轮播图*/
    .content{
        /*margin-top: 100px;*/
    }
    .content img{
        height: 200px;
    }
    /*每日优选*/
    .youxuan{
        position: relative;
    }
    .youxuan p{
        font-size: 20px;
    }
    .youxuan div{
        width: 8px;
        height: 1px;
        background: #000;
        position: absolute;
    }
    .youxuan div:first-child{
        top: 50%;
        left: 35%;
    }
    .youxuan div:last-child{
        top: 50%;
        left: 63%;
    }
    /*商品列表*/
    .buybg{
        padding:0 20px;
        margin-bottom: 80px;
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
        /*display: inline-block;*/
    }
    .buy .msg .zhekou{
        display: block;
        background: red;
        width: 35px;
        color:white;
        text-align: center;
        font-size:10px;
        float: right;
    }
    .buy .msg div:last-child{
        /*height: 55px;*/
        /*display: flex;*/
    }
    .buy .msg div:last-child p{
        display: inline-block;
        margin:0;
        margin-top: 5px;
        width: 100%;
    }
    .buy .msg div:last-child p:after{
        display: block;
        content: '';
        clear: both;
    }
    .buy .msg div:last-child p span{
        width: 100%;
        display: block;
        text-align: right;
        /*background: red;*/
        /*float: right;*/
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

        /*详情*/
    
    .xiangqing{
        width:100vw;
        position: fixed;
        z-index: 29393;
    }

    .goodsdetail{
        width:100vw;
    }
    /*详情nav*/
    .shareandback{
        position: absolute;
        width: 100%;
        padding:5px 10px;
        z-index: 2;
        display: flex;
        justify-content: space-between;
    }
    .backTohongbei{
        display: inline-block;
        width:30px;
        height: 30px;
        background:url('../../static/img/draw_vector_arrow_left_with_circle_black_background.png') 0 0 no-repeat;
        background-size: 30px 30px;
        margin-top:5px;
    }
    .goodsdetail{
        height: 100vh;
        overflow: auto;
    }
    .share{
        display: inline-block;
        width:30px;
        height: 30px;
        background:url('../../static/img/draw_vector_share_white_with_circle_black_background.png') 0 0 no-repeat;
        background-size: 30px 30px;
        z-index: 200;
        margin-top:3px;
    }
    .title{
        font-size: 16px;
        line-height: 40px;
    }
</style>
