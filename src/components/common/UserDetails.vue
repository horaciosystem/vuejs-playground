<template>
  <Fetcher :url="`//api.github.com/users/${userLogin}`">
    <template
      #default="{ data: { id, avatar_url, created_at, html_url, bio } }"
    >
      <div>
        <div>
          <img
            as="{Image}"
            src="{avatar_url}"
            alt="User avatar"
            width="{200}"
            height="{200}"
          />
        </div>
        <div>
          <span>ID</span>
          <div>{{ id }}</div>
        </div>
        <div v-show="bio">
          <span>Bio</span>
          <div>{{ bio }}</div>
        </div>
        <div>
          <span>Create at</span>
          <div>{{ formatDate(new Date(created_at)) }}</div>
        </div>
        <div>
          <a href="{html_url}" rel="noopener noreferrer" target="_blank">
            Github profile
          </a>
        </div>
      </div>
    </template>
  </Fetcher>
</template>

<script>
import Fetcher from '@/components/common/Fetcher'

export default {
  name: 'UserDetails',
  components: {
    Fetcher
  },
  props: {
    userLogin: {
      type: String,
      default: ''
    }
  },
  methods: {
    formatDate(date) {
      let day = date.getDate()
      let month = date.getMonth() + 1
      let year = date.getFullYear()

      return `${day}/${month}/${year}`
    }
  }
}
</script>
