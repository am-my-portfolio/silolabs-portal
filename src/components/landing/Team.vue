<template>
  <div class="flex mt-36 justify-center items-center">
    <div class="grid grid-cols-1 md:grid-cols-6 gap-10 items-center">
      <!-- Left Content -->
      <div class="col-span-2">
        <h1 class="text-5xl font-bold text-pop-secondary leading-tight">
          Meet Our Founding Team
        </h1>
        <p class="text-secondary text-xl">
          With expertise ranging from Startup Strategist, Data Science and
          Health, and Software Engineering, our Founding team is well positioned
          to take this idea to new horizons
        </p>
      </div>

      <!-- Right Image -->
      <div class="col-span-4">
        <ul
          role="list"
          class="w-full grid grid-cols-1 sm:grid-cols-2 bg-pop-secondary/30 gap-x-6 gap-y-24 px-4 pt-24 pb-12 rounded-md"
        >
          <li
            v-for="person in team"
            :key="person.email"
            class="flex flex-col p-4 divide-y divide-secondary rounded-md bg-primary/60 shadow"
          >
            <UserProfile :user="person" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import UserProfile from "@/components/UserProfile.vue";

const team = [
  {
    name: "Jane Cooper",
    nickName: undefined,
    email: "janecooper@example.com",
    summary: "Over 15 years of industy experience in Startup advisory",
    picture:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Cody Fisher",
    nickName: undefined,
    email: "cody.fisher@example.com",
    summary:
      "A masters in Data Science from UCL, and 8+ years of experience in the Health Care industy ",
    picture:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Esther Howard",
    nickName: undefined,
    email: "esther.howard@example.com",
    summary:
      "A masters in Computer Science from RWTH, and 10+ years of experience in the Software Engineering, full-stack application development, Web2, Web3 and Web4",
    picture:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
];
</script>
