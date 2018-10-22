<template>
	<footer v-if="$store.state.isCreate">
		<a href="" class="tel">400 - 664 - 6698</a>
		<nav>
			<ul>
				<li><a href="#1">首页</a></li>
				<li><a href="#1">客户端</a></li>
				<li><a href="#1">登录</a></li>
				<li><a href="#1">注册</a></li>
			</ul>
		</nav>
		<p>浙ICP备16004860号-1</p>
	</footer>
</template>

<script>
	import axios from "axios";
	export default{
		data(){
			return {

			}
		},
		mounted(){

		}
	}
</script>

<style scoped lang="scss">
	footer{
		margin: 15px 15px 50px 15px;
		text-align: center;
		.tel{
			display: block;
			text-decoration: none;
			margin-bottom: 5px;
			color: black;
			font-size: 12px;
		}
		nav{
			ul{
				margin: 0 40px 10px 40px;
				display: flex;
				li{
					flex: 1
				}
				a{
					text-decoration: none;
					color: #666;
					font-size: 12px;
				}
			}
		}
		p{
			font-size: 12px;
			color: #666;
		}
	}
</style>