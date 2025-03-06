<template>
    <el-card>
        <div style="display: flex; align-items: center; justify-content: space-between;">
            <div class="name">护工编号：{{ ID }}</div>
            <div style="margin-bottom: 16px;display: flex; align-items: center;">
                匹配度：
                <span style="color: #00b280; font-size: 20px; font-weight: bold;">{{ score }}%</span>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="propName">姓名</div>
                <div class="propValue">{{ nurseInfo['护工姓名'] }}</div>
            </div>
            <div class="col">
                <div class="propName">年龄</div>
                <div class="propValue">{{ nurseInfo['年龄'] }}岁</div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="propName">性别</div>
                <div class="propValue">
                    <i class="el-icon-female" style="color: #FF6F61; margin-right: 8px;"></i>{{ nurseInfo['性别'] }}
                </div>
            </div>
            <div class="col">
                <div class="propName">
                    在岗时间
                </div>
                <div class="propValue">
                    <span style="font-size: 20px; color: red;">{{ nurseInfo['在岗时间'] }}</span>天
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="propName" style="width: 25%;">当前状态</div>
                <div class="propValue">
                    <el-tag :type="state === '空闲' ? 'success' : 'danger'" disable-transitions>
                        {{ state }}
                    </el-tag>
                </div>
            </div>
        </div>
        <div class="row" style="height: auto;justify-content: flex-end;">
            <el-link type="primary"><i class="el-icon-view el-icon--right" style="margin-right: 8px;"></i>查看护工画像</el-link>
        </div>
    </el-card>
</template>

<script>
export default {
    name: 'RecommandCard',
    props: ['ID', 'score', 'state'],
    data() {
        return {
            nurseInfo: this.$store.state.nurseData[this.ID]
        }
    }
}
</script>

<style scoped>
.name {
    height: 30px;
    width: 50%;
    margin-bottom: 16px;
    line-height: 30px;
    font-weight: bold;
    font-size: 20px;
}
.row {
    height: 40px;
    display: flex;
    margin-bottom: 3px;
    align-items: center;

    .col {
        flex: 1;
        display: flex;
        align-items: center;

        .propName {
            height: 100%;
            width: 50%;
        }
        .propValue {
            height: 100%;
            flex: 1;
        }
    }
}
</style>