<script setup>
import InputUsername from "./InputUsername.vue";
import InputEmail from "./InputEmail.vue";
import ButtonComponent from "./ButtonComponent.vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../store/user";
import { ref, computed, reactive, onMounted } from "vue";
import { useVuelidate } from "@vuelidate/core";
import {
  required,
  email,
  sameAs,
  minLength,
  alphaNum,
} from "@vuelidate/validators";

const router = useRouter();
const useUser = useUserStore();

const user = reactive({
  name: useUser.user.name,
  email: useUser.user.email,
  phone: useUser.user.phone,
});

const rules = computed(() => ({
  name: { required, minLength: minLength(4) },
  email: { required, email },
  phone: { required, minLength: minLength(10) },
}));

const v$ = useVuelidate(rules, user);

const handleSubmit = () => {
  v$.value.$validate();
  if(!v$.value.$error){
    useUser.setUser(user);
    router.push("/form/plan");
  }
};
</script>

<template>
  <div class="flex flex-col ">
    <div class="pb-10">
      <h1 class="text-4xl text-gray-700 font-bold py-2">Personal Info</h1>
      <p class="text-gray-400 text-lg">Please provide your name, email address and phone number.</p>
    </div>
    <div class="space-y-6">
      <InputUsername v-model:value="user.name" :valid-value="v$.name" placeholder="Jhon Doe" title="Name" />
      <InputEmail v-model:email="user.email" :valid-email="v$.email" />
      <InputUsername v-model:value="user.phone" :valid-value="v$.phone" placeholder="+1 232 384 340" title="Phone Number" />
    </div>
    <ButtonComponent @click="handleSubmit()" class="mt-16 self-end">Next Step</ButtonComponent>
  </div>
</template>
