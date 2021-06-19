<template>
  <h2>Edit Account</h2>
  {{ account }}
  <form v-if="account" @submit.prevent="handleSubmit">
    <div class="form-group">
      <label>Name</label>
      <input type="text" v-model="account.username" class="form-control" />
    </div>
    <div class="form-group">
      <label>Extra Info</label>
      <input type="text" v-model="account.password" class="form-control" />
    </div>
    <div class="form-group">
      <button type="submit" class="btn btn-primary">Save</button>
      <router-link to="../../" class="btn btn-link">Cancel</router-link>
    </div>
  </form>
  <div v-if="!account" class="text-center p-3">
    <span class="spinner-border spinner-border-lg align-center"></span>
  </div>
</template>

<script>
import { reactive, ref, watch } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const account = reactive({});
    const redirect = ref(undefined);

    watch(
      () => route.name,
      () => {
        redirect.value = route.query.redirect || "/";
      },
      { immediate: true }
    );

    const handleSubmit = async (e) => {
      e.preventDefault();
      await store.dispatch("auth/login", account);
      await store.dispatch("auth/getInfo");
      router.push({ path: redirect.value || "/" });
    };
    return {
      account,
      handleSubmit,
      redirect,
    };
  },
};
</script>
