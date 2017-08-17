<style scoped>
	*{
		margin: 0;
		padding:0;
	}
	.left{
		float: left;
	}
	.right{
		float: right;
	}
	.carousel_list{
		height: 300px;
	}
	.goods_info{
		background-color: #fff; 
		margin-bottom: 10px;
		width:100%;
		padding: 10px;
	}
	.goods_info p:nth-child(1){
		font-size: 18px;
		line-height: 30px;
		margin-top: 20px;
	}
	.goods_info p:nth-child(2){
		font-size: 14px;
		color: #888;
	}
	.goods_info a{
		font-size: 14px;
		margin-top: 20px;
	}
	.checkIt{
		padding: 10px;
		background-color: #fff;
		overflow:hidden;
		margin-bottom: 10px;
	}
	.settingIcon{
		vertical-align: middle;
	}
	.checkIt a{
		color:#333;
	}
	.imglist img{
		width: 100%;
	}
	.goodslistDetail{
		height:100vh;
		overflow: auto;
	}
	/*底部*/
	.dibubg{
		width: 100%;
		height: 50px;
		position: absolute;
		/*padding:10px;*/
		bottom:0;
		background: white;
	}
	.dibu{
		height: 100%;
	}
	.dibu >div{
		/*display: inline-block;*/
		float: left;
	}
	.service,.shopcar{
		width: 15%;
		border-right:1px solid #EDEDED;
		padding:2px 0px;
	}
	.service p,.shopcar p{
		font-size: 10px;
	}
	.service img,.shopcar img{
		display: block;
		margin: 5px auto;
		margin-bottom: 2px;
	}
	.shopcar img{
		margin-top: 3px;
		margin-bottom: 0px;
	}
	.joinshopcar{
		width: 30%;
		border-right:1px solid #EDEDED;
	}
	.joinshopcar i{
		vertical-align: middle;
	}
	.joinshopcar span{
		display: inline-block;
		font-size: 16px;
		line-height: 50px;
	}
	.buynow{
		width: 40%;
		height: 100%;
	}
	.buynow p{
		line-height: 50px;
		background: red;
		color:white;
		font-size:16px;
		font-weight: 100px;
	}
	.checkIt{
		padding: 10px;
		background-color: #fff;
		overflow:hidden;
		margin-bottom: 10px;
	}
	.settingIcon{
		vertical-align: middle;
	}
	.checkIt a{
		color:#333;
	}
	.bottom_sheet{
		height: 400px;
	}
	.bottomSheetImg_box,.bottom_sheet_text{
		display: inline-block;
	}
	.bottomSheetImg_box{
		width:30%;
		height: 30%;
	}
	.bottomSheetImg{
		width:100%;
	}
	.makesure{
		background-color: #FF4C39;
	}
	/*购物车*/
	.shopping_cart_box{
	        position: fixed;
	        top:0;
	        left:0;
	   		right:0;
	   		width:100%;
	        background-color: #f5f5f5;
	}
	.setting_backToMe{
	        display: inline-block;
	        width:50px;
	        height: 50px;
	        position: fixed;
	        left: 10px;
	        top:13px;
	        background:url('../../static/img/draw_vector_arrow_left_primary.png') 0 0 no-repeat;
	        background-size: 30px 30px;
	        z-index: 20000;
	        margin-top:3px;
	}
	.shopping_Title{
	        width:80px;
	        margin: 0 auto;
	        background-color: #F7513D;
	        height: 30px;
	        line-height: 30px;
	        color: #fff;
	        text-align: center;
	 }
	.title_top{
	        width: 100%;
	        background-color: #fff;
	        padding: 15px;
	        position: fixed;
	        top:0;
	        z-index:100;
	        padding-bottom: 15px;
	        background-color: white;
	}
	.mu-toast{
	    	background: rgba(204,204,204,.8);
	    	width: 150px;
	    	border-radius: 10px;
	    	left: 50%;
	    	top:50%;
	    	transform: translateX(-50%);
	}
