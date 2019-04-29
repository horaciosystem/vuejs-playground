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
import UserCard from '@/components/common/UserCard'
import fetchService from '@/mixins/fetchService'

const BASE_URL = 'https://api.github.com/users'

const usersFetcher = {
  methodName: 'fetchUsers',
  handler: ({ url }) => fetch(url),
  stateUpdater: ({ prevState, currentData }) => {
    //update items already exist
    let updatedItems = prevState.map(prevItem => {
      let newItem = currentData.find(newItem => newItem.id === prevItem.id)
      return newItem || prevItem
    })
    //get only new items
    let newItems = currentData.filter(newItem => {
      return !updatedItems.some(oldItem => oldItem.id === newItem.id)
    })
    return updatedItems.concat(newItems)
  }
}

export default {
  name: 'UserList',
  components: {
    UserCard
  },
  mixins: [
    fetchService({ key: 'users', initialState: [], fetcher: usersFetcher })
  ],
  data() {
    return {
      usersUrl: BASE_URL
    }
  },
  watch: {
    usersUrl: {
      handler: 'loadUsers',
      immediate: true
    }
  },
  methods: {
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
