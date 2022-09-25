<template>
  <div>
    <v-container itemscope itemtype="https://schema.org/LocalBusiness">
      <h1 itemprop="name" class="h2 text-center text-primary">
        Ravalement de façade
      </h1>
      <hr />
      <v-row class="mt-4">
        <v-col cols="12" md="8">
          <v-row justify="center" itemtype="https://schema.org/AggregateRating">
            <div
              itemprop="reviews"
              itemscope
              itemtype="https://schema.org/Rating"
            >
              <v-img
                itemprop="image"
                src="facade.jpg"
                title="Ravalement de façade"
                alt="ravalement de façade"
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
            <v-col
              cols="12"
              md="12"
              itemscope
              itemtype="https://schema.org/LocalBusiness"
            >
              <span itemprop="name"
                >Le ravalement ou la rénovation de façade</span
              >
              <span itemprop="description">
                est une suite d'actions qui vise à remettre en état les murs
                extérieurs de votre logement.
                <br />
                En effet, avec le temps, votre bâtiment est susceptible d'être
                affecté par des mouvements de structure, avec pour conséquences
                fissures et lézardements des murs, qui peuvent elles-même
                déboucher sur une isolation dégradée ou sur des infiltrations
                d'eau. C'est pourquoi des travaux de ravalement réguliers sont
                indispensables pour pallier ces problématiques.
              </span>
            </v-col>
            <v-col cols="12" md="12">
              <h2 class="h4">Les avantages d'un ravalement de façade</h2>
              Ravaler les façades de son logement permet de maintenir les murs
              en bon état et de préserver un bâtiment sain de toute
              infiltration. Il s’agit souvent de travaux lourds, à confier à des
              professionnels expérimentés. De plus, rénover sa façade permet de
              lutter contre les déperditions de chaleur et d'être bien chez soi
              toute l'année.
            </v-col>
            <v-col>
              Plusieurs types de travaux de façade peuvent être entrepris en
              fonction du diagnostic établi : ; Les finitions de façade :
              enduit, bardage ou parement, il existe un vaste panel de finitions
              pour votre façade.
              <ul>
                <span class="h3">
                  Les différents types de travaux de façade
                </span>
                <li>
                  Le nettoyage de façade : sablage, ponçage, nettoyage au
                  Kärcher, peeling, nettoyage chimique etc.
                </li>

                <li>
                  La rénovation de façade : Une fois la façade nettoyée et
                  traitée, les opérations de rénovation peuvent commencer :
                  rebouchage des fissures, rénovation ou remplacement des
                  joints.
                </li>
                <li>
                  Le traitement de façade : Une fois votre façade nettoyée,
                  l'application d'un traitement adapté s'impose, qui dépendra de
                  l'état de vos murs extérieurs.
                </li>
              </ul>
            </v-col>
            <v-col cols="12" md="12">
              <ul>
                <span class="h3">
                  Quand le ravalement de façade est nécessaire ?
                </span>

                <li>Décollement de la peinture ou de l'enduit</li>
                <li>Les fissures</li>
                <li>L'efflorescence (dépôt de sel)</li>
                <li>
                  L'altération de la couleur (dû à la pollution atmosphérique
                  et/ou biologique)
                </li>
                <li>Dégradation des joints de la façade..</li>
              </ul>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <ul>
                <span class="h3"> Les étapes d'un ravalement de façade </span>
                <li>Préparation du chantier et mise en sécurité</li>
                <li>Nettoyage et/ou décapage</li>
                <li>Réparation et traitement</li>
                <li>Finitions</li>
                <li>Protection</li>
              </ul>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="4">
          <FormulaireDevis />
        </v-col>
      </v-row>
      <v-row>
        <Facade />
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
      title: "Entreprise de ravalement de façade | Audits rénovation",
      description:
        "Entreprise de ravalement de façade | Un projet de rénovation de façade, ravelement de façade ou nettoyage de façade, Audits rénovation mets à votre disposition une équipe dédiée",

      url: "https://auditsrenovation.fr/ravalement-façade/",
    },
  }),
};
</script>
