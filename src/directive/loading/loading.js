
import Vue from 'vue'
import "./loading.css"

// 自定义loading指令
Vue.directive('loading', {
    bind: (el, binding) => {
        let mask = document.createElement('div');
        mask.className = 'mask';
        document.body.appendChild(mask);
        console.log(el, binding);
    },
})