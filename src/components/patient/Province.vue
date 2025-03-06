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
                data: [
                    '西藏', '江苏', '吉林', '宁夏', '贵州', '福建', '广东', '青海', '湖南', '山东', 
                    '海南', '陕西', '安徽', '内蒙古', '江西', '甘肃', '天津', '上海', '四川', '河北', '北京', 
                    '重庆', '湖北', '广西', '辽宁', '新疆', '河南', '云南', '山西', '黑龙江', '浙江'
                ]
            },
            series: [
                {
                    name: '人数',
                    type: 'bar',
                    data: [
                        2, 56, 60, 6, 75, 67, 31, 5, 46, 81, 15, 78, 
                        217, 43, 123, 6, 20, 31, 61, 56, 20, 83, 45, 21, 33, 
                        13, 106, 8, 28, 57, 1030
                    ].sort((a, b) => a-b),
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
    height: 540px;
}
</style>
