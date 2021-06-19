<template>
  <transition name="modal">
    <div class="modal" v-if="isShow">
      <div class="modal__dialog" @click.self="closeModal">
        <div class="modal__content">
          <div
            class="modal__header"
            :class="[
              classModalHeader,
              {
                'modal__header--no-title':
                  !this.$slots['modal-header'] && !title,
              },
            ]"
          >
            <h3 v-if="title" class="modal__title">{{ title }}</h3>
            <slot v-else name="modal-header"></slot>
            <slot name="button-close">
              <button
                type="button"
                class="modal__btn-close"
                :class="classModalButtonClose"
                @click="closeModal"
              >
                <span>×</span>
              </button>
            </slot>
          </div>
          <div class="modal__body" :class="classModalBody">
            <slot name="modal-body"></slot>
          </div>
          <div
            v-if="this.$slots['modal-footer']"
            class="modal__footer"
            :class="classModalFooter"
          >
            <slot name="modal-footer"> </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { onBeforeUnmount, watch } from "vue";
import scrollClock from "@/ultis/scroll-clock";
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
    classModalHeader: {
      type: String,
      default: null,
    },
    classModalFooter: {
      type: String,
      default: null,
    },
    classModalBody: {
      type: String,
      default: null,
    },
    classModalButtonClose: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
  },
  setup(props, { emit }) {
    const closeModal = () => {
      emit("close", this);
      scrollClock().enableScroll();
    };

    watch(
      () => props.isShow,
      (nexVal) => {
        if (nexVal) {
          scrollClock().disableScroll();
        }
      },
      { immediate: true }
    );

    onBeforeUnmount(() => {
      scrollClock().enableScroll();
    });

    return {
      closeModal,
    };
  },
};
</script>

<style lang="scss" scope>
@import "./styles/modal";
</style>
