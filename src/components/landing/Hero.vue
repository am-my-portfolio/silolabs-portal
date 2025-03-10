<template>
  <div class="flex mt-36 justify-center items-center">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <!-- Left Content -->
      <div class="space-y-6">
        <h1 class="text-6xl font-bold text-pop-secondary leading-tight">
          Discover reputable medical and research institutes interested in you
          data
        </h1>

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

        <p class="text-secondary/50 text-2xl">
          Our blockchain enabled, zero-trust data sharing platform enables you
          to capitalize on your data, on your terms
        </p>
        <button
          class="px-6 py-3 rounded-lg text-lg font-semibold bg-pop-secondary/50 hover:bg-pop-primary text-secondary hover:text-primary transition shadow-lg"
        >
          GET STARTED
        </button>
        <div class="mt-5">
          <p class="text-pop-primary mb-2">
            Trusted by hundreds of individuals
          </p>
        </div>
      </div>

      <!-- Right Image -->
      <div class="relative">
        <img
          src="/logo.png"
          alt="logo"
          class="w-[56vw] md:w-[22vw] 3xl:w-[6vw] border-8 border-pop-secondary rounded-full object-cover bg-pop-secondary/50 dark:bg-pop-primary"
        />
      </div>
    </div>
  </div>
</template>
