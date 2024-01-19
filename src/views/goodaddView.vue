<template>
    <div class="goodadd">
        <div class="top">
            <el-button type="primary">返回</el-button>
            <span>新增月卡</span>
        </div>
        <div class="bom">
            <div class="top">
                车辆信息
                <el-form ref="ruleFormRef" :inline="true" :model="ruleForm" :rules="rules" label-width="120px"
                    class="demo-ruleForm" status-icon>
                    <el-form-item label="车主姓名" prop="personName">
                        <el-input style="width: 500px;" v-model="ruleForm.personName" />
                    </el-form-item>
                    <el-form-item label="联系方式" prop="phoneNumber">
                        <el-input style="width: 500px;" v-model="ruleForm.phoneNumber" />
                    </el-form-item>
                    <el-form-item label="车主号码" prop="carNumber">
                        <el-input style="width: 500px;" v-model="ruleForm.carNumber" />
                    </el-form-item>
                    <el-form-item label="车两品牌" prop="carBrand">
                        <el-input style="width: 500px;" v-model="ruleForm.carBrand" />
                    </el-form-item>
                </el-form>
            </div>
            <div class="bom">
                最新一次月卡缴费信息
                <el-form ref="ruleFormRef" :inline="true" :model="ruleForm" :rules="rules" label-width="120px"
                    class="demo-ruleForm" status-icon>
                    <el-form-item label="有效日期">
                        <el-form-item prop="date1">
                            <div class="demo-date-picker">
                                <div class="block">
                                    <el-date-picker v-model="time" type="daterange" range-separator="至"
                                        start-placeholder="开始日期" end-placeholder="结束日期" />
                                </div>
                            </div>
                        </el-form-item>
                    </el-form-item>
                    <el-form-item label="支付金额" prop="paymentAmount">
                        <el-input style="width: 500px;" v-model="ruleForm.paymentAmount" />
                    </el-form-item>
                    <el-form-item label="支付方式" prop="paymentMethod">
                        <el-select v-model="ruleForm.paymentMethod" placeholder="全部" clearable>
                            <el-option label="支付宝" value="Alipay" />
                            <el-option label="微信" value="WeChat" />
                            <el-option label="线下" value="Cash" />
                        </el-select>
                    </el-form-item>
                </el-form>
            </div>
            <el-button type="primary" @click="submitForm(ruleFormRef)" style="width: 100%;">
                登录
            </el-button>
        </div>
    </div>
</template>
<script setup lang='ts'>
import { reactive, ref } from "vue";
import { goodadd } from '@/api'
const time = ref('')
const ruleFormRef = ref('')
const ruleForm = reactive({
    carNumber: '',
    personName: '',
    phoneNumber: '',
    carBrand: '',
    paymentAmount: '',
    paymentMethod: '',
    cardStartDate: '',
    cardEndDate: '',
})
const rules = reactive({
    personName: [
        { required: true, message: '请输入车主姓名', trigger: 'blur' }
    ],
    phoneNumber: [
        { required: true, message: '请输入联系方式', trigger: 'blur' }
    ],
    carBrand: [
        { required: true, message: '请输入车辆品牌', trigger: 'blur' }
    ],
    carNumber: [
        { required: true, message: '请输入车牌号', trigger: 'blur' }
    ],
    paymentAmount: [
        { required: true, message: '请输入支付金额', trigger: 'blur' }
    ],
    paymentMethod: [
        { required: true, message: '请选择支付方式', trigger: 'blur' }
    ],
})
const submitForm = async (formEl: any) => {
    if (!formEl) return
    await formEl.validate((valid: any) => {
        if (valid) {
            ruleForm.cardStartDate = time.value[0]
            ruleForm.cardEndDate = time.value[1]
            
                console.log( ruleForm.cardStartDate );
                console.log( ruleForm.cardEndDate );
            goodadd(ruleForm).then(res => {
                console.log(res);
                
            })
        } else {
            console.log('error submit!')
        }
    })
}
</script>
<style lang='scss' scoped>
.goodadd {
    width: 100%;
    height: 100vh;
    background-color: #f4f6f8;

    .top {
        width: 100%;
        padding: 10px;
        background-color: #fff;
    }

    .bom {
        padding: 20px;

    }
}
</style>