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
            <div class="shell">
                <p>促销</p>
                <span>购FREE PEOPLE 最后清仓专场任意产品，购满2件8折优惠，购满3件7折优惠</span>
            </div>
            <div class="serve">
                <p>服务</p> 
                <ul>
                    <li>全场满688包邮</li>
                    <li>正品保障</li>
                    <li>买手推荐</li>
                    <li>七天无理由退货</li>
                </ul>
            </div>
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
                <div class="canshu">
                <ul class="story">
                    <li  v-for="description in descriptionlist" :key="description.id">{{description.name}}</li>
                </ul>

                <ul class="story1">
                    <li  v-for="description in descriptionlist" :key="description.id">{{description.value}}</li>
                </ul>
                </div>
        </article>
                
        <div class="sizeInfo">
                <h3>尺码信息</h3>
                <div  class="chima">
                    <ul>
                        <li v-for="sizeTable in sizeTablelist" :key="sizeTable.id" v-if="sizeTable">{{sizeTable}}</li>
                    </ul>  

                    <ul>
                        <li v-for="sizeValue in sizeValuelist" :key="sizeValue.id">{{sizeValue}}</li>
                    </ul>
                </div>
        </div>
        
        <div class="goodsDetail">
            <span>商品详情</span>
            <span>{{datalist.infos.description.design}}</span>
        </div>

        <div class="sx" v-for="data in looplist" :key="data.index">
                <img :src="data.bigImgUrl">
        </div>
        
        <div class="cankao">
            <p>图片及相关信息仅供参考，因拍摄灯光及不同显示器色差等问题可能造成商品图片与实物的色差，一切以实物为准。</p>
            <h3>洗护与保养</h3>
            <li v-if="maintenanceList">{{maintenanceList}}</li>
            <h3>{{$store.state.bandtitle}}</h3>
             <img :src="datalist.infos.brandImg" alt="">
             <span>{{datalist.infos.brand_story}}</span>
             <h3>价格说明</h3>
             <span>划线价格：为品牌指导价，并非原价</span>
             <span>未划线价格：为魅力惠实时售价</span>
             <img src="../assets/2.jpg" class="jinyong">
        </div>

        <div class="discuss">
            <h3>用户评论(4)</h3>
            <ul>
                <li v-for="reviews in reviewsList" :key="reviews.id">{{reviews}}</li>
            </ul>
            <ul>
                <li v-for="reviews1 in reviewsList1" :key="reviews1.id">{{reviews1}}</li>
            </ul>
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
                sizelist:[],
                sizeTablelist:null,
                sizeValuelist:null,
                maintenanceList:[],
                reviewsList:[],
                reviewsList1:[]
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
                // console.log(this.descriptionlist);
                this.sizelist = res.data.infos.size;
                // console.log(this.sizelist);

                this.sizeTablelist = res.data.infos.sizeMeasure.sizeTable[0];
                this.sizeValuelist = res.data.infos.sizeMeasure.sizeTable[1];
                console.log(this.sizeValuelist);
                // console.log(this.sizeTablelist);

                this.maintenanceList = res.data.infos.description.maintenanceList[0];
                // console.log(this.maintenanceList);

                this.reviewsList = res.data.infos.productReviews.reviews[0];
                this.reviewsList1 = res.data.infos.productReviews.reviews[1];
                
                console.log(this.reviewsList);

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
        padding: 10px;
        margin-left: 10px;
        margin-top: 10px;
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
        .cankao{
            padding: 10px;
            p{
                font-size: 12px;
                margin-bottom: 20px;
            }
            h3{
                width:100%;
                height:69px;
                line-height: 69px;
                border-top: 1px solid #ccc;
            }
            li{
                font-size: 11px;
                color: #666;
                margin-bottom: 20px;
                list-style: disc;
                width: auto;
            }
            img{
                width:100%;
                margin-bottom: 10px;
            }
            span{
                width: 335px;
                height:220px;
                font-size: 12px; 
            }

        }
    }
    .all{
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
        border: 1px solid rgb(236, 234, 234);
        border-bottom: none;
        p{
            color: #666;
            font-size: 15px;
            margin-top: 20px;
            float: left;
        }
        span{
            color: #dd2828;
            overflow: hidden;
            white-space: nowrap;
            display: block;
            text-overflow: ellipsis;
            width: 260px;
            height:20px;
            float: left; 
            margin-top: 20px;
            font-weight: 700;
            margin-left: 15px;
        }
    }
    .serve{
        width: 100%;
        height: 70px;
        line-height: 20px;
        color: #666;
        border: 1px solid rgb(236, 234, 234);
        border-bottom: none;
        p{
            color: #666;
            font-size: 15px;
            margin-top: 20px;
            float: left;
        }
        ul{
             margin-top: 20px;
            li{
                line-height: 20px;
                float: left;
                font-size: 12px;
                margin-left: 15px;
            }
        }
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
        float: left;
        padding: 10px;
        h3{
            margin-bottom: 15px;
        }
        img{
            margin-bottom: 10px;
            width: 100%;
        }
        .canshu{
             font-size: 14px;
             width: 100%;
             line-height: 30px;
             text-align:left;
        .story{
            float: left;
            margin-right: 10px;
            li{
                width: auto;
                height:30px;
                color: #999;
            }
        }
        .story1{
            float: left;
            li{
                width: auto;
                height:30px;
            }
        }
    }
        
    }
    .sizeInfo{
        float: left;
        padding: 10px;
        h3{
        margin-bottom: 10px;
        }
        .chima{
            font-size: 13px;
            line-height: 30px;
            
            ul:nth-child(1){
                 float: left;
                 margin-right:30px; 
                 text-align: left;
                li{
                 width: auto;
                  height:30px;                 
                }
            }
            ul:nth-child(2){
                 float: left;
                 text-align: center;
                li{
                    width: auto;
                    height:30px;
                }
            }
        }
       }
    .sx{
        padding: 10px;
        width: 90%;
        img{
            width: 100%;
            
        }
    }
    .goodsDetail{
        width: 100%;
        float: left;
        span:nth-child(1){
            display: inline-block;
            font-size: 20px;
            font-weight: 700;
            margin-top: 10px;
        }
        span:nth-child(2){
            display: inline-block;
            margin-top: 10px;
            font-size: 13px;
        }
    }
    
}
</style>