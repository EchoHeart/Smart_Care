<template>
    <div>
        <el-row :gutter="20" style="margin-bottom: 16px;">
            <el-col :span="6">
                <el-input placeholder="输入护工ID或姓名">
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
                :fixed="col === '护工ID'"
                :width="getWidth(col)"
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
        columns: ['护工ID'],
        tableData: [],
        nurseData: [],
        pageID: 0,
        pageSize: 12
      }
    },
    created() {
        this.initTableData()
    },
    computed: {
        getPageCount() {
            if(this.nurseData.length % this.pageSize === 0) {
                return Math.floor(this.nurseData.length / this.pageSize)
            }
            else {
                return Math.floor(this.nurseData.length / this.pageSize) + 1
            }
        }
    },
    methods: {
        getWidth(col) {
            return col === '擅长科室' ? 250 : 150
        },
        getTableData() {
            this.tableData = this.nurseData.slice(this.pageID * this.pageSize, Math.min((this.pageID + 1) * this.pageSize, this.nurseData.length))
        },
        getNurseData() {
            let nurseData_raw = this.$store.state.nurseData
            for(let nurseID in nurseData_raw) {
                let row = {'护工ID': nurseID}
                if(this.columns.length === 1) {
                    for(let col in nurseData_raw[nurseID]) {
                        this.columns.push(col)
                    }
                }
                for(let col in nurseData_raw[nurseID]) {
                    row[col] = nurseData_raw[nurseID][col]
                }
                this.nurseData.push(row)
            }
        },
        async initTableData() {
            await this.getNurseData()
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
.select {
    width: 150px;
}
.line {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>