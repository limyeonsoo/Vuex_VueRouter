import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const frogStore = new Vuex.Store({
    state: {
        frogList:[
            {age:1, name:'red'},
            {age:2, name:'yellow'},
            {age:3, name:'blue'},
            {age:4, name:'green'},
        ],
    },
    mutations:{
        generate(state, { age, name }){
            console.log(name);
            state.frogList.push({age: age, name: name});
        },
        remove(){
            console.log('remove');
        }
    }
})

export default frogStore;