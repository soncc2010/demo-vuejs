<template>
  <div class="wrapper">
    <l-header />
    <main class="main">
      <test-vue />
      <slot></slot>
    </main>
    <l-footer />
    <modal :is-show="isShow" :title="modalTitle" @close="closeModal">
      <template v-slot:modal-body>
        <component
          :is="currentComponent.component"
          :data="currentComponent.data"
        ></component>
      </template>
    </modal>
  </div>
</template>

<script>
import { ref, reactive, inject } from "vue";

import LHeader from "@/components/LHeader";
import LFooter from "@/components/LFooter";
import TestVue from "@/components/TestVue";
import Modal from "@/components/Modal";
import ContactMsg from "@/components/Contact/ContactMsg";
import { MyInfo, MyKill, MyAddress } from "@/components/MyInfo/";

export default {
  name: "DefaultLayout",
  components: {
    LHeader,
    LFooter,
    TestVue,
    Modal,
    MyInfo,
    MyKill,
    MyAddress,
    ContactMsg,
  },
  setup() {
    const eventBus = inject("eventBus");
    const isShow = ref(false);
    const modalTitle = ref("");
    const currentComponent = reactive({ component: "", data: "" });

    const comp = {
      info: MyInfo,
      kill: MyKill,
      address: MyAddress,
      contact: ContactMsg,
    };

    const closeModal = () => {
      isShow.value = false;
    };

    eventBus.on("pass-data-popup", (payloadData) => {
      isShow.value = !isShow.value;
      const { type, title, data } = payloadData;
      currentComponent.component = comp[type];
      currentComponent.data = data || "";
      modalTitle.value = title;
    });

    return {
      isShow,
      closeModal,
      currentComponent,
      modalTitle,
    };
  },
};
</script>
