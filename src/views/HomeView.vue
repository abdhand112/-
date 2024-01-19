<template>
  <div class="home">
    <div class="left">
      <img src="../../public/微信截图_20240117190250.png" alt="">
    </div>
    <div class="right">
      <div class="login">
        <h3>智慧园区-登录</h3>
        <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm" status-icon
          label-position="top">
          <el-form-item label="账号" prop="username">
            <el-input v-model="ruleForm.username" />
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="ruleForm.password" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm(ruleFormRef)" style="width: 100%;">
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script setup lang='ts'>
import { reactive, ref } from "vue";
import { loginAPI } from "@/api";
import { ElMessage } from 'element-plus'
import { useRouter } from "vue-router";
const router=useRouter()
const ruleFormRef = ref('')
const ruleForm = reactive({
  username: 'demo',
  password: 'zh@hm#23'
})
const rules = reactive({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' }
  ],
})
const submitForm = async (formEl: any) => {
  if (!formEl) return
  await formEl.validate((valid: any) => {
    if (valid) {
      console.log('submit!')
      loginAPI(ruleForm).then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.data.token)
        ElMessage({
          message:'登录成功',
          type:'success'
        })
        router.push('/about')
      })
    } else {
      console.log('error submit!')
    }
  })
}

const resetForm = (formEl: any) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>
<style lang='scss' scoped>
.home {
  width: 100%;
  height: 100vh;
  display: flex;

  .left {
    width: 54%;
    height: 100%;
    // background:pink;
    box-sizing: border-box;

    img {
      float: left;
      width: 100%;
      height: 100%;
      border-radius: 0 20px 20px 0;
    }
  }

  .right {
    flex: 1;
    height: 100%;
    display: flex;
    // flex-direction: column;
    justify-content: center;
    align-items: center;

    .login {
      text-align: center;
      width: 400px;
      padding: 20px;
    }
  }
}
</style>