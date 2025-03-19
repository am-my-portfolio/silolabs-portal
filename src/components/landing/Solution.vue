<template>
  <div class="flex flex-col w-full mt-24 justify-center items-center">
    <div class="w-full mt-12 p-6 text-center">
      <h1 class="text-5xl font-bold text-pop-secondary leading-tight">
        The Solution
      </h1>
      <p class="text-secondary text-xl">
        SiloLabs: Empowering Cancer Patients to Monetize Their Data
      </p>

      <p class="mt-6 text-secondary/50 text-md">
        SiloLabs bridges traditional and decentralized finance, creating a fair,
        patient-first data economy leveraging blockchain technology so those in
        need finally benefit from the data they create.
      </p>
    </div>

    <div class="">
      <ul
        role="list"
        class="w-full grid grid-cols-1 md:grid-cols-4 gap-x-2 rounded-md"
      >
        <li
          v-for="item in items"
          class="flex flex-col p-4 divide-y divide-secondary rounded-md bg-primary/60 shadow"
        >
          <SolutionCard :item="item" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import SolutionCard from "./SolutionCard.vue";

const items = [
  {
    title: "Patients Get Paid",
    description:
      "Cancer patients receive direct payments for their anonymized health data.",
    icon: "fa-solid fa-piggy-bank",
  },
  {
    title: "Seamless Payments",
    description:
      "Life Sciences companies pay traditionally; SiloLabs converts funds into stablecoins (USDC) for secure, automated micropayments.",
    icon: "fa-solid fa-building-columns",
  },
  {
    title: "Ethical & Transparent",
    description:
      "Blockchain ensures patient consent, security, and full traceability.",
    icon: "fa-solid fa-cubes",
  },
  {
    title: "Better Data for Research",
    description:
      "Life Sciences companies access verified, high-quality patient data to accelerate new treatments.",
    icon: "fa-solid fa-clipboard-list",
  },
];
</script>
