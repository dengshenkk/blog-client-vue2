<template>
  <div class='login-wrap'>
    <el-card shadow='hover'>
      <logo />
      <el-form>
        <el-form-item>
          <el-input placeholder='用户名' v-model='user.name'></el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder='手机' v-model='user.phone'></el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder='密码' v-model='user.password'></el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder='确认密码' v-model='user.repeatPassword'></el-input>
        </el-form-item>

        <el-form-item>
          <el-button style='width: 100%;' type='primary' @click='handleRegister'>注 册</el-button>
          <div style='margin: 12px;'></div>
          <el-button style='width: 100%;' @click='$router.push("/login")'>登 录</el-button>
        </el-form-item>

        <el-form-item>
          <div class='login-entry'>
            <g-icon icon='GitHub'></g-icon>
            <g-icon icon='google'></g-icon>
            <g-icon icon='QQ1'></g-icon>
            <g-icon icon='zhifubao'></g-icon>
            <g-icon icon='apple'></g-icon>
            <g-icon icon='Microsoft'></g-icon>
            <g-icon icon='baidu'></g-icon>
            <g-icon icon='shejiaotubiao-42'></g-icon>
            <g-icon icon='weixin'></g-icon>
            <g-icon icon='gmail'></g-icon>
          </div>
        </el-form-item>

      </el-form>
    </el-card>
  </div>
</template>

<script>
import Logo from '@/components/logo'
import GIcon from '@/components/gIcon'
import { register } from '@/api/user'

export default {
  name: 'index',
  components: {
    GIcon,
    Logo
  },
  data () {
    return {
      user: {
        name: 'dengshen',
        phone: '18665016580',
        password: '123123',
        repeatPassword: '123123',
      }
    }
  },
  methods: {
    handleRegister () {
      const { name, avatar, phone, password, repeatPassword} = this.user
      register({ name, avatar, phone, password, repeatPassword }).then(res => {
        console.log('res: ', res)
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.login-wrap {
  width: 500px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;

  ::v-deep {
    .el-card {
      width: inherit;
      height: inherit;

      .login-entry {
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
;
}
</style>
