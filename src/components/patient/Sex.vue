<template>
    <div class="sex-container" id="sex"></div>
</template>

<script>
export default {
    name: 'Sex',
    mounted() {
        let containerDom = document.getElementById('sex')
        let myChart = this.$echarts.getInstanceByDom(containerDom)
        if(!myChart) {
            myChart = this.$echarts.init(containerDom);
        }

        let option = {
            title: {
                text: '性别比例',
                left: 'left'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                top: '5%',
                left: 'center'
            },
            series: [{
                name: '人数',
                type: 'pie',
                radius: ['40%', '70%'],
                center: ['50%', '70%'],
                startAngle: 180,
                endAngle: 360,
                data: [
                    { value: 920, name: '男' },
                    { value: 1603, name: '女' },
                ],
                color: [
                    '#6CB4EE',
                    '#FF5722',
                ]
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
.sex-container {
    width: 100%;
    height: 400px;
}
</style>
