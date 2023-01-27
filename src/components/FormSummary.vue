<script setup>
import ButtonComponent from './ButtonComponent.vue';
import { useRouter } from 'vue-router';
import { usePlanStore } from '../store/plan.js'
import { ref, onMounted } from 'vue';

const useStore = usePlanStore();
const isYearly = ref(useStore.isYearly);


const router = useRouter();
const totalAmount = ref(0);
onMounted(() => {
  totalAmount.value = useStore.getTotal();
  console.log(useStore.SelectedPlan);
});
const spinner = ref(false);
const confirm = () => {
  spinner.value = true;
  setTimeout(() => {
    router.push('/form/thanks');
  }, 1000);
}
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
            <p v-if="isYearly" class="text-blue-600 font-bold text-md ml-auto">${{ useStore.SelectedPlan.yearlyPrice }}/yr
            </p>
            <p v-else class="text-blue-600 font-bold text-md ml-auto">${{ useStore.SelectedPlan.monthlyPrice }}/mo</p>
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
            <p class="ml-auto text-blue-600 font-extrabold text-xl">+${{ totalAmount }}/yr</p>
          </div>
          <div v-else class="flex">
            <h1 class="text-gray-500">Total <span>(per month)</span></h1>
            <p class="ml-auto text-blue-600 font-extrabold text-xl">+${{ totalAmount }}/mo</p>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4 flex w-full">
      <button @click="router.push('/form/add')" class="text-blue-900 font-bold hover:text-blue-600">Go Back</button>
      <ButtonComponent v-if="!spinner" @click="confirm" class="ml-auto">Confirm</ButtonComponent>
      <ButtonComponent v-else class="px-7 py-2 bg-blue-600 ml-auto hover:bg-blue-600 cursor-not-allowed">
        <div role="status">
          <svg aria-hidden="true" class="w-8 h-8 mr-2 text-transparent animate-spin dark:text-gray-600 fill-white"
            viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor" />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill" />
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
      </ButtonComponent>
    </div>
  </div>
</template>
