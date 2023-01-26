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
        false
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
    <span v-if="false" class="text-sm absolute text-yellow-400"></span>
  </div>
</template>
