<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
/* 解决el-table表头与内容不对齐 */
body .el-table th.gutter{
  display: table-cell!important
}
</style>

<style lang="scss">
@import url('./style/default.scss');
</style>