<template>
  <div id="user-list">
    <h1 class="title">
      User List
    </h1>
    <span v-if="users.loading && !users.data">Loading...</span>
    <span v-if="users.error">An error occurred</span>
    <div v-if="users.data">
      <div class="List__Container">
        <UserCard v-for="user in users.data" :key="user.id" :user="user" />
      </div>
      <footer class="footer">
        <div class="content has-text-centered">
          <button class="button is-primary" @click="loadMore">
            More
          </button>
        </div>
      </footer>
    </div>
    <span v-else>There are no items</span>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import UserCard from '@/components/common/UserCard'

const BASE_URL = 'https://api.github.com/users'

export default {
  name: 'UserList',
  components: {
    UserCard
  },
  data() {
    return {
      usersUrl: BASE_URL
    }
  },
  computed: {
    ...mapState('usersDry', {
      users: state => state
    })
  },
  watch: {
    usersUrl: {
      handler: 'loadUsers',
      immediate: true
    }
  },
  methods: {
    ...mapActions('usersDry', ['fetchUsers']),
    loadUsers() {
      this.fetchUsers({ url: this.usersUrl })
    },
    loadMore() {
      let [last] = this.users.data.slice(-1)
      this.usersUrl = `${BASE_URL}?since=${last.id}`
    }
  }
}
</script>

<style lang="scss" scoped>
.List__Container {
  display: flex;
  flex-wrap: wrap;
  padding: 10px;

  .card {
    margin: 10px;
  }
}
.footer {
  padding: 2rem;
}
</style>
