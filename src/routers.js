//default
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//Pages
import Home from '@/pages/Home'
import NotFound from '@/pages/404'
import Portfolio from '@/pages/Portfolio/Portfolio'
import Contact from '@/pages/Portfolio/Contact'

//Routering
export default new Router({
	// mode: 'history',
	scrollBehavior: () => ({ x: 0, y: 0 }),
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/portfolio',
			name: 'portfolio',
			component: Portfolio
		},
		{
			path: '/contact',
			name: 'contact',
			component: Contact
		},
		{
			path: '*',
			name: 'notFound',
			component: NotFound
		}
	]
})