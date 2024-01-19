<template>
    <div class="ykgl">
        <div class="top">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item label="车牌号码">
                    <el-input v-model="formInline.carNumber" placeholder="请输入内容" clearable />
                </el-form-item>
                <el-form-item label="车主名字">
                    <el-input v-model="formInline.personName" placeholder="请输入内容" clearable />
                </el-form-item>
                <el-form-item label="状态">
                    <el-select v-model="formInline.cardStatus" placeholder="全部" clearable>
                        <el-option label="有效" value="0" />
                        <el-option label="过期" value="1" />
                    </el-select>
                </el-form-item>
                <el-form-item>
                   <el-button type="primary" @click="search">查询</el-button>
                </el-form-item>
            </el-form>
        <hr>
        </div>
        <el-button type="primary" @click="goto">添加月卡</el-button>
        <el-button>批量删除</el-button>
        <el-table :data="list.list" style="width: 100%">
            <el-table-column type="selection" width="55" />
            <el-table-column type="index" label="序号" width="55"/>
            <el-table-column prop="personName" label="车主名字" />
            <el-table-column prop="phoneNumber" label="联系方式" />
            <el-table-column prop="carNumber" label="车牌号码" />
            <el-table-column prop="carBrand" label="车辆品牌" />
            <el-table-column prop="totalEffectiveDate" label="剩余有效天数" />
            <el-table-column prop="cardStatus" label="状态">
                <template #default="scope">
                   {{ scope.row.cardStatus==0?'有效':'已过期'}}
                </template>
            </el-table-column>
            <el-table-column label="操作" width="200">
                <template #default="">
                    <el-button link type="primary" size="small" >续费</el-button>
                    <el-button link type="primary" size="small">查看</el-button>
                    <el-button link type="primary" size="small">编辑</el-button>
                    <el-button link type="primary" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script setup lang='ts'>
import { reactive } from "vue"
import { goodlist } from '@/api'
import { useRouter } from "vue-router"
const router=useRouter()
const formInline = reactive({
    page: '1',
    pageSize: '10',
    carNumber: '',
    personName: '',
    cardStatus: ''
})
const list = reactive<any>({
    list: []
})
const getlist = () => {
    goodlist(formInline).then(res => {
        console.log(res);
        list.list = res.data.data.rows
    })
}
getlist()
const  search =()=>{
    getlist()
}
const goto=()=>{
router.push('/goodadd')
}

</script>
<style lang='scss' scoped>
.ykgl {
    padding: 10px;
}
.top{
    padding: 10px 0 10px 0;
}
</style>