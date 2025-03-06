<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="7">
                <div style="margin-bottom: 24px; display: flex; justify-content: space-between; align-items: center;">
                    <el-input placeholder="输入患者ID" style="width: 40%;" v-model="patientID"></el-input>
                    <el-button type="primary" size="small">生成推荐结果</el-button>
                </div>
                <PatientPortrait :ID="patientID"></PatientPortrait>
            </el-col>
            <el-col :span="10">
                <RecommandRadar></RecommandRadar>
                <div style="display: flex;">
                    <div
                        style="width: 50%; padding: 4px; cursor: pointer;"
                        v-for="(nurseID, idx) in topk.slice(0, 2)"
                        :key="nurseID"
                        @click="show(idx, 0)"
                    >
                        <RecommandCard :ID="nurseID" :score="scores[idx]" :state="states[idx]"></RecommandCard>
                    </div>
                </div>
                <div style="display: flex;">
                    <div
                        style="width: 50%; padding: 4px; cursor: pointer;"
                        v-for="(nurseID, idx) in topk.slice(2, 4)"
                        :key="nurseID"
                        @click="show(idx, 2)"
                    >
                        <RecommandCard :ID="nurseID" :score="scores[idx + 2]" :state="states[idx + 2]"></RecommandCard>
                    </div>
                </div>
                <div style="display: flex; margin-bottom: 28px;">
                    <div
                        style="width: 50%; padding: 4px; cursor: pointer;"
                        v-for="(nurseID, idx) in topk.slice(4)"
                        :key="nurseID"
                        @click="show(idx, 4)"
                    >
                        <RecommandCard :ID="nurseID" :score="scores[idx + 4]" :state="states[idx + 4]"></RecommandCard>
                    </div>
                    <div style="width: 50%; padding: 8px;"></div>
                </div>
            </el-col>
            <el-col :span="7">
                <div class="name">护工详细信息</div>
                <NursePortrait :ID="topk[current]"></NursePortrait>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import NursePortrait from '@/components/nurse/Portrait.vue';
import PatientPortrait from '@/components/patient/Portrait.vue';
import RecommandCard from '@/components/RecommandCard.vue';
import RecommandRadar from '@/components/Radar.vue'

export default {
    name: 'recommand',
    components: {NursePortrait, PatientPortrait, RecommandCard, RecommandRadar},
    data() {
        return {
            patientID: '1249',
            topk: ['4873', '5339', '6274', '6195', '5326'],
            scores: [93, 88, 82, 77, 75],
            states: ['忙碌', '空闲', '空闲', '空闲', '空闲', '忙碌'],
            current: 0
        }
    },
    methods: {
        show(idx, step){
            this.current = idx + step
        }
    }
}
</script>

<style scoped>
.name {
    height: 30px;
    padding: 8px;
    border-top: 2px solid #EC7063;
    margin-bottom: 16px;
    line-height: 30px;
    text-align: center;
    color: #EC7063;
    font-weight: bold;
    font-size: 20px;
}
</style>