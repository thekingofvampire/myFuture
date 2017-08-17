<style scoped>
    *{
        padding:0;
        margin: 0;
        text-decoration: none;
        list-style: none;
     }
     .container{
        width: 100%;
        /*margin-bottom: 100px;*/
      }
      .title{
        width: 95%;
        height:50px;
        margin: 0 auto;
        text-align:left;
      }
      .title img{
        width:35px;
        height:35px;
        margin-top: 5px;
        border-radius: 25px; 
        float: left;
      }
      .title span{
        float: left;
        margin-top: 15px;
        padding-left: 20px;
      }
	.img_list_img{
		width:100vw;
	}
      .img_list p{
        text-align:left;
        padding-left: 10px;
        font-size: 16px;
      }
      /*drawer*/
      .specialDetail{
      		width:100vw;
      		position: fixed;
      		top:0;
      		z-index:102;
        }
        .specialDetailTitle{
            position:absolute;
            left: 0px;
            top: 0px; 
            width: 100vw;
            height: 40px;
            /*margin-top:5px;*/
            background: white;

        }
       .go_img{
            width: 40px;
            height: 40px;
            z-index:111;
  	     }
</style>
<template>
    <div>
        <div class="title_con" v-for="item in menus">
            <div class='img_list' >
           	    <img :src="item.albums" alt=""  class="img_list_img" @click="showSpecialDetail(item.detailId)">
           	    <p>{{item.tags}}</p>
            </div>
            <div class='title'>
                <img src="../../static/img/tx2_3.png" alt="">
                <span>叫我女王大人</span>
            </div>
        </div>
    	<mu-drawer right :open="open" class="specialDetail" >
    		<div class="specialDetailTitle">
    			<img  class='go_img' src="../../static/img/draw_vector_arrow_left_primary_day_night.png"  alt="" @click="showSpecialDetail1()">
    		</div>
    		<detailOne  :sendDetailId="sendDetailId"></detailOne>
    	</mu-drawer>

    </div>
</template>

<script>
import detailOne from "./detailone.vue"
export default {
	components:{
		detailOne
	},
	name:'special',
	data () {
		return {
			sendDetailId:'',
			open:false,
			menus:[]
		}
	},
	methods: {
	  	showSpecialDetail(detailId){
	  		this.sendDetailId = detailId;
	  		this.open = true;
	  		console.log(detailId)
	  	},
	  	showSpecialDetail1(){
	  		
	  		this.open= !this.open
	  	}
	},
	created(){
		console.log(111)
		axios({
			url:this.siteUrl+"/specialData?parentId=5978a193a885b731c0f0b96b"
		})
		.then((data)=>{
			console.log(data.data)
			this.menus = data.data.data
		})
	}
}
</script>

