<template>
	<div>
        <header class="icon">
            <i class="iconfont icon-jiantou" @click="handleClick()"></i>
            <span>
                <p>{{$store.state.bandtitle}}</p>
                <p>￥{{$store.state.pricetitle}}</p>
            </span>
            <span><i class="iconfont icon-gengduo"></i></span>
        </header>

        <div class="swiper-container">
            <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="data in looplist" :key="data.index">
                <div class="photo">
                    <img :src="data.bigImgUrl">
                </div>
            </div>
        </div>
        <div class="swiper-pagination"></div>
        </div>

        <div v-if="datalist" class="name">
            <p>{{datalist.infos.name}}</p>
            <p>￥{{datalist.infos.marketPrice}}</p>
            <p>￥{{datalist.infos.price}}</p>
            <p>{{datalist.infos.discount}}</p>
            <button class="recom">买手推荐</button>
            <p>
                <i class="iconfont icon-Group-"></i>
                {{datalist.infos.deliver_date}}
            </p>

        <div class="all">
            <div class="shan">闪购</div>
            <div class="shell">促销</div>
            <div class="serve">服务</div>
            <ul>
                <!-- 服务<li>{{datalist.infos.promotions.event.info}}</li> -->
            </ul>
            
        </div>

        <div class="size">
            <i class="chi">尺码</i>
        <div v-for="size in sizelist" :key="size.id">
                <span>{{size.sizeValue}}</span>
        </div>
        </div>
        

        <article>
                <h3>商品参数</h3>
                <img :src="datalist.infos.description.material_quality_img" alt="">
                <ul class="story" v-for="description in descriptionlist" :key="description.id">
                    <li>
                        <span>{{description.name}}</span>
                        <span>{{description.value}}</span>
                    </li>
                </ul>
        </article>

        <ul class="sizeInfo">
                <h3>尺码信息</h3>
                <li>长度</li>
                <li>宽度</li>
        </ul>
        {{datalist.infos.description.design}}
        <h3 class="goods">商品详情</h3>
        
        <div class="sx" v-for="data in looplist" :key="data.index">
                <img :src="data.bigImgUrl">
        </div>

        <div>
                <li><img :src="datalist.infos.brandImg" alt=""></li>
                <span class="story">{{datalist.infos.brand_story}}</span>
               
                <img src="../assets/2.jpg" >
        </div>

        </div>
    </div>
</template>

<script type="text/javascript">
    import productdetailrouter from "../router";
    import axios from "axios";
    import Swiper from "Swiper";
    import "swiper/dist/css/swiper.css";
	export default{
		data(){
			return {
                looplist:[],
                datalist:null,
                descriptionlist:[],
                sizelist:[]
                
			}
        },
        mounted(){
            console.log(this.$route.params.productdetailid);
            axios.get(`/appapi/product/detail/v3?categoryId=2042204290000004920&productId=${this.$route.params.productdetailid}&userId=2022202299900098809&platform_code=H5&timestamp=1539859478755&summary=2d028ac9620c10af1bda84f29fffb969`).then(res=>{
               
                this.looplist = res.data.infos.images;
                this.datalist = res.data;
                // console.log(this.looplist);
                // console.log(res.data.infos.brand);
                this.descriptionlist = res.data.infos.description.attributesList;
                console.log(this.descriptionlist);
                this.sizelist = res.data.infos.size;
                console.log(this.sizelist);

                this.$store.commit("brangchange",res.data.infos.brand);
                this.$store.commit("pricechange",res.data.infos.price);

                this.$nextTick(res=>{
                    var swiper = new Swiper('.swiper-container', {
                        spaceBetween: 30,
                        centeredSlides: true,
                        autoplay: {
                            delay: 5000,
                            disableOnInteraction: false,
                        },
                        pagination: {
                            el: '.swiper-pagination',
                            clickable: true,
                        },
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        },
                        });
                })
            })
        },
        methods:{
            handleClick(){
                history.back();
            }
        }
        
	}
