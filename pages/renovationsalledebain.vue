<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" md="8">
          <v-row>
            <v-col cols="12" md="12">
              <div>
                <h1>
                  AUDITS rénovation (SDB) salle de bain
                </h1>
                <v-img
                  itemprop="image"
                  src="bain.jpg"
                  title="rénovation appartement"
                  alt="rénovation appartement"
                  max-width="700px"
                ></v-img>

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

              <h2 class="h5">Rénovation salle de bain à paris</h2>
            </v-col>
            <v-col
              cols="12"
              md="12"

            >
              L’esthétique de votre salle de bain commence à dater ? ou n’est
              pas du tout à votre goût et vous souhaitez la
              <strong>rénover</strong> ?
              <br />
              <span>Audits rénovation est une</span>
              <span>entreprise de rénovation</span>
              qui vous accompagnent de votre projet de
              <strong>rénovation de salle de bain</strong> et nous mettons à
              votre disposition notre savoir-faire et nous équipes
              expérimentées. <br />
              Même avec un budget serré, il est parfaitement possible de rénover
              sa salle de bain à moindre coût.
            </v-col>

            <v-col cols="12" md="12">
              <section>
                <h1 class="h3">
                  Quel budget pour une rénovation complète de salle de bains ?
                </h1>
                <p>
                  La rénovation complète d’une salle de bains consiste, quant à
                  elle, à « mettre à nu » l’espace pour le modifier en
                  profondeur : refaire les circuits de plomberie et
                  d’électricité à neuf, remplacer les menuiseries (porte,
                  fenêtres) si besoin, isoler la pièce, installer un système de
                  ventilation, cloisonner et réorganiser l’espace, poser des
                  revêtements (carrelage, peinture) et, bien entendu, installer
                  de nouveaux équipements (baignoire, douche, meuble…). Si vous
                  souhaitez une rénovation complète de votre salle de bains,
                  prévoyez un budget global compris entre 1100 et 1700 €/m², en
                  fonction de l’ampleur des travaux et de la qualité des
                  produits choisis.
                </p>
              </section>
            </v-col>
            <v-col>
              <section>
                <h1 class="h3">
                  Quel est le coût d’une rénovation partielle de salle de bains
                  ?
                </h1>
                <p>
                  La réhabilitation partielle d'une salle de bain se compose de
                  rafraîchir l'existant, sans apporter de modifications.
                  structurelles (cloisons, murs) ni à de gros travaux de
                  plomberie. Cependant, ce type de rénovation, dit aussi.
                  légère, intègre le changement des équipements - baignoire,
                  douche, lavabo… . Pour ce type de réalisation, prévoyez un
                  budget d’environ 550 €/m².
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
        <SalleDeBainCard />
      </div>

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
        rel: 'canonical',
        href: "https://auditsrenovation.fr/renovationsalledebain/",
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico', // Assurez-vous que le chemin de l'icône est correct
      },
    ],
    };
  },
  data: () => ({
    isolation: {
      title: "Rénovation salle de bain | rénovation salle de bain prix m2",
      description:
        "Vous avez un projet de rénovation de salle de bain, une rénovation partielle de salle de bain ou la rénovation rénovation compléte de votre salle de bain. Audits rénovation vous accompagne dans votre projet. ",

      url: "https://auditsrenovation.fr/renovationsalledebain/",
    },
  }),
};
</script>
