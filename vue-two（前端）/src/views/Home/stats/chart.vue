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
//   //第一种 watch options变化 利用vue的深度 watcher，options 一有变化就重新setOption
// watch: {
//   options: {
//     handler(options) {
//       this.chart.setOption(this.options)
//     },
//     deep: true
//   },
// },
//第二种 只watch 数据的变化 只有数据变化时触发ECharts
watch: {
  seriesData(val) {
    this.setOptions({series:val})
  }
},
  methods:{
     init(){
        // 基于准备好的dom，初始化echarts实例
        var myChart = this.$echarts.init(this.$refs.chart);
        // 指定图表的配置项和数据
        var option = {
    legend: {},
    tooltip: {},
    
   series : [
        {
            name: '比例',
            type: 'pie',
            radius: '55%',
            data:[
                {value:235, name:'零食类'},
                {value:274, name:'饮料类'},
                {value:310, name:'生活用品类'}
            ]
        }
    ]
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}

}
  }
}
</script>