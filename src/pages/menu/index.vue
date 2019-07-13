<template>
    <transition name="slide-left">
        <router-view class="posotion-div"></router-view>
    </transition>
</template>

<style lang="less" scoped>
.posotion-div {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
}

// .slide-left-enter {
//     transform: translate3d(100%,0,0)
// }

// .slide-left-enter-active {
//     transition: all .5s ease;  
// }

// .slide-left-leave-to {
//     transition: translate3d(-100%,0,0)  
// }
</style>

