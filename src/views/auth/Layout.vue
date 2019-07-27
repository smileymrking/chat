<template>
  <a-card class="auth">
    <div class="return-login">
      <router-link
        :style="{ float: 'right' }"
        v-if="$route.name !== 'login'"
        :to="{ name: 'login' }">{{$t('auth.back')}}
      </router-link>
    </div>
    <router-view></router-view>
  </a-card>
</template>

<script>

export default {
  name: 'Layout'
}
</script>

<style lang="less" scoped>
  .auth {
    position: relative;
    width: 450px;
    margin: 0 auto;
    top: 20%;

    .return-login {
      width: 100%;
      height: 20px;
      margin: 0 auto 20px;
    }
  }
</style>
