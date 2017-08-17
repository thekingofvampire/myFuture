<style scoped>
	.search_head{
		width:100vw;
		padding: 10px 10px;
		position: relative;
	}
	.search_head input{
		margin-left: 10px;
		width:68%;
		height: 35px;
		padding:5px 0px 5px 40px;
		background-color: #ddd;
		border:1px solid #ddd;
		border-radius: 4px;
		color: #666;
		outline: none;
	}
	.search_btn{
		width:50px;
		height: 35px;
		margin-left: 5px;
		background-color: #FF4C39;
		color: #fff;		
		border:1px solid #FF4C39;
		border-radius: 4px ;
	}
	.search_icon{
		position: absolute;
		top:20px;
		left:55px;
		width: 5%;
	}
	.hot_tags{
		float: left;
		border:1px solid #ccc;
		border-radius: 20px;
		height: 40px;
		padding: 10px 15px;
		margin-left: 10px;
		margin-bottom: 10px;
		color:#666;
	}
	.hot_box{
		overflow: hidden;
	}
	.hot_search p{
		text-align: left;
		padding-left: 20px;
		padding-bottom: 10px;
		padding-top: 20px;
		border-bottom: 1px solid #eee;
		margin-bottom: 20px;
	}
	.detailBox{
		width:100vw;
	}
	/*返回箭头*/
	/*search*/
	.go_img1{
	      width: 30px;
	      height: 30px;
	      margin-top:10px;
	      position:absolute;
	      left: 0px;
	      top: 0px;
	      float: left;
	      z-index:1122;
  	}
</style>
<template>
	<div>
		<div class="search_head">
			<img src="http://ntpush.cn:3999/draw_vector_search_grey_light.png" alt="" class="search_icon">
			<input type="text" placeholder="搜索你感兴趣的" v-model="value_t" >
			<button class="demo-raised-button search_btn" @click.preventdefault="search_info(value_t)">搜索</button>
		</div>
		<mu-drawer  right :open="openone1" class="detailBox" >
			<img  class='go_img1' src="http://ntpush.cn:3999/draw_vector_arrow_left_grey.png"  alt="" @click="change">
			<searchdetail :sendData="sendData"></searchdetail>
		</mu-drawer>
		<div class="hot_search">
			<p>热门搜索</p>
			<div class="hot_box">
				<a v-for="item in hot" class="hot_tags">{{item}}</a>
			</div>
		</div>
	</div>
</template>
<script>
	import  searchdetail from "./searchdetail.vue"
	export default{
		components:{
			searchdetail
		},
		data(){
			return{
				sendData:'',
				openone1:false,
				value_t:null,
				hot:[
					"粥","早餐","排骨","鸡翅","茄子","西蓝花","饺子","蛋糕","红烧肉","鱼香茄子"
				]
			}
		},
		methods:{
			search_info(title){
				this.sendData = title;
				this.openone1=!this.openone1;
				$(".search_head input").attr("placeholder","搜索你喜欢的")
			},
			change(){
				this.openone1=false
			}
		}
	}
</script>

