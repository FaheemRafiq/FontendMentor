<script setup>
import ButtonComponent from "./ButtonComponent.vue";
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();

const OnlineService = ref();
const LargeStorage = ref();
const CustomProfile = ref();
</script>

<template>
  <div class="flex flex-col">
    <div class="pb-10">
      <h1 class="text-4xl text-gray-700 font-bold py-2">Pick add-ons</h1>
      <p class="text-gray-400 text-lg">
        Add-ons help enhance your gaming experience.
      </p>
    </div>
    <div class="w-full h-80">
      <div class="h-44">
        <div class="flex flex-col gap-4">
          <div @click="OnlineService = !OnlineService" class="border-2 border-gray-300 rounded-lg p-3 px-5 flex items-center hover:border-blue-600 hover:bg-gray-100 cursor-pointer" :class="{'bg-gray-50 border-blue-600': OnlineService}">
            <input type="checkbox" class="w-5 h-5 accent-blue-800" :checked="OnlineService">
            <div class="ml-4">
              <h1 class="text-gray-700 font-bold text-lg">Online Service</h1>
              <p class="text-gray-400">Access to multiple games.</p>
            </div>
            <div class="ml-auto">
              <div v-if="isYearly">
                <p class="text-blue-600 group-hover:text-blue-600 text-md">+$10/yr</p>
                <p class="text-sm">2 Month Free</p>
              </div>
              <p v-else class="text-blue-600 group-hover:text-blue-600 text-md">+$1/mo</p>
            </div>
          </div>
          <div @click="LargeStorage = !LargeStorage" class="border-2 border-gray-300 rounded-lg p-3 px-5 flex items-center hover:border-blue-600 hover:bg-gray-100 cursor-pointer" :class="{'bg-gray-50 border-blue-600': LargeStorage}">
            <input type="checkbox" class="w-5 h-5 accent-blue-800" :checked="LargeStorage">
            <div class="ml-4">
              <h1 class="text-gray-700 font-bold text-lg">Large Storage</h1>
              <p class="text-gray-400">Extra 1TB of cloud storage.</p>
            </div>
            <div class="ml-auto">
              <div v-if="isYearly">
                <p class="text-blue-600 group-hover:text-blue-600 text-md">+$20/yr</p>
                <p class="text-sm">2 Month Free</p>
              </div>
              <p v-else class="text-blue-600 group-hover:text-blue-600 text-md">+$2/mo</p>
            </div>
          </div>
          <div @click="CustomProfile = !CustomProfile" class="border-2 border-gray-300 rounded-lg p-3  px-5 flex items-center hover:border-blue-600 hover:bg-gray-100 cursor-pointer" :class="{'bg-gray-50 border-blue-600': OnlineSeCustomProfile}">
            <input type="checkbox" class="w-5 h-5 accent-blue-800" :checked="CustomProfile">
            <div class="ml-4">
              <h1 class="text-gray-700 font-bold text-lg">Customizable Profile</h1>
              <p class="text-gray-400">Custom theme on your profile.</p>
            </div>
            <div class="ml-auto">
              <div v-if="isYearly">
                <p class="text-blue-600 group-hover:text-blue-600 text-md">+$20/yr</p>
                <p class="text-sm">2 Month Free</p>
              </div>
              <p v-else class="text-blue-600 group-hover:text-blue-600 text-md">+$2/mo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4 flex w-full">
      <button @click="router.push('/form/plan')" class="text-blue-900 font-bold hover:text-blue-600">Go Back</button>
      <ButtonComponent @click="router.push('/form/summary')" class="ml-auto">Next Step</ButtonComponent>
    </div>
  </div>
</template>
