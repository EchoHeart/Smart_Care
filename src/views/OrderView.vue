<template>
    <div>
        <el-row :gutter="20" style="margin-bottom: 16px;">
            <el-col :span="2">
                <el-select class="select" value="" clearable placeholder="根据医院筛选">
                    <el-option
                        v-for="item in [{value: 'hospital1', label: 'WT'}, {value: 'hospital2', label: 'YH'}, {value: 'hospital3', label: 'FQ'}]"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
            <el-col :span="3">
                <el-select class="select" value="" clearable placeholder="根据服务商筛选">
                    <el-option
                        v-for="item in [{value: 'provider1', label: 'NBAX'}, {value: 'provider2', label: 'XBJH'}, {value: 'provider3', label: 'JSMSJ'}, {value: 'provider4', label: 'SHZF'}]"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
            <el-col :span="4">
                <el-select class="select" value="" clearable placeholder="根据服务项目筛选">
                    <el-option
                        v-for="item in [{value: '1', label: 'lsq'}]"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
            <el-col :span="4">
                <el-select class="select" value="" clearable placeholder="根据订单类型筛选">
                    <el-option
                        v-for="item in [{value: 'type1', label: '一对一'}, {value: 'type2', label: '多对多'}]"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
            <el-col :span="4" class="line">
                <el-col :span="11">
                    <el-date-picker class="select" type="date" placeholder="选择日期" style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="1">
                    -
                </el-col>
                <el-col :span="11">
                    <el-time-picker class="select" placeholder="选择时间" style="width: 100%;"></el-time-picker>
                </el-col>
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
                :fixed="col === '订单号'"
                :width="getWidth(col)"
                align="center">
                <template slot-scope="scope">
                    <el-tag v-if="col === '患者性别'" :type="scope.row['患者性别'] === '男' ? 'primary' : 'warning'" disable-transitions>
                        {{scope.row['患者性别']}}
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
        columns: [
            '订单号', '费用', '服务项目', '订单类型', '创建时间', '服务开始时间', '服务结束时间', '服务天数', '关闭时间',
            '患者性别', '患者年龄', '医院ID', '医院名称', '病区ID', '病区名称', '床位号',
            '护工ID', '护工姓名', '服务商ID', '服务商名称'
        ],
        tableData: [],
        orderData: [],
        pageID: 0,
        pageSize: 12
      }
    },
    created() {
        this.initTableData()
    },
    computed: {
        getPageCount() {
            if(this.orderData.length % this.pageSize === 0) {
                return Math.floor(this.orderData.length / this.pageSize)
            }
            else {
                return Math.floor(this.orderData.length / this.pageSize) + 1
            }
        }
    },
    methods: {
        getWidth(col) {
            return col === '订单号' ? 200 : 150
        },
        getTableData() {
            this.tableData = this.orderData.slice(this.pageID * this.pageSize, Math.min((this.pageID + 1) * this.pageSize, this.orderData.length))
        },
        getOrderData() {
            let orderData_raw = this.$store.state.orderData
            for(let orderID in orderData_raw) {
                let row = {'订单号': orderID}
                for(let col of this.columns.slice(1)) {
                    row[col] = orderData_raw[orderID][col]
                }
                this.orderData.push(row)
            }
        },
        async initTableData() {
            await this.getOrderData()
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
    width: 100%;
}
.line {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>