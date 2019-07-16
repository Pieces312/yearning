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
        <div class="tab-content" ref="tabContent">
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
    mounted() {
        this.getScrollTop();
    },
    methods: {
        changeIndex(index) {
            this.is_active = index;
            this.$emit('changeHandler', index);
        },

        getScrollTop() {
            const cte = this.$refs.tabContent;
            const _this = this;
            
            cte.addEventListener('scroll', function(e) {
                const ev = e.target || e;
                _this.$emit('getScrollTop', ev.scrollTop)
            })
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

