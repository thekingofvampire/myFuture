<style scoped>
	*{
		padding: 0;
		margin: 0;
		list-style: none;
	}
	.goods_list{
		overflow:hidden;
		border-top: 1px solid #eee;
		padding: 10px;
		padding-top: 0
	}
	.hongbei_detail_text{
		text-align: left;
		margin-left: 20px;
		width:60%;
	}
	.hongbei_detail_text p{
		width: 100%;
		display:block;
		white-space:nowrap; 
		overflow:hidden; 
		text-overflow:ellipsis;
	}
	.youxuan_price{
		font-size: 12px;
		text-align: right;
		float: right;
		margin-top: 25px;
	}
	.youxuan_price span{
		display: block;
		/*width: 100px;*/
	}
	.youxuan_price del{
		display: block;
	}
	.openOne_drawer{
		width:100%;
		position: fixed;
		top:0;
		background-color: #f5f5f5;
	}
	.goodlist{
		height: 85vh;
		overflow: auto;
		margin-top: 100px;
	}
	.goodlis >ul{
		height: 85vh;
		overflow: auto;
	}
	.goodlis >ul li{
		height: 85vh;
		overflow: auto;
	}
	.goodlis >ul li:first-child{
		padding-top: 0
	}
	/*清除浮动*/
	.shareandback{
		position: absolute;
		width: 100%;
		padding:5px 10px;
		z-index: 2;
		display: flex;
		justify-content: space-between;
	}
	.goodsdetail{
		height: 100vh;
		overflow: auto;
	}
	.backTohongbei{
		display: inline-block;
		width:30px;
		height: 30px;
		background-size: 30px 30px;
		z-index: 200;
		margin-top:5px;
	}
	.share{
		display: inline-block;
		width:30px;
		height: 30px;
		background-size: 30px 30px;
		z-index: 200;
		margin-top:3px;
	}
	.title{
		font-size: 16px;
		line-height: 40px;
	}
	/*头部*/
	.search{
		width: 100vw;
		background: white;
		position: fixed;
		top:0;
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
	.hongbei_search{
		border: 1px solid #ccc;
		border-radius: 2px;
		outline: none;
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
</style>
<template>
		
		<div class="goodlist">
			<div class="search">
				<div class="search_top">
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
			<ul>
				<li  v-for="(item,key) in goods_list" class="goods_list" @click="go(item._id,key)" :key="key"  >
					<div>
						<img :src="item.img" alt="" style="float:left;width:33%">
					</div>
					<div class="hongbei_detail_text" style="float:left">
						<p style="font-size:18px;color:#333;line-height:35px;">{{item.title}}</p>
						<p style="font-size:14px;color:#999">{{item.tags}}</p>
						<div class="youxuan_price">
							<span style="color:red">优选价&yen;{{item.newprice}}</span>
							<del>原价&yen;{{item.oldprice}}</del>
						</div>
					</div>
				</li>
			</ul>
			<mu-drawer right :open="openone" @close="closeOrOpen()" class="openOne_drawer">
				<div class="goodsdetail">
					<div class="shareandback">
						<a class="backTohongbei" @click="back"></a>
						<p class="title">{{title}}</p>
						<a class="share"></a>
					</div>
		          		<router-view :detailId="detailId" v-on:aaa="receptmsg"></router-view>
				</div>
			</mu-drawer>
	       </div>
 
	
</template>
<script>
    import $ from 'jquery'
	export default{
		components:{
			// goodslistDetail
		},
		props:["sendData"],
		data(){
			return{
				key1:'',
				detailId:'',
				openone:false,
				goods_list:[],
				title:'',
				scroll:""
			}
		},
		methods:{
			closeOrOpen(){
				this.openone= !this.openone
			},
			go(a,key){
				this.detailId = a;
				this.key1 = key;
				$(".hongbei").css({'height':'100vh','overflow':'hidden'});
				this.openone = true;
				this.$router.replace('/shop/goodslist_detail')
			},
			back(){
				$(".hongbei").css({'height':'100vh','overflow':'auto'});
				this.openone = false;
				this.scroll = 0;
               		this.$router.replace('/shop');
			},
			receptmsg:function(val){
				this.title = val;
			}
		},
	    watch:{
	    	sendData:function(val){
			$('.goodlist').scrollTop(0);
			console.log(val)
	    		axios({
	    			url:this.siteUrl+'/searchDetail?title='+val
	    		})
	    		.then((data)=>{
	    			this.goods_list = data.data.data
	    		})
	    	}
	    },
		mounted(){
		}
	}
</script>
