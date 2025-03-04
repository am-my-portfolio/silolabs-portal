<template>
  <div v-if="!isAuthenticated" class="flex flex-col h-fit items-center">
    <img
      src="/landing.png"
      alt="logo"
      class="w-56 m-6 rounded-xl bg-pop-primary/80 dark:bg-pop-secondary/50"
    />

    <!-- <HeroTwo class="m-6 rounded-xl" /> -->
    <Hero class="m-6 rounded-xl" />
    <LoginButton class="m-6 rounded-xl" />
    <ThemeToggle class="m-6 rounded-xl bg-pop-primary/20 p-3" />
  </div>
</template>

<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
import LoginButton from "@/components/identity/LoginButton.vue";
import ThemeToggle from "@/components/ThemeToggle.vue";
import Hero from "@/components/landing/Hero.vue";
import HeroTwo from "@/components/landing/HeroTwo.vue";

const { isAuthenticated } = useAuth0();
</script>
