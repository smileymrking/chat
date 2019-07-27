<template>
  <a-form id="components-form-demo-normal-login" :form="form" class="login-form" @submit="handleSubmit">
    <a-form-item>
      <a-input size="large" v-decorator="usernameDecorator" :placeholder="$t('auth.username')">
        <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)"/>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input size="large" v-decorator="passwordDecorator" type="password" :placeholder="$t('auth.password')">
        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)"/>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-checkbox v-decorator="rememberDecorator">
        {{$t('auth.remember')}}
      </a-checkbox>
      <a class="login-form-forgot" @click="goReset">
        {{$t('auth.forget')}}
      </a>
      <a-button size="large" type="primary" html-type="submit" class="login-form-button" :loading="loginLoading">
        {{$t('auth.login')}}
      </a-button>
    </a-form-item>
    <div class="login-form-register">
      <router-link :to="{ name:'register' }">{{$t('auth.register')}}</router-link>
    </div>
  </a-form>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loginLoading: false
    }
  },
  beforeCreate () {
    this.form = this.$form.createForm(this)
  },
  computed: {
    usernameDecorator () {
      return [
        'username',
        { rules: [{ required: true, message: this.$t('auth.required', { field: this.$t('auth.username') }) }] }
      ]
    },
    passwordDecorator () {
      return [
        'password',
        { rules: [{ required: true, message: this.$t('auth.required', { field: this.$t('auth.password') }) }] }
      ]
    },
    rememberDecorator () {
      return [
        'remember',
        { valuePropName: 'checked', initialValue: true }
      ]
    }
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields(async (err, values) => {
        if (err) return
        values.remember = values.remember ? 1 : 0
        this.loginLoading = true
        await this.$store.dispatch('login', values).then(() => {
          this.$router.push({ name: 'dashboard' })
        }).catch((error) => {
          if (!this.$helpers.setInputErrors(error, this.form)) {
            this.$message.error(error)
          }
        })
        this.loginLoading = false
      })
    },
    goReset () {
      this.$router.push({ name: 'sendResetEmail' })
    }
  }
}
</script>

<style scoped>
  #components-form-demo-normal-login .login-form {
    max-width: 300px;
  }

  #components-form-demo-normal-login .login-form-forgot {
    float: right;
  }

  #components-form-demo-normal-login .login-form-button {
    width: 100%;
  }

  #components-form-demo-normal-login .login-form-register {
    text-align: center;
  }
</style>
