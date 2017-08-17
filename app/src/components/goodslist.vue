<style scoped>
	*{
		padding: 0;
		margin: 0;
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
		background:url('../../static/img/draw_vector_arrow_left_with_circle_black_background.png') 0 0 no-repeat;
		background-size: 30px 30px;
		z-index: 200;
		margin-top:5px;
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
<template> 
	<div class="goodlist">
		<ul>
			<li  v-for="(item,key) in goods_list" class="goods_list" @click="go(item._id,key)" :key="key">
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
	          			<router-view :detailId="detailId" :key1="key1" v-on:aaa="receptmsg" keep-alive></router-view>
			</div>
		</mu-drawer>
	</div>
</template>
<script>
	// import goodslistDetail from "../components/goodslist_detail.vue"
    import $ from 'jquery'
	export default{
		components:{
			// goodslistDetail
		},
		props:["imgid"],
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
				// console.log(this.detailId)
				this.key1 = key;
				$(".hongbei").css({'height':'100vh','overflow':'hidden'})
				this.openone = true
				this.$router.replace('/shop/goodslist_detail')
			},
			back(){
				$(".hongbei").css({'height':'100vh','overflow':'auto'})
				this.openone = false;
				this.scroll = 0
               	this.$router.replace('/shop')

			},
			receptmsg:function(val){
				this.title = val;
			}
		},
	    watch:{
	    	imgid:function(val){
				$('.goodlist').scrollTop(0);
	    		axios({
	    			url:this.siteUrl+'/goodslist?detailId='+val
	    		})
	    		.then((data)=>{
	    			// console.log(data.data.data)
	    			this.goods_list = data.data.data
	    		})
	    	}
	    },
		mounted(){
      		
		}
	}
</script>
