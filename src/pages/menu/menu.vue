<template>
    <div class="menu">
        <div class="search">
            <div class="input"><input type="text" placeholder="请输入你的搜索内容"></div>
            <div class="btn"><button>搜索</button></div>
        </div>
        <div class="tips"><span class="iconfont icon-tishi"></span> 提示：每人最多点3个主菜，2个素菜和1个汤</div>

        <!-- 菜单部分 -->
        <div class="menu-tabs">
            <Tabs :title="title">
                <div class="food-list">
                    <div class="food-item" v-for="(item, index) in 10" :key="'foods'+item" :class="{'selected': index == 2}">
                        <div class="food-img"><img src="http://site.meishij.net/r/185/123/1655935/a1655935_89415.jpg" alt=""></div>
                        <div class="food-name">
                            <p>鸡蛋炒虾仁</p>
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
            ]
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
    height: 50px;
    position: fixed;
    right: 30px;
    bottom: 30px;
    z-index: 10;
    text-align: center;
    background: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.15);
    border-radius: 50%;

    .iconfont {
        line-height: 50px;
        font-size: 32px;
        color: #a2b98f;
    }
}
</style>

