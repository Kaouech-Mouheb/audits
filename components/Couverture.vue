<template>
  <div>
    <v-row justify="center">
      <v-col cols="12" md="5">
        <span class="h4 mt-4 d-block p-2 text-center text-primary"
          ><strong> Travaux de couverture </strong>
        </span>
        <hr />
      </v-col>
    </v-row>
    <v-card class="mt-4 p-4">
      <v-row justify="center">
        <v-col cols="12" md="6" sm="12">
          <v-card class="img">
            <v-img src="couverture.jpg"> </v-img>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" sm="12">
          <div class="a-propos">
            <h1>Audits rénovation</h1>
            <ul>
              Audits rénovation Spécialiste en
              <strong>travaux de couverture</strong>
              et offre Une grande variété de services pour
              <strong>rénover votre toiture</strong
              >.
              <li><strong>Rénovation compléte de toiture</strong></li>
              <li>
                <strong>Réparation des fuites de toitures</strong> et la remise
                en étanchéité
              </li>
              <li>Nettoyage et <strong>démoussage de toiture</strong></li>
              <li>Pose de fenêtre velux</li>
              <li><strong>Isolation de toiture</strong></li>
              <li>
                <strong> Pose de toiture</strong>, gouttières et canalisations
                d'eaux pluviales.
              </li>
            </ul>
          </div>
          <hr />

          <v-row justify="center">
            <v-btn color="success" dark @click.stop="dialog = true">
              En savoir plus
            </v-btn>

            <v-dialog v-model="dialog" max-width="600">
              <div class="container-toiture">
                <div class="close">
                  <v-btn icon @click="dialog = false">
                    <v-icon large> mdi-close-circle-outline </v-icon>
                  </v-btn>
                </div>
                <FormulaireDevisToiture />
                
                  <v-btn class="fermer-dialog" @click="dialog = false" color="error">
                    Fermer
                  </v-btn>
              </div>
            </v-dialog>
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
.fermer-dialog{
    position: absolute;
  bottom: 10px;
  right: 40px;
  z-index:1000
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
  z-index:1000
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
