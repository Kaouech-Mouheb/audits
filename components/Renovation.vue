<template>
  <div>

    <v-card class="mt-4 p-4">
      <v-row justify="center">
        <v-col cols="12" md="6" sm="12">
          <div class="a-propos">
            <h1>À propos de nous </h1>
            AUDITS rénovation est une société de rénovation tous corps d'État.
            Nous mettons notre savoir-faire et notre compétence au service de tous
            projets de rénovation intérieure, rénovation extérieure menuiseries;
            salles de bains et cuisine.
            <hr />
            AUDITS Rénovation offre un large éventail de services dans le
            domaine de la rénovation intérieure de votre maison (peinture et
            mise en enduit, pose de revếtements sols, placo et cloisonnement,
            rénovation salle de bain et cuisine, travaux de plomberie et
            électricité, isolation thermique et acoustique).
            <hr />
            Pour vos travaux de rénovation extérieurs AUDITS rénovation, proposent
            une large gamme de services, Nettoyage et traitements de façade;
            Ravalement de façade, isolation thermique par l'extérieur, Peinture
            extérieur, Nettoyage et traitement de couverture,
          </div>
          <hr />
          <v-btn color="success" to="/renovation"> En savoir plus </v-btn>
        </v-col>

      </v-row>
    </v-card>
  </div>
</template>
<style scoped>
.img {
  max-width: 600px;
}
.a-propos {
  font-size: 22px;
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
