<template>
  <div class="about">
    <h1 class="title">User Detail</h1>
    <UserDetails :userLogin="$route.params.login" />
  </div>
</template>

<script>
import UserDetails from '@/components/common/UserDetails'

export default {
  name: 'UserDetailPage',
  components: {
    UserDetails
  }
}
</script>
