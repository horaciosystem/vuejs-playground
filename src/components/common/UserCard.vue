<template>
  <div class="card">
    <router-link :to="`/users/${user.login}`">
      <div class="card-content">
        <div class="media-left">
          <div class="card-image">
            <figure class="image is-128x128">
              <img
                :src="user.avatar_url"
                class="is-rounded"
                alt="Placeholder image"
              />
            </figure>
          </div>
        </div>
        <div class="media-content">
          <p class="subtitle is-5">
            {{ user.login }}
          </p>
        </div>
        <!-- <button @click="$emit('select', user.login)">Select</button> -->
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  width: 320px;
}
</style>
