<template>
    <div>
        <div style="display: flex;">
            <div class="left">
                <div style="display: flex;">
                    <div style="width: 70%;">
                        <OrderCount></OrderCount>
                    </div>
                    <div style="flex: 1;">
                        <SexChart></SexChart>
                    </div>
                </div>
                <div style="display: flex;">
                    <div style="width: 50%;">
                        <ProvinceChart></ProvinceChart>
                    </div>
                    <div style="flex: 1;">
                        <CultureChart></CultureChart>
                    </div>
                </div>
            </div>
            <div class="right">
                <Statistic></Statistic>
                <PatientState></PatientState>
            </div>
        </div>
        <div class="bottom">

        </div>
    </div>
</template>

<script>
import PatientState from '@/components/patient/PatientState.vue';
import OrderCount from '@/components/patient/OrderCount.vue';
import Statistic from '@/components/patient/Statistic.vue';
import SexChart from '@/components/patient/Sex.vue';
import ProvinceChart from '@/components/patient/Province.vue';
import CultureChart from '@/components/patient/Culture.vue';

export default {
    name: 'nurse-group-portrait',
    components: {
        PatientState,
        OrderCount,
        Statistic,
        SexChart,
        ProvinceChart,
        CultureChart
    }
}
</script>

<style scoped>
.left {
    width: 70%;

    .left-top {
        display: flex;

        .order-count-area {
            width: 70%;
        }
    }
}
.right {
    flex: 1;
    padding: 0 8px;
}
.bottom {
    height: 500px;
}
</style>