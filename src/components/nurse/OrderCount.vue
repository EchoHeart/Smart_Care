<template>
    <div class="line-container" id="order-count"></div>
</template>

<script>
export default {
    name: 'OrderCount',
    mounted() {
        let containerDom = document.getElementById('order-count')
        let myChart = this.$echarts.getInstanceByDom(containerDom)
        if(!myChart) {
            myChart = this.$echarts.init(containerDom);
        }

        let option = {
            title: {
                text: '24h内订单数统计'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross'
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45']
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value} 单'
                },
                axisPointer: {
                    snap: true
                }
            },
            visualMap: {
                show: false,
                dimension: 0,
                pieces: [
                {
                    lte: 8,
                    color: 'green'
                },
                {
                    gt: 8,
                    lte: 10,
                    color: 'red'
                },
                {
                    gt: 8,
                    lte: 14,
                    color: 'green'
                },
                {
                    gt: 14,
                    lte: 17,
                    color: 'red'
                },
                {
                    gt: 17,
                    color: 'green'
                }
                ]
            },
            series: [
                {
                name: '订单数',
                type: 'line',
                smooth: true,
                data: [16, 20, 10, 4, 8, 14, 17, 20, 32, 55, 50, 35, 22, 30, 60, 75, 80, 70, 40, 30],
                markArea: {
                    itemStyle: {
                        color: 'rgba(255, 173, 177, 0.4)'
                    },
                    data: [
                    [
                        {name: '高峰期', xAxis: '10:00'},
                        {xAxis: '12:30'}
                    ],
                    [
                        {name: '高峰期', xAxis: '17:30'},
                        {xAxis: '21:15'}
                    ]
                    ]
                }
                }
            ]
        };
        myChart.setOption(option);

        window.addEventListener('resize', () => {
            myChart.resize()
        })
    }
}
</script>

<style scoped>
.line-container {
    width: 100%;
    height: 400px;
}
</style>
