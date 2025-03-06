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
                <NurseState></NurseState>
            </div>
        </div>
        <div class="bottom">

        </div>
    </div>
</template>

<script>
import NurseState from '@/components/nurse/NurseState.vue';
import OrderCount from '@/components/nurse/OrderCount.vue';
import Statistic from '@/components/nurse/Statistic.vue';
import SexChart from '@/components/nurse/Sex.vue';
import ProvinceChart from '@/components/nurse/Province.vue';
import CultureChart from '@/components/nurse/Culture.vue';

export default {
    name: 'nurse-group-portrait',
    components: {
        NurseState,
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