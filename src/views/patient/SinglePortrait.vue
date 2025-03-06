<template>
    <div>
        <el-row :gutter="20" style="margin-bottom: 16px;">
            <el-col :span="6">
                <el-input placeholder="输入患者ID或姓名" v-model="patientID">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="10" style="display: flex;flex-direction: column;align-items: center;">
                <div class="legend">
                    <div class="tag" style="background-color: #569480;">院区</div>
                    <div class="tag" style="background-color: #ecb5c9;">病区</div>
                    <div class="tag" style="background-color: #4c8eda;">护工</div>
                    <div class="tag" style="background-color: #f16667;">患者</div>
                    <div class="tag" style="background-color: #ffe081;">订单</div>
                </div>
                <img src="../../assets/PatientGraph.png" style="width: 80%;">
                <PatientRadar></PatientRadar>
            </el-col>
            <el-col :span="8">
                <Portrait :ID="patientID"></Portrait>
            </el-col>
            <el-col :span="6">
                <div class="name">历史订单</div>
                <div class="block">
                    <el-timeline>
                        <el-timeline-item
                            v-for="(activity, idx) in activities"
                            :key="activity['id']"
                            :timestamp="activity['createTime']"
                            placement="top"
                            :color="idx % 2 === 0 ? '#00b280' : ''"
                        >
                            <el-card>
                                <div class="title">
                                    <span>订单号：{{activity['id']}}</span>
                                    <el-tag type="danger">
                                        {{ activity['content'] }}
                                    </el-tag>
                                </div>
                                <div style="margin-top: 8px;">
                                    <i class="el-icon-office-building icon"></i>{{ activity['area'] }}
                                </div>
                                <div style="margin-top: 8px;">
                                    <i class="el-icon-coin icon"></i>{{ activity['money'] }}元
                                </div>
                            </el-card>
                        </el-timeline-item>
                    </el-timeline>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Portrait from '@/components/patient/Portrait.vue';
import PatientRadar from '@/components/patient/Radar.vue';

export default {
    name: 'SinglePortrait',
    components: {Portrait, PatientRadar},
    data() {
        return {
            patientID: '1249',
            orderList: [
                '16300202408120823', '16300202408120658', '16100202408061433'
            ],
            activities: []
        }
    },
    mounted() {
        for(let orderID of this.orderList) {
            let order = this.$store.state.orderData[orderID]
            this.activities.push({
                id: orderID,
                createTime: order['创建时间'],
                content: order['服务项目'],
                area: order['病区名称'],
                money: order['费用']
            })
        }
    }
}
</script>

<style scoped>
.name {
    height: 30px;
    padding: 8px;
    border-right: 2px solid #00b280;
    background-color: #e5f9f4;
    margin-bottom: 16px;
    line-height: 30px;
    color: #00b280;
    font-weight: bold;
    font-size: 20px;
}
.block {
    padding: 16px;
}
.title {
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.icon {
    margin-right: 8px;
}
.legend {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    .tag {
        margin-left: 8px;
        padding: 8px;
        height: 12px;
        line-height: 12px;
        text-align: center;
        border-radius: 4px;
        color: white;
        font-weight: bold;
    }
    .tag:first-child {
        margin-left: 0;
    }
}
</style>