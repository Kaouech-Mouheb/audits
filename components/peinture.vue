<template>
  <div>
    <v-row justify="center">
      <v-col cols="12" md="5">
        <h1 class="h4 mt-4 d-block p-2 text-center text-primary">
          Entreprise de peinture
        </h1>

        <hr />
      </v-col>
    </v-row>
    <v-card class="mt-4 p-4">
      <v-row justify="center">
        <v-col cols="12" md="6" sm="12">
          Audits rénovation est une <strong>entreprise de peinture</strong> et
          met son expérience au service des professionnels et des particuliers.
          Son équipe est composée de professionnels expérimentés, ils sont en
          mesure de réaliser des chantiers très variés de travaux de peinture de
          décoration et de rénovation.
          <hr />

          <v-row justify="center">
            <NuxtLink to="/peinture">
              <v-btn color="success" dark> En savoir plus </v-btn>
            </NuxtLink>
          </v-row>
        </v-col>
        <v-col cols="12" md="6" sm="12">
          <v-card class="img">
            <v-img src="peintre.jpg"> </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
};
</script>
<style scoped>
.fermer-dialog {
  position: absolute;
  bottom: 10px;
  right: 40px;
  z-index: 1000;
}
.img {
  max-width: 600px;
}
.a-propos {
  font-size: 22px;
  font-weight: 200;
}
.container-toiture {
  position: relative;
}
.close {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1000;
}
@media (max-width: 575.98px) {
  .a-propos {
    font-size: 16px;
  }
}
@media (min-width: 576px) and (max-width: 1024px) {
  .img {
    max-width: 800px;
  }
}
</style>
