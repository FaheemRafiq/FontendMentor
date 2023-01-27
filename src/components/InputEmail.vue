<script setup>
defineEmits(["update:email"]);
defineProps({
  email: String,
  validEmail: {
    value: Object,
    default: {},
  },
});
</script>

<template>
  <div class="text-gray-700">
    <label for="email" class="text-lg">Email Address</label>
    <span
      :class="
        validEmail.$error
          ? 'border-2 border-red-600 focus-within:border-red-600'
          : ''
      "
      class="border-2 p-2 px-4 rounded-lg flex items-center focus-within:border-blue-600"
    >
      <input
        autocomplete="off"
        type="email"
        class="w-full text-lg bg-transparent outline-none"
        name="email"
        id="email"
        placeholder="example@gamil.com"
        :value="email"
        @input="$emit('update:email', $event.target.value)"
      />
    </span>
    <span v-if="validEmail.$error" class="text-sm absolute text-red-600">{{
      validEmail.$errors[0].$message
    }}</span>
  </div>
</template>
