<template>
    <div class="login">
        <div class="logo"><img src="../../assets/logo.png" alt=""></div>
        
        <!-- 登录表单 -->
        <Form class="login-form">
            <FormItem>
                <input type="text" placeholder="请输入昵称">
            </FormItem>
            <FormItem>
                <input type="password" placeholder="请输入密码">
            </FormItem>
            <div class="btns">
                <Button @click.native="submit">开始生活</Button>
            </div>
        </Form>
    </div>
</template>

<script>
import Form from '@/components/common/form';
import FormItem from '@/components/common/form-item';
import Button from '@/components/common/button';

export default {
    name: 'login',
    components: {
        Form,
        FormItem,
        Button
    },
    methods: {
        submit() {
            this.$router.push({name: 'home'})
        }
    }
}
</script>

<style lang="less" scoped>
.login {
    width: 100%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -70%);
}

.logo {
    margin-bottom: 60px;
    text-align: center;

    img {
        width: 60%;
    }
}

.login-form {
    margin: 0 auto;
    width: 60%;

    input {
        padding: 12px 5px;
        width: 100%;
        height: 100%;
    }

    .btns {
        margin-top: 40px;
        text-align: center;

        button {
            padding: 0 20px;
            height: 35px;
            color: #fff;
            background-color: var(--baseColor);
            border-radius: 5px;
        }
    }
}
</style>


 