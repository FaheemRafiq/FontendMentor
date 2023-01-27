// stores/plan.js

import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const usePlanStore = defineStore("plan", () => {
    const isYearly = ref(false);
    const SelectedPlan = reactive({
        name: "Arcade",
        monthlyPrice: "9",
        yearlyPrice: "90",
    });
    const SelectedAddOns = reactive([]);
    // set plan
    const setPlan = (plan) => {
        SelectedPlan.name = plan.name;
        SelectedPlan.monthlyPrice = plan.monthlyPrice;
        SelectedPlan.yearlyPrice = plan.yearlyPrice;
    };
    // set add-ons
    const setAddOn = (addOns) => {
        SelectedAddOns.push(addOns);
    };
    // remove add-ons if already selected
    const removeAddOn = (addOns) => {
        let index = SelectedAddOns.indexOf(addOns);
        SelectedAddOns.splice(index, 1);
    };
    // Total Price of the plan and add-ons
    const getTotal = () => {
        let total = 0;
        if (isYearly.value) {
            total += parseInt(SelectedPlan.yearlyPrice);
        } else {
            total += parseInt(SelectedPlan.monthlyPrice);
        }
        SelectedAddOns.forEach((addOn) => {
            if (isYearly.value) {
                total += parseInt(addOn.yearlyPrice);
            } else {
                total += parseInt(addOn.monthlyPrice);
            }
        });
        return total;
    };
    return { SelectedPlan, SelectedAddOns, setPlan, isYearly , setAddOn, removeAddOn, getTotal};
});
