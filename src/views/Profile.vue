<template>
  <PageDivisionLayout>
    <template #divisionTitle> Profile </template>
    <template #divisionContent>
      <div
        v-if="!isLoading"
        class="flex flex-col p-2 m-24 divide-y divide-secondary rounded-md bg-pop-secondary shadow"
      >
        <UserProfile :user="user" />
      </div>
    </template>
  </PageDivisionLayout>
</template>

<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
import PageDivisionLayout from "@/components/layout/division/PageDivisionLayout.vue";
import UserProfile from "@/components/UserProfile.vue";

const { user, isLoading } = useAuth0();
</script>
