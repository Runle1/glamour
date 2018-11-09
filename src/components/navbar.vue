<template>
	<div class="navbar" v-if="$store.state.isCreate">
		<header>
			<ul class="head">
				<router-link class="login-btn" tag="li" to="/login">
					<span>登录</span>
				</router-link>
				<!-- <router-link class="search" tag="li" to="/search"> -->
				<li class="search">
					<a @click="handleClickTosearch()">XXXTRENTA 潮牌集合1折起</a>					
				</li>
				</router-link>				
				<router-link class="ShoppingCart" tag="li" to="/ShoppingCart">
					<span><i class="iconfont icon-bags"></i></span>	
				</router-link>				
			</ul>
			<div class="search-bar" v-show="isShow">
				<div class="search-keyword">
					<div>
						<div class="search-keyword-box">
							<span class="iconfont" @click="handleClickSearch()"><i class="iconfont icon-search"></i></span>
							<form class="input-search-form">
								<input type="text" id="searchKeyword" name="q" placeholder=" TORY BURCH 全场2折起" class="keyword" v-model="mytext">
							</form>
							<span class="remove" @click="handleClickEmpty()"></span>
						</div>
						<div class="cancel">
							<a @click="handleClickBack()">取消</a>
						</div>
					</div>
				</div>
				<div class="search-relation">
					<div class="search-relation-box">
						<div class="default">
							<div class="find">
								<h3>搜索发现</h3>
								<div class="find-list">
									<a href=""><span>GUCCI</span></a>
									<a href=""><span>连衣裙</span></a>
									<a href=""><span>箱包</span></a>
									<a href=""><span>童装</span></a>
									<a href=""><span>面膜</span></a>
									<a href=""><span>饰品</span></a>
								</div>
							</div>
							<div class="history">
								<h3>
									历史搜索
									<a href=""><span><i class="iconfont icon-delete"></i></span></a>	
								</h3>
								<div class="history-list">
									<ul>
										<li v-for="data in list" class="swipeout"><a href="">{{data}}</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
		<nav>
			<ul>				
				<router-link tag="li" to="/index" activeClass="kerwinactive"><span>推荐</span></router-link>
				<router-link tag="li" to="/crossborder" activeClass="kerwinactive"><span>海外</span></router-link>
				<router-link tag="li" to="/woman" activeClass="kerwinactive"><span>女士</span></router-link>
				<router-link tag="li" to="/man" activeClass="kerwinactive"><span>男士</span></router-link>
				<router-link tag="li" to="/makeup" activeClass="kerwinactive"><span>美妆</span></router-link>
				<router-link tag="li" to="/house" activeClass="kerwinactive"><span>家居</span></router-link>
				<router-link tag="li" to="/child" activeClass="kerwinactive"><span>婴童</span></router-link>	
			</ul>
		</nav>
	</div>
</template>

<script>
	import axios from "axios";
	export default{
		data(){
			return {
				// isCreate:true,
				datalist:[],
				mytext:'',
				list:[],
				isShow:false
			}
		},
		methods:{
			handleClickSearch(){
				this.list.push(this.mytext)
			},
			handleClickEmpty(){
				this.mytext = ''
			},
			handleClickTosearch(){
				this.isShow = true
			},
			handleClickBack(){
				this.isShow = false
			}
		},
		mounted(){
			axios.get("/appapi/silo/navigationAll/v3?timestamp=1539752036049&summary=81c6cf42cf2371e7d15a372891cc4a76").then(res=>{
				console.log(res.data)
				this.datalist = res.data.lists
			})
		}
	}
</script>

