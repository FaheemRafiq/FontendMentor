<script setup>
import InputUsername from "./InputUsername.vue";
import InputEmail from "./InputEmail.vue";
import ButtonComponent from "./ButtonComponent.vue";
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <form class="flex flex-col ">
          <div class="pb-10">
            <h1 class="text-4xl text-gray-700 font-bold py-2">Personal Info</h1>
            <p class="text-gray-400 text-lg">Please provide your name, email address and phone number.</p>
          </div>
          <div class="space-y-6">
            <InputUsername placeholder="Jhon Doe" title="Name" />
            <InputEmail />
            <InputUsername placeholder="+1 232 384 340" title="Phone Number" />
          </div>
          <ButtonComponent @click="router.push('/form/plan')" class="mt-16 self-end">Next Step</ButtonComponent>
        </form>
</template>
