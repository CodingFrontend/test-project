import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: JSON.parse(localStorage.getItem('count') || 0),
        isSidebarOpen: JSON.parse(localStorage.getItem('isSidebarOpen') || false)
    },
    mutations: {
        countMenu(state) {
            state.count++
            localStorage.setItem("count", JSON.stringify(state.count))
        },
        toggleSidebar(state) {
            this.state.isSidebarOpen = !this.state.isSidebarOpen
            localStorage.setItem("isSidebarOpen", JSON.stringify(state.isSidebarOpen))
        },
        closeSidebar(state) {
            this.state.isSidebarOpen = false
            localStorage.setItem("isSidebarOpen", JSON.stringify(state.isSidebarOpen))
        }
    },
    actions: {
        menuCount({commit}) {
            commit('countMenu')
        },
        sidebarToggle({commit}) {
            commit('toggleSidebar')
        },
        closeSidebar({commit}) {
            commit('closeSidebar')
        },
    }
})