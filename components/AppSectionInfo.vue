<template>
  <div class="py-24 sm:py-32">
    <div class="gap-16 sm:gap-y-24 grid lg:grid-cols-2 lg:items-center">
      <div>
        <slot name="left"></slot>
      </div>
      <div>
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>
