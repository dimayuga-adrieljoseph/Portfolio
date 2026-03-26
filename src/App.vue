<template>
  <div :class="['min-h-screen flex flex-col transition-colors duration-300', isDark ? 'dark bg-stone-950 text-stone-100' : 'bg-[#fdf8f2] text-stone-900']">
    <Navbar />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" class="flex-1" />
      </transition>
    </router-view>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import { useThemeStore } from './stores/theme'
import { storeToRefs } from 'pinia'

const { isDark } = storeToRefs(useThemeStore())
</script>
