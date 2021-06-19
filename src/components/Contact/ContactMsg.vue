<template>
  <alert class="alert--success"
    >Thank you for filling out your information!</alert
  >
  <table class="table-contact-msg">
    <tbody>
      <tr v-for="(val, key) in data" :key="key">
        <th>{{ key }}</th>
        <td>{{ val }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import Alert from "@/components/Alert/index.vue";

export default {
  name: "ContactMsg",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  components: {
    Alert,
  },
};
</script>

<style lang="scss" scoped>
@import "./styles/contact-msg";
</style>
