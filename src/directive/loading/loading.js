
import Vue from 'vue'
import "./loading.css"

let Loading = () => {
    let mask = document.createElement('div');
    mask.className = 'mask';
    let maskCte = document.createElement('div');
    maskCte.className = 'mask-content';
    let str = '加载中';
    for(let i = 0; i < str.length; i++) {
        let span = document.createElement('span');
        span.innerText = str[i];
        span.className = 'loading_'+(i+1);
        maskCte.appendChild(span);
    }
    mask.appendChild(maskCte);

    return mask;
};

// 自定义loading指令
Vue.directive('loading', {
    bind: (el, binding) => {
        let maskdom = Loading();
        let dom = document.querySelector('.mask');
        
        if(binding.value && !dom) {
            document.body.appendChild(maskdom);
        }
    },
    update: (el, binding) => {
        let dom = document.querySelector('.mask');

        if(!binding.value && dom) {
            dom.remove();
        }
    }
})