import { createStore } from 'vuex'

export default createStore({
	state: {
		count: 0,
	},
	mutations: {
		add(state) {
			state.count++
		},
	},
	actions: {},
	modules: {},
})
