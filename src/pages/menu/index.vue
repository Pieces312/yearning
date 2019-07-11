<template>
    <div class="menu">
        <div class="search">
            <div class="input"><input type="text" placeholder="请输入你的搜索内容"></div>
            <div class="btn"><button>搜索</button></div>
        </div>
        <div>提示：每人最多点3个主菜，2个素菜和1个汤</div>
    </div>
</template>

<style lang="less" scoped>
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
        background: #a2b98f;
        border-radius: 0 20px 20px 0;

        button {
            color: #fff;
            line-height: 30px;
        }
    }
}
</style>

