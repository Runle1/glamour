import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        isCreate:true,
        title:"",
        bandtitle:"",
        pricetitle:"",
    },
    mutations:{
        kerwinchangetitle(state,payload){
            console.log("我被调用了")
            state.isCreate = payload
        },
        titlechange(state,payload){
            console.log("名字改变了吗",payload);
            state.title = payload;
        },
        brangchange(state,payload){
            console.log("品牌改变了吗",payload);
            state.bandtitle = payload;
        },
        pricechange(state,payload){
            console.log("price",payload);
            state.pricetitle = payload;
        }
    }
})

export default store;