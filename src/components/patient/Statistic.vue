<template>
    <div>
        <div class="name">数据面板</div>
        <div class="container">
            <div class="area">
                <span class="title" style="color: #6CB4EE;">
                    患者人数
                    <i class="el-icon-user-solid"></i>
                </span>
                <span class="subtitle">
                    <animate-number from="0" to="37928" duration="1500"></animate-number>
                </span>
            </div>
            <div class="area">
                <span class="title" style="color: burlywood;">
                    历史订单数
                    <i class="el-icon-success" style="color: burlywood;"></i>
                </span>
                <span class="subtitle">
                    <animate-number from="0" to="41036" duration="1500"></animate-number>
                </span>
            </div>
            <div class="area">
                <span class="title" style="color: #FA8072;">
                    所属医院
                    <i class="el-icon-s-home"></i>
                </span>
                <span class="subtitle">
                    <animate-number from="0" to="47" duration="1500"></animate-number>家
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Statistic',
}
</script>

<style scoped>
.name {
    height: 30px;
    width: 25%;
    padding: 8px;
    border-right: 2px solid #00b280;
    background-color: #e5f9f4;
    margin-bottom: 16px;
    line-height: 30px;
    color: #00b280;
    font-weight: bold;
    font-size: 20px;
}
.container {
    margin-bottom: 64px;
    display: flex;

    .area {
        flex: 1;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .title {
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 16px;
        }

        .subtitle {
            font-size: 32px;
        }
    }
}
</style>