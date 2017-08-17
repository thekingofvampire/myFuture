<style scoped>
	*{
		margin:0;
		padding: 0;
		list-style: none;
	}
	.clear{
		overflow:hidden;
	}
	.clear a{
		color: #333;
	}
	.demo-refresh-container{
		width: 100%;
		overflow: auto;
		-webkit-overflow-scrolling: touch;
		position: relative;
		user-select: none;
	}
	.fenlei_taps{
		padding: 3px 5px;
		font-size: 14px;
		border:1px solid #ccc;
		border-radius: 3px;
		margin-top: 3px;
		float: left;
		margin-left: 10px;
	}
	.demo-refresh-container > div >div:nth-of-type(2){
		margin-top: 0px;
	}
	.demo-refresh-container > div >div:last-child{
		margin-bottom: 20px;
	}
	.fenlei_li{
		margin-top: 20px;
	}
	/*烘焙详情*/
	.backTofenlei{
		display: inline-block;
		width:50px;
		height: 50px;
		position: fixed;
		left: 10px;
		top:13px;
		background:url('../../static/img/draw_vector_arrow_left_primary.png') 0 0 no-repeat;
		background-size: 30px 30px;
		margin-top:3px;
	}
	.hongbei{
		position: fixed;
		height: 100vh;
		width:100%;
		z-index: 999000;
	}
	.hongbei_search{
		border: 1px solid #ccc;
		border-radius: 2px;
		/*width:320px;*/
		height: 30px;
		padding: 5px 5px 5px 40px;
		margin-left:30px;
		background-color: #ccc;
		margin-top: 15px;
		color: #333;
	}
	.hongbei_search_icon{
		width:20px;
		height: 20px;
		margin-top: 5px;
		position: absolute;
		top:15px;
		left:26%;
	}
	.search{
		width: 100vw;
		background: white;
		position: fixed;
	}
	.search_top{
		position: relative;
		padding-bottom: 10px;
	}
	.hongbei_nav{
		border-top: 1px solid #eee;
		display: flex;
	}
	.hongbei_nav ul{
		margin: 0 auto;
		/*width: 100vw;*/
		/*display: table;*/
	}
	.hongbei_nav ul li{
		/*margin: 0 auto;*/
		width: 80px;
		height: 50px;
		padding-top: 15px;
		float: left;
		text-align: center;
	}
	.hongbei_nav ul li:last-child{
		width: 50px;
		height: 50px;
		padding:0;
	}
	.hongbei_nav img{
		width:10px;
		height: 5px;
		vertical-align: middle;
	}
	.price_icon{
		width:10px;
		height: 40px;
		display: inline-block;
	}
	/*.hongbei_nav a{
		margin-top: 15px;
		margin-left: 50px;
	}*/
</style>
<template>
	<div>
		<div class="demo-refresh-container">
			<mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh" style="margin-left:-30px"/>
			<div>
				<div class="show_bg" style="background:#f5f5f5;width:100%;height:50px;margin-bottom:-80px;margin-top:80px;display:none;position:relative;z-index:-1"></div>



				<div class="clear  fenlei_li" v-for="(item,key) in msgs">
					<img :src="item.fenleiImg" alt="" @click="toggle(item.detailId)"  width="100%">
					<a class="fenlei_taps" v-for="ite in item.fenleiTags">{{ite}}</a>
				</div>



				<mu-drawer right :open="open" @close="toggle()" class="hongbei">
					<div class="search">
						<div class="search_top">
							<a class="backTofenlei"  @click="open = false"></a>
							<input type="text" placeholder="搜索你感兴趣的" class="hongbei_search">
	            						<img src="http://ntpush.cn:3999/draw_vector_search_for_hint.png"  alt="" class="hongbei_search_icon">
						</div>
						<div class="hongbei_nav">
							<ul>
								<li><a >综合</a><img src="http://ntpush.cn:3999/draw_vector_triangle_down_primary.png" alt=""></li>
								<li><a >销量</a></li>
								<li>
									<a>价格</a>
								</li>
								<li>
									<img src="http://ntpush.cn:3999/draw_vector_store_goods_list_mode_list.png" alt="" style="width:50px;height:50px">
								</li>
							</ul>
						</div>
					</div>
					<goodslist :imgid="imgid"></goodslist>
				</mu-drawer>
			</div>
		</div>
	</div>
</template>
<script>
	import goodslist from "../components/goodslist.vue"
	export default{
		components:{
			goodslist
		},
		data(){
			return{
				refreshing: false,
				trigger: null,
				show_bg:false,
				open:false,
				msgs:[],
				imgid:''
			}

		},
		methods:{
			refresh () {
			    this.refreshing = true;
			    $(".show_bg").slideDown('fast');
			    setTimeout(() => {
			        this.refreshing = false;
			       	$(".show_bg").slideUp('fast');
			    }, 2000)
   			},
   			toggle(_id){
   			 	this.open = !this.open;
   			 	// console.log(_id);
   			 	this.imgid = _id;
   			}
 		},
 		created(){
 			// console.log(this.siteUrl)
 			axios({
 				url:this.siteUrl+'/fenlei',
 			})
 			.then((data)=>{
 				// console.log(data.data.data)
 				this.msgs = data.data.data
 			})
 		},
		mounted () {
		    this.trigger = this.$el
		}
	}
</script>
