<template>
  <div>
    <v-row justify="center">
      <v-col cols="12" md="5">
        <h1 class="h4 mt-4 d-block p-2 text-center text-primary">
          Rénovation de façade
        </h1>

        <hr />
      </v-col>
    </v-row>
    <v-card class="mt-4 p-4">
      <v-row justify="center">
           <v-col cols="12" md="6" sm="12">
          <v-card class="img">
            <v-img src="ravalement.jpg"> </v-img>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" sm="12">
          <strong> Le ravalement ou la rénovation de façade</strong> est une
          suite d'actions qui vise à remettre en état les murs extérieurs de
          votre logement. Audits rénovation met son expérience à votre disposition.

          <hr />

          <v-row justify="center">
            <NuxtLink to="/ravalement-façade">
              <v-btn color="success" dark> En savoir plus </v-btn>
            </NuxtLink>
          </v-row>
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
