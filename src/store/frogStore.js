import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const frogStore = new Vuex.Store({
    state: {
        frogList:[],
    },
    mutations:{
        init(state){
            console.log('init');
            state.frogList = [
                {age:1, name:'red'},
                {age:2, name:'yellow'},
                {age:3, name:'blue'},
                {age:4, name:'green'},
            ]
        },
        load(state, pre){
            console.log('load');
            pre.map((each) => {
                state.frogList.push(each);
            })
        },
        generate(state, { age, name }){
            state.frogList.push({age: age, name: name});
        },
        remove(){
            console.log('remove');
        },
    },
    getters:{
        getSameColor(state){
            return function (color) {
                return state.frogList.filter(frog => frog.name === color);
            }
        }
    }
})

export default frogStore;