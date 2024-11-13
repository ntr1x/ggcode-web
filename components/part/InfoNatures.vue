<template>
  <AppSectionInfo>
    <template #left>
      <div class="bg-gray-900/5 dark:bg-white/5 ring-1 ring-inset ring-gray-900/10 dark:ring-white/10 rounded-xl lg:-m-4 p-4">
        <div class="aspect-[16/9] rounded-lg relative overflow-hidden border border-dashed border-gray-900/10 dark:border-white/10">
          <svg class="absolute inset-0 h-full w-full stroke-gray-900/10 dark:stroke-white/10" fill="none">
            <defs>
              <pattern id="pattern-5c1e4f0e-62d5-498b-8ff0-cf77bb448c8e" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"></path>
              </pattern>
            </defs>
            <rect stroke="none" fill="url(#pattern-5c1e4f0e-62d5-498b-8ff0-cf77bb448c8e)" width="100%" height="100%"></rect>
          </svg>
        </div>
      </div>
    </template>
    <template #right>
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
        The power of our service
      </h2>
      <div class="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
        Aliqua labore laboris fugiat. Reprehenderit exercitation eu commodo. Officia nostrud sit et aliqua ea ex sunt minim incididunt sunt.
      </div>
      <dl class="mt-6 leading-7 space-y-4">
        <div class="relative pl-8">
          <dt class="font-semibold text-gray-900 dark:text-white">
            <span class="iconify i-heroicons:cog absolute left-0 top-1 h-5 w-5 text-primary" aria-hidden="true" style=""></span>
            <span>Easy to use</span>
          </dt>
          <dd class="text-gray-500 dark:text-gray-400 leading-6">Id laborum laboris duis nostrud excepteur ut velit.</dd>
        </div>
        <div class="relative pl-8">
          <dt class="font-semibold text-gray-900 dark:text-white">
            <span class="iconify i-heroicons:check absolute left-0 top-1 h-5 w-5 text-primary" aria-hidden="true" style=""></span>
            <span>Reliable</span>
          </dt>
          <dd class="text-gray-500 dark:text-gray-400 leading-6">Magna Lorem ex cillum fugiat ad enim aute irure sit duis minim.</dd>
        </div>
        <div class="relative pl-8">
          <dt class="font-semibold text-gray-900 dark:text-white">
            <span class="iconify i-heroicons:lock-closed absolute left-0 top-1 h-5 w-5 text-primary" aria-hidden="true" style=""></span>
            <span>Secure</span>
          </dt>
          <dd class="text-gray-500 dark:text-gray-400 leading-6">Proident nostrud excepteur sint ut culpa consectetur aute adipisicing.</dd>
        </div>
      </dl>
    </template>
  </AppSectionInfo>
</template>
