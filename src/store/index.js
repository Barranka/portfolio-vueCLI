import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import skills from './skills'
import posts from './posts'

export default new Vuex.Store({
modules: { skills, posts }
})