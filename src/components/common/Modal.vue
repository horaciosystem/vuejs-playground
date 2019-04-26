<template>
  <div>
    <slot name="open" :onOpen="onOpen" />
    <div class="modal" :class="{ 'is-active': isOpen }">
      <div class="modal-background" />
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">
            {{ title }}
          </p>
          <button class="delete" aria-label="close" @click="onClose" />
        </header>
        <section class="modal-card-body">
          <slot />
        </section>
      </div>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    initialOpenState: {
      type: Boolean
    },
    title: {
      type: String,
      default: 'Default Modal Title'
    }
  },
  data() {
    return {
      isOpen: this.initialOpenState
    }
  },
  methods: {
    onClose() {
      this.isOpen = false
    },
    onOpen() {
      this.isOpen = true
    }
  }
}
</script>
