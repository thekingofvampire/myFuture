import Vue from 'vue'
import Router from 'vue-router'
import recommend from '@/components/recommend'
import shop from '@/components/shop'
import Me from '@/components/Me'
import caipu from '@/components/caipu'
import group from '@/components/group'
import shoprecommend from '@/components/shoprecommend'
import goodslist from '@/components/goodslist'
import goodslist_detail from '@/components/goodslist_detail'
import gouwuche from '@/components/gouwuche'

import VueAwesomeSwiper from 'vue-awesome-swiper'

import $ from 'jquery'
import pinyin from 'pinyin'
Vue.use(Router)
Vue.use(VueAwesomeSwiper)

export default new Router({
    routes: [
        {
            path: '/',
            redirect:'/recommend'
        },
        {
        	path:"/recommend",
        	component: recommend,
        	children:[
                		{
                			path:'goodslist_detail',
                            component:goodslist_detail,
                            children:[
                                {
                                    path:'gouwuche',
                                    component:gouwuche
                                }
                            ]
                		}
        	]
        },
        {
            path: '/shop',
            component:shop,
            children:[
                    {
                        path:'gouwuche',
                        component:gouwuche
                    },
                    {
                        path:'goodslist_detail',
                        component:goodslist_detail
                    },
                    {
                        path:'goodslist_detail',
                        component:goodslist_detail,
                        children:[
                            {
                                path:'gouwuche',
                                component:gouwuche
                            }
                        ]
                    }
            ]
        }, 
        {
            path: '/me',
            component:Me,
        }
    ]
})
