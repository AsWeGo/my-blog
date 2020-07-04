import Vue from 'vue'
import Vuex from 'vuex'
import {getTimeInterval} from '../utils/index'

Vue.use(Vuex)
// 略:后台获取系统运行时间
const runAt = '1589878800000';
let timer = null;

const state = {
  loading: false,
  runTimeInterval: '',
  socials: '',
  websiteInfo: '',
}

const mutations = {
  SET_LOADING: (state, v) => {
    state.loading = v;
  },
  SET_SOCIALS: (state, v) => {
      state.socials = v;
  },
  SET_SITE_INFO: (state, v) =>{
    state.websiteInfo = v;
  },
  GET_RUNTIME_INTERVAL: (state) => {
    if (!timer || !state.runTimeInterval) {
        clearInterval(timer)
        timer = setInterval(() => {
            state.runTimeInterval = getTimeInterval(runAt);
        }, 1000);
    }
  }
}

const actions = {
  setLoading: ({commit}, v) => {
    commit('SET_LOADING', v);
  },
  getSiteInfo: ({commit,state}) =>{
    return new Promise(resolve => {
      if (state.websiteInfo) {
        resolve(state.websiteInfo)
      } else {
        let data = {
          avatar:"http://lc-Cgd22gH7.cn-n1.lcfile.com/a5eb7668f0b68a36e37a/B712F1E0EFB9736E0AAAE145BD11EED9.jpg",
          desc:"一个It技术的探索者",
          domain:"https://www.fengziy.cn",
          name:"FZY′blog",
          notice:"本博客的Demo数据由Mockjs生成",
          slogan:"The way up is not crowded, and most chose ease.",
          background: "http://lc-Cgd22gH7.cn-n1.lcfile.com/82387c3017adf9a4e704/%E8%95%BE%E5%A7%86%E6%B0%B4.jpeg"
        }
        commit('SET_SITE_INFO',data)
        resolve(data)
      }
    })
  },
  getSocials: ({commit,state}) =>{
    return new Promise(resolve => {
      if (state.socials){
          resolve(state.socials)
      } else {
        let data = [
          {
            color:"#1AB6FF",
            href:"http://wpa.qq.com/msgrd?v=3&uin=406435866&site=qq&menu=yes",
            icon:"iconqq",
            id:1,
            title:"QQ"
          },
          {
            color:"",
            href:"https://github.com/lonemouse",
            icon:"icongithub",
            id:3,
            title:"GitHub"
          }
        ]
        commit('SET_SOCIALS',data);
        resolve(data);
      }
    })
  },
  initComputeTime: ({commit}) => {
    commit('GET_RUNTIME_INTERVAL');
  },
}
 

const modules = {

}

const getters = {
  loading: state => state.loading,
  runTimeInterval: state => state.runTimeInterval,
  notice: state => state.websiteInfo?state.websiteInfo.notice:''
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {},
  getters
})
