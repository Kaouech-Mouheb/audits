<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" md="12">
          <h1 class="text-center text-primary">
            AUDITS rénovation, Rénovation de la toiture
          </h1>
        </v-col>
      </v-row>
      <v-row justify="space-between">
        <v-col cols="12" md="6">
          <section>
            <h1 class="h4">La rénovation de toiture et pourquoi ?</h1>
            <p>
              Le toit est la surface ou couverture couvrant la partie supérieure
              d'un édifice, permettant principalement de protéger son intérieur
              contre les intempéries et l'humidité.<strong> Une toiture</strong>
              (l'ensemble des toits d'un bâtiment) est une couverture
              généralement supportée par une charpente.
            </p>
            <p>
              La restauration de toiture va vous permettre d’assurer la totale
              étanchéité de votre maison et vous mettre à l’abri pour de
              nombreuses années. Porosité de la couverture, tuiles cassées,
              chéneaux percés… voilà les raisons qui peuvent vous pousser à
              engager des travaux !
            </p>
          </section>
          <section>
            <h1 class="h4">Isolation de toiture et pourquoi ?</h1>
            <p>
              Une toiture mal isolée est responsable de 30 % des déperditions
              énergétiques dans une maison. C’est pourquoi, depuis le 1er
              janvier 2017, la réalisation de travaux d’isolation thermique est
              obligatoire dès lors que vous remplacez au moins 50% de la
              couverture de votre habitation. Ces travaux, dits « travaux
              embarqués », peuvent prendre plusieurs formes :
            </p>
            <div>
              <img src="isolation-toiture.jpg" class="deperdition" alt="" />
            </div>

            <h2 class="h5">1. L'isolation de toiture par l'extérieur</h2>
            <p>
              L’opération consiste, avant de poser les éléments de couvertures
              (tuiles, ardoises,…) à disposer des panneaux isolants sur la
              charpente. C’est la solution la plus performante (absence de pont
              thermique, étanchéité parfaite)… mais aussi la plus coûteuse.
            </p>

            <h3 class="h5">2. L’isolation par l’intérieur</h3>
            <p>
              Si votre budget ne vous le permet pas, vous pouvez toujours opter
              pour bonne isolation de toiture en procédant à une classique
              isolation sous rampants : les panneaux d’isolant sont installés
              sous les pentes du toit puis recouverts d’un film d’étanchéité et
              enfin de plaques de plâtre pour la finition.
            </p>

            <h4 class="h5">3. L’isolation des combles perdus</h4>
            <p>
              Si vos combles ne sont pas aménagés, la solution alternative à
              l’isolation de la toiture, c’est l’isolation des combles qui
              consiste à dérouler un isolant sous forme de panneaux sur le
              plancher des combles ou en projetant un isolant en vrac sur le
              plancher des combles. Ces deux solutions sont peu coûteuses et
              peuvent venir en complément d’une des autres techniques.
            </p>
          </section>
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
      title: this.toitureSeo.title,
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: this.toitureSeo.description,
        },

        {
          hid: "og:title",
          name: "og:title",
          content: this.toitureSeo.title,
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.toitureSeo.description,
        },
        { hid: "og:url", name: "og:url", content: this.toitureSeo.url },
        { hid: "og:image", name: "og:image", content: this.toitureSeo.img },

        {
          hide: "twitter:card",
          name: "twitter:card",
          content: this.toitureSeo.img ? "summary_large_image" : "summary",
        },
        {
          hide: "twitter:site",
          name: "twitter:site",
          content: this.toitureSeo.url,
        },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://auditsrenovation.fr/toiture/",
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
    toitureSeo: {
      title: "Audits rénovation - Travaux de couverture",
      description:
        "Audits rénovation intervient sur tous types de couverture Contactez nous pour un devis sur mesure. Entretien, Rénovation et Réparation de toiture Travail de qualité devis Gratuit. Audits rénovation siége : Choisy Le Roi",
      url: "https://auditsrenovation.fr/toiture/",
      img: require("~/static/isolation-toiture.jpg"),
    },
  }),
};
</script>
<style scoped>
.deperdition {
  max-width: 600px;
}
@media (max-width: 575.98px) {
  .deperdition {
    max-width: 300px;
  }
}
</style>
