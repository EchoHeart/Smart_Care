<template>
    <el-card style="padding: 8px;">
        <div class="name">基本属性</div>
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
                <div class="propName">民族</div>
                <div class="propValue">{{ nurseInfo['民族'] }}</div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="propName">
                    籍贯<i class="el-icon-location-information"></i>
                </div>
                <div class="propValue">{{ nurseInfo['省'] }}省</div>
            </div>
            <div class="col">
                <div class="propName">
                    电话号码<i class="el-icon-phone-outline"></i>
                </div>
                <div class="propValue">137****9028</div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="propName">宗教信仰</div>
                <div class="propValue">无</div>
            </div>
            <div class="col">
                <div class="propName">文化程度</div>
                <div class="propValue">
                    <el-tag size="small">{{ nurseInfo['学历'] }}</el-tag>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="propName">身高</div>
                <div class="propValue">{{ nurseInfo['身高'] }}cm</div>
            </div>
            <div class="col">
                <div class="propName">体重</div>
                <div class="propValue">{{ nurseInfo['体重'] }}kg</div>
            </div>
        </div>
        <div class="row" style="margin-bottom: 28px;">
            <div class="col">
                <div class="propName">BMI指数</div>
                <div class="propValue" :style="{
                    'color': nurseInfo['体型'] !== '正常' ? 'orange' : 'green',
                    'fontSize': '20px'
                    }"
                >
                    {{ nurseInfo['BMI指数'] }}
                </div>
            </div>
            <div class="col">
                <div class="propName">体型</div>
                <div class="propValue">
                    {{ nurseInfo['体型'] }}
                    <i v-if="nurseInfo['体型'] !== '正常'" style="color: orange;" class="el-icon-warning-outline"></i>
                    <i v-else style="color: green;" class="el-icon-circle-check"></i>
                </div>
            </div>
        </div>
        <div class="name">语言水平</div>
        <div class="row" style="margin-bottom: 28px;">
            <div class="col">
                <div class="propName">普通话程度</div>
                <div class="propValue">{{ nurseInfo['普通话程度'] }}</div>
            </div>
            <div class="col">
                <div class="propName">方言程度</div>
                <div class="propValue">{{ nurseInfo['方言程度'] }}</div>
            </div>
        </div>
        <div class="name">工作信息</div>
        <div class="row">
            <div class="col">
                <div class="propName">常驻医院</div>
                <div class="propValue">{{ nurseInfo['常驻医院'] }}</div>
            </div>
            <div class="col">
                <div class="propName">所属服务商</div>
                <div class="propValue">{{ nurseInfo['所属服务商'] }}</div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="propName">负责病区</div>
                <div class="propValue">{{ nurseInfo['主要负责病区'] }}、{{ nurseInfo['其他负责病区'] }}</div>
            </div>
            <div class="col">
                <div class="propName">擅长科室</div>
                <div class="propValue">{{ nurseInfo['擅长科室'] }}</div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="propName">
                    在岗时间<i class="el-icon-date" style="margin-left: 2px;"></i>
                </div>
                <div class="propValue">
                    <span style="font-size: 20px; color: red;">{{ nurseInfo['在岗时间'] }}</span>天
                </div>
            </div>
            <div class="col">
                <div class="propName">
                    接单数<i class="el-icon-document-checked" style="margin-left: 2px;"></i>
                </div>
                <div class="propValue">
                    <span style="font-size: 20px; color: red;">{{ nurseInfo['接单数'] }}</span>单
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="propName">活跃度</div>
                <div class="propValue">
                    <span style="font-size: 20px; color: red;">{{ nurseInfo['活跃度'] * 100 }}</span>%
                </div>
            </div>
            <div class="col"> </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="propName" style="width: 22.5%;">评分</div>
                <div class="propValue">
                    <el-rate
                        disabled
                        v-model="nurseInfo['评分（满分5分）']"
                        :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
                    </el-rate>
                </div>
            </div>
        </div>
    </el-card>
</template>

<script>
export default {
    name: 'Portrait',
    props: ['ID'],
    data() {
        return {
            nurseInfo: {}
        }
    },
    mounted() {
        this.nurseInfo = this.$store.state.nurseData[this.ID]
    }
}
</script>

<style scoped>
.name {
    height: 30px;
    line-height: 30px;
    color: #00b280;
    font-weight: bold;
    font-size: 20px;
    
    margin-bottom: 16px;
}
.row {
    height: 50px;
    margin-bottom: 8px;
    display: flex;
    align-items: center;

    .col {
        flex: 1;
        display: flex;
        align-items: center;

        .propName {
            height: 100%;
            width: 45%;
        }
        .propValue {
            height: 100%;
            flex: 1;
        }
    }
}
</style>