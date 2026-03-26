<template>
  <main>
    <!-- Hero -->
    <section class="min-h-[90vh] flex items-center bg-gradient-to-br from-[#f3e4c9] via-[#fdf8f2] to-[#e8e4d4] dark:from-stone-950 dark:via-stone-900 dark:to-stone-950 transition-colors duration-300">
      <div class="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div class="space-y-6">
          <h1 class="text-5xl md:text-6xl font-extrabold leading-tight text-stone-900 dark:text-stone-100">
            Hi, I'm <span class="text-accent dark:text-accent-dark">{{ personal.name }}</span>
          </h1>
          <p class="text-xl text-stone-600 dark:text-stone-300 font-medium">{{ personal.title }}</p>
          <p class="text-stone-500 dark:text-stone-400 max-w-md leading-relaxed">{{ personal.tagline }}</p>
          <div class="flex flex-wrap gap-3 pt-2">
            <router-link to="/projects"
              class="px-6 py-3 rounded-xl bg-accent dark:bg-accent-dark text-white font-semibold hover:opacity-90 transition-opacity shadow-md shadow-[#a98b76]/30">
              View Projects
            </router-link>
            <router-link to="/resume"
              class="px-6 py-3 rounded-xl border border-[#bfa28c] dark:border-stone-600 text-stone-700 dark:text-stone-200 font-semibold hover:bg-cream dark:hover:bg-stone-800 transition-colors">
              View Resume
            </router-link>
          </div>
        </div>

        <!-- Avatar -->
        <div class="flex justify-center">
          <div class="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden bg-gradient-to-br from-[#a98b76] to-[#bfa28c] flex items-center justify-center shadow-2xl shadow-[#a98b76]/30">
            <img v-if="personal.photo" :src="personal.photo" :alt="personal.name" class="w-full h-full object-cover" />
            <i v-else class="fa-solid fa-user text-white/80 text-8xl" />
          </div>
        </div>
      </div>
    </section>

    <!-- Highlights -->
    <section class="py-20 bg-white dark:bg-stone-900 transition-colors duration-300">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-stone-900 dark:text-stone-100 mb-12">What I Bring</h2>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div v-for="card in highlights" :key="card.title"
            class="p-6 rounded-2xl bg-[#fdf8f2] dark:bg-stone-800 border border-[#bfa28c]/20 dark:border-stone-700 hover:shadow-md hover:border-[#a98b76]/40 transition-all">
            <div class="w-12 h-12 rounded-xl bg-[#f3e4c9] dark:bg-[#a98b76]/20 flex items-center justify-center mb-4">
              <i :class="card.icon" class="text-accent dark:text-accent-dark text-xl" />
            </div>
            <h3 class="font-semibold text-stone-900 dark:text-stone-100 mb-1">{{ card.title }}</h3>
            <p class="text-sm text-stone-500 dark:text-stone-400">{{ card.desc }}</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { personal, highlights } from '../data/portfolio'
</script>
