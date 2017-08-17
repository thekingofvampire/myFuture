<template>
  <div id="app">
    <router-view></router-view>
    <mu-paper class="bottomNav">
        <mu-bottom-nav :value="bottomNav" @change="handleChange">
            <mu-bottom-nav-item to="/" value="recommend" title="推荐" icon="whatshot"/>
            <mu-bottom-nav-item to="/shop" value="shop" title="商城" icon="store"/>
            <mu-bottom-nav-item to="/me" value="me" title="我" icon="perm_identity"/>
        </mu-bottom-nav>
    </mu-paper>
  </div>
</template>

<script>
export default {
    name: 'app',
    data () {
        return {
            bottomNav: 'recommend',
            bottomNavColor: 'recommend'
        }
    },
    methods: {
        handleChange (val) {
            console.log(val)
            this.bottomNav = val;
        }
    }
}
</script>

<style>
    #app{
        /*height: 100vh;*/
    }
    .bottomNav,.mu-bottom-nav,.mu-bottom-nav{
        display: flex;
    }
    .mu-bottom-nav{
        z-index: 100;
    }
    .mu-buttom-item{
        min-width:auto;
    }
    .mu-ripple-wrapper{
        /*background: red;*/
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
    }
    .bottomNav{
        position:fixed;
        width: 100%;
        bottom:-1px;
        z-index: 70;
    }
    .bottomNav img{
        display: block;
        margin:0 auto;
    }
    .bottomNav span{
        font-size: 12px;
    }
    .mu-bottom-item-active .mu-bottom-item-text,
    .mu-bottom-item-active .mu-bottom-item-icon{
        color: #FA4646;
    }
</style>
