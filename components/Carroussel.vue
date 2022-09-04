<template>
  <div class="carroussel">
    <v-card width="100%" class="mt-4">
      <v-row justify="center">
        <v-col cols="12" md="5">
          <div class="mt-1 h2 text-center text-primary">Expertises</div>
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
        src: "appartement.jpg",
        title: "Rénovation d'un appartement",
        text: "Rénover sa maison pour une meilleure qualité de l'air intérieur.",
      },
       {
        src: "amenagement-comble.jpg",
        title: "Aménagement de comble",
        text: "Transformez votre comble, le faisant passer de comble perdu et obscur à lumineuse et habitable.",
      },
      {
        src: "bain.jpg",
        title: "Rénovation d'un salle de bain",
        text: "Transformez la salle de bains, la faisant passer d'humide et obscure à lumineuse et aérée.",
      },
      {
        src: "background.jpg",
        title: "Rénovation d'une cuisine",
        text: "Rénover sa cuisine permet d'améliorer l'agencement de la pièce pour une utilisation optimisée.",
      },
        {
        src: "isolation.jpg",
        title: "Isolation thermique par l'extérieur",
        text: "Une bonne isolation thermique vous permet de réduire votre facture énergétique et de profiter d’une température intérieure constante et agréable",
      },
      {
        src: "couverture.jpg",
        title: "Travaux de couverture",
        text: "Une toiture seine est étanche pour protéger votre habitat",
      },

    ],
  }),
};
</script>
<style scoped>
.slides-name {
  background: #0095f1;
  width: 100%;
  padding: 80px;
  color: white;
  opacity: 0.8;
  text-align: center;
  font-size: 36px;

}

.carroussel-text {
  padding: 30px;
  background: white;
  opacity: 0.7;
  width: 100%;
  position: absolute;
  top: 10px;
  font-size: 22px;

}
.carroussel {
  margin-top:50px
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
