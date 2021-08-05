<template>
  <div class="charts">
        <div ref="chart" style="width: 100%;height:800px;"></div> 
  </div>
  
</template>
<script>
export default {
  data(){
    return{
     
    }
  },
  props:["type"],
  mounted(){
   this.init();
  },
  methods:{
     init(){
        // 基于准备好的dom，初始化echarts实例
        var myChart = this.$echarts.init(this.$refs.chart);
        // 指定图表的配置项和数据
        var option = {
    legend: {},
    tooltip: {},
    dataset: {
        source: [
            ['product', '第一季度', '第二季度', '第三季度', '第四季度'],
            ['饮料类', 41.1, 30.4, 65.1, 53.3],
            ['零食类', 86.5, 92.1, 85.7, 83.1],
            ['生活用品类', 24.1, 67.2, 79.5, 86.4]
        ]
    },
    xAxis: [
        {type: 'category', gridIndex: 0},
        {type: 'category', gridIndex: 1}
    ],
    yAxis: [
        {gridIndex: 0},
        {gridIndex: 1}
    ],
    grid: [
        {bottom: '55%'},
        {top: '55%'}
    ],
    series: [
        // These series are in the first grid.
        {type: 'bar', seriesLayoutBy: 'row'},
        {type: 'bar', seriesLayoutBy: 'row'},
        {type: 'bar', seriesLayoutBy: 'row'},
        // These series are in the second grid.
        {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
        {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
        {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
        {type: 'bar', xAxisIndex: 1, yAxisIndex: 1}
    ]
};
        // 使用刚指定的配置项和数据显示图表。
     myChart.setOption(option);
}
  }
}
</script>