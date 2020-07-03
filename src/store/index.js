import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

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
  }
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
