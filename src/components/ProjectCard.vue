<template>
  <div class="group rounded-2xl overflow-hidden bg-white dark:bg-stone-800 border border-[#bfa28c]/20 dark:border-stone-700 shadow-sm hover:shadow-lg hover:border-[#a98b76]/40 transition-all duration-300 hover:-translate-y-1 flex flex-col">
    <!-- Thumbnail -->
    <div class="h-44 bg-gradient-to-br overflow-hidden" :class="project.gradient || 'from-[#a98b76] to-[#bfa28c]'">
      <img v-if="project.image" :src="project.image" :alt="project.title" class="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" loading="lazy" />
      <div v-else class="w-full h-full flex items-center justify-center">
        <i class="fa-solid fa-code text-white/60 text-4xl" />
      </div>
    </div>

    <!-- Content -->
    <div class="p-5 flex flex-col flex-1">
      <h3 class="font-semibold text-lg text-stone-900 dark:text-stone-100 mb-1">{{ project.title }}</h3>
      <p class="text-sm text-stone-500 dark:text-stone-400 flex-1 mb-3">{{ project.description }}</p>

      <!-- Tech stack -->
      <div class="flex flex-wrap gap-1.5 mb-4">
        <span v-for="tech in project.stack" :key="tech"
          class="text-xs px-2 py-0.5 rounded-full bg-[#f3e4c9] dark:bg-stone-700 text-[#a98b76] dark:text-stone-300">
          {{ tech }}
        </span>
      </div>

      <!-- Links -->
      <div class="flex gap-3 mt-auto">
        <a v-if="project.github" :href="project.github" target="_blank" rel="noopener noreferrer"
          class="flex items-center gap-1.5 text-sm text-stone-500 dark:text-stone-400 hover:text-accent dark:hover:text-accent-dark transition-colors">
          <i class="fa-brands fa-github" /> GitHub
        </a>
        <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener noreferrer"
          class="flex items-center gap-1.5 text-sm text-accent dark:text-accent-dark hover:underline transition-colors">
          <i class="fa-solid fa-arrow-up-right-from-square" /> Live Demo
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: { type: Object, required: true }
})
</script>
