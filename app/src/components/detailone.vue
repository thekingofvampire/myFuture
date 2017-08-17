<style scoped>
    *{
        margin:0;
        padding:0;
        text-decoration: none;
        list-style: none;
        font-family: "Microsoft YhHei";
    }
    .containerone{
         width:100%;
         height: 95vh;
         overflow: auto;
         margin-top: 40px;
    }
    .clearfix{
        content: '';
        display:block;
        height: 0;
        clear: both;
    }
    .main{
        width: 100%;
        position: relative;
        margin-bottom:100px;
    }
    .main_mdiddle{
       width: 100%;
        background: #fff;
    }
    .title_s1{
        padding:0 0.4rem;
        /*box-sizing: border-box;*/
        margin: 25px 0 10px;
    }
    .title_s1 h1{
        font-size: 20px;
        font-weight: normal;
        line-height: 52px;
        color: #333;
        font-weight: 700;
    }
    .author_s1{
       height: 32px;
        padding: 0 0.4rem;
        margin: 10px 0 25px;
    }
    .author_s1 img{
        display: inline-block;
        vertical-align: top;
        height: 32px;
        width: 32px;
        border-radius: 16px;
    }
    .author_s1 span{
        display: inline-block;
        height: 32px;
        line-height: 32px;
        color: #999;
        font-size: 16px;
        padding-left: 10px;
    }
    .img_s1{
        width: 100%;
        background: #fefefe;
        padding-top: 50%;
        overflow: hidden;
        position: relative;
        margin: 25px 0 25px;
    }
    .img_s1 img{
        display: block;
        height: 100%;
        width:100%;
        left: 0;
        top:0;
        position: absolute;
    }
    .dy_s1{
        margin: 25px 0 15px;
        padding: 0.4rem 0.4rem;
        position: relative;
    }
    .dy_s1 p{
        padding:20px 0px;
        font-size: 18px;
        line-height: 28px;
        color: #333;
        text-align: justify;
        font-weight: 100;
        position: relative;
        z-index: 10;
    }
    .dy_s1:after {
        content: " ";
        border: 1px solid rgba(0,0,0,0.1);
        border-left: 0px;
        border-right: 0px;
        width: 200%;
        height: 200%;
        border-radius: 0px;
        box-sizing: border-box;
        position: absolute;
        left: -50%;
        top: -50%;
        transform: scale(0.5);
    }
    .cp_s1{
        width: 100%;
        border-bottom: 1px solid #f5f5f5;
        padding: 0px 1px;
        box-sizing: border-box;
        display: inline-block;
        vertical-align: top;
        float: left;
    }
    .cp_s1 a{
        display: block;
        background: #fff;
        padding-bottom: 25px;
    }
    .cp_s1 .imgw{
        width: 100%;
        padding-top: 56.25%;
        position: relative;
        overflow: hidden;
        background: #fefefe;
    }
    .cp_s1 .imgw img{
        display: block;
        height: 100%;
        width: 100%;
        position: absolute;
        left: 0px;
        top: 0px;
    }
    .cp_s1 .info h3 {
        padding: 0 0.4rem;
        font-size: 20px;
        line-height: 30px;
        color: #333;
        text-align: center;
        font-weight: 100;
        margin: 20px auto 2px;
    }
    .cp_s1 .info p {
        padding: 0 0.4rem;
        font-size: 14px;
        line-height: 24px;
        color: #333;
        text-align: center;
        font-weight: 100;
        margin: 2px auto 12px;
        color: #666;
    }
    .cp_s1 .info .author {
        height: 22px;
        text-align: center;
        font-size: 0px;
        margin: 15px 0 0;
    }
    .cp_s1 .info .author img {
        display: inline-block;
        vertical-align: top;
        height: 22px;
        width: 22px;
        border-radius: 11px;
    }
    .cp_s1 .info .author span {
        display: inline-block;
        vertical-align: top;
        height: 22px;
        line-height: 22px;
        color: #999;
        padding-left: 10px;
        font-size: 14px;
    }
    /*评论*/
    .discuss{
        width: 100%;
        margin: 0px auto!important;
        background: #fff;
        padding-top: 20px;
    }
    .comm{
        text-align:left;
        padding-left: 20px;
        padding-bottom: 10px;
        font-size:20px;
    }
    .kwc_comment{
        width: 90%;
        margin:0 auto;
    }
    .plitem .img {
        display: block;
        border-radius: 8px;
        overflow: hidden;
        float: left;
    }
    .plitem .img img {
        display: block;
        height: 60px;
        width: 60px;
    }
    .plitem .plcon {
        padding-left: 10px;
        float: left;
        position: relative;
  }
    .plitem .plcon .name {
        font-size: 12px;
        color: #dd1b1b;
        font-weight: bold;
        line-height: 18px;
    }
    .plitem .plcon p {
        font-size: 14px;
        color: #333;
        line-height: 22px;
        padding: 6px 0px;
    }
    .plitem .plcon .time {
        line-height: 18px;
        color: #999;
    }
    .comment{
     padding-top:30px;
     border-bottom: 1px solid #ccc;
     position: relative;
    }
    .comment span{
         width: 70px;
         height: 30px;
         display: block;
         border: 1px solid #eee;
         border-radius: 20px;
         margin-right: 20px;
         margin-top:100px;
        line-height: 30px;
        background:#fff;
        color: #ccc;
        position: absolute;
        bottom: -17px;
        right: 110px;
    }
    .comment .demo-snackbar-button{
         width: 70px;
         height: 30px;
         line-height: 30px;
         display: block;
         border: 1px solid #eee;
         border-radius: 20px;
         background:#fff;
         color: #999;
         position: absolute;
         bottom: -17px;
         right:40px;
    }
    .seat{
        width: 100px;
        position: absolute;
        bottom: 50px;
        left: 150px;
    }
