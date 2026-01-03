<template>
    <button @click="toggleTheme"
        class="relative p-2 rounded-full bg-gray-200 dark:bg-slate-800 hover:ring-2 ring-blue-500 transition-all duration-300 group"
        aria-label="Toggle Dark Mode">
        <span v-if="colorMode.value === 'dark'" class="text-xl">☀️</span>
        <span v-else class="text-xl">🌙</span>

        <span class="sr-only text-xs">Switch to {{ colorMode.value === 'dark' ? 'Light' : 'Dark' }}</span>
    </button>
</template>

<script setup lang="ts">
// ดึงตัวจัดการ color mode มาใช้งาน
const colorMode = useColorMode()

// ฟังก์ชันสลับโหมด
const toggleTheme = () => {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<style scoped></style>