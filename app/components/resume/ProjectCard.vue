<template>
    <div class="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
    <h3 class="text-xl font-bold text-gray-800">{{ project.title }}</h3>
    <p class="text-gray-600 mt-2">{{ project.details }}</p>
    <div class="flex flex-wrap gap-2 mt-4">
      <span 
            class="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full">
        {{ project.tech }}
      </span>
    </div>
    <!-- <a :href="project.link" class="inline-block mt-4 text-blue-500 hover:underline font-medium">
      View Project →
    </a> -->
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
    project: {
        type: Object,
        required: true
    }
})
</script>

<style scoped>

</style>