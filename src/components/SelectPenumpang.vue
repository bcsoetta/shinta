<template>
    <router-link to="/login">Login Page</router-link>
</template>

<script>
export default {
  name: 'SelectPenumpang',
  data () {
    return {
      token: null, // initial token is null
      userData: null
    }
  },
  computed: {
    isLoggedIn: () => this.token != null,
    userName: () => this.userData ? this.userData.username : null
  }
}
</script>

<style scoped>

</style>
