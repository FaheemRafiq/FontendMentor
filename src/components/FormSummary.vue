<script setup>
import ButtonComponent from './ButtonComponent.vue';
import { useRouter } from 'vue-router';
import { usePlanStore } from '../store/plan.js'
import { ref } from 'vue';

const useStore = usePlanStore();
const isYearly = ref(useStore.isYearly);


const router = useRouter();

// console.log(useStore.SelectedAddOns.length == 0 );
</script>

<template>
  <div class="flex flex-col">
    <div class="pb-10">
      <h1 class="text-4xl text-gray-7s00 font-bold py-2">Finishing Up</h1>
      <p class="text-gray-400 text-lg">
        Double-Check everything looks OK before confirming.
      </p>
    </div>
    <div class="w-full h-80">
      <div class="h-44">
        <div class="flex flex-col gap-4 bg-gray-100 rounded-xl p-5">
          <div class="flex items-center border-b border-gray-400 pb-5 ">
            <div>
              <h1 v-if="isYearly" class="text-xl font-bold">{{ useStore.SelectedPlan.name }}<span>(Yearly)</span></h1>
              <h1 v-else class="text-xl font-bold">{{ useStore.SelectedPlan.name }}<span>(Monthly)</span></h1>
              <button @click="router.push('/form/plan')" class="text-blue-500 underline">change</button>
            </div>
            <p v-if="isYearly" class="text-blue-600 font-bold text-md ml-auto">${{useStore.SelectedPlan.yearlyPrice}}/mo</p>
            <p v-else class="text-blue-600 font-bold text-md ml-auto">${{useStore.SelectedPlan.monthlyPrice}}/mo</p>
          </div>
          <div>
            <ul v-if="useStore.SelectedAddOns.length !== 0" class="space-y-5">
              <li v-for="(addOn, index) of useStore.SelectedAddOns" :key="index" class="flex">
                <h1 class="text-gray-500">{{ addOn.name }}</h1>
                <p v-if="isYearly" class="ml-auto text-blue-600 font-medium">+${{ addOn.yearlyPrice }}/yr</p>
                <p v-else class="ml-auto text-blue-600 font-medium">+${{ addOn.monthlyPrice }}/mo</p>
              </li>
            </ul>
            <ul v-else>
              <li class="text-center text-gray-500 animate-bounce">Not Selected</li>
            </ul>
          </div>
        </div>
        <!-- Total Price -->
        <div class="p-7">
          <div v-if="isYearly" class="flex">
            <h1 class="text-gray-500">Total <span>(per year)</span></h1>
            <p class="ml-auto text-blue-600 font-extrabold text-xl">+${{ useStore.getTotal() }}/yr</p>
          </div>
          <div v-else class="flex">
            <h1 class="text-gray-500">Total <span>(per month)</span></h1>
            <p class="ml-auto text-blue-600 font-extrabold text-xl">+${{ useStore.getTotal() }}/mo</p>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4 flex w-full">
      <button @click="router.push('/form/add')" class="text-blue-900 font-bold hover:text-blue-600">Go Back</button>
      <ButtonComponent class="ml-auto">Confirm</ButtonComponent>
    </div>
  </div>
</template>
