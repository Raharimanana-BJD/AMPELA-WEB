<template>
  <div id="card" class="rounded-md p-2">
    <!-- heading -->
    <div
      class="mb-4 flex flex-col items-center justify-center gap-4 md:flex-row md:gap-2 lg:justify-start"
    >
      <!-- Icon -->
      <div class="relative h-10 w-10 rounded-full bg-neutral-300">
        <img
          :src="'../public/' + card.icon"
          class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
        />
      </div>
      <div>
        <h2 class="text-base font-bold">{{ card.titre }}</h2>
      </div>
    </div>
    <div>
      <p class="text-center text-sm md:text-left">{{ card.paragraphe }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    card: {
      type: Object,
      default: () => Data.cards,
    },
  },
};
</script>
