<template>
  <div>
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
              <h1 itemprop="name" class="h2 text-center text-primary">
                Peinture
              </h1>
              <v-img
                itemprop="image"
                src="peintre.jpg"
                title="Entreprise de peinture"
                alt="Entreprise de peinture"
                max-width="700px"
              ></v-img>
              <meta itemprop="ratingValue" content="4.7" />
              <meta itemprop="bestRating" content="5" />
              <span itemprop="reviewRating">
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
              </span>
            </div>
          </v-col>
          <v-col
            cols="12"
            md="12"
            itemtype="https://schema.org/LocalBusiness"
            itemprop="description"
          >
            <span itemprop="name"> Audits rénovation</span> est une
            <span itemprop="genre">entreprise de peinture</span>
            et met son expérience au service des professionnels et des
            particuliers. Son équipe est composée de professionnels
            expérimentés, ayant de multiples compétences dans divers corps de
            métiers. Tous qualifiés ouvriers ou artisans, ils mettent leurs
            compétences à votre service pour un travail de qualité et une
            finition irréprochable. Grâce à leurs compétences complémentaires,
            ils sont en mesure de réaliser des chantiers très variés de travaux
            de peinture de décoration et de rénovation.
          </v-col>

          <v-col cols="12" md="12">
            <h1>Quel type de peinture dois-je choisir ?</h1>
            <p>
              Il existe une multitude de sortes de peintures. C’est pourquoi
              nous vous conseillons de demander conseil à des professionnels au
              moment de choisir la vôtre. Vous serez ainsi certain d’offrir le
              meilleur à votre support.
            </p>
            <ul>
              <span class="h3">
                Les différents types de peintures que nous utilisons pour
                rénover l'intérieur
              </span>

              <li>La peinture acrylique, dite peinture à l’eau</li>
              <li>La peinture glycéro, dite à l’huile</li>
              <li>La peinture pour bois</li>
              <li>La peinture pour fer</li>
              <li>La peinture pour radiateur</li>
              <li>La peinture pour la cuisine et la salle de bains</li>
            </ul>
          </v-col>

          <v-col cols="12" md="12">
            <ul>
              <span class="h3">
                Les différents types de peintures que nous utilisons pour
                rénover l'extérieur
              </span>

              <li>La peinture pliolite</li>
              <li>La peinture hydro-pliolite</li>
              <li>La peinture acrylique</li>
              <li>la peinture siloxane</li>
              <li>La peinture pour bois</li>
              <li>La peinture pour fer</li>
            </ul>
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
    <div>
      <NosRealisations />
    </div>

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
      title: "Entreprise de peinture | Audits rénovation",
      description:
        "Entreprise de peinture | Un projet de peinture intérieur ou extérieur, ravelement de façade ou nettoyage de façade, Audits rénovation mets à votre disposition une équipe dédiée",

      url: "https://auditsrenovation.fr/peinture/",
    },
  }),
};
</script>
