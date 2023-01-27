// stores/plan.js

import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const usePlanStore = defineStore("plan", () => {
    const isYearly = ref(false);
    const SelectedPlan = reactive({
        name: "Arcade",
        monthlyPrice: "9",
        yearlyPrice: "",
    });
    const SelectedAddOns = reactive([]);

    const setPlan = (plan, isYearly) => {
        SelectedPlan.name = plan.name;
        if (isYearly) {
            SelectedPlan.yearlyPrice = plan.yearlyPrice;
            SelectedPlan.monthlyPrice = "";
        }
        else{
            SelectedPlan.monthlyPrice = plan.monthlyPrice;
            SelectedPlan.yearlyPrice = "";
        }
    };
    const setAddOn = (addOns) => {
        SelectedAddOns.push(addOns);
    };
    const removeAddOn = (addOns) => {
        let index = SelectedAddOns.indexOf(addOns);
        SelectedAddOns.splice(index, 1);
    };

    const getTotal = () => {
        let total = 0;
        if (SelectedPlan.yearlyPrice) {
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
