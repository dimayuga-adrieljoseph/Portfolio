<template>
  <footer class="bg-[#fdf8f2] dark:bg-stone-900 border-t border-[#bfa28c]/30 dark:border-stone-800 py-8 transition-colors duration-300">
    <div class="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <p class="text-sm text-stone-400 dark:text-stone-500">© 2026 {{ personal.name }}. All rights reserved.</p>
      <div class="flex gap-5 text-stone-400 dark:text-stone-500">
        <a v-for="s in socials" :key="s.label" :href="s.href" target="_blank" rel="noopener noreferrer"
          :aria-label="s.label"
          class="hover:text-accent dark:hover:text-accent-dark transition-colors text-lg">
          <i :class="s.icon" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { personal, socials } from '../data/portfolio'
</script>
