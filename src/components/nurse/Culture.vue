<template>
    <div class="culture-container" id="culture"></div>
</template>

<script>
export default {
    name: 'Culture',
    mounted() {
        let containerDom = document.getElementById('culture')
        let myChart = this.$echarts.getInstanceByDom(containerDom)
        if(!myChart) {
            myChart = this.$echarts.init(containerDom);
        }

        let option = {
            title: {
                text: '文化程度'
            },
            radar: {
                // shape: 'circle',
                indicator: [
                    { name: '文盲', max: 180 },
                    { name: '小学', max: 300 },
                    { name: '初中', max: 300 },
                    { name: '高中及以上', max: 250 }
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
                        value: [169, 217, 171, 17],
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
.culture-container {
    width: 100%;
    height: 500px;
}
</style>
