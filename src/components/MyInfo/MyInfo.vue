<template>
  <table class="table-info">
    <tbody>
      <tr v-for="(val, key) in data" :key="key">
        <th>{{ keyVal[key] || key }}</th>
        <td>{{ val }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "MyInfo",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const keyVal = reactive({
      name: "Full name",
      email: "Email",
      tel: "Phone",
    });

    return {
      keyVal,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./styles/myinfo";
</style>
