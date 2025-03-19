<template>
  <div class="flex flex-col h-full bg-pop-secondary/80 rounded-md">
    <div class="mt-6 text-left">
      <i
        :class="item.icon"
        class="text-5xl mx-4 text-pop-primary shrink-0"
        aria-hidden="true"
      ></i>
    </div>

    <div class="flex flex-col gap-y-6 p-4 mt-4">
      <p class="text-xl font-bold text-primary border-b-2">{{ item.title }}</p>
      <p class="text-md text-primary/80">
        {{ item.description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  item: any;
}>();
</script>
