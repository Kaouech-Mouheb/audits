<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" md="8">
          <v-row>
            <v-col cols="12" md="12">
              <h1 class="h4 text-center">
                Rénovation appartement : <br />
                rénovation appartement prix m2
              </h1>
              <v-img
                src="/renovation-app92.bmp"
                title="rénovation appartement"
                alt="rénovation appartement"
                max-width="700px"
              ></v-img>
            </v-col>
            <v-col cols="12" md="12">
              Vous venez d'acheter un appartement et vous souhaitez le
              <strong>rénover</strong> ?
              <br />
              Audits rénovation vous accompagnent de votre projet de
              <strong>rénovation</strong> et nous mettons à votre disposition
              notre savoir-faire et nous Équipes expérimentées. <br />
              Que vous ayez déjà quelques notions ou que cette étape vous semble
              complexe, n'oubliez pas qu'une
              <strong>rénovation d'appartement</strong> doit se planifier avec
              sérieux.
            </v-col>

            <v-col cols="12" md="12">
              <h2 class="h3">Pour quoi Audits rénovation</h2>
              <ul>
                <li>Travail forfitaire, les m2 ne comptent plus</li>
                <li>Bonne rapport qualité prix de rénovation</li>
                <li>
                  Entreprise TCP, confié votre projet à un seul professionnel
                </li>
                <li>Un forfait pour la rénovation salle de bain</li>
                <li>Un forfait pour la rénovation cuisine</li>
                <li>
                  Un forfait pour les travaux de rafraichissement et de peinture
                </li>
                <li>Travail soigné, équipe sérieuse + garantie décennale</li>
              </ul>
            </v-col>
            <v-col>
              Mener un chantier de <strong>rénovation</strong> de votre
              appartement ou de votre maison est l’occasion de donner une
              seconde jeunesse à votre habitat. <br />
              Une <strong>rénovation</strong> rend également possible
              l'intégration des dernières innovations dans votre maison ou
              appartement, que ce soit en termes de matériaux de rénovation, des
              équipements ou de votre consommation énergétique.
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="4">
          <FormulaireDevis />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="12">
          <h3 class="h4 text-primary">
            Nos dernières offres et promotions de rénovation
          </h3>
        </v-col>
        <v-col cols="12" md="4">
          <v-card :loading="loading" class="mx-auto my-12" max-width="374">
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>

            <v-img height="250" src="cuisine.jpeg"></v-img>

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
                rénovation compléte de votre cuisine, valable pour les cuisine
                de moins de 6m2
              </div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-title>Offre limité</v-card-title>

            <v-card-actions>
              <v-btn
                color="deep-purple lighten-2"
                text
                @click="reserve"
                href="#formDevis"
              >
                Réserver
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card :loading="loading" class="mx-auto my-12" max-width="374">
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
                votre salle de bain, valable pour les salles de bain de moins de
                4m2
              </div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-title>Offre limité</v-card-title>

            <v-card-actions>
              <v-btn
                color="deep-purple lighten-2"
                text
                @click="reserve"
                href="#formDevis"
              >
                Réserver
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card :loading="loading" class="mx-auto my-12" max-width="374">
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
              <v-btn
                color="deep-purple lighten-2"
                href="#formDevis"
                text
                @click="reserve"
              >
                Reserver
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <div>
      <Footer />
    </div>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: this.isolation.title,
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: this.isolation.description,
        },

        {
          hid: "og:title",
          name: "og:title",
          content: this.isolation.title,
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.isolation.description,
        },
        { hid: "og:url", name: "og:url", content: this.isolation.url },

        {
          hide: "twitter:card",
          name: "twitter:card",
        },
        {
          hide: "twitter:site",
          name: "twitter:site",
          content: this.isolation.url,
        },
      ],
    };
  },
  data: () => ({
    isolation: {
      title: "Rénovation appartement | rénovation appartement prix m2",
      description:
        "Vous avez un projet de rénovation appartement ou rénovation maison, une simple rénovation salle de bain ou la rénovation de votre cuisine. Audits rénovation vous accompagne dans vos projets de rénovation. ",

      url: "https://auditsrenovation.fr/renovation-dappartement/",
    },
  }),
};
</script>
