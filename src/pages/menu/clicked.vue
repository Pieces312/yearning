<template>
    <div class="clicked">
        <div class="menu-title">
            已点菜单
            <span class="auto">随机生成</span>
        </div>
        <div class="menu-list">
            <div class="menu-type">
                <div class="type"><span class="line"></span> 荤菜</div>
                <div class="menu-item" v-for="(item, index) in 3" :key="'order'+index">
                    鱼香肉丝
                    <span class="" @click="toPage('detail')">查看操作</span>
                </div>
            </div>
            <div class="menu-type">
                <div class="type"><span class="line"></span> 素菜</div>
                <div class="menu-item" v-for="(item, index) in 2" :key="'order'+index">
                    干煸四季豆
                    <span class="" @click="toPage('detail')">查看操作</span>
                </div>
            </div>
            <div class="menu-type">
                <div class="type"><span class="line"></span> 汤菜</div>
                <div class="menu-item" v-for="(item, index) in 1" :key="'order'+index">
                    黄瓜皮蛋汤
                    <span class="" @click="toPage('detail')">查看操作</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
.menu-title {
    padding: 10px 12px;
    font-size: 15px;
    line-height: 25px;
    color: #fff;
    background: #95b37f;

    .auto {
        float: right;
        font-size: 12px;
    }
}

.menu-list {
    padding: 8px 3.2%;

    .menu-type {
        margin-bottom: 15px;
    }

    .type {
        font-size: 14px;
        font-weight: bold;

        .line {
            margin-right: 5px;
            width: 5px;
            height: 10px;
            background: #95b37f;
        }
    }

    .menu-item {
        font-size: 14px;
        line-height: 40px;
        border-bottom: 1px solid #dfe8d9;

        span {
            float: right;
            font-size: 12px;
            color: #95b37f;
        }
    }
}
</style>


