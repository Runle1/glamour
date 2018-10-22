<template>
	<div>		
		<div class="banner">
			<div class="swiper-container">
			    <div class="swiper-wrapper">
			        <div class="swiper-slide" v-for="data in bannerlist"><a href="#1"><img :src="data.imgUrl"></a></div>

			    </div>
			    <!-- 如果需要分页器 -->
			    <div class="swiper-pagination"></div>
			</div>
		</div>
		<div class="newzone" v-if="newzoneinfo">
			<a href="/#/newmembers"><img :src="newzoneinfo.img"></a>
		</div>
		<div class="newEvent">
			<div class="title"><img src="../assets/jinri.png"></div>
			<div class="container">
				<ul>
					<li v-for="newEventdata in newEventList" class="event-item" @click="handleClickNewEvent(newEventdata.categoryId)">
						<a href="#1">
							<img :src="newEventdata.imageUrl">
							<div class="event-base">
								<span>{{newEventdata.englishName}}</span>
								<span>{{newEventdata.chineseName}}</span>
								<span>{{newEventdata.discountText}}</span>
							</div>
						</a>
					</li>
				</ul>
			</div>
		</div><div class="hotBrand">
			<div class="title"><img src="../assets/remai.png"></div>
			<div class="container">
				<ul>
					<li v-for="hotBranddata in hotBrandList" class="event-item" @click="handleClickHotBrand(hotBranddata.categoryId)">
						<a href="#1">
							<img :src="hotBranddata.imageUrl">
							<div class="event-base">
								<span>{{hotBranddata.englishName}}</span>
								<span>{{hotBranddata.chineseName}}</span>
								<span>{{hotBranddata.discountText}}</span>
							</div>
						</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="moreEvent">
			<div class="title"><img src="../assets/more.png"></div>
			<div class="container">
				<div class="left"><a href="#1"><img src="../assets/more-left.png"></a></div>
				<div class="right"><a href="#1"><img src="../assets/more-right.png"></a></div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from "axios";
	import Swiper from "swiper";
	// import router from "../router";
	import "swiper/dist/css/swiper.css";
	

	export default{
		data(){
			return {				
				bannerlist:[],
				newzoneinfo:null,
				newEventList:[],
				hotBrandList:[]
			}
		},
		methods:{
			handleClickNewEvent(categoryId){
				this.$router.push(`/detail/${categoryId}`)
			},
			handleClickHotBrand(categoryId){
				this.$router.push(`/detail/${categoryId}`)
			}
		},
		mounted(){

			this.$store.commit("kerwinchangetitle",true)

			axios.get("/appapi/home/marketingBannerNewZone/v3?timestamp=1539753839973&summary=fa829b9fe73b2558fa83d9dbd88bc865").then(res=>{
				res.data.banners.shift();
				this.bannerlist = res.data.banners;
				this.$nextTick(()=>{
						var swiper = new Swiper('.swiper-container', {
					     	slidesPerView: 1,
					      	spaceBetween: 30,
					     	loop: true,
					       pagination: {
					         el: '.swiper-pagination',
					         clickable: true,
					       },
					       autoplay: {
					           delay: 2000,
					           disableOnInteraction: false,
					       }
					   });
				})
			})

			axios.get("/appapi/home/newZoneEntrance/v3?credential=").then(res=>{
				this.newzoneinfo = res.data
			})

			axios.get("/appapi/home/eventForH5?params=%7B%7D&timestamp=1539760512512&summary=c9dcb66f4c5d959467fbe729f27f504c&platform_code=H5").then(res=>{
				this.newEventList = res.data.lists[0].events;
				this.hotBrandList = res.data.lists[1].events;
			})


			
		}
	}
</script>

<style scoped lang="scss">
	
	.banner{
		margin: 0 15px 0 15px;
		img{
			width: 100%;
		}
	}
	.newzone{
		margin-top: 10px;
		img{
			width: 100%;
		}
	}
	.newEvent{
		margin: 10px 15px 0 15px;
		.title{
			width: 130px;
			padding: 20px 0 15px 0;
			img{
				width: 100%
			}
		}
		.container{
			.event-item{
				position: relative;
				margin-bottom: 5px;
				img{
					width: 100%
				}
				.event-base{
					width: 100%;
					height: auto;
					position: absolute;
					padding: 20px 0px 10px 8px;
					/*padding-left: 8px;
					padding-bottom: 10px;*/
					left: 0;
					bottom: 0;
					background-image: linear-gradient(180deg,transparent,rgba(0,0,0,.55));
					span{
						display: block;
						color: white;
					}
				}				
			}
		}
	}
	.hotBrand{
		margin: 10px 15px 0 15px;
		.title{
			width: 130px;
			padding: 20px 0 15px 0;
			img{
				width: 100%
			}
		}
		.container{
			.event-item{
				position: relative;
				margin-bottom: 5px;
				img{
					width: 100%
				}
				.event-base{
					width: 100%;
					height: auto;
					position: absolute;
					padding: 20px 0px 10px 8px;
					/*padding-left: 8px;
					padding-bottom: 10px;*/
					left: 0;
					bottom: 0;
					background-image: linear-gradient(180deg,transparent,rgba(0,0,0,.55));
					span{
						display: block;
						color: white;
					}
				}				
			}
		}
	}
	.moreEvent{
		margin: 10px 15px 0 15px;
		.title{
			width: 180px;
			padding: 20px 0 15px 0;
			img{
				width: 100%
			}
		}
		.container{
			display: flex;
			.left{
				flex: 1;
				margin-right: 5px;
				img{
					width: 100%
				};				
			}
			.right{
				flex: 1;
				img{
					width: 100%
				}
			}
		}
	}
</style>