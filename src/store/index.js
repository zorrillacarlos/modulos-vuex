import Vue from "vue";
import Vuex from "vuex";
import counterStore from "./counter"

Vue.use(Vuex);

export default new Vuex.Store({
  
  modules: {
    counter: counterStore
  },
});
