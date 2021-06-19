<template>
  <table class="table-kill">
    <tbody>
      <tr v-for="(val, key) in data" :key="key">
        <td>
          <table>
            <tbody>
              <tr>
                <th class="table-kill__title" colspan="2">
                  {{ keyVal[key] || key }}
                </th>
              </tr>
              <tr v-for="(val2, key2) in val" :key="key2">
                <th>{{ key2 }}</th>
                <td>{{ val2 }}</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "MyKill",
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
