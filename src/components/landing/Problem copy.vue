<template>
  <div class="flex flex-col mt-24 justify-center items-center">
    <!-- Title -->
    <div class="w-full mt-12 p-6 text-left">
      <h1 class="text-5xl font-bold text-pop-secondary leading-tight">
        The Problem
      </h1>

      <h2 class="text-secondary/50 text-2xl">
        Cancer Patients Are the Backbone of a $50 Billion Data Market - But They
        Get Nothing.
      </h2>
    </div>

    <div id="grid" class="flex mt-12 justify-center items-center">
      <div class="grid grid-cols-1 md:grid-cols-6 p-4 gap-12 items-center">
        <!-- Left Content -->
        <div class="col-span-3">
          <p class="text-secondary text-xl">
            Every cancer patient's journey produces an enormous amount of
            valuable data - scans, lab results, genetic profiles, and treatment
            outcomes. This data fuels a $50+ billion global health data market,
            driving pharmaceutical breakthroughs and clinical advancements.
          </p>
        </div>

        <!-- Right Image -->
        <div class="col-span-3">
          <div
            v-for="item in reasons"
            class="flex flex-col p-4 divide-y divide-secondary rounded-md text-secondary/50 shadow"
          >
            <div class="flex group">
              <i
                :class="item.icon"
                class="text-3xl mx-4 text-pop-primary shrink-0"
                aria-hidden="true"
              ></i>
              {{ item.summary }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const reasons = [
  {
    summary:
      "19 million U.S. cancer patients receive $0 for their data, while corporations profit.",
    icon: "fa-solid fa-bed-pulse",
  },
  {
    summary:
      "42% of cancer patients deplete their life savings within two years of diagnosis.",
    icon: "fa-solid fa-piggy-bank",
  },
  {
    summary:
      "Life Sciences companies spend billions acquiring patient data – but most of it is obtained without direct patient consent.",
    icon: "fa-solid fa-handshake-slash",
  },
];
</script>
