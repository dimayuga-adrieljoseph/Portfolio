<template>
  <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-[#f3e4c9] dark:bg-[#a98b76]/20 text-[#a98b76] dark:text-[#bfa28c] border border-[#bfa28c]/30 dark:border-[#a98b76]/30">
    <i v-if="icon" :class="icon" class="text-xs" />
    {{ label }}
  </span>
</template>

<script setup>
defineProps({
  label: { type: String, required: true },
  icon: { type: String, default: '' }
})
</script>
