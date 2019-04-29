<template>
  <div class="about">
    <h1 class="title">User Detail</h1>
    <UserDetailsVuex :userLogin="$route.params.login" />
  </div>
</template>

<script>
import UserDetailsVuex from '@/components/common/UserDetailsVuex'

export default {
  name: 'UserDetailPage',
  components: {
    UserDetailsVuex
  }
}
</script>
