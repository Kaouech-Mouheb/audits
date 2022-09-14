<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" md="8">
          <v-row>
            <v-col cols="12" md="12">
              <h1 class="h2 text-center text-primary">
                Entreprise de ravalement de façade
              </h1>
              <v-img
                src="/ravalement.jpg"
                title="ravalement de façade"
                alt="ravalement de façade"
                max-width="700px"
              ></v-img>
            </v-col>
            <v-col cols="12" md="12">
              Le ravalement ou la rénovation de façade est une suite d'actions
              qui vise à remettre en état les murs extérieurs de votre logement.
              <br />
              En effet, avec le temps, votre bâtiment est susceptible d'être
              affecté par des mouvements de structure, avec pour conséquences
              fissures et lézardements des murs, qui peuvent elles-même
              déboucher sur une isolation dégradée ou sur des infiltrations
              d'eau. C'est pourquoi des travaux de ravalement réguliers sont
              indispensables pour pallier ces problématiques.
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

      url:"https://auditsrenovation.fr/ravalement-façade/"
    },
  }),
};
</script>
