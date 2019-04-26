<template>
  <div class="home">
    <main>
      <UsersList />
    </main>
  </div>
</template>

<script>
import UsersList from '@/components/common/UserList'
export default {
  name: 'Home',
  components: {
    UsersList
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
