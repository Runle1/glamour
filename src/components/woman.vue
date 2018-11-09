<template>
	<div>
		<img src="../assets/8.jpg" class="tupian">
		<ul
		v-infinite-scroll="loadMore"
  		infinite-scroll-disabled="loading"
		infinite-scroll-immediate-check="false"
  		infinite-scroll-distance="5">
			<li v-for="data in datalist" :key="data.id" @click="handleClick(data.categoryId)">
				<img :src="data.imageUrl">
				<div>
				<p>{{data.englishName}}</p>
				<p>{{data.chineseName}}</p>
				<p>{{data.discountText}}</p>
				</div>
			</li>
		</ul>
	</div>
	
</template>

<script type="text/javascript">
import axios from "axios";
import detailrouter from "../router";
import { Indicator } from 'mint-ui';
	export default{
		data(){
			return {
				datalist:[],
				loading:false,
				current:1,
				total:0
			}
		},
		beforeMount(){
            document.documentElement.scrollTop=0;
            this.loading=true;
        },
		mounted(){
			
			this.$store.commit("kerwinchangetitle",true)

			axios.get("/appapi/silo/eventForH5?categoryId=women&pageIndex=1&timestamp=1539742974564&summary=464cda9de6844860b7e196fbf5199015&platform_code=H5").then(res=>{
				console.log(res.data);
				this.datalist = res.data.eventList;

				this.total = res.data.totalPages;
				console.log(this.datalist);
				this.loading=false;
			}).catch(error=>{
				console.log(error)
			})
		},
		methods:{
			handleClick(categoryId){
				console.log(categoryId);
				detailrouter.push(`/detail/${categoryId}`);
			},
			loadMore(){
				
				console.log("到达底部")
				Indicator.open('Loading...');
				this.current++;
				
				if(this.current>this.total){
					this.loading = true;
					Indicator.close();
					return;	
				}
				
				axios.get(`/appapi/silo/eventForH5?categoryId=women&pageIndex=${this.current}&timestamp=1539742974564&summary=464cda9de6844860b7e196fbf5199015&platform_code=H5`).then(res=>{
					console.log(res.data);
					this.datalist = [...this.datalist,...res.data.eventList];
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
	list-style: none;
}
img{
	display: block;
}

	div{
		color:white;
		img{
			width: 100%;
		}
		.tupian{
			height:500px;
		}
		ul{
			list-style: none;
			padding: 15px;
			li{
				img{
					width:100%;
					margin-bottom: 10px;
				}
				div{
					position: relative;
					p{
					position: absolute;
					left:10px;
					}
					p:nth-child(1){
					top:-80px;
					}
					p:nth-child(2){
					top:-60px;
					font-size: 15px;
					}
					p:nth-child(3){
					top:-40px;
					font-size: 13px;
					}
				}
			}
		}
	}
</style>