<script setup>
import StepsList from "../components/StepsList.vue";
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="p-3 border-1 bg-white rounded-lg flex">
      <!-- Section One -->
      <div class="relative">
        <img class="w-72" src="../assets/MultiImages/bg-sidebar-desktop.svg" alt="Side Bar Image">
        <section class="absolute top-7 left-5 text-white w-full">
          <div class="w-[90%] px-3">
            <StepsList />
          </div>
        </section>
      </div>
      <!-- Section Two -->
      <div class="px-24 py-10 w-[700px]">
        <RouterView />
      </div>
    </div>
  </div>
</template>
