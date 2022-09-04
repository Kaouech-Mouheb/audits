<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" md="12">
          <h1 class="text-center text-primary">AUDITS rénovation, Rénovation de votre habitat</h1>
        </v-col>
      </v-row>
      <v-row justify="space-between">
        <v-col cols="12" md="6">
          <section>
            <h1 class="h4">La rénovation et pourquoi ?</h1>
            <p>
              La rénovation permet de moderniser une habitation ou une pièce
              rapidement, sans dépenser une somme trop conséquente. Elle peut
              s'apparenter à un rafraîchissement des peintures et changement des
              revêtements de sol, mais aussi à la rénovation d'une cuisine ou la
              réfection d'une salle de bain. Très plébiscitée, la rénovation de
              combles offre la possibilité d'exploiter tout le potentiel de
              votre maison pour créer une suite parentale, un bureau ou encore
              un dortoir pour enfants.
            </p>
          </section>
          <section>
            <h1 class="h4">Rénovation énergétique et pourquoi ?</h1>
            <p>
              Avec l’aide de l’État MaPrimeRénov’, les propriétaires se penchent
              de plus en plus sur la question de leurs dépenses énergétiques
              pour leurs maisons. Optimiser l’isolation, changer de système de
              chauffage, remplacer le simple vitrage par du double vitrage sont
              autant de pistes à explorer pour limiter les déperditions
              énergétiques et gagner en confort thermique dans votre maison.
              L’Ademe estime que 30 % des déperditions de chaleur se font par le
              toit et près de 20 % par les fenêtres. La question de la
              rénovation de l’isolation de votre maison doit donc s’inscrire
              dans vos priorités pour alléger vos factures de chauffage, mais
              aussi de bénéficier d’un confort aussi agréable en hiver qu’en
              été.
            </p>
            <div>
              <img src="bureau.jpg" class="deperdition" alt="" />
            </div>

            <h2 class="h5">La rénovation et les travaux de second-œuvre</h2>
            <ul>
              <li>l'isolation thermique et phonique</li>
              <li>la ventilation la création de cloisons intérieures</li>
              <li>l'électricité</li>
              <li>la plomberie</li>
              <li>les menuiseries intérieures</li>
              <li>les équipements de chauffage</li>
              <li>les revêtements (sols, murs, plafond)</li>
              <li>aménagement de comble perdu</li>
            </ul>
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
      title: this.renovationSeo.title,
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: this.renovationSeo.description,
        },

        {
          hid: "og:title",
          name: "og:title",
          content: this.renovationSeo.title,
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.renovationSeo.description,
        },
        { hid: "og:url", name: "og:url", content: this.renovationSeo.url },
        { hid: "og:image", name: "og:image", content: this.renovationSeo.img },

        {
          hide: "twitter:card",
          name: "twitter:card",
          content: this.renovationSeo.img ? "summary_large_image" : "summary",
        },
        {
          hide: "twitter:site",
          name: "twitter:site",
          content: this.renovationSeo.url,
        },
      ],
    };
  },
  data: () => ({
    renovationSeo: {
      title: "Audits rénovation - rénovation énergétique de votre logement",
      description:
        "AUDITS rénovation | besoin de réaliser des travaux de construction ou de rénovation ? AUDITS rénovation peut répondre à tous vos projets de rénovation, rénovation thermique et aménagement de comble. Audits rénovation siége : Choisy Le Roi",
      url: "https://auditsrenovation.fr",
      img: require("~/static/appartement.jpg"),
    },
  }),
};
</script>
<style scoped>
.deperdition {
  max-width: 600px;
}
@media (max-width:575.98px){
  .deperdition{
      max-width: 300px;
  }
}
</style>
