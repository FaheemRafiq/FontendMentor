<script setup>
import ButtonComponent from "./ButtonComponent.vue";
import { useRouter } from "vue-router";
import { ref, watch } from "vue";
import arcade from "../assets/MultiImages/icon-arcade.svg";
import advanced from "../assets/MultiImages/icon-advanced.svg";
import pro from "../assets/MultiImages/icon-pro.svg";
const router = useRouter();
const isYearly = ref(false);


const Plans = [
        {
            image : arcade,
            name: "Arcade",
            monthlyPrice: "9",
            yearlyPrice: "90",
        },
        {
            image : advanced,
            name: "Advanced",
            monthlyPrice: "12",
            yearlyPrice: "120",
        },
        {
            image : pro,
            name: "Arcade",
            monthlyPrice: "15",
            yearlyPrice: "150",
        },
    ];
</script>

<template>
  <div class="flex flex-col">
    <div class="pb-10">
      <h1 class="text-4xl text-gray-700 font-bold py-2">Select Your Plan</h1>
      <p class="text-gray-400 text-lg">
        You have the option of monthly or yearly billing.
      </p>
    </div>
    <div class="w-full h-80">
      <div class="h-44">
        <div class="flex gap-4">
          <div v-for="(plan, index) in Plans" :key="index"  class="border-2 border-gray-300 rounded-lg p-5 flex-1 hover:border-blue-600 hover:bg-gray-50 cursor-pointer" :class="{'border-blue-600 bg-gray-50': false}">
            <img :src="plan.image" :alt="plan.name">
            <div class="mt-8">
              <h1 class="text-lg font-bold">{{ plan.name }}</h1>
              <div v-if="isYearly">
                <p class="text-gray-400 text-md">${{plan.yearlyPrice}}/yr</p>
                <p class="text-sm">2 Month Free</p>
              </div>
              <p v-else class="text-gray-400 text-md">${{plan.monthlyPrice}}/mo</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Monthly/Yearly -->
        <div class="bg-gray-100 p-3 mt-8 rounded-lg flex justify-center relative">
          <div class="flex space-x-3">
            <p class="font-bold text-blue-900">Monthly</p>
            <label class="relative inline-flex items-center cursor-pointer">
              <input v-model="isYearly" type="checkbox" value="" class="sr-only peer">
              <div
                class="w-11 h-6 bg-blue-900 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600">
              </div>
            </label>
            <p class="font-bold text-blue-900">Yearly</p>
          </div>
        </div>
    </div>
    <div class="mt-4 flex w-full">
      <button @click="router.push('/form')" class="text-blue-900 font-bold hover:text-blue-600">Go Back</button>
      <ButtonComponent @click="router.push('/form/add')" class="ml-auto">Next Step</ButtonComponent>
    </div>
  </div>
</template>
