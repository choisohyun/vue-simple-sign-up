import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    id: "",
    pw: ""
  },
  mutations: {
    save(state, userInfo) {
      state.id = userInfo.id;
      state.pw = userInfo.pw;
    }
  }
});
