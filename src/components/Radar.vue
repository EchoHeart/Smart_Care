<template>
    <div class="radar-container" id="recommand-radar"></div>
</template>

<script>
export default {
    name: 'RecommandRadar',
    mounted() {
        let containerDom = document.getElementById('recommand-radar')
        let myChart = this.$echarts.getInstanceByDom(containerDom)
        if(!myChart) {
            myChart = this.$echarts.init(containerDom);
        }

        let option = {
            radar: {
                // shape: 'circle',
                indicator: [
                    { name: '基本属性', max: 5 },
                    { name: '能力需求', max: 5 },
                    { name: '空间位置', max: 5 },
                ],
                axisName: {
                    color: 'black',
                    fontWeight: 'bold',
                }
            },
            series: [{
                name: '学历',
                type: 'radar',
                areaStyle: {},
                data: [
                    {
                        value: [4.2, 3, 5],
                    },
                    {
                        value: [3.8, 3.5, 5],
                    }
                ],
                color: ['#004D40', '#EC7063']
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
    height: 250px;
    display: flex;
    align-items: center;
}
</style>
