<script setup>
defineEmits(["update:value"]);
defineProps(["value", "placeholder", "title", "validValue"]);
</script>

<template>
  <div class="text-gray-700">
    <label for="username" class="text-lg">{{ title }}</label>
    <span
      :class="
        validValue.$error
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
      />
    </span>
    <span v-if="validValue.$error" class="text-sm absolute text-red-600">{{
      validValue.$errors[0].$message
    }}</span>
  </div>
</template>
