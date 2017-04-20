<template>
  <div class="">

    <el-menu theme="dark" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1">SIMPLE CMS</el-menu-item>
      <el-menu-item id="login" index="2" @click="loginForm = true">LOGIN</el-menu-item>
    </el-menu>

    <el-dialog title="LOGIN FORM" v-model="loginForm" size="tiny">
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="Username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="Password">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
      </el-form>
        <span>
          <a @click="signupForm = true; loginForm = false">
            Don't have an account? Click here to SIGN UP
          </a>
        </span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="loginForm = false">Cancel</el-button>
          <el-button type="primary" @click="onSubmit">LOGIN</el-button>
        </span>
    </el-dialog>


    <el-dialog title="SIGN UP FORM" v-model="signupForm" size="tiny">
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="Name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="Username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="Email">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="Password">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
      </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="signupForm = false">Cancel</el-button>
          <el-button type="primary" @click="onSubmit">LOGIN</el-button>
        </span>
    </el-dialog>




  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 1,
      loginForm: false,
      signupForm: false,
      form: {
        name: '',
        username: '',
        email: '',
        password: ''
      }
    }
  }
}
</script>

<style>
  #login {
    float: right;
  }
</style>
