<template>
  <div class="Counter__Wrapper">
    <div>{{ counter }}</div>
    <div>
      <button class="Counter__Button" @click="increase">
        + Increment
      </button>
      <button class="Counter__Button" @click="decrease">
        - Decrement
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    increase() {
      this.counter += 1
    },
    decrease() {
      this.counter -= 1
    }
  }
}
</script>

<style scoped>
.Counter__Wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.Counter__Button {
  height: 40px;
  padding: 8px;
}
</style>
