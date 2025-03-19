<template>
  <div class="mt-24">
    <ColumnLayout>
      <template #title>
        Empowering Patients. Monetizing Data. Transforming Life Sciences.
      </template>

      <template #subTitle>
        <div class="flex space-x-12 text-pop-primary">
          <i
            class="fa-brands fa-galactic-senate text-6xl hover:text-pop-secondary"
          ></i>
          <i class="fa-brands fa-fulcrum text-6xl hover:text-pop-secondary"></i>
          <i
            class="fa-brands fa-swift text-6xl hover:text-pop-secondary hidden lg:flex"
          ></i>
          <i
            class="fa-brands fa-studiovinari text-6xl hover:text-pop-secondary"
          ></i>
          <i
            class="fa-brands fa-yammer text-6xl hover:text-pop-secondary hidden lg:flex"
          ></i>
          <i class="fa-brands fa-napster text-6xl hover:text-pop-secondary"></i>
          <i
            class="fa-brands fa-suse text-6xl hover:text-pop-secondary hidden lg:flex"
          ></i>
        </div>
      </template>

      <template #description>
        SiloLabs bridges traditional and decentralized finance, creating a fair,
        patient-first data economy leveraging blockchain technology so those in
        need finally benefit from the data they create and own.
      </template>

      <template #leftContent>
        <button
          class="px-6 py-3 rounded-lg text-lg font-semibold bg-pop-secondary/50 hover:bg-pop-primary text-secondary hover:text-primary transition shadow-lg"
        >
          REQUEST A DEMO
        </button>
        <div class="mt-5">
          <p class="text-pop-primary mb-2">
            Trusted by hundreds of individuals
          </p>
        </div>
      </template>

      <template #rightContent>
        <img
          src="/logo.png"
          alt="logo"
          class="w-full border-8 border-pop-secondary rounded-full object-cover bg-pop-secondary/50 dark:bg-pop-primary"
        />
      </template>
    </ColumnLayout>
  </div>
</template>

<script setup lang="ts">
import ColumnLayout from "@/components/layout/widget/ColumnLayout.vue";
</script>
