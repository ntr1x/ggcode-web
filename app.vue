<script setup lang="ts">
useSeoMeta({
  title: 'Develfish Studio',
  ogTitle: 'Develfish Studio',
  description: 'Bootstrap your application in 15 minutes, no matter how big or complicated it is.',
  ogDescription: 'Bootstrap your application in 15 minutes, no matter how big or complicated it is.',
  ogImage: '/public/img/logo.png',
  // twitterCard: 'summary_large_image',
})

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `Develfish Studio | ${titleChunk}` : 'Develfish Studio';
  }
})
</script>

<template>
  <div data-theme="dark">
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
@import '~/assets/css/main.css';
@import "primeicons/primeicons.css";
@import '@mdi/font/css/materialdesignicons.css';
</style>
