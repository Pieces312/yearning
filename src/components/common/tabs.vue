<template>
    <div class="tabs">
        <div class="tab-title">
            <div class="tab-item" v-for="(item, index) in title" 
                 :class='{"active": index == is_active}' 
                 :key="'title'+index"
                 @click="changeIndex(index)">
                <span>{{item.label}}</span>
            </div>
        </div>
        <div class="tab-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'tabs',
    props: {
        title: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            is_active: 0,
        }
    },
    methods: {
        changeIndex(index) {
            this.is_active = index;
            this.$emit('changeHandler', index);
        }
    }
}
</script>


<style lang="less" scoped>
.tabs {
    width: 100%;
    height: 100%;
    display: flex;

    .tab-title {
        width: 30%;
        height: 100%;
        background-color: #95b37f;

        .tab-item {
            padding: 8px 12px;
            text-align: center;
            font-size: 14px;
            line-height: 25px;
            color: #fff;

            &.active {
                background: shade(#95b37f, 10%);
            }
        }
    }

    .tab-content {
        width: 70%;
        overflow: auto;
    }
}
</style>

