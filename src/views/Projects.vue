<template>
  <main class="py-20 bg-[#fdf8f2] dark:bg-stone-950 transition-colors duration-300">
    <div class="max-w-6xl mx-auto px-4">
      <div class="text-center mb-12 space-y-3">
        <h1 class="text-4xl font-bold text-stone-900 dark:text-stone-100">Projects</h1>
        <p class="text-stone-500 dark:text-stone-400">A selection of things I've built</p>
      </div>

      <!-- Filter -->
      <div class="flex flex-wrap justify-center gap-2 mb-10">
        <button
          v-for="tag in filters"
          :key="tag"
          @click="activeFilter = tag"
          :class="[
            'px-4 py-1.5 rounded-full text-sm font-medium transition-colors',
            activeFilter === tag
              ? 'bg-accent dark:bg-accent-dark text-white'
              : 'bg-white dark:bg-stone-800 text-stone-600 dark:text-stone-300 border border-[#bfa28c]/30 dark:border-stone-700 hover:border-accent dark:hover:border-accent-dark'
          ]"
        >
          {{ tag }}
        </button>
      </div>

      <!-- Empty state -->
      <div v-if="filtered.length === 0" class="text-center py-20">
        <div class="w-16 h-16 rounded-2xl bg-[#f3e4c9] dark:bg-[#a98b76]/20 flex items-center justify-center mx-auto mb-4">
          <i class="fa-solid fa-folder-open text-accent dark:text-accent-dark text-2xl" />
        </div>
        <p class="text-stone-500 dark:text-stone-400 font-medium">No projects yet — check back soon.</p>
      </div>

      <!-- Grid -->
      <div v-else class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard v-for="project in filtered" :key="project.title" :project="project" />
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import { projects, projectFilters } from '../data/portfolio'

const activeFilter = ref('All')
const filters = ['All', ...projectFilters]
const filtered = computed(() =>
  activeFilter.value === 'All' ? projects : projects.filter(p => p.tags.includes(activeFilter.value))
)
</script>
