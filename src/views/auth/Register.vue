<template>
  <a-form id="components-form-demo-normal-register" :form="form" class="register-form" @submit="handleSubmit">
    <a-form-item>
      <a-input size="large" v-decorator="nameDecorator" :placeholder="$t('auth.username')">
        <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)"/>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input size="large" v-decorator="emailDecorator" :placeholder="$t('auth.email')">
        <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)"/>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input size="large" v-decorator="passwordDecorator" type="password" :placeholder="$t('auth.password')">
        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)"/>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input size="large" v-decorator="passwordConfirmationDecorator" type="password" :placeholder="$t('auth.passwordConfirmation')">
        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)"/>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-button size="large" type="primary" html-type="submit" class="register-form-button" :loading="registerLoading">
        {{$t('auth.register')}}
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      registerLoading: false
    }
  },
  beforeCreate () {
    this.form = this.$form.createForm(this)
  },
  computed: {
    nameDecorator () {
      return [
        'name',
        { rules: [{ required: true, message: this.$t('auth.required', { field: this.$t('auth.username') }) }] }
      ]
    },
    emailDecorator () {
      return [
        'email',
        { rules: [{ required: true, message: this.$t('auth.required', { field: this.$t('auth.email') }) }] }
      ]
    },
    passwordDecorator () {
      return [
        'password',
        { rules: [{ required: true, message: this.$t('auth.required', { field: this.$t('auth.password') }) }] }
      ]
    },
    passwordConfirmationDecorator () {
      return [
        'password_confirmation',
        { rules: [
          { required: true, message: this.$t('auth.required', { field: this.$t('auth.passwordConfirmation') }) },
          { validator: this.handlePasswordConfirmation }]
        }
      ]
    }
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields(async (err, values) => {
        if (err) return
        this.registerLoading = true
        await this.$store.dispatch('register', values).then(async () => {
          await this.$message.success(this.$t('auth.registerSuccess'))
          this.$router.push({ name: 'login' })
        }).catch((error) => {
          if (!this.$helpers.setInputErrors(error, this.form)) {
            this.$message.error(error)
          }
        })
        this.registerLoading = false
      })
    },
    handlePasswordConfirmation (rule, value, callback) {
      if (value !== this.form.getFieldValue('password')) {
        callback(this.$t('auth.passwordConfirmationError'))
      } else {
        callback()
      }
    }
  }
}
</script>

<style scoped>
  #components-form-demo-normal-register .register-form {
    max-width: 300px;
  }

  #components-form-demo-normal-register .register-form-button {
    width: 100%;
  }
</style>
