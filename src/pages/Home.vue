<template>
  <div class="home">
    <main>
      <UserListVuex />
    </main>
  </div>
</template>

<script>
import UserListVuex from '@/components/common/UserListVuex/UserListVuex'

export default {
  name: 'Home',
  components: {
    UserListVuex
  }
}
</script>

<style>
.Wrapper {
  height: 60vh;
  display: flex;
  flex-direction: column;
}

.image {
  width: 100%;
  object-fit: cover;
}
</style>
