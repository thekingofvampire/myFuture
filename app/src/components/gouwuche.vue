<style scoped>
    .count{
        position: fixed;
        bottom: 0;
        background: white;
    }
    
    
    *{
        margin:0;
        padding:0;
    }
    td{
        display: inline-block;
        float: left;
        margin-bottom: 10px;
    }
    .no_goods {
        background-color: #fff;
        padding-bottom: 15px;
        margin-bottom: 10px;
    }
    .no_goods img{
        width: 40px;
        height: 40px;
        margin-top: 50px;
    }
    .shopcarcontent{
        height: 93vh;
        overflow: auto;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
    }
    .shopcarcontent ul{
        padding-top: 10px;
        margin-top: 60px;
        width: 100vw;
        background: white;
    }
    .shopcarcontent ul li{
        width: 100vw;
        display: flex;
        /*border-bottom:1px soid #ccc;*/
        /*justify-content: space-between;*/
    }
    .shopcarcontent ul li >div:first-child{
        width: 10%;
    }
    .shopcarcontent ul li >div:nth-child(2){
        padding:10px;
        width: 35%;
    }
    .shopcarcontent ul li >div:nth-child(2) img{
        width: 100%;
    }
    .shopcarcontent ul li >div:nth-child(3){
        width: 55%;
        padding: 10px;
        padding-bottom: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    
    .shopcarcontent ul li >div:nth-child(3) p{
        text-align: left;
    }
    .shopcarcontent ul li >div:nth-child(3)>div{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

    }
    .shopcarcontent ul li >div:nth-child(3)>div >div{
        display: inline-block;
    }
    .goodscount{
        border:1px solid #ccc;
        padding:0;
        margin:0;
    }
    .goodscount span{
        display: inline-block;
        width: 20px;
        height: 100%;
    }
    .goodscount span.jiajian{
        width: 25px;
        text-align: center;
        background: #ccc
    }
    .demo-checkbox{
        margin-top: 150%;
    }
</style>
<template>
    <div class="gouwuche">
        <div class="no_goods_box" v-if="showgoods">
            <div class="no_goods">
                <img src="../../static/img/draw_vector_shop_cart_grey.png" alt="">
                <p>购物车是空的</p>
            </div>
        </div>
        <div v-else>
            <div class="shopcarcontent">
                <ul>
                    <li v-for="(item,key) in tableData"  :key="key">
                        <div>
                            <mu-checkbox name="group" :nativeValue="String(item.newprice*item.num)" class="demo-checkbox" v-model="list" @input="demo(list)"/>
                        </div>
                        <div>
                            <img :src="item.img" alt="">
                        </div>
                        <div>
                            <p>{{item.title}}</p>
                            <div>
                                <div>&yen;{{(item.newprice*item.num).toFixed(2)}}</div>
                                <div class="goodscount">
                                    <span @click="jian(item,key)" class="jiajian">-</span>
                                    <span>{{item.num}}</span>
                                    <span @click="jia(item)" class="jiajian">+</span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="count" style="overflow:hidden;width:100%">
                <div style="float:right">
                    <span>合计：&yen;{{total.toFixed(2)}}</span>
                    <a style="background:red;width:90px;height:50px;display:inline-block;line-height:50px;color:#fff">结算</a>
                </div>
            </div>
        </div>
            
    </div>
</template>
<script>

    import Vue from "vue";
    export default {
        data(){
            return{
                open:false,
                all:0,
                showgoods:false,
                fixedHeader: true,
                fixedFooter: true,
                selectable: true,
                multiSelectable: true,
                enableSelectAll: true,
                showCheckbox: true,
                enableSelectAll1: true,
                showCheckbox1: true,
                itemselected:false,
                tableData: [],
                arr:[],
                num:1,
                single:false,
                allprice:0,
                list:[],
                total:0
            }
        },
        methods:{
            demo(n){
                // if(n){}
                this.total=0;
                // console.log(n)
                if(n.length>0){
                    for(var i=0;i<n.length;i++){
                        this.total+=Number(n[i])
                        this.total.toFixed(2)
                    }
                }
                
            },
            shopping_cart(){
                this.open = !this.open
            },
            jia(item){
                item.num++;
                this.total = 0;
                this.list = []
                this.allprice = (Number(this.allprice) + Number(item.newprice)).toFixed(2)
                this.all = this.allprice
                localStorage.setItem("shopcar",JSON.stringify(this.tableData));
            },
            jian(item,key){
                this.total = 0;
                this.list = []
                if(item.num == 1){
                    this.tableData.splice(key,0)
                    var newarr = this.tableData.splice(key,1);
                    localStorage.setItem("shopcar",JSON.stringify(this.tableData));
                    item.num = 1
                    return;
                }
                item.num--
                this.allprice = (Number(this.allprice) - Number(item.newprice)).toFixed(2)
                this.all = this.allprice
                localStorage.setItem("shopcar",JSON.stringify(this.tableData));
            },
            
        },
        created(){
            var arr = JSON.parse(localStorage.getItem("shopcar"));
            // console.log(arr)
            if(arr[0] == null){
                this.showgoods = true
            }else{
                this.showgoods = false
                this.tableData = arr
            }
        }
    }
</script>