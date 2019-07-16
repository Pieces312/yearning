<template>
    <div class="menu">
        <div class="search">
            <div class="input"><input type="text" placeholder="请输入你的搜索内容"></div>
            <div class="btn"><button>搜索</button></div>
        </div>
        <div class="tips"><span class="iconfont icon-tishi"></span> 提示：每人最多点3个主菜，2个素菜和1个汤</div>

        <!-- 菜单部分 -->
        <div class="menu-tabs">
            <Tabs :title="title" @getScrollTop="getScrollTop">
                <!-- <div class="common-title"><span class="line"></span> 热菜</div> -->
                <div class="food-type">
                    <div class="food-title"><span class="line"></span> 热菜</div>
                    <div class="food-list">
                        <div class="food-item" 
                             v-for="(item, index) in 10" 
                             :key="'foods'+item" 
                             :class="{'selected': index == 2}"
                             @click="toPage('detail', {id: index})">
                            <div class="food-img"><img src="https://s1.st.meishij.net/r/208/121/13280458/s13280458_156320006820501.jpg" alt=""></div>
                            <div class="food-name">
                                <p>柠檬凤爪</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="food-type">
                    <div class="food-title"><span class="line"></span> 素菜</div>
                    <div class="food-list">
                        <div class="food-item" v-for="(item, index) in 5" :key="'foods'+item" :class="{'selected': index == 2}"
                             @click="toPage('detail')">
                            <div class="food-img"><img src="http://site.meishij.net/r/185/123/1655935/a1655935_89415.jpg" alt=""></div>
                            <div class="food-name">
                                <p>酸辣土豆丝</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Tabs>
        </div>
        
        <!-- 已点菜单 -->
        <div class="clicked-menu" @click="toPage('clicked')">
            <span class="iconfont icon-yidian"></span>
        </div>
    </div>
</template>

<script>
import Tabs from '@/components/common/tabs';

export default {
    components: {Tabs},
    data() {
        return {
            title: [
                {label: '川菜'},
                {label: '湘菜'},
                {label: '粤菜'},
                {label: '鲁菜'},
                {label: '闽菜'},
            ],
        }
    },
    mounted() {
        console.log(this.scrollTop);
    },
    methods: {
        getScrollTop(top) {
            this.scrollTop = top;
        }
    }
}
</script>


<style lang="less" scoped>
.menu {
    height: 100%;
    overflow: hidden;
}
.search {
    padding: 5px 3.2%;
    height: 40px;
    overflow: hidden;
    background-color: #95b37f;

    .input {
        width: 80%;
        height: 30px;
        float: left;
        background: #fff;
        border-radius: 20px 0 0 20px;

        input {
            padding: 5px 12px;
            font-size: 14px;
        }
    }

    .btn {
        width: 20%;
        height: 30px;
        float: left;
        text-align: center;
        background: shade(#95b37f, 10%);
        border-radius: 0 20px 20px 0;

        button {
            color: #fff;
            line-height: 30px;
        }
    }
}

.tips {
    padding: 15px 3.2%;
    font-size: 13px;
    color: #999;

    .iconfont {
        font-size: 15px;
    }
}

.menu-tabs {
    height: 87%;
    position: relative;

    .food-type {
        padding-bottom: 20px;
    }

    .food-title {
        padding: 10px 12px;
        width: 100%;
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        font-size: 15px;
        background: #fff;
        border-bottom: 1px solid #ddd;

        .line {
            margin-right: 5px;
            width: 5px;
            height: 10px;
            background: #95b37f;
        }
    }

    .food-list {
        .food-item {
            padding: 12px 3.2%;
            display: flex;
            align-items: center;
            border-bottom: 1px solid #ddd;

            &.selected {
                background: tint(#95b37f, 80%);
            }

            .food-img {
                width: 120px;
                height: 80px;
                overflow: hidden;
                border-radius: 5px;
            }   

            .food-name {
                padding-left: 15px;
                font-size: 14px;
            }
        } 
    }
}

// 已点菜单
.clicked-menu {
    width: 50px;
    position: fixed;
    right: 30px;
    bottom: 30px;
    z-index: 10;
    text-align: center;

    .iconfont {
        margin-top: 10px;
        width: 50px;
        height: 50px;
        line-height: 50px;
        font-size: 30px;
        color: #a2b98f;
        background: #fff;
        box-shadow: 0 0 8px rgba(0,0,0,.15);
        border-radius: 50%;

        &:first-child {
            font-size: 26 px;
        }
    }
}
</style>

