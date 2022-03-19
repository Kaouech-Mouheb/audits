<template>
  <div class="carroussel">
    <v-card width="100%" class="mt-4">
      <v-row justify="center">
        <v-col cols="12" md="5">
          <div class="mt-1 h2 text-center text-primary">Nos réalisations</div>
          <hr />
        </v-col>
      </v-row>

      <v-card-text>
        <v-carousel
          cycle
          height="600"
          hide-delimiter-background
          show-arrows-on-hover
        >
          <v-carousel-item v-for="(item, i) in slides" :key="i" :src="item.src">
            <v-row class="fill-height" align="center" justify="center">
              <div class="slides-name">
                {{ item.title }}
              </div>
              <p class="carroussel-text">{{ item.text }}</p>
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
export default {
  data: () => ({
    slides: [
      {
        src: "ravalement.jpg",
        title: "Isolation thermique par l'intérieur",
        text: "Une bonne isolation thermique vous permet de réduire votre facture énergétique et de profiter d’une température intérieure constante et agréable",
      },
      {
        src: "couverture.jpg",
        title: "Travaux de couverture",
        text: "Une toiture seine est étanche pour protéger votre habitat",
      },
      {
        src: "itecomble.jpg",
        title: "Isolation thermique du comble",
        text: "Isoler vos combles perdus vous permet de faire jusqu’à 30% d’économies d’énergie.",
      },
      {
        src: "bureau.jpg",
        title: "Rénovation d'un appartement",
        text: "Rénover sa maison pour une meilleure qualité de l'air intérieur.",
      },
      {
        src: "bain.jpg",
        title: "Rénovation d'un salle de bain",
        text: "Transformez la salle de bains, la faisant passer d'humide et obscure à lumineuse et aérée.",
      },
      {
        src: "cuisine.jpg",
        title: "Rénovation d'une cuisine",
        text: "Rénover sa cuisine permet d'améliorer l'agencement de la pièce pour une utilisation optimisée.",
      },
    ],
  }),
};
</script>
<style scoped>
.slides-name {
  background: #0095f1;
  width: 100%;
  padding: 100px;
  color: white;
  opacity: 0.8;
  text-align: center;
  font-size: 36px;

}

.carroussel-text {
  padding: 40px;
  background: white;
  opacity: 0.7;
  width: 100%;
  position: absolute;
  top: 10px;
  font-size: 22px;

}
@media (max-width: 575.98px) {
  .slides-name {
    padding: 10px;
    font-size: 15px;
  }
  .v-carousel {
    height: 400px !important;
  }
  .carroussel {
    margin-top: 20px;
  }
  .carroussel-text {
  padding: 10px;
  background: white;
  opacity: 0.7;
  width: 100%;
  position: absolute;
  top: 10px;
  font-size: 12px;

}
}
</style>
