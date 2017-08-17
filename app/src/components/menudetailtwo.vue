<style scoped>
  *{
      padding:0;
      margin: 0;
      text-decoration: none;
      list-style: none;
  }
   .container{
      width: 100%;
      margin-bottom: 100px;
    }
    .clearfix{
      content: '';
      display: block;
      clear: both;
      height: 0;
      /*操作步骤详情页*/
    }
   .info_width{
    width: 100%;
   }
   .pro_img{
     height:270px;
     width: 100%;
     position: relative;
     overflow:hidden;
     margin-top: 40px;
   }
   .pro_img_big{
   	width: 100%;
   	left:0;
	position: absolute;
	z-index: 1;
	top:0;
   }
   
   .big_pic{
    width: 100%;
    display: block;
   }
   .pro_info{
     height: 80px;
     background: #FBF9B8;
     text-align:left;
   }
  .pro_info h4{
      padding-top:10px;
      font-weight: bold;
      font-size: 20px;
      padding-left: 20px;
  }
  .pro_info span{
    padding-left: 20px;
    font-size: 15px;
  }
  .author_pic{
    width: 100%;
    margin: 0 auto;
    height: 120px;
    border-bottom: 1px solid #eee;
  }
  .author_pic img{
    margin-top: 20px;
    width: 40px;
    height:40px;
    border-radius: 40px;
    float: left;
    margin-left: 20px;
  }
  .c_wenzi{
    float: left;
    margin-top: 20px;
    padding-left: 20px;
  } 
  .c_wenzi h5{
    text-align:left;
    font-weight: normal;
    font-size: 14px;
  }
  .c_wenzi span{
     color: #999;
  }
  .follow{
     margin-top: 30px;
     float:right;
     width: 60px;
     height: 30px;
     border: 1px solid #ff3232;
     border-radius: 20px;
     margin-right: 20px;
  }
  .follow span{
    line-height: 30px;
    color: #ff3232;
  }
  .author_pic p{
    text-align: left;
    padding:10px 0px;
    font-size:17px;
    padding-left: 20px;
  }
  .pingfen{
    width: 90%;
    margin: 0 auto;
    text-align: left;
   padding-top: 30px;
  }
  .pingfen_con{
     display: inline-flex;
  }
  .pingfen_con span{
   font-size: 15px;
  }
  .pingfen_con ul{
    padding-left: 20px;
    display: flex;
  }
  .pingfen_con ul li img{
    width: 20px;
    height:20px;
  }
 .pingfen_list{
   background:url(../../static/img/draw_vector_talent_main.png)no-repeat;
   background-size: 20px 20px;
   padding-left:30px;
   margin:10px 0px;
 }
   .pingfen_list a{
    color: #999;
   }
  .shicai{
     width:100%;
     margin-top: 20px;
     text-align: left;
     border-bottom: 1px solid #eee;
     padding-right: 20px;
     padding-left: 20px;
  }
  .shicai span{
    font-size: 15px;
  }
  .shicai em{
     font-style:normal;
     padding-left: 10px;
  }
  .fuliao{
    text-align: left;
    margin-top:30px;
    padding-left: 20px;
    border-bottom:1px solid #eee;
    padding-right: 10px;
    padding-bottom:20px;
  }
  .fuliao span{
	font-size:15px;
  }
  .fuliao em{
    	font-style:normal; 
	margin-left: 10px;
  }
  .setp{
    margin-top: 20px;
  }
  .setp h4{
    font-weight: normal;
    font-size: 17px;
  }
  .setp img{
    width: 100%;
    height: 100%;
  }
  .setp p{
    text-align: left;
    padding:10px 0px 20px 20px;
  }
    .imgfixed{
        width: 100%;
        height: 40px;
        background: white;
        position: fixed;
        z-index:111;
        top:0;
    }
    .go_img{
        width: 40px;
        height: 40px;
        /*margin-top:5px;*/
        left: 0px;
        float: left;
        top: 0px;
        
    }
</style>
<template >
    <div class='container'>
        <div class="imgfixed">
            <img  class='go_img' src="../../static/img/draw_vector_arrow_left_primary_day_night.png"  title="Close" alt="" @click="sendData()">
        </div>
        <!--操作步骤-->
    	<mu-drawer right :open="settingOn1" class='info_width' @close="settingInfo()">
    	       <div class='procedure' v-for="item in menus">
    	       <div class='pro_img' >
    	       	<img :src="item.img" alt="" class="pro_img_big">
    	    	</div>
    		<div class='pro_info'>
    			<h4>{{item.title}}</h4>
    			<span>{{item.collection_count}}人收藏</span>
    			<span>{{item.argument_count}}人评论</span>
    		</div>
    	       <div class='author_pic'>
    	       	<img :src="item.img" alt="">
    	       	<div class='c_wenzi'>
    		       	<h5>女王大人</h5>
    		       	<span>{{item.tags}}</span>
    	       	</div>
    		       <div class='follow'>
    		              <span>关注</span>
    		       </div>
    	         	<div class='clearfix'></div>
    	       </div>
    	       <div class='pingfen'>
    	              <div class='pingfen_con'>
    	          		<span>评分</span>
    				<ul>
    					<li v-for="pic in piclists">
    						<img :src="pic" alt="">
    					</li>
    				</ul>
    	              </div>
    		       <div class="pingfen_list" v-for="item in gongyis">
    		       	<a >{{item}}</a>
    		       </div> 
    	       </div>
    	       <div class='shicai'>   
    	       	<span>主料</span>
    		       <em  v-for='item1 in important_l'>{{item1}}</em>
    	       </div>
    		<div class='fuliao'>
    			<span>辅料</span>
    			<em  v-for='item2 in side_l'>{{item2}}</em>
    		</div>
    	       <div class="clearfix"></div>
    	    <!--操作步骤-->
    		<div class='setp' v-for='item3 in steps'>
    			<h4>{{item3.title}}</h4>
    			<img :src="item3.img" alt="">
    			<p>{{item3.text}}</p>
    		</div> 
    	</div>

    	</mu-drawer> 
    </div>
</template>

<script>
export default {
	props:{
		sendId:{
			type:String
		},
		settingOn:{
			type:Boolean,
			default:true
		}
	},
	name: 'menudetailtwo',
  data () {
    return {
	    	important_l:[],
	    	side_l:[],
	    	imgUrl:"",
	    	menus:[],
	    	steps:[],
	       gongyis:['炒','家常味','<60分钟','较低热量' ],
	       piclists:[
	                   'http://ntpush.cn:3999/yellow_star.png',
	                   'http://ntpush.cn:3999/yellow_star.png',
	                   'http://ntpush.cn:3999/yellow_star.png',
	                   'http://ntpush.cn:3999/yellow_star.png',
	                   'http://ntpush.cn:3999/yellow_star.png'
	       ],

    }
  },
  computed:{
  	settingOn1(){
			return this.settingOn
		},
  },
  methods: {
		sendData(){ 
			this.$emit("myEvent",false);
		},
		settingInfo(){
			this.settingOn1 = !this.settingOn1
		}
	},
	watch:{
		sendId:function (id){
			axios({
				method:"post",
				url:this.siteUrl+"/detailPage",
				data:{id:id}
			})
			.then((data)=>{
				console.log(data.data.data)
				this.menus = data.data.data;
				this.important_l=data.data.data[0].important_l;
				this.side_l=data.data.data[0].side_l;
				this.steps=data.data.data[0].steps;
			})
			}
	},
	created(){
		
	}
	
}
</script>

