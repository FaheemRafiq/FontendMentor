<script setup>
import ButtonComponent from "./ButtonComponent.vue";
import { useRouter } from "vue-router";
import { ref, onMounted, computed } from "vue";
import { usePlanStore } from "../store/plan";

const router = useRouter();
const useStore = usePlanStore();

const isYearly = ref(false);
onMounted(() => {
    isYearly.value = useStore.isYearly;
});

const AddOns = [
        {
            name: "Online Service",
            description : "Access to multiple games.",
            monthlyPrice: "1",
            yearlyPrice: "10",
        },
        {
            name: "Large Storage",
            description: "Store your games and files.",
            monthlyPrice: "2",
            yearlyPrice: "20",
        },
        {
            name: "Customizable Profile",
            description: "Customize your profile.",
            monthlyPrice: "2",
            yearlyPrice: "20",
        },
    ];

const returnAddOnName = computed(() =>  {
    return useStore.SelectedAddOns.map((addOn) => addOn.name);
})

function add(addOn) {
    if (returnAddOnName.value.includes(addOn.name)) {
        useStore.removeAddOn(addOn);
        return;
    }else{
      useStore.setAddOn(addOn);
    }
}
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
          <div @click="add(addOn)" v-for="(addOn , index) in AddOns" class="border-2 border-gray-300 rounded-lg p-3 px-5 flex items-center hover:border-blue-600 hover:bg-gray-100 cursor-pointer" :class="{'bg-gray-50 border-blue-600': returnAddOnName.includes(addOn.name)}">
            <input type="checkbox" class="w-5 h-5 accent-blue-800" :checked="returnAddOnName.includes(addOn.name)">
            <div class="ml-4">
              <h1 class="text-gray-700 font-bold text-lg">{{ addOn.name }}</h1>
              <p class="text-gray-400">{{ addOn.description }}</p>
            </div>
            <div class="ml-auto">
              <div v-if="isYearly">
                <p class="text-blue-600 group-hover:text-blue-600 text-md">+${{addOn.yearlyPrice}}/yr</p>
                <p class="text-sm">2 Month Free</p>
              </div>
              <p v-else class="text-blue-600 group-hover:text-blue-600 text-md">+${{addOn.monthlyPrice}}/mo</p>
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
