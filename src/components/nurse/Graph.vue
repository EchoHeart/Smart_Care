<template>
    <div class="graph-container" id="nurse-graph"></div>
</template>

<script>
export default {
    name: 'NurseGraph',
    data() {
        return {
            graphInfo: {}
        }
    },
    created() {
        this.graphInfo = require('../nurse/graph.json')
    },
    mounted() {
        let containerDom = document.getElementById('nurse-graph')
        let myChart = this.$echarts.getInstanceByDom(containerDom)
        if(!myChart) {
            myChart = this.$echarts.init(containerDom);
        }

        let option = {
            legend: {
                data: ['HTMLElement', 'WebGL', 'SVG', 'CSS', 'Other']
            },
            series: [
                {
                    type: 'graph',
                    layout: 'force',
                    animation: false,
                    label: {
                        position: 'right',
                        formatter: '{b}'
                    },
                    draggable: true,
                    data: this.graphInfo.nodes.map(function (node, idx) {
                        node.id = idx;
                        return node;
                    }),
                    categories: this.graphInfo.categories,
                    force: {
                        edgeLength: 5,
                        repulsion: 20,
                        gravity: 0.2
                    },
                    edges: this.graphInfo.links
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
.graph-container {
    width: 100%;
    height: 500px;
}
</style>
