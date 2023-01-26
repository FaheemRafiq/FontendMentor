<script setup>
defineEmits(["update:value"]);
defineProps(["value", "isValid", "placeholder", "title"]);
</script>

<template>
  <div class="text-gray-700">
    <label for="username" class="text-lg">{{ title }}</label>
    <span
      :class="
        false
          ? 'border-2 border-red-600 focus-within:border-red-600'
          : ''
      "
      class="border-2 rounded-lg flex items-center focus-within:border-blue-600 p-2 px-4"
    >
      <input
        autocomplete="off"
        type="text"
        class="w-full text-lg bg-transparent outline-none"
        name="username"
        id="username"
        :placeholder="placeholder"
        :value="value"
        @input="$emit('update:value', $event.target.value)"
        required
      />
    </span>
    <span v-if="false" class="text-sm absolute text-red-600"></span>
  </div>
</template>
