<template>
  <PageDivisionLayout>
    <template #divisionTitle> Profile </template>
    <template #divisionContent>
      <div v-if="!isLoading" class="m-24 px-12">
        <UserProfile :user="user" />
      </div>
    </template>
  </PageDivisionLayout>
</template>

<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
import PageDivisionLayout from "@/components/layout/PageDivisionLayout.vue";
import UserProfile from "@/components/UserProfile.vue";

const { user, isLoading } = useAuth0();
</script>
