<template>
  <div>
    <div class="name">护工状态表</div>
    <el-table
      border
      stripe
      :data="tableData"
      style="width: 100%"
      :header-cell-style="{'background-color': '#259174', 'color': 'white'}">
      <el-table-column prop="id" label="护工ID" width="100" align="center"></el-table-column>
      <el-table-column prop="name" label="护工姓名" width="100" align="center"></el-table-column>
      <el-table-column prop="state" label="状态" width="100" align="center">
        <template slot-scope="scope">
            <el-tag :type="scope.row['state'] === '空闲' ? 'success' : 'danger'" disable-transitions>
                {{ scope.row['state'] }}
            </el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="所处位置" align="center"></el-table-column>
    </el-table>
    <div style="display: flex; justify-content: center; margin-top: 8px;">
      <el-pagination
        background
        :page-size="8"
        layout="prev, pager, next"
        :total="5992">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NurseState',
    data() {
      return {
          tableData: [{
          id: '478',
          name: '史小平',
          state: '空闲',
          address: '绣山医学楼 14楼'
        }, {
          id: '1555',
          name: '方道维',
          state: '空闲',
          address: '7号楼 6楼'
        }, {
          id: '1657',
          name: '陈青红',
          state: '忙碌',
          address: '2号楼 1楼 急诊'
        }, {
          id: '2017',
          name: '刘红芬',
          state: '空闲',
          address: '3号楼 4楼 心内一'
        },{
          id: '6243',
          name: '郑兰芳',
          state: '忙碌',
          address: '1号楼 9楼'
        }, {
          id: '5487',
          name: '李德莲',
          state: '忙碌',
          address: '3号楼 5楼 心外科'
        }, {
          id: '4435',
          name: '杨建周',
          state: '忙碌',
          address: '3号楼 8楼 泌尿一'
        }, {
          id: '4548',
          name: '周永斌',
          state: '忙碌',
          address: '7号楼 10楼 肾病'
        }]
      }
    },
    methods: {
      getTableData() {

      }
    }
  }
</script>

<style scoped>
.name {
    height: 30px;
    width: 25%;
    padding: 8px;
    border-right: 2px solid #00b280;
    background-color: #e5f9f4;
    margin-bottom: 16px;
    line-height: 30px;
    color: #00b280;
    font-weight: bold;
    font-size: 20px;
}
</style>