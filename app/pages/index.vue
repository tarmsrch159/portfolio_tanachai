<template>
  <div
    class="min-h-screen bg-gray-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans pb-20 transition-colors duration-300">

    <!-- NAV -->
    <nav
      class="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-gray-100 dark:border-slate-800 px-6 py-4">
      <div class="max-w-5xl mx-auto flex justify-between items-center">
        <span class="font-bold text-xl tracking-tight">PORTFOLIO</span>
        <div class="flex gap-3 items-center">

          <!-- ThemeToggle -->
          <ClientOnly>
            <ThemeToggle />
          </ClientOnly>

          
          <div class="flex items-center gap-2 text-xs text-slate-500">
            <span>{{ t(resumeData.language) }}</span>
            <!-- pill switch -->
          </div>

          <div
            class="flex items-center rounded-full border border-slate-300 dark:border-slate-700 overflow-hidden text-sm font-semibold">

            <button @click="switchToTH" :class="[
              'px-3 py-1.5 transition-colors',
              locale === 'th'
                ? 'bg-blue-600 text-white'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            ]">
              TH
            </button>

            <button @click="switchToEN" :class="[
              'px-3 py-1.5 transition-colors',
              locale === 'en'
                ? 'bg-blue-600 text-white'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            ]">
              EN
            </button>
          </div>

        </div>
      </div>
    </nav>

    <!-- HEADER -->
    <header class="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800">
      <div class="max-w-5xl mx-auto px-6 py-16">

        <div class="flex flex-col md:flex-row md:items-center gap-6">
          <img :src="resumeData.profile.image"
            class="w-52 h-52 rounded-2xl object-cover border-4 border-blue-500 shadow-lg" />

          <div>
            <h1 class="text-4xl md:text-5xl font-extrabold">
              {{ resumeData.profile.name }}
            </h1>

            <p class="text-xl md:text-2xl text-blue-600 font-semibold mt-1">
              {{ t(resumeData.profile.roleKey) }}
            </p>

            <div class="flex gap-4 mt-4 text-sm md:text-base text-slate-600 dark:text-slate-400">
              <span>📞 {{ resumeData.profile.contact.phone }}</span>
              <span>📧 {{ resumeData.profile.contact.email }}</span>
            </div>
          </div>
        </div>

        <p
          class="mt-8 text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl border-l-4 border-blue-500 pl-6 italic">
          "{{ t(resumeData.profile.bioKey) }}"
        </p>

        <!-- EDUCATION -->
        <section class="mt-8">
          <h2 class="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-3">
            Bachelor’s degree from
          </h2>

          <div class="flex items-center gap-3 bg-white dark:bg-slate-900 border rounded-xl px-5 py-4 shadow-sm">
            <span class="text-lg">🎓</span>
            <p class="font-medium">
              {{ t(resumeData.profile.graduatedKey) }}
            </p>
          </div>
        </section>

        <!-- LINKS -->
        <section class="mt-8">
          <h2 class="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-3">
            Professional Links
          </h2>

          <div class="flex gap-4 flex-wrap">
            <a v-for="(url, key) in resumeData.profile.links" :key="key" :href="url" target="_blank"
              class="px-5 py-2 rounded-xl border bg-white dark:bg-slate-900 shadow-sm">
              {{ key }}
            </a>
          </div>
        </section>
      </div>
    </header>

    <!-- MAIN -->
    <main class="max-w-5xl mx-auto px-6 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">

      <!-- EXPERIENCE -->
      <div class="lg:col-span-2 space-y-12">
        <section>
          <h2 class="text-2xl font-bold mb-6 flex gap-3">
            💼 {{ t('section.experience') }}
          </h2>

          <div v-for="exp in resumeData.experience" :key="exp.company" class="pl-6 border-l-2">
            <h3 class="text-xl font-bold">
              {{ t(exp.roleKey) }}
            </h3>

            <span class="text-sm text-slate-500">
              {{ t(exp.periodKey) }}
            </span>

            <p class="text-blue-600 mt-1">{{ exp.company }}</p>

            <ul class="list-disc list-inside mt-3 space-y-1">
              <li v-for="d in exp.descriptionKeys" :key="d">
                {{ t(d) }}
              </li>
            </ul>
          </div>
        </section>

        <!-- PROJECTS -->
        <section>
          <h2 class="text-2xl font-bold mb-6 flex gap-3">
            🚀 {{ t('section.projects') }}
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div v-for="pj in resumeData.projects" :key="pj.titleKey"
              class="p-6 rounded-xl border bg-white dark:bg-slate-900">
              <h3 class="font-bold text-lg">
                {{ t(pj.titleKey) }}
              </h3>

              <p class="text-sm text-blue-600 mt-1">{{ pj.tech }}</p>

              <p class="mt-3 text-sm">
                {{ t(pj.detailsKey) }}
              </p>

              <!-- LINKS -->
              <div class="flex gap-3 pt-4">
                <a v-if="pj.liveUrl" :href="pj.liveUrl" target="_blank" class="
      inline-flex items-center gap-2
      px-4 py-2 rounded-lg
      bg-blue-600 text-white
      text-sm font-semibold
      shadow-sm
      hover:bg-blue-700 hover:shadow-md
      transition
    ">
                  🌐 Live Website
                </a>

                <a v-if="pj.repoUrl" :href="pj.repoUrl" target="_blank" class="
      inline-flex items-center gap-2
      px-4 py-2 rounded-lg
      border border-slate-300 dark:border-slate-700
      text-sm font-medium
      text-slate-700 dark:text-slate-200
      bg-white dark:bg-slate-900
      hover:border-slate-400 dark:hover:border-slate-500
      hover:bg-slate-50 dark:hover:bg-slate-800
      transition
    ">
                  💻 GitHub
                </a>
              </div>

            </div>
          </div>
        </section>
      </div>

      <!-- SKILLS -->
      <div>
        <section class="
      bg-white dark:bg-slate-900
      text-slate-900 dark:text-white
      p-8 rounded-2xl
      border border-slate-200 dark:border-slate-800
      shadow-sm dark:shadow-xl
      space-y-6
    ">
          <h2 class="text-xl font-bold">
            {{ t('section.skills') }}
          </h2>

          <!-- Mobile -->
          <div>
            <p class="text-xs uppercase mb-2
               text-slate-500 dark:text-slate-400
               tracking-widest font-semibold">
              Mobile
            </p>

            <div class="flex flex-wrap gap-2">
              <span v-for="s in resumeData.skills.mobile" :key="s" class="
            px-3 py-1 rounded-md text-sm font-medium
            bg-slate-100 text-slate-700
            dark:bg-slate-800 dark:text-slate-200
            border border-slate-200 dark:border-slate-700
            hover:border-blue-400 hover:text-blue-600
            dark:hover:border-blue-400 dark:hover:text-blue-400
            transition-colors
          ">
                {{ s }}
              </span>
            </div>
          </div>

          <!-- Web -->
          <div>
            <p class="text-xs uppercase mb-2
               text-slate-500 dark:text-slate-400
               tracking-widest font-semibold">
              Web
            </p>

            <div class="flex flex-wrap gap-2">
              <span v-for="s in resumeData.skills.web" :key="s" class="
            px-3 py-1 rounded-md text-sm font-medium
            bg-slate-100 text-slate-700
            dark:bg-slate-800 dark:text-slate-200
            border border-slate-200 dark:border-slate-700
            hover:border-green-400 hover:text-green-600
            dark:hover:border-green-400 dark:hover:text-green-400
            transition-colors
          ">
                {{ s }}
              </span>
            </div>
          </div>

          <!-- Database -->
          <div>
            <p class="text-xs uppercase mb-2
               text-slate-500 dark:text-slate-400
               tracking-widest font-semibold">
              Database
            </p>

            <div class="flex flex-wrap gap-2">
              <span v-for="s in resumeData.skills.database" :key="s" class="
            px-3 py-1 rounded-md text-sm font-medium
            bg-slate-100 text-slate-700
            dark:bg-slate-800 dark:text-slate-200
            border border-slate-200 dark:border-slate-700
            hover:border-yellow-400 hover:text-yellow-600
            dark:hover:border-yellow-400 dark:hover:text-yellow-400
            transition-colors
          ">
                {{ s }}
              </span>
            </div>
          </div>
        </section>
      </div>


    </main>
  </div>
</template>

<script setup lang="ts">
import { resumeData } from '~/content/resumeData'
const { locale, t, setLocale } = useI18n()

const switchToTH = () => setLocale('th')
const switchToEN = () => setLocale('en')

</script>
