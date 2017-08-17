<style scoped>
    .personalmsg{
        margin-top: 50px;
    }
    *{
        margin: 0;
        padding:0;
        text-decoration:none;
        list-style: none;
    }
    .clearfix{
        content:'';
        display: block;
        clear: both;
        height: 0;
    }
    .content{
        width: 100%;
    }
    .detail{
        width: 100%;
        height: 50px;
        line-height: 50px;
        border-bottom:1px solid #eee;
    }
    .detail .go_img{
        width: 30px;
        height: 30px;
        float: left;
        margin-top:5px;
    }
    .detail span{
        font-size: 16px;
        padding-right:37px;
    }
 
    .select_con{
        padding-right: 10px;
        height: 70px;
        line-height: 70px;
        border-bottom: 1px solid #eee;
        background: white;
    }
    .select_con span{
        float: left; 
        padding-left: 10px;
    }
    .select_con img{
        float: right;
        width: 60px;
        height: 60px;
        margin-top:5px;
        border-radius: 30px;
    }
    .select_con1 input,.select_con3 input{
        outline: 0;
        border:0;
        width: auto;
        float: right;
        text-align: right;
        /*margin-right: 50px;*/
    }
    .select_con1,.select_con3{
        line-height: 40px;
        text-align:left;
        background: #fff;
        padding-left: 10px;
        border-bottom: 1px solid #eee;
        position: relative;
    }
    .select_con1 a,.select_con3 a{
        color: #999;
        display: block;
        height: 44px;
        width: 100%;
        line-height: 44px;
        font-size: 14px;
        color: #333;
        box-sizing: border-box;
        background: url(http://site.meishij.net/p2/20160822/20160822133659_222.png) right center /24px 12px no-repeat;
        font-size: 15px;
    }
    .select_con1 span,.select_con3 span{
        position: absolute;
        right: 32px;
    }
    .color{
        width: 100%;
        height: 15px;
        background: #eee;
    }
    .input{
        width: 100%;
        opacity: 0;
        position: absolute;
    }
   
</style>
<template> 
    <div>
        <div class='personalmsg'>
            <div class='clearfix'></div>
            <div class='select_con'>
            <input type="file" class="input" @change="gettouxiang" id="files">
                <span>头像</span>
                <img :src="lists.touxiang,touxiang"  alt="">
            </div>
            <div class='select_con1'>
                <a>昵称
                    <span>
                        <input type="text" v-model="lists.nickname,nickname" v-on:blur="getnickname">
                    </span>
                    
                </a>
                <a>签名
                    <span>
                        <input type="text" v-model="lists.sign,sign" v-on:blur="getsign">
                    </span>
                </a>
            </div>
            <div class='color'></div>
            <div class='clearfix'></div>
            <div class='select_con3'>
                <a>性别
                    <span >
                        <input type="text" v-model="lists.sex,sex"  v-on:blur="getsex">
                    </span>
                </a>
                <a>生日
                    <span>
                        <mu-date-picker v-model="this.birth,birth" class="inp" :underlineShow="underline" @input="getbirth"/>
                    </span>
                </a>
                <a>家乡
                    <span>
                        {{lists.hometown}}
                    </span>
                </a>
                <a>所在地
                    <span >
                        {{lists.newaddress}}
                    </span>
                </a>
                <a>职业
                    <span>
                        {{lists.profession}}
                    </span>
                </a>
           </div>
        </div>
    </div>
        
</template>

<script>
import $ from 'jquery'
import "../../static/2.css"
export default {
    data () {
        return {
            lists:[],
            nickname:'',
            sign:'',
            val:'',
            sex:'',
            birth:'',
            sign:'',
            underline:false,
            touxiang:'',
        }
    },
    methods: {
        getnickname(){
            // console.log(this.nickname)
            axios({
                method:"post",
                url:this.siteUrl+'/nickname',
                data:{
                    nickname:this.nickname,
                    user_name:localStorage.username
                }
            })
        },
        getsign(){
            // console.log(this.sign)
            axios({
                method:"post",
                url:this.siteUrl+'/sign',
                data:{
                    sign:this.sign,
                    user_name:localStorage.username
                }
            })
        },
        getsex(){
            // console.log(this.sign)
            axios({
                method:"post",
                url:this.siteUrl+'/sex',
                data:{
                    sex:this.sex,
                    user_name:localStorage.username
                }
            })
        },
        getbirth(){
            console.log(this.birth)
            axios({
                method:"post",
                url:this.siteUrl+'/birth',
                data:{
                    birth:this.birth,
                    user_name:localStorage.username
                }
            })
        },
        gettouxiang(e){
            console.log(e)
            var formdata = new FormData();
            formdata.append('touxiang',$("#files")[0].files[0])
            formdata.append('user_name',localStorage.username)
            // console.log(formdata)
            axios({
                method:"post",
                url:this.siteUrl+'/touxiang',
                data:formdata,
                contentType:false,
                processData:false
            })
            .then((data)=>{
                console.log(this)
                console.log(data.data.data)
                this.touxiang = data.data.data
                console.log(this.touxiang)
            })
        }
    },
    watch:{
        touxiang:function(){
            var user_name = localStorage.username
            axios({
                url:this.siteUrl+'/personalinfo?user_name='+user_name
            })
            .then((data)=>{ 
                this.lists = data.data.data[0]
                // console.log(this.lists)
                this.nickname = this.lists.nickname
                this.sex = this.lists.sex
                this.birth = this.lists.birth
                this.touxiang = this.lists.touxiang
                this.sign = this.lists.sign

            })
        }
    },
    created(){
        var user_name = localStorage.username
        axios({
            url:this.siteUrl+'/personalinfo?user_name='+user_name
        })
        .then((data)=>{ 
            this.lists = data.data.data[0]
            // console.log(this.lists)
            this.nickname = this.lists.nickname
            this.sex = this.lists.sex
            this.birth = this.lists.birth
            this.touxiang = this.lists.touxiang

        })
    }
}
</script>


