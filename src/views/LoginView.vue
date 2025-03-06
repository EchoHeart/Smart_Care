<template>
    <div class="login-view">
        <el-card class="login-card">
            <div class="title">
                "智慧护理"画像分析和推荐平台
            </div>
            <div class="input-area">
                <span style="width: 64px; padding: 8px;">用户名：</span>
                <el-input v-model="userName" class="input"></el-input>
            </div>
            <div class="input-area">
                <span style="width: 64px; padding: 8px;">密码：</span>
                <el-input v-model="password" show-password class="input"></el-input>
            </div>
            <div class="config-area">
                <el-checkbox v-model="remember" style="margin-left: 8px;">记住我</el-checkbox>
                <el-link type="primary">忘记密码</el-link>
            </div>
            <div style="padding-left: 8px;">
                <el-button type="primary" style="width: 100%" @click="login">登录/注册</el-button>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    name: 'LoginView',
    data() {
        return {
            userName: 'admin_1',
            password: 'lsq20010226',
            remember: true
        }
    },
    methods: {
        login() {
            let role = this.userName.split('_')[0]
            this.$store.commit('login', {
                userName: this.userName,
                password: this.password,
                role
            })

            this.$router.push('/home');
        }
    }
}
</script>

<style scoped>
.login-view {
    position: relative;
    height: 100vh;

    background-image: url(../assets/登录背景2.jpg);
    background-size: cover;
    background-blend-mode: multiply;
    background-color: rgba(0, 0, 0, 0.4);
}
.login-card {
    width: 500px;
    padding: 30px;
    position: absolute;

    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
}
.title {
    text-align: center;
    font-size: 24px;
    font-weight: bolder;
    margin-bottom: 60px;
}
.input {
    flex: 1;
    margin-left: 8px;
}

.input-area {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
}
.config-area {
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 32px;
}

.el-button--primary, .el-button--primary:hover {
    background-color: #00b280;
    border-color: #00b280;
}
.el-button--primary:active {
    background-color: #259174;
    border-color: #259174;
}
</style>