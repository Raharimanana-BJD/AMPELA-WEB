<template>
  <section id="section03" class="snap-center bg-accents-400 py-20">
    <div class="container space-y-8">
      <h2 class="text-center text-4xl font-bold">{{ section03.titre }}</h2>
      <p class="mx-auto max-w-3xl">{{ section03.paragraphe }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "section03",
  props: {
    section03: {
      type: Object,
      default: () => Data.section03,
    },
  },
};
</script>

<style></style>
