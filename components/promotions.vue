<template>
  <v-row>
    <v-col cols="12" md="12">
      <h4 class="h4 text-primary">
        Nos dernières offres et promotions de rénovation
      </h4>
    </v-col>
    <v-col cols="12" md="4">
      <v-card class="mx-auto my-12" max-width="374">
        <template slot="progress">
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img
          height="250"
          src="cuisine.jpeg"
          title="rénovation cuisine"
          alt="rénovation cuisine"
        ></v-img>

        <v-card-title>Forfait rénovation cuisine</v-card-title>

        <v-card-text>
          <v-row align="center" class="mx-0">
            <v-rating
              :value="5"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>

            <div class="grey--text ms-4">5 (3)</div>
          </v-row>

          <div class="my-4 text-subtitle-1">
            2700 Euros TTC - sans forniture
          </div>

          <div>
            Dépose de l'ancien cuisine, évacuation et mise en décharge +
            rénovation compléte de votre cuisine, valable pour les cuisine de
            moins de 6m2
          </div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-title>Offre limité</v-card-title>

        <v-card-actions>
          <v-btn color="deep-purple lighten-2" text href="#formDevis">
            Réserver
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col cols="12" md="4">
      <v-card class="mx-auto my-12" max-width="374">
        <template slot="progress">
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img height="250" src="bain.jpg"></v-img>

        <v-card-title>Forfait rénovation salle de bain</v-card-title>

        <v-card-text>
          <v-row align="center" class="mx-0">
            <v-rating
              :value="5"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>

            <div class="grey--text ms-4">5(7)</div>
          </v-row>

          <div class="my-4 text-subtitle-1">
            3000 Euros TTC - sans forniture
          </div>

          <div>
            Dépose, évacuation et mise en décharge + rénovation compléte de
            votre salle de bain, valable pour les salles de bain de moins de 4m2
          </div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-title>Offre limité</v-card-title>

        <v-card-actions>
          <v-btn color="deep-purple lighten-2" text href="#formDevis">
            Réserver
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col cols="12" md="4">
      <v-card class="mx-auto my-12" max-width="374">
        <template slot="progress">
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img height="250" src="peintre.jpg"></v-img>

        <v-card-title>Forfait peinture</v-card-title>

        <v-card-text>
          <v-row align="center" class="mx-0">
            <v-rating
              :value="5"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>

            <div class="grey--text ms-4">5 (5)</div>
          </v-row>

          <div class="my-4 text-subtitle-1">
            2000 Euros TTC - fourniture inclus
          </div>

          <div>
            Traitment de fissures à l'enduit + 2 couche de peinture, valable
            pour les appartement de moins de 45 m2
          </div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-title>Offre limité</v-card-title>

        <v-card-actions>
          <v-btn color="deep-purple lighten-2" href="#formDevis" text>
            Reserver
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
