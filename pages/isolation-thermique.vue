<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" md="12">
          <h1 class="text-center text-primary">AUDITS rénovation isolation thermique</h1>
        </v-col>
      </v-row>
      <v-row justify="space-between">
        <v-col cols="12" md="6">
          <h2 class="h5">L’isolation d’un maison et pourquoi ?</h2>

          <p>
            L’<strong>isolation thermique</strong> fait partie des travaux
            incontournables pour réduire vos dépenses énergétiques, améliorer
            votre confort ou faire augmenter la valeur de votre maison.
          </p>
          <p>
            L'<strong>isolation thermique</strong> d'une maison, en particulier
            du toit et des murs extérieurs, peut empêcher plus de 50 % des
            pertes de chaleur.
          </p>
          <p>
            La régulation de la ventilation et de l'humidité optimisent
            l'efficacité de l'<strong>isolation thermique</strong> et augmentent
            la durée de vie des isolants
          </p>
          <div>
            <img src="deperdition.jpg" class="deperdition" alt="" />
          </div>
          <p class="h3">
            Isoler sa maison pour gagner en confort et faire des économies
          </p>
          <p>
            L'isolation d'une maison est importante pour plusieurs raisons :  
            en effet en réduisant les échanges thermiques avec l'extérieur,
            l'<strong>isolation thermique</strong>
            permet d'éviter les variations de température au cours de la journée
            et ainsi de faire des économies de chauffage et de climatisation.
          </p>
          <p>
            L'<strong>isolation thermique</strong> contribue à faire baisser la
            consommation d'énergie, l'isolation participe à diminuer votre
            empreinte carbone. La température étant plus stable, les occupants
            de la maison ne ressentent pas de courants d'air. En hiver comme en
            été, l’amélioration du confort thermique peut avoir un impact sur le
            repos, la gestion du stress, le sommeil... *
          </p>
          <p>
            La valeur de la maison augmente aprés avoir effectuer les travaux
            d'<strong>isolation thermique</strong> : en cas de vente,
            le Diagnostic de Performance Énergétique, obligatoirement joint au
            dossier des documents techniques, est considéré comme un élément
            important par la plupart des acheteurs.
          </p>
          <p>
            L'<strong>'isolation thermique</strong> contribue aussi au maintien
            du niveau d'hygrométrie et peut aider à prévenir certains soucis
            d'humidité. Bien que ce ne soit pas leur rôle premier, les
            <strong>isolants thermiques</strong> atténuent tous aussi la
            diffusion des bruits (à des niveaux différents), ils luttent donc
            aussi contre la pollution sonore.
          </p>
          <h3 class="h3">Les différentes techniques d'isolation</h3>
          <p>
            L'<strong>isolation thermique par l'intérieur</strong>, rapide et
            peu onéreuse, est la plus courante en France.
          </p>
           
          <p>
            L'<strong>isolation thermique par l'extérieur</strong> : souvent
            plus efficace que l'isolation par l'intérieur, elle évite aussi de
            perdre du volume habitable. Très connue pour les murs, cette méthode
            peut aussi être appliquée au niveau de la toiture : l'isolant est
            alors mis en place après dépose de la couverture.
          </p>
          <p>
            L'<strong>isolation répartie</strong>: réservée aux chantiers de
            construction ou aux projets de rénovation affectant des parties
            porteuses du bâtiment. Elle consiste à placer les matériaux isolants
            directement au niveau de la structure, sans créer une épaisseur
            supplémentaire.
          </p>
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
        { hid: "og:image", name: "og:image", content: this.isolation.img },

        {
          hide: "twitter:card",
          name: "twitter:card",
          content: this.isolation.img ? "summary_large_image" : "summary",
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
      title: "AUDITS rénovation | Travaux d'isolation thermique",
      description:
        "audits rénovation |Les travaux d'isolation bénéficient d'une TVA réduite. Le taux de 5,5 % s'applique directement sur votre facture. AUDITS rénovation effectue les démarches pour vous.",
      img: require("~/static/isolation.jpg"),
    },
  }),
};
</script>
<style scoped>
.deperdition {
  max-width: 300px;
}
</style>
