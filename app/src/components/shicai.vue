<template>
   <div class='container1'>
      <div class='main'>
        <h4 class='bbtitles'>当季推荐</h4>
        <div class='greens' v-for='item in greens'>
            <a href="" class='img'>
              <img :src="item.url" alt="">
            </a>
            <div class='c'>
              <h4>
                <a href="">{{item.title}}</a>
              </h4>
              <ul>
                <li v-for='aaa in item.lists'>{{aaa}}</li>
              </ul>
            </div>
        </div>
     
      </div>
     
   </div>
</template>

<script>
  export default {
    data () {
      return {
        greens:[
            {
              url:'http://images.meishij.net/p/20111214/a82d115d88dd46598f4333777582469c_150x150.jpg',
              title:'西红柿',
              lists:['较低热量','抗癌','可降脂降压','健胃消食'],
            },
            {
              url:'http://images.meishij.net/p/20140630/7f0d129d13145ff6c28e4cb1aec80bc8_150x150.jpg',
              title:'豇豆',
              lists:['较低热量','促进胃肠蠕动']
            },
            {
              url:'http://images.meishij.net/p/20150331/e42c1901635df0e2483221ce2a644ad9_150x150.jpg' ,
              title:'苦瓜',
              lists:['较低热量','苦瓜具有清热消暑',],
            },
            {
              url:'http://images.meishij.net/p/20111214/597ab1da96d8a35458b72ae7ca8ccc27_150x150.jpg',
              title:'柿子椒',
              lists:['较低热量','缓解疲劳','解热','镇痛'],
            },
            {
              url:'http://images.meishij.net/p/20110706/46ff26140cddcba66a59ef101bb7a4a0_150x150.jpg',
              title:'茄子',
              lists:['较低热量','治胃癌','抗衰老']
            },
            {
              url:' http://images.meishij.net/p/20170330/31900af8bf909e61f5982c91313ef665_150x150.jpg',
              title:'莴笋',
              lists:['较低热量','利尿通乳','防癌抗癌','通便排毒'],
            },
            {
              url:' http://images.meishij.net/p/20170330/5ff27eba123f27615b1c0f0c406a5c27_150x150.jpg',
              title:'土豆',
              lists:['中等热量','瘦身','吃出好性格','美容'],
            },
            {
              url:' http://images.meishij.net/p/20140331/5a8562a437374217a483cd333238a72d_150x150.jpg',
              title:'丝瓜',
              lists:['较低热量','润肤美白','健脑','活血通络'],
            },
            {
              url:'http://images.meishij.net/p/20121126/b3f66004d9644644de25e00ee84c91c3_180x180.jpg',
              title:'杏鲍菇',
              lists:['较低热量','去脂降压','提高免疫力','消食']
            },
            {
              url:'http://images.meishij.net/p/20111202/62c149c64a4c9a7a02911650cc50b256_180x180.jpg',
              title:'南瓜',
              lists:['较低热量','预防癌症','保护胃粘膜'],
            },
            {
              url:' http://images.meishij.net/p/20110830/7ca005000cad4f23ec2d8f9151cd6062_180x180.jpg',
              title:'油麦菜',
              lists:['较低热量','促进血液循环'],
            },
            {
              url:'http://images.meishij.net/p/20140521/effe3944174b288a948ef9ff85be82cc_180x180.jpg',
              title:'卷芯菜',
              lists:['较低热量','杀菌','防癌抗癌','促进消化'],
            },
            {
              url:' http://images.meishij.net/p/20110822/dc52671b142bcfe1b99756c29f5e210d_180x180.jpg',
              title:'黄瓜',
              lists:['较低热量','抗癌','可降脂降压','健胃消食'],
            },
            {
              url:'http://images.meishij.net/p/20140619/f7b1ceee4745c47378c6cc428b7a1818_180x180.jpg',
              title:'生菜',
              lists:['较低热量','抗癌','可降脂降压','健胃消食'],
            },
            {
              url:'http://images.meishij.net/p/20140313/156de38977fee0b1463168e23396ef05_180x180.jpg',
              title:'菜花',
              lists:['较低热量','抗癌','可降脂降压','健胃消食'],
            },
            {
              url:'http://images.meishij.net/p/20110713/0ff549e81061928347d77e12fbb9edcf_180x180.jpg',
              title:'西瓜',
              lists:['较低热量','抗癌','可降脂降压','健胃消食'],
            },
            {
              url:'http://images.meishij.net/p/20111215/c3010b5c7b4e8581e909d8b874474fb0_150x150.jpg',
              title:'桃子',
              lists:['较低热量','抗癌','可降脂降压','健胃消食'],
            },
            {
              url:'http://images.meishij.net/p/20110825/de95b24631ef8f0022886a5c8d8ffe31_180x180.jpg',
              title:'哈密瓜',
              lists:['较低热量','抗癌','可降脂降压','健胃消食'], 
            },
            {
              url:'http://images.meishij.net/p/20110822/b37011b5eaca0be8e20588c128af0fef_180x180.jpg',
              title:'葡萄',
              lists:['较低热量','抗癌','可降脂降压','健胃消食'], 
            },
            {
              url:'http://images.meishij.net/p/20150228/6084dad456eff7e4de9645b0c0918462_150x150.jpg',
              title:'芒果',
              lists:['较低热量','抗癌','可降脂降压','健胃消食'], 
            },
            {
              url:'http://images.meishij.net/p/20120829/3884ebf90e667da178d1b7bd8cf62ddf_150x150.jpg',
              title:'甜瓜',
              lists:['较低热量','抗癌','可降脂降压','健胃消食'], 
            },
            {
              url:'http://images.meishij.net/p/20120131/41f2b4eab3e900b734f9b424c7b39dd0_150x150.jpg',
              title:'李子',
              lists:['较低热量','抗癌','可降脂降压','健胃消食'], 
            },
            {
              url:'http://images.meishij.net/p/20170330/cbe31e4ef6176df562054b6b5297ca50_150x150.jpg',
              title:'香蕉',
              lists:['较低热量','抗癌','可降脂降压','健胃消食'],
            },
            {
              url:'http://images.meishij.net/p/20110713/3cdd3156195b55ebd1beb621dd1bbe0b_180x180.jpg',
              title:'木瓜',
              lists:['较低热量','抗癌','可降脂降压','健胃消食'], 
            },
            {
              url:'http://images.meishij.net/p/20111215/480930953910f43ec1181a414c48e32c_180x180.jpg',
              title:'杏',
              lists:['较低热量','抗癌','可降脂降压','健胃消食'], 
            },
            {
              url:'http://images.meishij.net/p/20110822/d0158cc5546da5c9ace6a49cf8d07adc_180x180.jpg',
              title:'榴莲',
              lists:['较低热量','抗癌','可降脂降压','健胃消食'], 
            },
             {
              url:'http://images.meishij.net/p/20140504/1effd9a84a28fe2ef508d4b286df9299_180x180.jpg',
              title:'荔枝',
              lists:['较低热量','抗癌','可降脂降压','健胃消食'], 
            },
            {
              url:'http://images.meishij.net/p/20110714/b28460129149f84ef764b333f2d4469f_180x180.jpg',
              title:'樱桃',
              lists:['较低热量','抗癌','可降脂降压','健胃消食'], 
            },
            {
              url:'http://images.meishij.net/p/20110714/de2e19c25348fe9784c98878738596a3_180x180.jpg',
              title:'火龙果',
              lists:['较低热量','抗癌','可降脂降压','健胃消食'], 
            },
            {
              url:' http://images.meishij.net/p/20111215/4a4f9ea962a0eb60db4d23205f0db6ac_180x180.jpg',
              title:'杨梅',
              lists:['较低热量','抗癌','可降脂降压','健胃消食'], 
            },
            {
              url:'http://images.meishij.net/p/20110822/e58343174e46f40834c1db19aa823be1_150x150.jpg',
              title:'黄鱼',
              lists:['较低热量','抗癌','可降脂降压','健胃消食'],  
            },
            {
              url:'http://images.meishij.net/p/20170330/96da0e84e46ee56abbedb73a5457a716_150x150.jpg',
              title:'草鱼',
              lists:['较低热量','抗癌','可降脂降压','健胃消食'],  
            },
            {
              url:'http://images.meishij.net/p/20140704/0b5100453f24b68ff6ea3b5f3a39ad6a_150x150.jpg',
              title:'小龙虾',
              lists:['较低热量','抗癌','可降脂降压','健胃消食'],  
            },
            {
              url:'http://images.meishij.net/p/20110930/7a10c9da814c97476b50533fb55a7540_150x150.jpg',
              title:'蛤蜊',
              lists:['较低热量','抗癌','可降脂降压','健胃消食'],  
            },
            {
              url:'http://images.meishij.net/p/20170330/23da49e7bb0dd02111b14d640c2a90eb_150x150.jpg',
              title:'虾',
              lists:['较低热量','抗癌','可降脂降压','健胃消食'],  
            },
            {
              url:'http://images.meishij.net/p/20120703/1af59099f56158ef054e6ee5888acedf_150x150.jpg',
              title:'鸭',
              lists:['较低热量','抗癌','可降脂降压','健胃消食'],  
            },
            {
              url:'http://images.meishij.net/p/20140704/d6b288ab3db707acaa04b211035c49a6_150x150.jpg',
              title:'蛏子',
              lists:['较低热量','抗癌','可降脂降压','健胃消食'],  
            },
            {
              url:'http://images.meishij.net/p/20111208/a33af27d0cb180dfb0762fc1f5386819_150x150.jpg',
              title:'皮皮虾',
              lists:['较低热量','抗癌','可降脂降压','健胃消食'],  
            },
            {
              url:'http://images.meishij.net/p/20170330/1cc4705a67b303ddf6e543d9ba33eff2_180x180.jpg',
              title:'带鱼',
              lists:['较低热量','抗癌','可降脂降压','健胃消食'],  
            },
             {
              url:'http://images.meishij.net/p/20170330/23da49e7bb0dd02111b14d640c2a90eb_150x150.jpg',
              title:'虾',
              lists:['较低热量','抗癌','可降脂降压','健胃消食'],  
            },
            {
              url:'http://images.meishij.net/p/20120703/1af59099f56158ef054e6ee5888acedf_150x150.jpg',
              title:'鸭',
              lists:['较低热量','抗癌','可降脂降压','健胃消食'],  
            },
            {
              url:'http://images.meishij.net/p/20140704/d6b288ab3db707acaa04b211035c49a6_150x150.jpg',
              title:'蛏子',
              lists:['较低热量','抗癌','可降脂降压','健胃消食'],  
            },
            {
              url:'http://images.meishij.net/p/20111208/a33af27d0cb180dfb0762fc1f5386819_150x150.jpg',
              title:'皮皮虾',
              lists:['较低热量','抗癌','可降脂降压','健胃消食'],  
            },
            {
              url:'http://images.meishij.net/p/20170330/1cc4705a67b303ddf6e543d9ba33eff2_180x180.jpg',
              title:'带鱼',
              lists:['较低热量','抗癌','可降脂降压','健胃消食'],  
            },

        ],
      }
    },
    methods: {
     
    }
  }
