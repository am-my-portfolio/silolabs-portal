<template>
  <div class="flex justify-center items-center">
    <div class="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
      <!-- Left Content -->
      <div class="col-span-3 space-y-6">
        <h1 class="text-6xl font-bold text-pop-secondary leading-tight">
          <slot name="title" />
        </h1>

        <div class="flex space-x-12 text-pop-primary">
          <slot name="subTitle" />
        </div>

        <p class="text-secondary/50 text-2xl">
          <slot name="description" />
        </p>

        <div>
          <slot name="leftContent" />
        </div>
      </div>

      <!-- Right Image -->
      <div class="col-span-2">
        <slot name="rightContent" />
      </div>
    </div>
  </div>
</template>
