<template>
    <div>
        <el-row :gutter="20" style="margin-bottom: 16px;">
            <el-col :span="6">
                <el-input placeholder="输入患者ID">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </el-col>
        </el-row>
        <el-table
            border
            stripe
            :data="tableData"
            style="width: 100%;height: 100%;"
            :header-cell-style="{'background-color': '#00b280', 'color': 'white'}"
        >
            <el-table-column
                v-for="col in columns"
                :key="col"
                :prop="col"
                :label="col"
                :fixed="col === '患者ID'"
                width="150"
                align="center">
                <template slot-scope="scope">
                    <el-tag v-if="col === '性别'" :type="scope.row['性别'] === '男' ? 'primary' : 'warning'" disable-transitions>
                        {{scope.row['性别']}}
                    </el-tag>
                    <span v-else>{{ scope.row[col] }}</span>
                </template>
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="100" align="center">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div style="display: flex; justify-content: center; margin-top: 16px;">
            <el-pagination
                background
                layout="prev, pager, next"
                :page-count="getPageCount"
                :page-size="pageSize"
                @prev-click="clickPrev"
                @next-click="clickNext"
                @current-change="clickPage">
            </el-pagination>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        columns: ['患者ID'],
        tableData: [],
        patientData: [],
        pageID: 0,
        pageSize: 12
      }
    },
    created() {
        this.initTableData()
    },
    computed: {
        getPageCount() {
            if(this.patientData.length % this.pageSize === 0) {
                return Math.floor(this.patientData.length / this.pageSize)
            }
            else {
                return Math.floor(this.patientData.length / this.pageSize) + 1
            }
        }
    },
    methods: {
        getTableData() {
            this.tableData = this.patientData.slice(this.pageID * this.pageSize, Math.min((this.pageID + 1) * this.pageSize, this.patientData.length))
        },
        getPatientData() {
            let patientData_raw = this.$store.state.patientData
            for(let patientID in patientData_raw) {
                let row = {'患者ID': patientID}
                if(this.columns.length === 1) {
                    for(let col in patientData_raw[patientID]) {
                        this.columns.push(col)
                    }
                }
                for(let col in patientData_raw[patientID]) {
                    row[col] = patientData_raw[patientID][col]
                }
                this.patientData.push(row)
            }
        },
        async initTableData() {
            await this.getPatientData()
            this.getTableData()
        },
        clickPrev() {
            this.pageID--
            this.getTableData()
        },
        clickNext() {
            this.pageID++
            this.getTableData()
        },
        clickPage(page) {
            this.pageID = page - 1
            this.getTableData()
        }
    }
  }
</script>

<style scoped>
.line {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>