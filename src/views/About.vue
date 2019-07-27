<template>
  <div class="about">
    <h1>{{message}}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: ''
    }
  },
  mounted () {
    this.home()
  },
  methods: {
    home () {
      this.$store.dispatch('home').then((res) => {
        this.message = res.message
      })
    }
  }
}
</script>