</style>
<template>
	<div class="goodslistDetail"  @scroll="scrollthis($event)" >
		<div v-for="(item,index) in details">
			<div>
				<swiper :options="swiperOption" ref="mySwiper" class="carousel_list"> 
				    <!-- slides -->
				    <swiper-slide v-for="(ite,key) in item.lunbo" :key="key"><img :src="ite" alt="" style="width:100%;height:100%"></swiper-slide>
				    <!-- Optional controls -->
				    <div class="swiper-pagination"  slot="pagination"></div>
				</swiper>
			</div>
			<div class="goods_info">
				<p>{{item.title}}</p>
				<p>{{item.tags}}</p>
				<a >&yen;5</a>
			</div>
			<div class="checkIt">
				<a class="left">已选:"{{item.guige}}"</a>
				<mu-icon class="right settingIcon" value="keyboard_arrow_right" color="#999" />
				<span class="right">x1</span>
			</div>
			<div class="imglist">
				<img :src="it" alt="" v-for="it in item.descriptionImg">
			</div>
			<mu-back-top/>
			<div class="dibubg">
				<div class="dibu">
					<div class="service">
						<img src="../../static/img/draw_vector_customer_service_grey.png" height="25" width="25" alt="">
						<p>客服</p>
					</div>
					<div class="shopcar" @click="shopping_cart()">
						<img src="../../static/img/draw_vector_shop_cart_grey.png" height="29" width="29" alt="">
						<p>购物车</p>
					</div>
					<mu-drawer right :open="open" @close="shopping_cart()" class="shopping_cart_box">
	                        <div class="title_top">
	                            <a class="setting_backToMe"  @click="goback"></a> 
	                            <p class="shopping_Title">购物车</p>
	                        </div>
	                        <router-view></router-view>
	                </mu-drawer>
					<div class="joinshopcar" @click="showToast(item)">
						<i class="material-icons">add</i><span>购物车</span>
					</div>
					<mu-toast v-if="toast" @close="hideToast" :message="message"/>
					<div class="buynow">
						<p>立即购买</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import Vue from "vue"
	// import gouwuche from "../components/gouwuche.vue"
	export default{
		components: {
		    swiper,
		    swiperSlide,
		    // gouwuche
		},
		props:['detailId',"key1"],
		data(){
			return{
				details:[],
				detail_pic:[
					"../../static/img/1.jpg",
					"../../static/img/2.jpg",
					"../../static/img/3.jpg"
				],
				pic:[
					"../../static/img/1.jpg",
					"../../static/img/2.jpg",
					"../../static/img/3.jpg"
				],
				swiperOption: {
		          	pagination: '.swiper-pagination',
		          	paginationType: 'fraction'
				},
				bottomSheet:false,
				open:false,
				toast: false,
				message:'添加购物车成功',
				title:'',
				cartList:[],
				num:0
			}
		},
		methods:{
			scrollthis(event){
				if(event.srcElement.scrollTop >= 100){
					$('.shareandback').css('background','rgba(255,255,255,1)');
					$(".backTohongbei").css({'background':"url('../../static/img/draw_vector_arrow_left_primary.png') 0 0 no-repeat","background-size": "30px 30px"})
					$(".share").css({'background':"url('../../static/img/draw_vector_share_primary.png') 0 0 no-repeat","background-size": "30px 30px"})
					if(event.srcElement.scrollTop > 300){
						this.$emit("aaa",this.title)
					}else{
						this.$emit("aaa",'')
					}
				}else{
					$('.shareandback').css('background','')
					$(".backTohongbei").css({'background':"url('../../static/img/draw_vector_arrow_left_with_circle_black_background.png') 0 0 no-repeat","background-size": "30px 30px"})
					$(".share").css({'background':"url('../../static/img/draw_vector_share_white_with_circle_black_background.png') 0 0 no-repeat","background-size": "30px 30px"})
				}
			},
			shopping_cart(){
                this.open = !this.open
                // console.log(window.location.hash.split('/')[1])
                if(window.location.hash.split('/')[1] == "recommend"){
                	// console.log('recommend')
                	this.$router.replace('/recommend/goodslist_detail/gouwuche')
                }else{
                	this.$router.replace('/shop/goodslist_detail/gouwuche')
                }
                
            },
            showToast (item) {
		      	this.toast = true;
		      	this.num++;
		      	// console.log(this.num)
		      	this.cartList = JSON.parse(localStorage['shopcar'])
		      	var obj = {
		      		num:this.num,
		      		_id:item._id,
		      		img:item.img[0],
		      		title:item.title,
					guige:item.guige,
					newprice:item.newprice,
					
		      	}
		      	if(this.cartList.length == 0){
		      		// console.log(222)
					this.cartList.push(obj)
				}else{
					var arr1 = []
					for(var i in this.cartList){
						arr1.push(this.cartList[i]._id)
					}
					if(arr1.indexOf(obj._id) == -1){
						// console.log(1111)
						this.cartList.push(obj)
					}else{
						// console.log(arr1.indexOf(obj._id))
						this.cartList[arr1.indexOf(obj._id)].num = obj.num
					}
				}
		      	// this.cartList.push(obj)
		      	localStorage.setItem("shopcar",JSON.stringify(this.cartList));
		      	if (this.toastTimer) clearTimeout(this.toastTimer);
		      	this.toastTimer = setTimeout(() => { this.toast = false }, 1000);
		    },
		    hideToast () {
		      	this.toast = false
		      	if (this.toastTimer) clearTimeout(this.toastTimer)
		    },
			goback(){
				this.open = false;
				if(window.location.hash.split('/')[1] == "recommend"){
                	// console.log('recommend')
                	this.$router.replace('/recommend/goodslist_detail')
                }else{
                	this.$router.replace('/shop/goodslist_detail')
                }
			}
		},
		watch:{

		},
		mounted(){
			// console.log(this.detailId)
			if(!this.detailId){
				$('.goodslistDetail').scrollTop(0);
			}else{
				$('.goodslistDetail').scrollTop(0);
				axios({
					url:this.siteUrl+'/goodslistdetail?_id='+this.detailId,
				})
				.then((data)=>{
					// console.log(this.details)
					this.details = data.data.data
					this.title = data.data.data[0].title
				})
			}
		},
		created(){
			// console.log(111)
			this.num = 0;
			if(!localStorage.shopcar){
				var arr1 = []
				localStorage.shopcar = JSON.stringify(this.cartList)
			}
		}
	}
</script>