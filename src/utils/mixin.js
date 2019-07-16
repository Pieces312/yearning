export default {
    data() {
        return {
            scrollTop: 0,
        }
    },

    methods: {
        /**
         * @params name  {String} 跳转的路由名称
         * @params query {Object} 跳转时携带的参数  */
        toPage(name, query) {
            this.$router.push({name, query})
        }
    }
}