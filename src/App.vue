<template>
  <div style="overflow: hidden;">
  	<navbar></navbar>
    <section>
      <router-view></router-view>     
    </section>
    <footerbar></footerbar>
  </div>
</template>

<script>
	import navbar from "./components/navbar.vue";
	import footerbar from "./components/footerbar.vue";
	import index from "./components/index.vue";
	export default {
	  data(){
	    return {

	    }
	  },
	  components:{
	  	navbar,
	  	index,
	  	footerbar
	  }
	}
</script>

<style>
	*{
		padding: 0;
		margin: 0
	}
	ul{
		list-style: none;
	}
	section{
		position: relative;
		top: 70px;
		margin-bottom: 80px;
	}
	input{ 
		outline:none;
	}
	a{
		text-decoration: none;
	}
</style>
