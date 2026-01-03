<template>
  <div
    class="min-h-screen bg-gray-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans pb-20 transition-colors duration-300">

    <nav
      class="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-gray-100 dark:border-slate-800 px-6 py-4">
      <div class="max-w-5xl mx-auto flex justify-between items-center">
        <span class="font-bold text-xl tracking-tight">PORTFOLIO</span>
        <ThemeToggle />
      </div>
    </nav>

    <header class="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 transition-colors">
      <div class="max-w-5xl mx-auto px-6 py-16">
        <div class="flex flex-col md:flex-row md:items-center gap-6">

          <div class="shrink-0">
            <img :src="resumeData.profile.image" alt="Profile Picture"
              class="w-50 h-50 md:w-62 md:h-62 rounded-2xl object-cover border-4 border-blue-500 shadow-lg dark:border-blue-400" />
          </div>

          <div>
            <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {{ resumeData.profile.name }}
            </h1>
            <p class="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-semibold mt-1">
              {{ resumeData.profile.role }}
            </p>

            <div class="flex flex-wrap gap-4 mt-4 text-slate-600 dark:text-slate-400 text-sm md:text-base">
              <span class="flex items-center gap-2">📞 {{ resumeData.profile.contact.phone }}</span>
              <span class="flex items-center gap-2">📧 {{ resumeData.profile.contact.email }}</span>
            </div>


          </div>

        </div>

        <p
          class="mt-8 text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl border-l-4 border-blue-500 pl-6 italic">
          "{{ resumeData.profile.bio }}"
        </p>

        <section class="mt-8">
          <h2 class="text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-3">
            Education
          </h2>

          <div class="flex items-center gap-3
           bg-white dark:bg-slate-900
           border border-gray-200 dark:border-slate-800
           rounded-xl px-5 py-4 shadow-sm">
            <span class="w-10 h-10 flex items-center justify-center
             rounded-lg bg-blue-100 dark:bg-blue-900/30
             text-blue-600 dark:text-blue-400 text-lg">
              🎓
            </span>

            <p class="text-slate-700 dark:text-slate-300 font-medium">
              {{ resumeData.profile.graduated }}
            </p>
          </div>
        </section>


        <section class="mt-8">
          <h2 class="text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-3">
            Professional Links
          </h2>

          <div class="flex flex-wrap gap-4">
            <a v-if="resumeData.profile.links.github" :href="resumeData.profile.links.github" target="_blank" class="flex items-center gap-2 px-5 py-2 rounded-xl
             bg-white dark:bg-slate-900
             border border-gray-200 dark:border-slate-800
             text-slate-700 dark:text-slate-300
             hover:border-blue-500 hover:text-blue-600
             dark:hover:border-blue-400 dark:hover:text-blue-400
             shadow-sm transition-all">
              <span class="text-lg">🐙</span>
              <span class="font-medium">GitHub</span>
            </a>

            <a v-if="resumeData.profile.links.gitlab" :href="resumeData.profile.links.gitlab" target="_blank" class="flex items-center gap-2 px-5 py-2 rounded-xl
             bg-white dark:bg-slate-900
             border border-gray-200 dark:border-slate-800
             text-slate-700 dark:text-slate-300
             hover:border-purple-500 hover:text-purple-600
             dark:hover:border-purple-400 dark:hover:text-purple-400
             shadow-sm transition-all">
              <span class="text-lg">🦊</span>
              <span class="font-medium">GitLab</span>
            </a>

            <a v-if="resumeData.profile.links.facebook" :href="resumeData.profile.links.facebook" target="_blank" class="flex items-center gap-2 px-5 py-2 rounded-xl
             bg-white dark:bg-slate-900
             border border-gray-200 dark:border-slate-800
             text-slate-700 dark:text-slate-300
             hover:border-blue-600 hover:text-blue-700
             dark:hover:border-blue-500 dark:hover:text-blue-400
             shadow-sm transition-all">
              <span class="text-lg">📘</span>
              <span class="font-medium">Facebook</span>
            </a>
          </div>
        </section>


      </div>
    </header>

    <main class="max-w-5xl mx-auto px-6 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">

      <div class="lg:col-span-2 space-y-12">
        <section>
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
            <span class="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">💼</span>
            ประสบการณ์ทำงาน
          </h2>
          <div v-for="exp in resumeData.experience" :key="exp.company"
            class="relative pl-8 border-l-2 border-gray-200 dark:border-slate-800">
            <div
              class="absolute -left-[9px] top-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-slate-950">
            </div>
            <div class="mb-2 flex justify-between items-start flex-wrap">
              <h3 class="text-xl font-bold dark:text-slate-100">{{ exp.role }}</h3>
              <span
                class="text-sm font-medium bg-gray-200 dark:bg-slate-800 px-3 py-1 rounded-full text-gray-700 dark:text-slate-300">{{
                  exp.period }}</span>
            </div>
            <p class="text-blue-600 dark:text-blue-400 font-medium mb-3">{{ exp.company }}</p>
            <ul class="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
              <li v-for="item in exp.description" :key="item">{{ item }}</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
            <span
              class="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400">🚀</span>
            ผลงานที่เคยทำ
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div v-for="pj in resumeData.projects" :key="pj.title"
              class="bg-white dark:bg-slate-900 p-6 rounded-xl border border-gray-200 dark:border-slate-800 shadow-sm hover:shadow-md dark:hover:border-slate-700 transition-all">
              <h3 class="text-lg font-bold text-slate-800 dark:text-slate-100">{{ pj.title }}</h3>
              <p class="text-sm text-blue-600 dark:text-blue-400 font-mono mt-1">{{ pj.tech }}</p>
              <p class="text-slate-600 dark:text-slate-400 mt-3 text-sm leading-relaxed">{{ pj.details }}</p>
            </div>
          </div>
        </section>
      </div>

      <div class="space-y-8">
        <section
          class="bg-slate-900 dark:bg-slate-900 dark:border dark:border-slate-800 text-white p-8 rounded-2xl shadow-xl">
          <h2 class="text-xl font-bold mb-6">Technical Skills</h2>

          <div class="space-y-6">
            <div>
              <p class="text-blue-400 text-xs uppercase tracking-widest font-bold mb-3">Mobile Development</p>
              <div class="flex flex-wrap gap-2">
                <span v-for="s in resumeData.skills.mobile" :key="s"
                  class="bg-slate-800 px-3 py-1 rounded text-sm border border-slate-700 hover:border-blue-400 transition-colors">{{
                    s }}</span>
              </div>
            </div>

            <div>
              <p class="text-green-400 text-xs uppercase tracking-widest font-bold mb-3">Web Development</p>
              <div class="flex flex-wrap gap-2">
                <span v-for="s in resumeData.skills.web" :key="s"
                  class="bg-slate-800 px-3 py-1 rounded text-sm border border-slate-700 hover:border-green-400 transition-colors">{{
                    s }}</span>
              </div>
            </div>

            <div>
              <p class="text-yellow-400 text-xs uppercase tracking-widest font-bold mb-3">Database</p>
              <div class="flex flex-wrap gap-2">
                <span v-for="s in resumeData.skills.database" :key="s"
                  class="bg-slate-800 px-3 py-1 rounded text-sm border border-slate-700 hover:border-yellow-400 transition-colors">{{
                    s }}</span>
              </div>
            </div>
          </div>
        </section>
      </div>

    </main>
  </div>
</template>

<script setup lang="ts">
import { resumeData } from '~/content/resumeData';
</script>