</script>
<style scoped>
    *{
      padding:0;
      margin: 0;
      text-decoration: none;
      list-style: none;
    }
   .container1{
      width: 100%;
    }
    .clearfix{
      content: '';
      display:block;
      height: 0;
      clear: both;
    }
    .left{
      float: left;
    }
    .main .bbtitles{
      font-weight: normal;
      font-size: 16px;
      color: #999;
      height: 35px;
      text-align: left;
      line-height: 30px;
      background: #eee;
    }
    .greens{
      display: flex;
      justify-content: space-around;
      height: 180px;
      border-bottom:1px solid #eee;
    }
    .greens img{
      margin:10px 10px;
      width: 150px;
      height:150px;
    }
    .c{
      width: 70%;

    }
    .c h4{
      text-align:left;
      font-weight: normal;
      padding:30px 0px 10px 0px;
    }
    .c h4 a{
      text-align:left;
      color: #999;
      font-size: 16px;
      padding-left: 5px;
    }
    .c ul{
      width: 90%;
      float: left;
    }
    .c ul li{
      float: left;
      padding:0px 5px;
      height: 30px;
      line-height: 30px;
      margin: 5px;
      text-align: center;
      background:#F8F4F4;
      font-size: 15px;
      color: #999;
    }
    .c ul li:nth-child(1){
       background:lawngreen;
       color: #fff;
    }
</style>

