<template>
  <div
    class="flex flex-col items-center text-secondary bg-pop-secondary/80 rounded-md"
  >
    <div
      class="w-36 h-36 -mt-20 border-8 rounded-full overflow-hidden border-pop-secondary"
    >
      <img
        v-if="user.picture"
        :src="user.picture"
        alt="Profile Image"
        class="w-full h-full object-cover"
      />
    </div>

    <h2 class="mt-4 text-xl font-semibold text-pop-primary">{{ user.name }}</h2>
    <p
      class="mt-1 py-1 px-2 text-sm text-pop-secondary bg-primary/70 rounded-full"
    >
      {{ user.email }}
    </p>
    <div
      class="w-3/4 mt-4 mb-12 text-center space-y-1 border-pop-primary border-t-2"
    >
      <div v-if="user.summary" class="mt-6 text-primary">
        {{ user.summary }}
      </div>
      <div v-else class="mt-6 text-primary">
        <p>@{{ user.nickname }} | 29 | Fr</p>
        <p>WCIF friendly</p>
        <p>
          <span v-if="user['lazer.io/roles']" class="text-pop-primary"
            >Roles:
          </span>
          {{ user["lazer.io/roles"] }}
        </p>
      </div>
    </div>

    <div
      class="flex w-full mt-4 p-4 justify-around text-pop-primary border-pop-primary border-t-2"
    >
      <button class="hover:text-primary/70">
        <i class="fas fa-home text-2xl"></i>
      </button>
      <button class="hover:text-pop-primary/70">
        <i class="fas fa-envelope text-2xl"></i>
      </button>
      <button class="hover:text-pop-primary/70">
        <i class="fab fa-linkedin text-2xl"></i>
      </button>
      <button class="hover:text-pop-primary/70">
        <i class="fas fa-phone text-2xl"></i>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { User } from "@auth0/auth0-vue";

defineProps<{
  user: User;
}>();
</script>