</script>

<style scoped lang="scss">
*{
	margin: 0;
	padding: 0;
	list-style: none;
}
img{
    display: block;
}
div{

    .icon{
            i{
                    width: 55px;
                    height:44px;
                    line-height: 44px;
                    font-size: 25px;
                    margin-right: 15px;
                }
            span:nth-child(2){
                width: 260px;
                display: inline-block;
                text-align: center;
                font-weight: 600;
                p:nth-child(1){
                    font-size: 15px;
                    margin-top: 5px;   
                }
                p:nth-child(2){
                    font-size: 12px;
                    color: #dd2828;
                }
            }
            
            span:nth-child(4){
                float: right;        
                i{
                    width: 55px;
                    height:44px;
                    line-height: 44px;
                    font-size: 25px;
                    
                }
            }
        }
    .swiper-container{
        width: 335px;
        height: 446px;
        margin-left: 15px;
            .photo{
                img{
                  width: 100%;    
                }
            }
            
    }
    .name{
        margin-left: 10px;
        p:nth-child(1){
            font-size: 18px;
            margin-bottom: 5px;
        }
        p:nth-child(2){
            color: #ccc;
            text-decoration: line-through;
            font-size: 12px;
            margin-bottom: 5px;
        }
        p:nth-child(3){
            color: #dd2828;
            font-weight: 600;
            display: inline-block;
            margin-bottom: 5px;
        }
        p:nth-child(4){
            border: 1px solid rgb(0, 0, 0);
            display: inline-block;
            margin-left: 3px;
            font-size: 12px;
            color: rgb(0, 0, 0);
        }
        p:nth-child(6){
            color:#666;
            margin-bottom: 10px;
            font-size: 12px;
        }
        p{
            i{
                margin-left: 3px;
                margin-right: 3px;
            }
        }
        .recom{
            font-size: 12px;
            background: white;
            border:1px solid rgb(0, 0, 0)
        }
    }
    .all{
        // padding: 10px;
        font-size: 15px;
    .shan{
        width: 100%;
        height: 60px;
        line-height: 60px;
        color: #666;
        border: 1px solid rgb(236, 234, 234);
        border-bottom: none;
    }
    .shell{
        width: 100%;
        height: 60px;
        line-height: 60px;
        color: #666;
        border: 1px solid rgb(236, 234, 234);
        border-bottom: none;
    }
    .serve{
        width: 100%;
        height: 60px;
        line-height: 60px;
        color: #666;
        border: 1px solid rgb(236, 234, 234);
        border-bottom: none;
    }
    }
    .size{
        width: 100%;
        height:60px;
        position: relative;
        .chi{
            line-height:60px;
            font-style: normal;
            float: left;
            margin-right: 15px;
            font-size: 15px;
            color: #666;
        }
        div{ 
            float: left;
            margin-right: 10px;
            margin-top: 15px;
         span{
             width: 30px;
             height: 30px;
             line-height: 30px;
             display: inline-block;
             background:#f5f5f5;
             text-align: center;
        }
        }
        
    }
    
    
    article{
        padding: 10px;
        h3{
            margin-bottom: 15px;
        }
        img{
            margin-bottom: 10px;
            width: 100%;
        }
        ul{            
            li{
                font-size: 14px;
                span:nth-child(1){
                    color:#999;
                }
                span:nth-child(2){
                    margin-left: 60px;
                }
            }
        }
    }
    .sizeInfo{
        h3{
        margin-bottom: 10px;
        }
        padding: 10px;
        li{
                font-size: 14px;
                color:#999;
                padding: 5px;
        }
    }
    .goods{
        padding:10px;
    }
    .story{
        font-size: 14px;
        padding: 10px;
        display: block;
        text-align: justify;
    }
    .sx{
        padding: 10px;
        width: 90%;
        img{
            width: 100%;
            
        }
    }
   
}
</style>