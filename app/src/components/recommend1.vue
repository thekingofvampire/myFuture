<template>
	<div  v-finger:touch-start="touchStart" v-finger:touch-move="touchMove" v-finger:touch-end="touchEnd" class="recommend">
		<menudetailtwo class="detaildrawer"  :sendId="sendId" @myEvent="change" :settingOn="settingOn"></menudetailtwo>
		<div class="container">
			<div class="container1"  >
				<div class="tuijian">
					<!-- 每日三餐轮播图 -->
					<div>
						<div class="sancanHeader">
							<p>每日三餐·<span>{{fan}}</span></p>
							<p>更多></p>
						</div>
						<div class="sancan">
							<swiper :options="swiperOption" ref="mySwiper">
								<swiper-slide>
									<ul>
										<li v-for="(item,key) in menus" v-if="key>=50&&key<=51" @click="gomenudetailtwo(item.id)" >
											<img :src="item.img" alt="">
											<p>{{item.title}}</p>
											<p>{{item.tags}}</p>
										</li>
									</ul>		
								</swiper-slide>
								<swiper-slide>
									<ul>
										<li  v-for="(item,key) in menus" v-if="key>=52&&key<=53" @click="gomenudetailtwo(item.id)">
												<img :src="item.img" alt="">
												<p>{{item.title}}</p>
												<p>{{item.tags}}</p>
										</li>
									</ul>
								</swiper-slide>
								<swiper-slide>
									<ul>
										<li v-for="(item,key) in menus" v-if="key>=54&&key<=55" @click="gomenudetailtwo(item.id)">
												<img :src="item.img" alt="">
												<p>{{item.title}}</p>
												<p>{{item.tags}}</p>
										</li>
									</ul>
								</swiper-slide>
								<div class="swiper-pagination"  slot="pagination"></div>
							</swiper>
						</div>
					</div>

					<!-- 今日推荐 -->
					<div class="todayrecommend">
						<p>今日推荐</p>
						<swiper :options="swiperOption1">
							<swiper-slide v-for="(item,index) in imgs" :key="index">
								<img :src="item" alt="">
							</swiper-slide>
							<div class="swiper-pagination" slot="pagination"></div>
						</swiper>
					</div>

					<!-- 精选好货 -->
					<div class="buybg">
						<div class="buy" v-for="(item,key) in menus" v-if="key>=6"  @click="show_goodslistdetail(item._id)">
							<div class="img">
								<img :src="item.img" alt="">
							</div>
							<div class="msg">
								<div>
									<h3>{{item.title}}</h3>
									<p>{{item.tags}}</p>
								</div>
								<div>
									<span class="zhekou">5 折</span>
									<p><span>￥{{item.newprice}}</span> <span>￥{{item.oldprice}}</span></p>
									<img src="../../static/img/draw_vector_recipe_store_recommend_cart_primary.png" alt="">
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
					<!-- 新鲜专题 -->
					<div class="freshfood">
							<div class="sancanHeader">
									<p>新鲜专题</p>
									<p>更多></p>
							</div>
							<div>
									<img src="http://ntpush.cn:3999/2017-08-06_163006.jpg" alt="">
									<img src="http://ntpush.cn:3999/2017-08-06_162932.jpg" alt="">
									<img src="http://ntpush.cn:3999/2017-08-06_162921.jpg" alt="">
							</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import menudetailtwo from "./menudetailtwo.vue"
	// import goodslistdetail from "./goodslist_detail.vue"
	import "../../static/1.css"
	import $ from 'jquery'
	export default {
		components: {
				swiper,
				swiperSlide,
				menudetailtwo,
				// goodslistdetail
		},
		props:[],
		data () {

				var that = this;
				return {
					detailId:'',
					title:'',
					open:false,
					sendId:'',
					settingOn:false,
						menus:[],
						fan:"早餐",
						imgs:['http://ntpush.cn:3999/4da8b634ec34f61069d2ee6e15ce6579.jpg',
								'http://ntpush.cn:3999/a3f08a09bfffdd1d52e0055eb5545b0b.jpg',
								'http://ntpush.cn:3999/f2c4cae8d4eb9cfde2127f5fdc8837aa.jpg'
						],
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
						},
						touchStartClient:'',
						touchEndClient:'',
						touchSpeed:'',
						touchMoveDistance:'',
						width:window.innerWidth
				}
		},
		methods:{
			receptmsg:function(val){
				this.title = val;
			},

			backtoindex(){
				this.open = false;
				this.$router.replace('/recommend')
			},
			change(data){


				// console.log(1111)
				this.settingOn = data;
				// if(this.settingOn == data){
					$(".detaildrawer").css("display","none");
				// }
			},
			touchStart: function(event) { 
				this.touchStartClient = event.changedTouches[0].clientX;
			},
			touchMove: function(event) {
				this.touchEndClient = event.changedTouches[0].clientX;
				this.touchMoveDistance = this.touchStartClient - this.touchEndClient;
				if(this.touchMoveDistance<=-55){
						$(".contentbg").css({'left':-(this.touchMoveDistance+55)})
				}else if(this.touchMoveDistance>=55){
						$(".contentbg").css({'left':-(this.touchMoveDistance-55)})
				}else{
						return;
				}
				this.touchSpeed = event.deltaX
			},
			touchEnd: function(event) {
				var touchSpeed = Math.abs(this.touchSpeed)
				if(event.direction == "Left" && touchSpeed>20 || this.touchMoveDistance>=this.width/2){
						$(".contentbg").animate({'left':'-100vw'},300)
						$(".menu ul li").eq(1).css('color','red').siblings().css('color','#C1C1C2');
						$(".menu ul li").eq(1).children('div').finish().animate({left: 0, width: "100%"}, 300).parent().siblings().children('div').finish().animate({left: "50%", width: 0}, 300)
						this.touchMoveDistance = ''
				}else{ 
						$(".contentbg").animate({'left':'0vw'},300)
						this.touchMoveDistance = ''
				}
			},
			gomenudetailtwo(id){
				this.sendId = id;
				this.settingOn = true
				$(".detaildrawer").css("display","block");
			},
			show_goodslistdetail(id){
				this.open = !this.open
				this.detailId=id;
				this.$router.replace('/recommend/goodslist_detail');
			}
			},
			mounted(){

			},
			created(){
				axios({
					method:"get",
					url:this.siteUrl+"/caipuCarousel"
				})
				.then((data)=>{
					this.menus = data.data.data;
				})
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
		color:#333;
	}
	#app{
		margin-top: 20px;
	}
	.recommend{
			width: 100vw;
			height: 76vh;
			position: relative;
			top: 0px;
			left: 0px;
			overflow: auto;
	}
	.recommend:after{
		display: block;
		content: '';
		clear: both;
	}
	.container{
		width: 100%;    
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
	.sancan ul li p:nth-child(3){
		margin:0;
		line-height: 25px;
		font-size: 12px;
		text-overflow: ellipsis;
		width: 150px;
		white-space: nowrap;
		overflow: hidden;
		color:#999;
	}
	.sancan ul li p:nth-child(2){
		margin:0;
		line-height: 25px;
		font-size: 14px;
		text-overflow: ellipsis;
		width: 150px;
		white-space: nowrap;
		overflow: hidden;
	}
	.sancan ul li img{
		width: 95%;
		height: 200px;
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
	}
	.buy .msg div:last-child p{
		display: inline-block;
		margin:0;
		margin-top: 5px;
	}
	.buy .msg div:last-child img{
		width: 24px;
		vertical-align: middle;
		float: right;
		margin-top: 5px;
	}
	.buy .msg div:last-child p span:first-child{
		color:red;
		font-size:18px;
	}
	.buy .msg div:last-child p span:last-child{
		font-size:12px;
		text-decoration-line: line-through;
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
	/*template menudetailtwo里面的*/
	.detaildrawer{
		position: relative;
		display: none;
		z-index:100;
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
