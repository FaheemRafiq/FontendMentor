<script setup>
import StepsList from "../components/StepsList.vue";
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-200">
    <div class="p-3 border-1 bg-white rounded-lg flex lg:flex-row flex-col">
      <!-- Section One -->
      <div class="relative">
        <img class="hidden lg:inline-block w-72" src="../assets/MultiImages/bg-sidebar-desktop.svg" alt="Side Bar Image">
        <img class="lg:hidden w-full" src="../assets/MultiImages/bg-sidebar-mobile.svg" alt="Side Bar Image">
        <section class="absolute top-7 left-5 text-white w-full">
          <div class="w-[90%] px-3">
            <StepsList />
          </div>
        </section>
      </div>
      <!-- Section Two -->
      <div class="px-10 lg:px-24 py-5 lg:py-10 lg:w-[700px] relative xs:top-0 sm:-top-10 md:-top-24 lg:inset-0 bg-white">
        <RouterView />
      </div>
    </div>
  </div>
</template>
