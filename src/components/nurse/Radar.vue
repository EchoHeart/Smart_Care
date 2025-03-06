<template>
    <div class="radar-container" id="nurse-radar"></div>
</template>

<script>
export default {
    name: 'NurseRadar',
    mounted() {
        let containerDom = document.getElementById('nurse-radar')
        let myChart = this.$echarts.getInstanceByDom(containerDom)
        if(!myChart) {
            myChart = this.$echarts.init(containerDom);
        }

        let option = {
            radar: {
                // shape: 'circle',
                indicator: [
                    { name: '技能指数', max: 5 },
                    { name: '健康指数', max: 5 },
                    { name: '信用指数', max: 5 },
                    { name: '评价指数', max: 5 },
                    { name: '沟通指数', max: 5 }
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
                        value: [4.5, 2.5, 5, 3, 3.5],
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
