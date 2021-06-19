<template>
  <article class="section">
    <div class="container container--sm">
      <h2 class="heading text-center">
        <span class="heading__txt">Contact Page</span>
      </h2>
      <form @submit="onSubmit">
        <div class="form-group">
          <label class="form-label" for="name"
            >Full name:<span class="form-required">*</span></label
          >
          <input
            class="form-control"
            :class="errors.name ? 'is-invalid' : ''"
            id="name"
            name="name"
            v-model="name"
            type="text"
          />
          <p class="invalid-feedback">{{ errors.name }}</p>
        </div>

        <div class="form-group">
          <label class="form-label" for="email"
            >Email:<span class="form-required">*</span></label
          >
          <input
            class="form-control"
            :class="errors.email ? 'is-invalid' : ''"
            id="email"
            name="email"
            v-model="email"
            type="email"
          />
          <p class="invalid-feedback">{{ errors.email }}</p>
        </div>

        <div class="form-group">
          <label class="form-label" for="email">Content:</label>
          <textarea
            class="form-control"
            id="content"
            name="content"
            rows="7"
            v-model="content"
          ></textarea>
          <span>{{ errors.content }}</span>
        </div>

        <div class="text-center">
          <button
            type="reset"
            class="btn btn--outline-success btn--min-sm mr-15"
            @click="resetFrm()"
          >
            Reset
          </button>
          <button class="btn btn--success btn--min-sm" :disabled="isSubmitting">
            Send
          </button>
        </div>
      </form>
    </div>
  </article>
</template>

<script>
import { computed, reactive, inject } from "vue";
import { useHead } from "@vueuse/head";
import { useField, useForm } from "vee-validate";
import { toFormValidator } from "@vee-validate/zod";
import * as zod from "zod";

export default {
  setup() {
    const eventBus = inject("eventBus");

    const siteData = reactive({
      title: `Contact Page`,
    });

    useHead({
      title: computed(() => siteData.title),
    });

    const validationSchema = toFormValidator(
      zod.object({
        name: zod.string().nonempty("This is required"),
        email: zod
          .string()
          .nonempty("This is required")
          .email({ message: "Must be a valid email" }),
      })
    );

    const { handleSubmit, errors, resetForm, isSubmitting } = useForm({
      validationSchema,
    });

    const { value: name } = useField("name");
    const { value: email } = useField("email");
    const { value: content } = useField("content");

    const onSubmit = handleSubmit((values, actions) => {
      actions.resetForm();
      eventBus.emit("pass-data-popup", {
        type: "contact",
        title: "Contact information",
        data: values,
      });
    });

    const resetFrm = () => {
      resetForm();
    };

    return {
      onSubmit,
      validationSchema,
      name,
      email,
      content,
      errors,
      resetFrm,
      isSubmitting,
    };
  },
};
</script>
