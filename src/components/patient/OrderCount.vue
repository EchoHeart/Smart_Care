<template>
    <div class="line-container" id="order-count"></div>
</template>

<script>
export default {
    name: 'OrderCount',
    data() {
        return {
            timer: null
        }
    },
    mounted() {
        let containerDom = document.getElementById('order-count')
        let myChart = this.$echarts.getInstanceByDom(containerDom)
        if(!myChart) {
            myChart = this.$echarts.init(containerDom);
        }

        function randomData() {
            now = new Date(+ now + oneDay);
            value = Math.max(value + Math.random() * 21 - 10, 0);
            return {
                name: now.toString(),
                value: [
                    [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
                    Math.round(value)
                ]
            };
        }
        let data = [];
        let now = new Date(2021, 9, 2);
        let oneDay = 24 * 3600 * 1000;
        let value = Math.random() * 200;
        for (var i = 0; i < 500; i++) {
            data.push(randomData());
        }

        let option = {
            title: {
                text: '每月下单量'
            },
            tooltip: {
                trigger: 'axis',
                formatter: function (params) {
                    params = params[0];
                    var date = new Date(params.name);
                    return (
                        date.getDate() +
                        '/' +
                        (date.getMonth() + 1) +
                        '/' +
                        date.getFullYear() +
                        ' : ' +
                        params.value[1]
                    );
                },
                axisPointer: {
                    animation: false
                }
            },
            xAxis: {
                type: 'time',
                splitLine: {
                    show: false
                }
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '100%'],
                splitLine: {
                    show: false
                }
            },
            series: [{
                name: 'Fake Data',
                type: 'line',
                showSymbol: false,
                data: data,
                itemStyle: {
                    color: 'rgb(255, 70, 131)'
                },
                areaStyle: {
                    color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgb(255, 158, 68)'
                        },
                        {
                            offset: 1,
                            color: 'rgb(255, 70, 131)'
                        }
                    ])
                },
            }]
        };
        myChart.setOption(option);

        this.timer = setInterval(() => {
            for (var i = 0; i < 5; i++) {
                data.shift();
                data.push(randomData());
            }
            myChart.setOption({
                series: [{
                    data: data
                }]
            });
        }, 1000);

        window.addEventListener('resize', () => {
            myChart.resize()
        })
    },
    beforeDestroy() {
        clearInterval(this.timer)
    }
}
</script>

<style scoped>
.line-container {
    width: 100%;
    height: 400px;
}
</style>
