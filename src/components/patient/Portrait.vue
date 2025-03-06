<template>
    <el-card style="padding: 8px;">
        <div class="name">基本属性</div>
        <div class="row">
            <div class="col">
                <div class="propName">姓名</div>
                <div class="propValue">葛玉翠</div>
            </div>
            <div class="col">
                <div class="propName">年龄</div>
                <div class="propValue">{{ patientInfo['年龄'] }}岁</div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="propName">性别</div>
                <div class="propValue">
                    <i class="el-icon-female" style="color: #FF6F61; margin-right: 8px;"></i>{{ patientInfo['性别'] }}
                </div>
            </div>
            <div class="col">
                <div class="propName">民族</div>
                <div class="propValue">{{ patientInfo['民族'] }}</div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="propName">
                    籍贯<i class="el-icon-location-information"></i>
                </div>
                <div class="propValue">{{ patientInfo['省'] }}省</div>
            </div>
            <div class="col">
                <div class="propName">
                    电话号码<i class="el-icon-phone-outline"></i>
                </div>
                <div class="propValue">198****3862</div>
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
                    <el-tag size="small">{{ patientInfo['学历'] }}</el-tag>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="propName">身高</div>
                <div class="propValue">{{ patientInfo['身高'] }}cm</div>
            </div>
            <div class="col">
                <div class="propName">体重</div>
                <div class="propValue">{{ patientInfo['体重'] }}kg</div>
            </div>
        </div>
        <div class="row" style="margin-bottom: 28px;">
            <div class="col">
                <div class="propName">BMI指数</div>
                <div class="propValue" style="color: orange; font-size: 20px;">{{ patientInfo['BMI指数'] }}</div>
            </div>
            <div class="col">
                <div class="propName">体型</div>
                <div class="propValue">
                    {{ patientInfo['体型'] }}
                    <i style="color: orange;" class="el-icon-warning-outline"></i>
                </div>
            </div>
        </div>
        <div class="name">住院信息</div>
        <div class="row">
            <div class="col">
                <div class="propName">所在医院</div>
                <div class="propValue">
                    <span>{{ patientInfo['所属医院'] }}</span>
                </div>
            </div>
            <div class="col">
                <div class="propName">所在病区</div>
                <div class="propValue">
                    <span>{{ patientInfo['所在病区'] }}</span>
                </div>
            </div>
        </div>
        <div class="row" style="margin-bottom: 28px;">
            <div class="col">
                <div class="propName" style="width: 22.5%;">重症等级</div>
                <div class="propValue">
                    <el-rate
                        disabled
                        v-model="patientInfo['重症等级']"
                        :colors="['#FFD700', '#FF7F50', '#FF6347', '#FF4500']">
                    </el-rate>
                </div>
            </div>
        </div>
        <div class="name">过往病史</div>
        <div class="row">
            <div class="col">
                <div class="propName">是否残疾</div>
                <div class="propValue">
                    <span>{{ patientInfo['是否残疾'] }}</span>
                </div>
            </div>
            <div class="col"></div>
        </div>
        <div class="row" style="margin-bottom: 28px;">
            <div class="col">
                <div class="propName">过敏史</div>
                <div class="propValue">
                    <span>{{ patientInfo['过敏史'] }}</span>
                </div>
            </div>
            <div class="col">
                <div class="propName">暴露史</div>
                <div class="propValue">
                    <span>{{ patientInfo['暴露史'] }}</span>
                </div>
            </div>
        </div>
        <div class="name">生活习惯</div>
        <div class="row">
            <div class="col">
                <div class="propName">是否吸烟</div>
                <div class="propValue">{{ patientInfo['是否吸烟'] }}</div>
            </div>
            <div class="col">
                <div class="propName">烟龄</div>
                <div class="propValue">{{ patientInfo['烟龄'] }}</div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="propName">吸烟次数/天</div>
                <div class="propValue">
                    <span>{{ patientInfo['平均每日吸烟次数'] }}</span>
                </div>
            </div>
            <div class="col"></div>
        </div>
        <div class="row">
            <div class="col">
                <div class="propName">是否饮酒</div>
                <div class="propValue" style="color: red; font-size: 20px;">{{ patientInfo['是否饮酒'] }}</div>
            </div>
            <div class="col">
                <div class="propName">常饮酒类</div>
                <div class="propValue">{{ patientInfo['常饮酒类'] }}</div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="propName">饮酒次数/天</div>
                <div class="propValue">
                    <span>{{ patientInfo['平均每日饮酒次数'] }}</span>
                </div>
            </div>
            <div class="col"></div>
        </div>
        <div class="row">
            <div class="col">
                <div class="propName">锻炼频率</div>
                <div class="propValue">{{ patientInfo['锻炼频率'] }}</div>
            </div>
            <div class="col">
                <div class="propName">刷牙频率</div>
                <div class="propValue">{{ patientInfo['刷牙频率'] }}</div>
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
            patientInfo: {}
        }
    },
    mounted() {
        this.patientInfo = this.$store.state.patientData[this.ID]
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
    height: 40px;
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