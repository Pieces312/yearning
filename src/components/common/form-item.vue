<template>
    <div class="form-item">
        <div class="label">{{labelText}}</div>
        <div class="slot" :style="{'width': labelText?'calc(100%-100px)':'100%'}">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FormItem',
    props: {
        labelText: String
    }
}
</script>

<style lang="less" scoped>
.form-item {
    margin-top: 15px;
    height: 40px;
    border-bottom: 2px solid var(--baseColor);

    .label {
        padding-right: 8px;
        width: 100px;
        float: left;
        font-size: 14px;
        text-align: right;
        white-space: nowrap;
    }

    .slot {
        width: calc(100% - 100px);
    }
}
</style>


