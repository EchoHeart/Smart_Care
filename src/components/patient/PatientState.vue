<template>
  <div>
    <div class="name">患者状态表</div>
    <el-table
      border
      stripe
      :data="tableData"
      style="width: 100%"
      :header-cell-style="{'background-color': '#259174', 'color': 'white'}">
      <el-table-column prop="id" label="患者ID" width="120" align="center"></el-table-column>
      <el-table-column prop="name" label="患者姓名" width="120" align="center"></el-table-column>
      <el-table-column prop="state" label="状态" width="150" align="center">
        <template slot-scope="scope">
            <el-tag :type="scope.row['state'] === '被服务中' ? 'danger' : 'info'" disable-transitions>
                {{ scope.row['state'] }}
            </el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="所处位置" align="center"></el-table-column>
    </el-table>
    <div style="display: flex; justify-content: center; margin-top: 8px;">
      <el-pagination
        background
        :page-size="10"
        layout="prev, pager, next"
        :total="37928">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PatientState',
    data() {
      return {
          tableData: [{
          id: '1686',
          name: '董亚红',
          state: '被服务中',
          address: '3号楼'
        }, {
          id: '2704',
          name: '项菊秋',
          state: '未下单',
          address: '5号楼'
        }, {
          id: '2697',
          name: '符秀翠',
          state: '被服务中',
          address: '3号楼'
        }, {
          id: '1697',
          name: '黄梅菊',
          state: '被服务中',
          address: '3号楼'
        },{
          id: '1249',
          name: '葛玉翠',
          state: '被服务中',
          address: '7号楼'
        }, {
          id: '4806',
          name: '高雪玲',
          state: '未下单',
          address: '1号楼'
        }, {
          id: '1654',
          name: '陈玉妃',
          state: '未下单',
          address: '5号楼'
        }, {
          id: '4946',
          name: '史玉燕',
          state: '被服务中',
          address: '1号楼'
        },{
          id: '6238',
          name: '袁晓红',
          state: '被服务中',
          address: '6号楼'
        }, {
          id: '2031',
          name: '丁俊',
          state: '未下单',
          address: '3号楼'
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