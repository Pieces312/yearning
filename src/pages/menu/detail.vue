<template>
    <div class="detail">
        <div class="images-ban">
            <img src="https://s1.st.meishij.net/r/208/121/13280458/s13280458_156320006820501.jpg" alt="">
        </div>
        <div class="food-mix">
            <p class="mix-title">用料</p>
            <div class="mix-list">
                <div class="mix-item" v-for="(item, index) in mixList" :key="'mix'+index">
                    <span class="mix-name">{{item.mix}}</span>
                    <span class="num">{{item.weight}}</span>
                </div>
            </div>
        </div>

        <div class="bar"></div>

        <!-- 步骤 -->
        <div class="food-step">
            <p class="step-title">步骤</p>
            <div class="step-list">
                <dl class="step-item" v-for="(item, index) in step" :key="'step'+index">
                    <dt class="no">{{index+1}}.</dt>
                    <dd v-html='item'>{{item}}</dd>
                </dl>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            mixList: [
                {mix: '鸡爪', weight: '300克'},
                {mix: '柠檬', weight: '半个'},
                {mix: '小米椒', weight: '3个'},
                {mix: '姜', weight: '几片'},
                {mix: '花椒', weight: '适量'},
                {mix: '盐', weight: '适量'},
                {mix: '糖', weight: '适量'},
                {mix: '醋', weight: '适量'},
                {mix: '生抽', weight: '适量'},
            ],
            step: [
                '鸡爪剪去指甲，切小块，洗干净。<br><img src="https://s1.st.meishij.net/rs/208/121/13280458/n13280458_156320129115762.jpg"/>',
                '鸡爪冷水下锅，加几片姜和一小把花椒去腥，水开后再煮15分钟。我偷懒没有焯水，因为这个水是不要的。',
                '煮好的鸡爪过2遍凉白开。如果有冰水更好。',
                '将鸡爪装入合适的保鲜盒中。',
                '加入小米椒和柠檬片。',
                '取一个小碗，加入适量醋和生抽，还有盐和糖。尝下咸淡，加入适量凉白开，拌匀。',
                '将调味汁倒入保鲜盒中，没过鸡爪。然后盖上，冰箱冷藏过夜就可以吃了。<br><img src="https://s1.st.meishij.net/rs/208/121/13280458/n13280458_156320130956796.jpg"/>'
            ]
        }
    }
}
</script>


<style lang="less" scoped>
.detail {
    overflow: auto;
}

.images-ban {
    height: 150px;
    display: flex;
    align-content: center;
    justify-content: center;
    text-align: center;
    background: tint(#95b37f, 90%);
}

.food-mix {
    margin-top: 10px;
    padding: 0 3.2% 15px;

    .mix-title {
        font-size: 16px;
        line-height: 40px;
    }

    .mix-list {
        display: flex;
        flex-wrap: wrap;
        font-size: 14px;

        .mix-item {
            padding: 0 12px;
            width: 50%;
            line-height: 35px;
            color: #333;
            border-bottom: 1px dashed #ddd;

            .mix-name {
                min-width: 50px;
            }

            .num {
                margin-left: 15px;
                font-size: 12px;
                color: #999;
            }
        }
    }
}

.bar {
    height: 10px;
    background: #f7f7f7;
}

.food-step {
    margin-top: 10px;
    padding: 0 3.2%;

    .step-title {
        font-size: 16px;
        line-height: 40px;
    }

    .step-item {
        margin-bottom: 15px;
        font-size: 14px;
        line-height: 25px;
        overflow: hidden;

        .no {
            float: left;
            font-size: 22px;
            font-style: italic;
            color: #95b37f;
        }

        dd {
            margin-left: 30px;
        }
    }
}
</style>

