<template>
	<div class="shop">
		<div class="container">
			<div class="toububg">
				<div class="toubu">
					<img src="../../static/img/draw_vector_recipe_store_recommend_cart_primary.png" alt="" class="img1" @click="shopping_cart()">
					<mu-drawer right :open="open" @close="shopping_cart()" class="shopping_cart_box" style="width:100vw">
						<div class="title_top">
								<a class="setting_backToMe"  @click="goback"></a> 
								<p class="shopping_Title">购物车</p>
						</div>
						<router-view></router-view>
					</mu-drawer>
					<img src="../../static/img/draw_vector_search_for_hint.png" height="61" width="61" alt="" class="img3">
					<input type="text" placeholder="搜索商品" @click="show_search_box()">
					<mu-drawer right :open="open1" class="search_box">
						<img  class='aaa' src="http://ntpush.cn:3999/draw_vector_arrow_left_grey.png"  alt="" @click="show_search_box1()">
						<search></search>
					</mu-drawer>
					<img src="../../static/img/xiaoxi.png" alt="" class="img2">
				</div>

				<!-- 类别 -->
				<div class="menu">
					<ul>
						<li v-for="(item,key) in fenlei" @click="showthis(key)" :key="key">{{item}}
							<div></div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="nav_Carouselbg">
			<div class="nav_Carousel">
				<shoprecommend></shoprecommend>
				<fenlei class="fenlei"></fenlei>
			</div>
		</div>
	</div>
</template>

<script>
	import fenlei from "../components/fenlei.vue"
	import shoprecommend from "../components/shoprecommend.vue"
	import search from "../components/search.vue"
	import '../../static/2.css'
	export default {
		name: 'shop',
		components:{
				fenlei,
				shoprecommend,
				search
		},
		data () {
				return {
						open1:false,
						fenlei:['推荐','分类'],
						open:false,
						all:0,
						showgoods:false,
						fixedHeader: true,
						fixedFooter: true,
						selectable: true,
						multiSelectable: true,
						enableSelectAll: true,
						showCheckbox: true,
						enableSelectAll1: true,
						showCheckbox1: true,
						itemselected:false,
						tableData: [
							{
								name: '虫草花干贝芡实玉米汤1袋',
								img:"../../static/img/1.jpg",
								status: 'Employed',
								selected: true,
								guige:"1袋",
								price:"20.8"
							}
						],
						num:1

				}
		},
		methods: {
			showthis(key){
					$(".menu ul li").eq(key).css('color','red').siblings().css('color','#C1C1C2');
					$(".menu ul li").eq(key).children('div').finish().animate({left: 0, width: "100%"}, 200).parent().siblings().children('div').finish().animate({left: "50%", width: 0}, 200)
					$(".nav_Carousel").css('left',-key*100+'vw')
			},
			shopping_cart(){
					this.open = !this.open
					this.$router.replace('/shop/gouwuche')
			},
			jia(){
				this.num +=1;
			},
			jian(){
					this.num -=1;
					if(this.num = 1){
							this.num = 1
					}
			},
			goback(){
					this.open = false;
					this.$router.replace('/shop')
			},
			show_search_box(){
				this.open1 =true;

			},
			show_search_box1(){
				this.open1 = false;
			}
		},
		created(){

		}
		}
</script>

<style scoped>
	.nav_Carouselbg{
			height: 76vh;
			overflow: hidden;
			margin-top: 100px;
	}
	.nav_Carousel{
			height: 76vh;
			position: relative;
	}
	.shoprecommend{
			height: 76vh;
			overflow: auto;
			position: relative;
	}
	.fenlei{
			width: 100vw;
			height: 76vh;
			overflow: auto;
			position: absolute;
			top:0px;
			left: 100vw;
	}
	.count{
			position: fixed;
			bottom: 0;
	}
	.goodslist_detail{
			width:240px;
			padding-left: 10px;
	}
	.price_tr{
			overflow: hidden;
	}
	.price_tr span{
			display: inline-block;
			width:40px;
			height: 20px;
			border: 1px solid #ccc;
			float: right;
			text-align: center;
	}
	*{
			margin:0;
			padding:0;
	}
	td{
			display: inline-block;
			float: left;
			margin-bottom: 10px;
	}
	.list_img img{
			width:50px;
			height:50px;
	}
	.recommend_list li{
			width:48.5%;
			background-color: #fff;
			height: 220px;
			float: left;
			margin-bottom: 10px;
	}
	.recommend_list li:nth-child(Odd){
			margin-right: 10px;
	}
	.no_goods {
			background-color: #fff;
			padding-bottom: 15px;
			margin-bottom: 10px;
	}
	.no_goods img{
			width: 40px;
			height: 40px;
			margin-top: 50px;
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
		margin-top:5px;
	}
	.title_top{
		width: 100%;
		/*background-color: white;*/
		padding: 15px;
		position: fixed;
		top:0;
		z-index:100;
		background-color: white;
	}
	.shopping_cart_box{
		position: fixed;
		top:0;
		width: 100vw;
		background-color: #f5f5f5;
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
	}
	#app{
		margin-top: 20px;
	}
	.toububg{
		margin: 0;
		width: 100%;
		background: white;
		position: fixed;
		z-index: 80;
		top:0;
	}
	.toubu{
			margin:0 auto;
	}
	.toubu .img1{
			width: 25px;
			height: 25px;
			vertical-align: middle;
			margin-left: 2%;
			transition: 0.3s;
			position: relative;
	}
	.toubu .img2{
			width: 45px;
			height: 45px;
			vertical-align: middle;
			margin-left: 1%;
	}
	.toubu .img3{
			position: absolute;
			width: 25px;
			height: 25px;
			transform: translateY(40%);
			left: 35%
	}
	.toubu input{
			width: 70%;
			height: 35px;
			outline: 0;
			border-radius: 2px;
			padding-left: 120px;
			border:0;
			background: #ccc;
			margin-left: 2%;
	}
	 /*类别*/
	 .menu{
			padding:0 20px;
	 }
	 .menu ul{
			width: 100%;
			margin-top: 10px;
	 }
	.menu ul li{
			color: #C1C1C2;
			position: relative;
			/*display: table-cell;*/
			margin:0 10%;
	}
	.menu ul li:first-child{
			color:red;
	}
	.menu ul li:first-child div{
			width: 100%;
			left: 0;
	}
	.menu ul li div{
			width: 0;
			height: 2px;
			background: red;
			position: absolute;
			bottom: -15px;
			left:50%;
	}
	/*search*/
	.aaa{
	      width: 30px;
	      height: 30px;
	      margin-top:10px;
	      position:absolute;
	      left: 0px;
	      top: 0px;
	      float: left;
	      z-index:1;
  	}
  	.search_box{
  		width:100vw;
  	}
</style>
