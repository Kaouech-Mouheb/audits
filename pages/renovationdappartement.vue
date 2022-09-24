<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" md="8">
          <v-row>
            <v-col
              cols="12"
              md="12"
              itemscope
              itemtype="https://schema.org/AggregateRating"
            >
              <div
                itemprop="itemReviewed"
                itemscope
                itemtype="https://schema.org/LocalBusiness"
              >
                <h1 itemprop="name" class="h4 text-primary text-center">
                  Rénovation appartement
                </h1>
                <v-img
                  itemprop="image"
                  src="appartement92.jpg"
                  title="rénovation appartement"
                  alt="rénovation appartement"
                  max-width="700px"
                ></v-img>
                <meta itemprop="ratingValue" content="4.7" />
                <meta itemprop="bestRating" content="5" />
                <v-rating
                  :value="4.7"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>
                <span class="text-secondary">
                  Basé sur <span itemprop="ratingCount">14</span> évaluations
                  d'utilisateurs
                </span>
              </div>
              <hr />

              <h2 class="h5">Rénovation appartement à paris</h2>
            </v-col>
            <v-col
              cols="12"
              md="12"
              itemscope
              itemtype="https://schema.org/Person"
              itemprop="description"
            >
              Vous venez d'acheter un appartement et vous souhaitez le
              <strong>rénover</strong> ?
              <br />
              <span itemprop="name">Audits rénovation est une</span>
              <span itemprop="genre">entreprise de rénovation</span>
              qui vous accompagnent de votre projet de
              <strong>rénovation</strong> et nous mettons à votre disposition
              notre savoir-faire et nous Équipes expérimentées. <br />
              Que vous ayez déjà quelques notions ou que cette étape vous semble
              complexe, n'oubliez pas qu'une
              <strong>rénovation d'appartement</strong> doit se planifier avec
              sérieux.
            </v-col>

            <v-col cols="12" md="12">
              <h3 class="h3">Pour quoi Audits rénovation</h3>
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
      <div>
        <NosRealisations />
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
