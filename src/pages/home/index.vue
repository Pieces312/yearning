<template>
    <div class="home">
        <div class="home-top">Hi,Alexa. Welcome back！！！</div>

        <!-- 功能点 -->
        <div class="life">
            <div class="title">生活模块</div>
            <div class="modules-list">
                <div class="module-item">
                    <div class="item-area" @click="toPage('menu')">
                        <span class="iconfont icon-caidanbuju"></span>
                        <p>菜单</p>
                    </div>
                </div>
                <div class="module-item">
                    <div class="item-area" @click="toPage('order')">
                        <span class="iconfont icon-yidian"></span>
                        <p>已点</p>
                    </div>
                </div>
                <div class="module-item">
                    <div class="item-area">
                        <span class="iconfont icon-more"></span>
                        <p>更多</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.home-top {
    padding: 15px 3.2%;
    height: 60px;
    color: #fff;
    border-radius: 0 0 10px 10px;
    background-color: #95b37f;
}


.life {
    margin-top: 12px;
    padding: 15px 3.2%;
    background: rgba(214, 229, 203, .1);
    border-radius: 5px;

    .title {
        padding-left: 18px;
        position: relative;
        font-size: 15px;
        color: #b4cca4;

        &::before {
            width: 10px;
            height: 10px;
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            content: '';
            background-color: #97c993;
            border-radius: 50%;
        }
    }

    .modules-list {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        border-radius: 10px;

        .module-item {
            margin-top: 15px;
            width: 33%;
            text-align: center;

            .item-area {
                padding: 8px 0;
                display: inline-block;
                width: 70%; 
                color: #97c993;
                background-color: rgba(214, 229, 203, .5);
                border-radius: 10px;

                .iconfont {
                    font-size: 32px;
                }

                p {
                    margin-top: 5px;
                    font-size: 13px;
                }
            }

            &:active {
               .item-area {
                    color: #fff;
                    background-color: #95b37f;
               } 
            }
        }
    }
}
</style>

