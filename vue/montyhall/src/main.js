import Vue from 'vue'
import App from './App'

new Vue({
    render: h => h(App)
}).$mount("#app")



/* start projeto npm run serve*/

/** Outra forma */
// new Vue({
//   el: '#app',
//   render(createElement) {
//     return createElement(App)
//   }
// })

// new Vue({
//   render(createElement) {
//     return createElement(App)
//   }
// }).$mount("#app")