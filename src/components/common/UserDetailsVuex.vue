<template>
  <div>
    <span v-if="user.loading && !user.data">Loading...</span>
    <span v-else-if="user.error">An error occurred</span>
    <div v-if="user.data && !user.loading">
      <div>
        <img
          :src="user.data.avatar_url"
          alt="User avatar"
          width="200"
          height="200"
        />
      </div>
      <div>
        <div>ID {{ user.data.id }}</div>
      </div>
      <div v-show="user.data.bio">
        <div>Bio {{ user.data.bio }}</div>
      </div>
      <div>
        <div>Create at {{ formatDate(new Date(user.data.created_at)) }}</div>
      </div>
      <div>
        <a :href="user.data.html_url" rel="noopener noreferrer" target="_blank">
          Github profile
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
const BASE_URL = 'https://api.github.com/users'

export default {
  name: 'UserDetails',
  props: {
    userLogin: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      url: `${BASE_URL}/${this.userLogin}`
    }
  },
  computed: {
    ...mapState('user', { user: state => state })
  },
  mounted() {
    this.fetchUser({ url: this.url })
  },
  methods: {
    ...mapActions('user', ['fetchUser']),
    formatDate(date) {
      let day = date.getDate()
      let month = date.getMonth() + 1
      let year = date.getFullYear()

      return `${day}/${month}/${year}`
    }
  }
}
</script>
