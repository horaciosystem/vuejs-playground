<template>
  <div class="home">
    <main>
      <SelectedUsers />
      <UsersList :onSelect="addItem" />
    </main>
  </div>
</template>

<script>
import UsersList from '@/components/common/UserList'
import SelectedUsers from '@/components/common/SelectedUsers'

export default {
  name: 'Home',
  components: {
    UsersList,
    SelectedUsers
  },
  data: () => ({
    selectedItems: []
  }),
  methods: {
    addItem(item) {
      this.selectedItems = this.selectedItems.concat(item)
    }
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
