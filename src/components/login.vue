<template>
	<div class="login">
		<i class="iconfont icon-jiantou" @click="backClick()"></i>
		<div class="zhuce">
		<p>登陆/注册</p>
		<p>注册即送2600元新人红包</p>
		<input type="text" placeholder="请输入手机号" class="input1"/>
		<a href="/#/index"><input type="text" value="登录" class="input2"/></a>
		<p>切换密码登陆</p>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				
			}
		},
		mounted(){
			this.$store.commit("kerwinchangetitle",false)
		},
		methods:{
		 backClick(){
                history.back();
            },
		}
	}
</script>

<style scoped lang="scss">
	.login{
		position: relative;
		top: -70px;
		i{
			float: right;
			width: 40px;
			height:40px;
			font-size: 25px;
			text-align: center;
			line-height: 40px;
			transform:rotate(180deg);
			position: relative;
			top:-70px;
		}
		.zhuce{
			width: 100%;
			padding: 20px;
			margin-top: 70px;
			p:nth-child(1){
				font-size: 25px;
				margin-left: 30px;
			}
			p:nth-child(2){
				font-size: 14px;
				color: #666;
				margin-bottom: 70px;
				margin-left: 30px;
			}
			.input1{
				width: 80%;
				height: 60px;
				margin-bottom: 10px;
				text-align: left;
				margin-left: 20px;
				color: #ccc;
				border: 1px solid rgb(243, 236, 236);
    			box-shadow:00 3px 5px #ccc;
				text-indent: 10px;
			}
			.input2{
				width: 80%;
				height: 60px;
				margin-bottom: 10px;
				text-align: center;
				margin-left: 20px;
				background: #ccc;
				border: none;
				color: white;
				font-size: 20px;
				box-shadow:00 3px 5px #ccc;
			}
			p:nth-child(5){
				font-size: 14px;
				color: #666;
				margin-left: 30px;
			}
		}
	}
</style>