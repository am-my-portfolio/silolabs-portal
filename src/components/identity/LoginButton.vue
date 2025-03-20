<template>
  <button
    class="md:w-40 md:h-14 px-4 md:px-6 py-2 md:py-3 rounded-lg md:text-lg font-semibold bg-pop-secondary/50 hover:bg-pop-primary text-secondary hover:text-primary transition shadow-lg"
    @click="handleLogin"
  >
    Log In
  </button>
</template>

<script setup lang="ts">
import { kebabCase } from "lodash";
import { useAuth0 } from "@auth0/auth0-vue";
import { primary_navigation } from "@/helpers/index";

const { loginWithRedirect } = useAuth0();
const home_page = primary_navigation.find((n) => n.page === "Page1");

const handleLogin = () => {
  loginWithRedirect({
    appState: {
      target: `/${kebabCase(home_page.name)}`,
    },
    authorizationParams: {
      prompt: "login",
    },
  });
};
</script>
