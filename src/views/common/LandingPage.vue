<template>
  <div v-if="!isAuthenticated" class="flex flex-col items-center">
    <TopNavigation />
    <Hero />
    <Team />
  </div>
</template>

<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
import TopNavigation from "@/components/landing/TopNavigation.vue";
import Hero from "@/components/landing/Hero.vue";
import Team from "@/components/landing/Team.vue";

const { isAuthenticated } = useAuth0();
</script>
