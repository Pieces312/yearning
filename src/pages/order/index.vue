<template>
    <div class="order">
        <ul class="list">
            <li class="item" @click="toPage('clicked')"><span class="role">芳</span> 今天点了<span class="num">0</span>道菜  </li>
            <li class="item" @click="toPage('clicked')"><span class="role">君</span> 今天点了<span class="num">0</span>道菜  </li>
            <li class="item" @click="toPage('clicked')"><span class="role">位</span> 今天点了<span class="num">0</span>道菜  </li>
            <li class="item" @click="toPage('clicked')"><span class="role">懿</span> 今天点了<span class="num">0</span>道菜  </li>
        </ul>
    </div>
</template>

<style lang="less" scoped>
.list {
    padding: 8px 3.2%;

    .item {
        padding: 8px 0;
        font-size: 14px;
        line-height: 40px;
        border-bottom: 1px dashed #ddd;

        .role {
            margin-right: 10px;
            width: 40px;
            height: 40px;
            text-align: center;
            font-size: 20px;
            color: #fff;
            background: #cad9bf;
            border-radius: 50%;
        }
    }
}
</style>

