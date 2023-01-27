// define user store using pinia in composition API

import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useUserStore = defineStore("user", () => {
    const user = reactive({
        phone: "",
        name: "",
        email: "",
    });
    const setUser = (tempUser) => {
        user.email = tempUser.email;
        user.name = tempUser.username;
        user.phone = tempUser.phone;
    };
    // get user
    const getUser = () => {
        return user;
    };

    return { setUser, getUser, user };
});
