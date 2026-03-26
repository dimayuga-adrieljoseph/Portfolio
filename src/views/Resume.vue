<template>
  <main class="py-20 bg-[#fdf8f2] dark:bg-stone-950 transition-colors duration-300">
    <div class="max-w-3xl mx-auto px-4">
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
        <div>
          <h1 class="text-4xl font-bold text-stone-900 dark:text-stone-100">Resume</h1>
          <p class="text-stone-500 dark:text-stone-400 mt-1">My background</p>
        </div>
        <a :href="personal.resumePdf" :download="personal.name + ' - Resume.pdf'"
          class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent dark:bg-accent-dark text-white font-semibold hover:opacity-90 transition-opacity shadow-md shadow-[#a98b76]/30">
          <i class="fa-solid fa-download" /> Download PDF
        </a>
      </div>

      <!-- Summary -->
      <div class="bg-white dark:bg-stone-800 rounded-2xl p-6 border border-[#bfa28c]/20 dark:border-stone-700 mb-6">
        <h2 class="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-2">Summary</h2>
        <p class="text-stone-500 dark:text-stone-400 text-sm leading-relaxed whitespace-pre-line">{{ resumeSummary }}</p>
      </div>

      <!-- Experience -->
      <div class="bg-white dark:bg-stone-800 rounded-2xl p-6 border border-[#bfa28c]/20 dark:border-stone-700 mb-6">
        <h2 class="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-6">Experience</h2>
        <TimelineItem v-for="item in experience" :key="item.title" :item="item" />
      </div>

      <!-- Education -->
      <div class="bg-white dark:bg-stone-800 rounded-2xl p-6 border border-[#bfa28c]/20 dark:border-stone-700 mb-6">
        <h2 class="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-6">Education</h2>
        <TimelineItem v-for="item in education" :key="item.title" :item="item" />
      </div>

      <!-- Skills -->
      <div class="bg-white dark:bg-stone-800 rounded-2xl p-6 border border-[#bfa28c]/20 dark:border-stone-700">
        <h2 class="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-4">Skills</h2>
        <div class="flex flex-wrap gap-2">
          <SkillBadge v-for="badge in badges" :key="badge.label" v-bind="badge" />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import TimelineItem from '../components/TimelineItem.vue'
import SkillBadge from '../components/SkillBadge.vue'
import { personal, badges, experience, education, resumeSummary } from '../data/portfolio'
</script>
