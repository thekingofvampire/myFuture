<style>
*{
      padding:0;
      margin: 0;
      text-decoration: none;
      list-style: none;
  }
   .container{
      width: 100%;
    }
  .clearfix{
      content: '';
      display:block;
      height: 0;
      clear: both;
  }
  .detail{
    width: 95%;
    margin: 0 auto;
    height: 40px;
    line-height: 40px;
    background: #fff;
  }
  .detail .go_img{
    width: 30px;
    height: 30px;
    float: left;
   margin-top:5px;
  }
  .detail span{
    font-size: 16px;
  /*  padding-right:37px;*/
  }
  .detail em{
     font-style: normal;
     float: right;
     color: #eee;
  }
  .discuss{
    width: 100%;
    height: 150px;
     background: #fff;
     padding-top:20px;
  }
  .re_textarea{
      width: 100%;
      height: 70px;
      padding: 14px;
      border:none;
      background: #fff;
      font-size: 16px;
      color: #333;
      outline:0;
  }
</style>
<template>
  <div class="container">
       <div class='detail'>
          <img  class='go_img' src="../../static/img/draw_vector_arrow_left_primary_day_night.png" @click="settingOpen = false" title="Close" alt=""></a>
          <span>编辑昵称</span>
          <em>完成</em>
       </div>
       <div class='discuss'>
           <textarea class="re_textarea" placeholder="17602141157"></textarea>
       </div>
  </div>
</template>
<script>
export default {
  name: 'discuss',
  data () {
    return {
     
    }
  },
  methods: {
   
  }
}
</script>

