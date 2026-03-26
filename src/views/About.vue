<template>
  <main class="py-20 bg-white dark:bg-stone-900 transition-colors duration-300">
    <div class="max-w-4xl mx-auto px-4 space-y-16">

      <!-- Intro -->
      <div class="text-center space-y-4">
        <h1 class="text-4xl font-bold text-stone-900 dark:text-stone-100">About Me</h1>
        <p class="text-stone-500 dark:text-stone-400 max-w-2xl mx-auto leading-relaxed whitespace-pre-line">{{ bio }}</p>
      </div>

      <!-- Skills -->
      <div>
        <h2 class="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-6">Skills</h2>
        <div class="space-y-4">
          <div v-for="skill in skills" :key="skill.name">
            <div class="flex justify-between text-sm mb-1">
              <span class="font-medium text-stone-700 dark:text-stone-300 flex items-center gap-2">
                <i :class="skill.icon" class="text-accent dark:text-accent-dark" />
                {{ skill.name }}
              </span>
              <span class="text-stone-400">{{ skill.level }}%</span>
            </div>
            <div class="h-2 rounded-full bg-[#f3e4c9] dark:bg-stone-700 overflow-hidden">
              <div class="h-full rounded-full bg-gradient-to-r from-[#a98b76] to-[#bfa28c] transition-all duration-700"
                :style="{ width: skill.level + '%' }" />
            </div>
          </div>
        </div>

        <div class="mt-8 flex flex-wrap gap-2">
          <SkillBadge v-for="badge in badges" :key="badge.label" v-bind="badge" />
        </div>
      </div>

      <!-- Timeline -->
      <div class="grid md:grid-cols-2 gap-10">
        <div>
          <h2 class="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-6">Experience</h2>
          <TimelineItem v-for="item in experience" :key="item.title" :item="item" />
        </div>
        <div>
          <h2 class="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-6">Education</h2>
          <TimelineItem v-for="item in education" :key="item.title" :item="item" />
        </div>
      </div>

    </div>
  </main>
</template>

<script setup>
import SkillBadge from '../components/SkillBadge.vue'
import TimelineItem from '../components/TimelineItem.vue'
import { bio, skills, badges, experience, education } from '../data/portfolio'
</script>
