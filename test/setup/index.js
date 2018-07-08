import createEasyAccess from '../../dist/index.cjs.min'
import Vue from 'vue'
import Vuex from 'vuex'
import storeObj from './store'
import config from './config'
// set plugin
const easyAccess = createEasyAccess(config)
storeObj.plugins = [easyAccess]
// create store
Vue.use(Vuex)
const store = new Vuex.Store(storeObj)

export default store
