<template>
  <nav class="sticky top-0 z-50 bg-[#fdf8f2]/80 dark:bg-stone-900/80 backdrop-blur border-b border-[#bfa28c]/30 dark:border-stone-800 transition-colors duration-300">
    <div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <!-- Logo -->
      <router-link to="/" class="text-xl font-bold text-accent dark:text-accent-dark tracking-tight">
        {{ personal.name }}<span class="text-stone-900 dark:text-white">.</span>
      </router-link>

      <!-- Desktop links -->
      <div class="hidden md:flex items-center gap-6 text-sm font-medium">
        <router-link
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="text-stone-500 dark:text-stone-300 hover:text-accent dark:hover:text-accent-dark transition-colors"
          active-class="text-accent dark:text-accent-dark font-semibold"
        >
          {{ link.label }}
        </router-link>
        <button @click="themeStore.toggle()" class="ml-2 p-2 rounded-full hover:bg-cream dark:hover:bg-stone-800 transition-colors" aria-label="Toggle dark mode">
          <i :class="isDark ? 'fa-solid fa-sun text-[#bfa28c]' : 'fa-solid fa-moon text-stone-400'" />
        </button>
      </div>

      <!-- Mobile controls -->
      <div class="flex md:hidden items-center gap-2">
        <button @click="themeStore.toggle()" class="p-2 rounded-full hover:bg-cream dark:hover:bg-stone-800 transition-colors" aria-label="Toggle dark mode">
          <i :class="isDark ? 'fa-solid fa-sun text-[#bfa28c]' : 'fa-solid fa-moon text-stone-400'" />
        </button>
        <button @click="menuOpen = !menuOpen" class="p-2 rounded-md hover:bg-cream dark:hover:bg-stone-800 transition-colors" aria-label="Toggle menu">
          <i :class="menuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'" class="text-stone-600 dark:text-stone-300 text-lg" />
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <transition name="fade">
      <div v-if="menuOpen" class="md:hidden px-4 pb-4 flex flex-col gap-3 text-sm font-medium border-t border-[#bfa28c]/20 dark:border-stone-800">
        <router-link
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          @click="menuOpen = false"
          class="py-2 text-stone-500 dark:text-stone-300 hover:text-accent dark:hover:text-accent-dark transition-colors"
          active-class="text-accent dark:text-accent-dark font-semibold"
        >
          {{ link.label }}
        </router-link>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useThemeStore } from '../stores/theme'
import { storeToRefs } from 'pinia'
import { personal } from '../data/portfolio'

const themeStore = useThemeStore()
const { isDark } = storeToRefs(themeStore)
const menuOpen = ref(false)

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/resume', label: 'Resume' }
]
</script>
