import Vue from 'vue'
import App from './App'

new Vue({
    render: h => h(App)
}).$mount("#app")

// new Vue({
//   el: '#app',
//   render(createElement) {
//     return createElement(App)
//   }
// })

/** Outra forma */ /* start projeto npm run serve*/
// new Vue({
//   render(createElement) {
//     return createElement(App)
//   }
// }).$mount("#app")