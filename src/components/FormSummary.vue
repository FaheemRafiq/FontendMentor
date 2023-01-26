<script setup>
import ButtonComponent from './ButtonComponent.vue';
import { useRouter } from 'vue-router';
import { usePlanStore } from '../store/plan.js'

const useStore = usePlanStore();


const router = useRouter();
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
              <h1 class="text-xl font-bold">Arcade <span>(Monthly)</span></h1>
              <a href="/form/plan" class="text-blue-500 underline">change</a>
            </div>
            <p class="text-blue-600 font-bold text-md ml-auto">$9/mo</p>
          </div>
          <div>
            <ul class="space-y-5">
              <li class="flex">
                <h1 class="text-gray-500">Online Service</h1>
                <p class="ml-auto text-blue-600 font-medium">+$1/mo</p>
              </li>
              <li class="flex">
                <h1 class="text-gray-500">Large Storage</h1>
                <p class="ml-auto text-blue-600 font-medium">+$2/mo</p>
              </li>
            </ul>
          </div>
        </div>
        <!-- Total Price -->
        <div class="flex p-7">
          <h1 class="text-gray-500">Total <span>(per month)</span></h1>
          <p class="ml-auto text-blue-600 font-extrabold text-xl">+$12/mo</p>
        </div>
      </div>
    </div>
    <div class="mt-4 flex w-full">
      <button @click="router.push('/form/add')" class="text-blue-900 font-bold hover:text-blue-600">Go Back</button>
      <ButtonComponent class="ml-auto">Confirm</ButtonComponent>
    </div>
  </div>
</template>
