<template>
  <div class="container mx-auto mt-10">
    <h1 class="mb-4 text-2xl font-bold">Calculateur Menstruel</h1>

    <div class="mb-4 flex">
      <label class="mr-2">Date de la dernière règle:</label>
      <input v-model="dateDerniereRegle" type="date" class="border p-2" />
    </div>

    <div class="mb-4 flex">
      <label class="mr-2">Durée du cycle (en jours):</label>
      <input v-model.number="dureeCycle" type="number" class="border p-2" />
    </div>

    <div class="mb-4 flex">
      <label class="mr-2">Durée des règles (en jours):</label>
      <input v-model.number="dureeRegle" type="number" class="border p-2" />
    </div>

    <button
      @click="calculerDates"
      class="rounded bg-blue-500 px-4 py-2 text-white"
    >
      Calculer
    </button>

    <div v-if="dateOvulation">
      <h2 class="mt-6 text-lg font-bold">Résultats:</h2>
      <p>Date d'ovulation: {{ dateOvulation }}</p>
      <p>Période de fécondité: {{ periodeFecondite.join(", ") }}</p>
      <p>Période de règles: {{ periodeRegles.join(", ") }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dateDerniereRegle: "",
      dureeCycle: null,
      dureeRegle: null,
      dateOvulation: null,
      periodeFecondite: [],
      periodeRegles: [],
    };
  },
  methods: {
    calculerDates() {
      const dateOvulation = (dateDernierRegle, dureeCycle) => {
        const dateDernierRegleSplit = dateDernierRegle.split("-");
        const [jour, mois, annee] = dateDernierRegleSplit.map(Number);

        const finMois =
          mois === 2
            ? 28
            : (mois % 2 === 0 && mois < 7) || (mois % 2 !== 0 && mois > 7)
            ? 30
            : 31;

        const dateOvulation = jour + dureeCycle - 14;
        const moisOvulation = dateOvulation > finMois ? mois + 1 : mois;
        const anneeOvulation = moisOvulation > 12 ? annee + 1 : annee;

        return `${dateOvulation}-${moisOvulation}-${anneeOvulation}`;
      };

      const calculPeriodeFecondite = (dateDerniereRegle, dureeCycle) => {
        const dateDernierRegleSplit = dateDerniereRegle.split("-");
        const [jour, mois, annee] = dateDernierRegleSplit.map(Number);

        const finMois =
          mois === 2
            ? 28
            : (mois % 2 === 0 && mois < 7) || (mois % 2 !== 0 && mois > 7)
            ? 30
            : 31;

        const d1 = dureeCycle - 18;
        const d2 = dureeCycle - 11;

        let debut = d1;
        let fin = d2;

        if (fin > finMois) {
          fin -= finMois;
          mois++;
        }

        const periodeFecondite = [];
        while (debut <= fin) {
          periodeFecondite.push(`${debut}-${mois}-${annee}`);
          debut++;
        }

        return periodeFecondite;
      };

      const calculPeriodeRegles = (
        dateDernierRegle,
        dureeCycle,
        dureeRegle,
      ) => {
        const dateDernierRegleSplit = dateDernierRegle.split("-");
        const [jour, mois, annee] = dateDernierRegleSplit.map(Number);

        const periodeRegle = [];
        for (let i = 0; i < dureeRegle; i++) {
          const jourRegle = jour + i <= finMois ? jour + i : jour + i - finMois;
          const moisRegle =
            jour + i <= finMois ? mois : mois === 12 ? 1 : mois + 1;
          const anneeRegle = moisRegle === 1 && mois === 12 ? annee + 1 : annee;

          periodeRegle.push(`${jourRegle}-${moisRegle}-${anneeRegle}`);
        }

        return periodeRegle;
      };

      this.dateOvulation = dateOvulation(
        this.dateDerniereRegle,
        this.dureeCycle,
      );
      this.periodeFecondite = calculPeriodeFecondite(
        this.dateDerniereRegle,
        this.dureeCycle,
      );
      this.periodeRegles = calculPeriodeRegles(
        this.dateDerniereRegle,
        this.dureeCycle,
        this.dureeRegle,
      );
    },
  },
};
</script>

<style scoped>
/* Ajoutez des styles supplémentaires ici si nécessaire */
</style>
