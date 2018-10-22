<template>
	<div>
        <div class="icon">
            <i class="iconfont icon-jiantou" @click="backClick()"></i>
            <span>{{$store.state.title}}</span>
            <span><i class="iconfont icon-gengduo"></i></span>
        </div>
        <ul>
            <li><a href="" class="one">人气</a></li>
            <li><a href="" class="two">折扣</a></li>
            <li><a href="" class="three">价格</a></li>
            <li><a href="" class="four">筛选</a></li>
        </ul>
        <div class="free2">
            <button class="free">免运</button>
            <p>满688元全场免运</p>
        </div>
        <dl
         v-infinite-scroll="loadMore"
   	     infinite-scroll-disabled="loading"
   	     infinite-scroll-immediate-check="false"
   	     infinite-scroll-distance="0">
            <div v-if="productinfo" v-for="data in datalist" :key="data.id" @click=handleClick(data.productId)>
            <dt>
                <img :src="data.imageUrl">
            </dt>
            <button class="recom">买手推荐</button>
            <dd>
                <p>{{data.brandName}}</p>
                <p>{{data.productName}}</p>
                <p>￥{{data.price}}<mark>￥{{data.marketPrice}}</mark></p>
                <p>{{data.discount}}折</p>
            </dd>
            </div>
        </dl>
    </div>
</template>

<script type="text/javascript">
    import axios from "axios";
    import detailrouter from "../router";
    import { Indicator } from 'mint-ui';
	export default{
		data(){
			return {
                productinfo:null,
                datalist:[],
                loading:false,
                current:1,
                total:0,
			}
        },
        beforeMount(){
            document.documentElement.scrollTop=0;
            this.loading=true;
        },
        mounted(){
            // console.log(this.$route.params.detailid);
            this.$store.commit("kerwinchangetitle",false)

            axios.get(`/appapi/event/product/v3?pageIndex=1&categoryId=${this.$route.params.detailid}&key=&sort=&timestamp=1539820532825&summary=39822f18f2f3e6ef97c41aeb62d5a2c1&platform_code=H5`).then(res=>{
                console.log(res.data);
                this.productinfo = res.data.products;
                this.datalist = res.data.products;
                // console.log(this.productinfo);
                this.total = res.data.totalPages;
               
                console.log(res.data.eventName);
                this.$store.commit("titlechange",res.data.eventName);
                 this.loading=false;
            })
        },
        methods:{
            handleClick(productId){
                console.log(productId);
                detailrouter.push(`/productdetail/${productId}`);
            },
            backClick(){
                history.back();
            },
            loadMore(){
                console.log("到底了");
                Indicator.open('Loading...');
                this.current++;

                if(this.current>this.total){
                    this.loading = true;
                    return;
                }
                axios.get(`/appapi/event/product/v3?pageIndex=${this.current}&categoryId=${this.$route.params.detailid}&key=&sort=&timestamp=1539820532825&summary=39822f18f2f3e6ef97c41aeb62d5a2c1&platform_code=H5`).then(res=>{
                    console.log(res.data);
                    this.datalist=[...this.datalist,...res.data.products];
                    Indicator.close();
                })
            }
        }
	}
</script>

<style scoped lang="scss">
    *{
	margin: 0;
	padding: 0;
    }
    img{
	     display: block;
    }
    div{
        width:100%;
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
                height:44px;
                display: inline-block;
                font-size: 18px;
                font-weight: 600;
                line-height: 44px;
                text-align: center;
            }
            span:nth-child(3){
                float: right;        
                i{
                    width: 55px;
                    height:44px;
                    line-height: 44px;
                    font-size: 25px;
                    
                }
            }
        }
    dl{
        div{
        width:40%;
        padding: 16px;
        display: inline-block;
        margin-top: 10px;
        img{
            width:100%;
            }
        .recom{
            font-size: 10px;
            background: white;
            border:1px solid rgb(0, 0, 0)
        }
        dd{
           p{
               width: 100%;
               white-space: nowrap;
               text-overflow: ellipsis;
               overflow: hidden;
           }
           p:nth-child(1){
               font-size: 15px;
               width: 100%;
               color: black;
               font-weight: 700;
           }
           p:nth-child(2){
               font-size: 12px;
           }
           p:nth-child(3){
               font-size: 12px;
               color: #dd2828;
               font-weight: 700;
               display: inline;
               mark{
               font-size: 10px;
               font-weight: 700;
               background:white;
               margin-left: 15px;
               color:#ccc;
               text-decoration: line-through;
               }
           }
           p:nth-child(4){
               font-size: 10px;
               color:#666;
               display:inline;
               margin-left:8px;
           }
        }
    }}
    ul{
        width: 100%;
        list-style: none;
       li{
           width: 25%;
           float: left;
           height:40px;
           line-height: 40px;
           a{
            color: #999;
            display: block;
            text-decoration: none;
            white-space: nowrap;
            text-align: center;
           }
       }    
    }   
        .free2{
            .free{
            font-size: 8px;
            background: white;
            border:1px solid #f60;
            margin-left: 15px;
            color: #f60;
            }
            p{
                display: inline-block;
                font-size: 12px;
            }
 }
       
       .one{
           color: #2b2b2b;
           font-weight: 700;
        }
       .two{
            color: #999;
        }
        .three{
            color: #999;
        }
        .four{
            color: #2b2b2b;
        }

        
    } 
       
</style>

