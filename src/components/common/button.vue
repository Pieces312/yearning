<template>
    <div class="y-button">
        <span><slot></slot></span>
    </div>
</template>

<script>
export default {
    name: 'y-button'
}
</script>

<style lang="less" scoped>
// 共用样式
.Ybutton(@bgColor, @radius: 5px) {
    padding: 0 20px;
    height: 35px;
    display: inline-block;
    color: #fff;
    font-size: 14px;
    line-height: 35px;
    transition: all .5s ease;
    border-radius: 5px;
    background-color: @bgColor;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);

    &:active {
        box-shadow: none;
    }
}

.y-button {
    .Ybutton(var(--baseColor))
}
</style>



