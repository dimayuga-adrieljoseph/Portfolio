<template>
  <div class="relative pl-8 pb-8 last:pb-0">
    <!-- Line -->
    <div class="absolute left-2.5 top-2 bottom-0 w-px bg-[#bfa28c]/30 dark:bg-stone-700 last:hidden" />
    <!-- Dot -->
    <div class="absolute left-0 top-1.5 w-5 h-5 rounded-full bg-accent dark:bg-accent-dark flex items-center justify-center ring-4 ring-white dark:ring-stone-950">
      <div class="w-2 h-2 rounded-full bg-white" />
    </div>
    <!-- Content -->
    <div>
      <span class="text-xs font-semibold text-accent dark:text-accent-dark uppercase tracking-wider">{{ item.period }}</span>
      <h4 class="font-semibold text-stone-900 dark:text-stone-100 mt-0.5">{{ item.title }}</h4>
      <p class="text-sm text-[#a98b76] dark:text-[#bfa28c] font-medium">{{ item.org }}</p>
      <p class="text-sm text-stone-500 dark:text-stone-400 mt-1">{{ item.description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  item: { type: Object, required: true }
})
</script>