<style scoped lang="scss">
	.navbar{
		z-index: 100;
		position:fixed;
		left:0px;
		top:0px;
		width:100%;
		/*height:200px;*/
		background: white;
		padding-bottom: 10px;
	}
	header{
		.head{
			list-style: none;
			width:100%; 
			display:flex;
			.login-btn{
				span{
					display: block;
					padding: 10px;
				}	
			}
			.search{
				flex: 1;
				text-align: center;
				a{
					text-decoration: none;
					display: block;
					padding: 6px 0 6px 0;
					width: 100%;
					margin-top: 4px;
					background-color: #eee;
					color: #aaa;
				}
			}
			.ShoppingCart{
				span{
					display: block;
					padding: 10px;
					i{
						font-size: 20px;
					}
				}
			}
		}
		.search-bar{
			.search-keyword{
				width: 100%;
				height: 1.173333rem;
				background-color: #fff;
				pointer-events: auto;
				position: fixed;
				left: 0;
				top: 0;
			 	z-index: 10002;
			 	.search-keyword-box{
			 		width: 250px;
			 		height: 32px;
			 		float: left;
			 		margin: 6px auto 6px 20px;
			 		padding: 0 0 0 34px;
			 		background-color: #f5f5f5;
			 		position: relative;
			 		.iconfont{
			 			width: 34px;
			 			height: 32px;
			 			line-height: 32px;
			 			text-align: center;
			 			/*font-size: .386667rem;*/
			 			position: absolute;
			 			left: 0;
			 			top: 0;
			 		}
			 		.input-search-form{
			 			display: inline-block;
			 			margin: 0;
			 			padding: 0;
			 			.keyword{
			 				width: 240px;
			 				display: inline-block;
			 				vertical-align: top;
			 				padding: 0 10px 0 0;
			 				height: 32px;
			 				line-height: 32px;
			 				font-size: 16px;
			 				background-color: #f5f5f5;
			 				border: none;
			 				border-radius: 0;
			 			}
			 		}
			 		.remove{
			 			width: 32px;
			 			height: 32px;
			 			position: absolute;
			 			right: 0;
			 			top: 0;
			 			background: url(../assets/remove.png) 50% no-repeat;
			 			background-size: 14px 14px;
			 		}
			 	}
			 	.cancel{
			 		width: 67px;
			 		height: 44px;
			 		float: right;
			 		a{
			 			display: block;
			 			line-height: 43px;
			 			text-align: center;
			 			color: #000;
			 			font-size: 16px;
			 			cursor: pointer;
			 		}
			 	}
			}
			.search-relation{
				width: 100%;
				height: 100%;
				overflow: auto;
				background-color: #fff;
				pointer-events: auto;
				position: fixed;
				top: 0;
				left: 0;
				z-index: 10001;
				.search-relation-box{
					padding: 44px 0 0;
					.default{
						padding: 16px 0 0;
						.find{
							h3{
								text-indent: 20px;
								line-height: 24px;
								font-size: 18px;
								font-weight: 500;
							}
							.find-list{
								padding: 16px 20px 23px;
								display: flex;
								-webkit-box-pack: justify;
								justify-content: space-between;
								flex-wrap: wrap;
								align-content: space-between;
								a{
									display: inline-block;
									width: 103px;
									height: 35px;
									margin-bottom: 13px;
									text-align: center;
									line-height: 35px;
									color: #000;
									font-size: 14px;
									background-color: #f5f5f5;
									cursor: pointer;
									span{
										width: 100%;
										height: 100%;
										display: block;
										overflow: hidden;
										white-space: nowrap;
										text-overflow: ellipsis;
									}
								}
							}							
						}
						.history{
							h3{
								text-indent: 20px;
								line-height: 25px;
								color: #000;
								font-size: 18px;
								font-weight: 500;
								a{
									float: right;
									padding: 0 20px;
									i{
										color: #999;
										font-size: 16px;
									}
								}
							}
							.history-list{
								padding-top: 6px;
								ul{
									background: #fff;
									list-style: none;
									padding: 0;
									margin: 0;
									position: relative;
									.swipeout{
										height: 56px;
										width: 100%;
										padding-left: 20px;
										a{
											width: 100%;
											height: 56px;
											line-height: 56px;
											color: #000;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
	nav{
		margin-top: 5px;
		ul{
			list-style: none;
			width:100%; 
			display:flex;
			padding: 0 10px 0 10px;
			li{
				flex: 1
			}
		}
		.kerwinactive{
			span{
				border-bottom: 3px solid red;
			}
		}
	}
</style>