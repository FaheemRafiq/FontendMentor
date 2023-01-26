// stores/plan.js

import { defineStore } from "pinia";
import { reactive } from "vue";

export const usePlanStore = defineStore("plan", () => {
    const AddOns = [
        {
            name: "Online Service",
            monthlyPrice: "1",
            yearlyPrice: "10",
        },
        {
            name: "Large Storage",
            monthlyPrice: "2",
            yearlyPrice: "20",
        },
        {
            name: "Customizable Profile",
            monthlyPrice: "2",
            yearlyPrice: "20",
        },
    ];

    const SelectedPlan = reactive({
        name: "Arcade",
        monthlyPrice: "9",
        yearlyPrice: "90",
        monthly : false,
        yearly : false,
    });
    const SelectedAddOns = reactive([]);
    return { Plans, AddOns };
});
