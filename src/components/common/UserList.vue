<template>
  <div id="user-list">
    <h1 class="title">
      User List
    </h1>
    <Fetcher :url="usersUrl" :stateUpdater="stateUpdater">
      <template #default="{ data }">
        <div v-if="data">
          <div class="List__Container">
            <UserCard v-for="user in data" :key="user.id" :user="user" />
          </div>
          <footer class="footer">
            <div class="content has-text-centered">
              <button class="button is-primary" @click="loadMore(data)">
                More
              </button>
              <button class="button is-secondary" @click="increasePageSize">
                Increase page size
              </button>
            </div>
          </footer>
        </div>
        <span v-else>There are no items</span>
      </template>
    </Fetcher>
  </div>
</template>

<script>
import Fetcher from '@/components/common/Fetcher'
import UserCard from './UserCard'

const BASE_URL = '//api.github.com/users'

export default {
  name: 'UserList',
  components: {
    UserCard,
    Fetcher
  },
  data() {
    return {
      usersUrl: BASE_URL,
      pageSize: 0
    }
  },
  methods: {
    stateUpdater({ previousState, currentState }) {
      return previousState ? previousState.concat(currentState) : currentState
    },
    loadMore(data) {
      let [last] = data.slice(-1)
      this.usersUrl = `${BASE_URL}?since=${last.id}`
    },
    increasePageSize() {
      this.pageSize = this.pageSize += 5
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
