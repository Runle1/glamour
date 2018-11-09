<template>
	<div class="shop">
		<div class="icon">
		 <i class="iconfont icon-jiantou" @click="backClick()"></i>
		 <span>购物车</span>
		 <span><i class="iconfont icon-gengduo"></i></span>
		</div>
		<div class="kong">
			<p>购物车空空如也</p>
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
.shop{
	position: relative;
	top: -70px;
}
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
		.kong{
			width: 100%;
			height:100px;
			text-align: center;
			margin-top: 50%;
			p{
				line-height: 100px;
			}
		}
</style>