</style>
<template>
    <div class="containerone">
        <div class='main'>
            <div class='main_mdiddle'>
                <div class='title_s1'  >
                    <h1 >{{menuList.bigTitle}}</h1>
                </div>
                <div class='author_s1' style='position relative'>
                   <img src="http://site.meishij.net/user/113/145/st9973863_149707205160774.jpg">
                   <span>我叫女王大人</span>
                </div>
                <div class='img_s1' style='position relative'>
                   <img :src="menuList.albums">
                </div>
                <div class="dy_s1" style='position relative' >
                    <p>{{menuList.imtro}}</p>
                </div>
                <div class='cp_s1' style='positon:relattive' v-for='item in steps'>
                       <div class='imgw'>
                         <img :src="item.img" alt="">
                       </div>
                       <div class="info" >
                            <h3>{{item.title}}</h3>
                            <p>{{item.tags}}</p>
                            <div class="author">
                                  <img :src="item.touxiang" alt="">
                                <span>{{item.author}}</span>
                            </div> 
                       </div>     
                </div>
                <div class='clearfix'></div>
                <!--讨论组-->
                <div class='discuss'>
                    <p class='comm'>评论</p>
                    <div class='kwc_comment'>
                        <div class="plitem clearfix" id="commentid79265" v-for='item in fenxiangs'>
                            <a href="javascript:void(0)" class="img">
                                <img :src="item.url">
                            </a>
                            <div class="plcon">
                                 <a class="name" href="javascript:void(0)">{{item.wangyou}}</a>
                                 <br>
                                <span class="time">2017-07-07 18:34</span>
                                <p>{{item.p}}</p>
                            </div>
                        </div>    
                    </div>
                   
                </div>
            </div>
            <div class='clearfix'></div>
            <div class='comment'>
                <span>我要评论</span>
                 <mu-raised-button label="收藏" class="demo-snackbar-button" @click="showToast"/>

               <mu-toast v-if="toast" message="收藏成功"  class=' seat' @close="hideToast"/> 
            </div> 
        </div>
    </div>
</template>
<script>
    export default {
        props:[
        	"sendDetailId"
        ],
        data(){
           return{
           	steps:[],
           	menuList:[],
                toast: false,
             // kwc_comment 
             fenxiangs:[
                 {
                    url:'https://css.meishij.net/images/user_07.gif',
                    wangyou:'国外网友',
                    p:'太好了，谢谢分享',
                 },
                {
                    url:'https://site.meishij.net/user/113/145/st9973863_149707205160774.jpg',
                    wangyou:'女王大人',
                    p:'好',
                 }
                
             ],

           }
        },
        methods: {
             showToast () {
              this.toast = true
              if (this.toastTimer) clearTimeout(this.toastTimer)
              this.toastTimer = setTimeout(() => { this.toast = false }, 2000)
            },
            hideToast () {
              this.toast = false
              if (this.toastTimer) clearTimeout(this.toastTimer)
            }
        },
        watch:{
        	sendDetailId:function(detailId){
        		// console.log(detailId)
        		axios({
        			url:this.siteUrl+"/specialDetailData?detailId="+detailId
        		})
        		.then((data)=>{
        			// console.log(data.data.data[1])
        			this.menuList = data.data.data[1];
        			this.steps= data.data.data[1].steps;
        		})
        	}
        },
        created(){
            this.toubu = false;
        }
    }
</script>