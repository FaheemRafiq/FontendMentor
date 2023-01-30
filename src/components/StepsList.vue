<script setup>
import { useRoute } from 'vue-router';

const route = useRoute(); 
</script>

<template>
    <span class="flex justify-center lg:inline-block">
        <div class="flex px-2 py-3">
            <h1 :class="{'bg-sky-200 border-sky-200 text-black': route.path == '/form'}"  class="self-center px-4 py-2 border-2 rounded-full font-bold text-xl">1</h1>
            <span class="uppercase ml-6 hidden lg:inline-block ">
                <h2 class="text-gray-400 text-sm">Step 1</h2>
                <h1 class="font-Ubuntu text-lg font-bold">your info</h1>
            </span>
        </div>
        <div class="flex px-2 py-3">
            <h1 :class="{'bg-sky-200 border-sky-200 text-black': route.path == '/form/plan'}"  class="self-center px-4 py-2 border-2 rounded-full font-bold text-xl">2</h1>
            <span class="uppercase ml-6  hidden lg:inline-block ">
                <h2 class="text-gray-400 text-sm">Step 2</h2>
                <h1 class="font-Ubuntu text-lg font-bold">select plan</h1>
            </span>
        </div>
        <div class="flex px-2 py-3">
            <h1 :class="{'bg-sky-200 border-sky-200 text-black': route.path == '/form/add'}"  class="self-center px-4 py-2 border-2 rounded-full font-bold text-xl">3</h1>
            <span class="uppercase ml-6 hidden lg:inline-block  ">
                <h2 class="text-gray-400 text-sm">Step 3</h2>
                <h1 class="font-Ubuntu text-lg font-bold">add-ons</h1>
            </span>
        </div>
        <div class="flex px-2 py-3">
            <h1 :class="{'bg-sky-200 border-sky-200 text-black': route.path == '/form/summary'}"  class="self-center px-4 py-2 border-2 rounded-full font-bold text-xl">4</h1>
            <span class="uppercase ml-6 hidden lg:inline-block  ">
                <h2 class="text-gray-400 text-sm">Step 4</h2>
                <h1 class="font-Ubuntu text-lg font-bold">summary</h1>
            </span>
        </div>
    </span>
</template>
