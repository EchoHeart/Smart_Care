<template>
    <div class="province-container" id="province"></div>
</template>

<script>
export default {
    name: 'Province',
    mounted() {
        let containerDom = document.getElementById('province')
        let myChart = this.$echarts.getInstanceByDom(containerDom)
        if(!myChart) {
            myChart = this.$echarts.init(containerDom);
        }

        let option = {
            title: {
                text: '地区分布'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01]
            },
            yAxis: {
                type: 'category',
                data: ['新疆', '辽宁', '内蒙古', '宁夏', '西藏', '广西', '湖南', '四川', '贵州', '江西', '安徽', '重庆', '江苏', '浙江', '河南']
            },
            series: [
                {
                    name: '人数',
                    type: 'bar',
                    data: [242, 97, 73, 31, 28, 27, 24, 22, 7, 6, 5, 4, 4, 2, 2].sort((a, b) => a-b),
                    color: ['#9ACD32']
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
.province-container {
    width: 100%;
    height: 500px;
}
</style>
