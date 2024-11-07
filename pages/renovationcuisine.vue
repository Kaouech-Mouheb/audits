<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" md="8">
          <v-row>
            <v-col cols="12" md="12">
              <div>
                <h1 class="h3 text-primary text-center h-renovation">
                  Rénovation de cuisine
                </h1>
                <hr>
                <img
                  src="/howens_background.jpg"
                  title="rénovation de cuisine"
                  alt="rénovation de cuisine"
                  style="width: 100%"
                  class="img-fluid"
                />

                <v-rating
                  :value="4.7"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>
                <span class="text-secondary">
                  Basé sur <span>14</span> évaluations d'utilisateurs
                </span>
              </div>
              <hr />

              <h2 class="h5">
                Vous avez un projet de rénovation de cuisine à paris ?
              </h2>
              <p>
                Pour la rénovation de votre cuisine audits rénovation posséde
                une partenarait avec Howdens Cuisine, LEADER EUROPÉEN ET N°1 DE
                LA CUISINE EN ANGLETERRE !
              </p>
              <v-btn dark color="red" href="https://www.flipsnack.com/howdens/howdens_cuisines_catalogue/full-view.html" target="_blank">
                Consultez le catalogue HOWDENS
              </v-btn>
            </v-col>
            <v-col cols="12" md="12">
              L’esthétique de votre cuisine commence à dater ? ou n’est pas du
              tout à votre goût et vous souhaitez la
              <strong>rénover</strong> ?
              <br />
              <span>Audits rénovation est une</span>
              <span>entreprise de rénovation</span>
              qui vous accompagnent de votre projet de
              <strong>rénovation de cuisine</strong> et nous mettons à votre
              disposition notre savoir-faire et nous équipes expérimentées.
              <br />
              Même avec un budget serré, il est parfaitement possible de rénover
              votre cuisine à moindre coût.
            </v-col>

            <v-col cols="12" md="12">
              <section>
                <h1 class="h3">
                  Quel budget pour une rénovation complète de cuisine?
                </h1>
                <p>
                  La rénovation complète d’une cuisine consiste, quant à elle, à
                  « mettre à nu » l’espace pour le modifier en profondeur :
                  refaire les circuits de plomberie et d’électricité à neuf,
                  remplacer les menuiseries (porte, fenêtres) si besoin, isoler
                  la pièce, installer un système de ventilation, cloisonner et
                  réorganiser l’espace, poser des revêtements (carrelage,
                  peinture) et, bien entendu, installer de nouveaux équipements
                  (évier, électroménager, meuble…). Si vous souhaitez une
                  rénovation complète de votre cuisine, prévoyez un budget
                  global compris entre 850 et 1700 €/m², en fonction de
                  l’ampleur des travaux et de la qualité des produits choisis.
                </p>
              </section>
            </v-col>
            <v-col>
              <section>
                <h1 class="h3">
                  Quel est le coût d’une rénovation partielle de cuisine ?
                </h1>
                <p>
                  La réhabilitation partielle d'une cuisine se compose de
                  rafraîchir l'existant, sans apporter de modifications.
                  structurelles (cloisons, murs) ni à de gros travaux de
                  plomberie. Cependant, ce type de rénovation, dit aussi.
                  légère, intègre le changement des équipements - évier,
                  électroménager, meuble… . Pour ce type de réalisation,
                  prévoyez un budget d’environ 450 €/m².
                </p>
              </section>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="4">
          <FormulaireDevis />
        </v-col>
      </v-row>

      <div>
        <Promotions />
      </div>
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
      link: [
        {
          rel: "canonical",
          href: "https://auditsrenovation.fr/renovationcuisine/",
        },
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico", // Assurez-vous que le chemin de l'icône est correct
        },
      ],
    };
  },
  data: () => ({
    isolation: {
      title: "AUDITS Rénovation | Rénovation de cuisine",
      description:
        "Vous avez un projet de rénovation de cuisine, une rénovation partielle de cuisine ou la rénovation compléte de votre cuisine. Audits rénovation vous accompagne dans votre projet. ",

      url: "https://auditsrenovation.fr/renovationcuisine/",
    },
  }),
};
</script>
<style scoped>
.h-renovation {
  text-shadow: 1px 1px #ff0000;
  font-weight: bold;
  padding: 5px;
}
</style>
