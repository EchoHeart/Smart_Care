<template>
    <div class="radar-container" id="patient-radar"></div>
</template>

<script>
export default {
    name: 'PatientRadar',
    mounted() {
        let containerDom = document.getElementById('patient-radar')
        let myChart = this.$echarts.getInstanceByDom(containerDom)
        if(!myChart) {
            myChart = this.$echarts.init(containerDom);
        }

        let option = {
            radar: {
                // shape: 'circle',
                indicator: [
                    { name: '健康指数', max: 5 },
                    { name: '自理能力', max: 5 },
                    { name: '特殊需求', max: 5 },
                    { name: '生活习惯', max: 5 },
                    { name: '重症等级', max: 5 }
                ],
                axisName: {
                    color: 'white',
                    backgroundColor: '#FF6F61',
                    borderRadius: 3,
                    padding: [8, 8]
                }
            },
            series: [{
                name: '学历',
                type: 'radar',
                areaStyle: {},
                data: [
                    {
                        value: [3, 4, 0.5, 2.8, 3],
                    }
                ],
                color: ['#004D40']
            }]
        };
        myChart.setOption(option);

        window.addEventListener('resize', () => {
            myChart.resize()
        })
    }
}
</script>

<style scoped>
.radar-container {
    width: 100%;
    height: 400px;
}
</style>
