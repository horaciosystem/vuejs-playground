<template>
  <div>
    <div class="select">
      <select>
        <option
          v-for="option in options"
          :key="option.props.value"
          v-bind="{ ...option.props }"
        >
          {{ option.label }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({
        label: 'Defaul Select'
      })
    }
  },
  data() {
    return {
      options: [
        {
          label: this.item.label,
          props: { value: '', disabled: true, selected: true }
        },
        { props: { value: '1' }, label: 'Item 1' },
        { props: { value: '2' }, label: 'Item 2' },
        { props: { value: '3' }, label: 'Item 3' },
        { props: { value: '4' }, label: 'Item 4' }
      ]
    }
  }
}
</script>
