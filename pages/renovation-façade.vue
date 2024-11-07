<template>
  <div>
    <v-container>
      <h1 class="h2 text-center text-primary">Rénovation de façade</h1>
      <hr />
      <p>
        Le ravalement de façade : une transformation qui redonne vie à votre
        maison !
      </p>
      <v-row class="mt-4">
        <v-col cols="12" md="8">
          <v-row justify="center">
            <div>
              <v-img
                itemprop="image"
                src="/ravalement78/IMG_6.jpg"
                title="Rénovation de façade"
                alt="Rénovation de façade"
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
            <v-col cols="12" md="12">
              <h2 class="text-primary h4">
                Découvrez l'Art de la Rénovation Façade Lorsqu'il s'agit de
              </h2>
              <p>
                rénover votre espace de vie, le ravalement de façade se présente
                comme une option incontournable. Audits Rénovation, une
                entreprise spécialisée dans la rénovation façade, met à votre
                disposition son expertise pour sublimer l'apparence extérieure
                de votre maison.
              </p>
            </v-col>
            <v-col cols="12" md="12">
              <h3 class="text-primary h4">
                La Magie du Ravalement de Façade Le ravalement de façade ne se
              </h3>
              <p>
                limite pas à une simple mise à jour esthétique. C'est un
                processus qui va au-delà, englobant la réparation des fissures,
                le nettoyage en profondeur, et l'application de revêtements
                protecteurs. Chez Audits Rénovation, nous comprenons
                l'importance de chaque détail, faisant de votre maison un
                véritable chef-d'œuvre.
              </p>
            </v-col>
            <v-col>
              <h5 class="text-primary h4">
                Audits Rénovation : Votre Partenaire de Confiance Au cœur de
              </h5>
              <p>
                notre engagement envers l'excellence, Audits Rénovation se
                distingue par son approche méticuleuse. Notre équipe qualifiée
                assure un ravalement de façade qui répond à vos attentes les
                plus élevées. Nous utilisons des matériaux de qualité
                supérieure, garantissant une durabilité à long terme.
              </p>
            </v-col>
            <v-col cols="12" md="12">
              <div class="text-primary h4">
                La Signification de la Rénovation Façade La rénovation façade ne
              </div>
              <p>
                se contente pas d'embellir votre maison, elle protège également
                contre les éléments extérieurs. Audits Rénovation s'assure que
                chaque projet de ravalement de façade offre non seulement une
                esthétique exceptionnelle, mais également une résistance accrue
                aux intempéries.
              </p>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <h6 class="text-primary h4">
                Audits Rénovation : Des Solutions Personnalisées Chez Audits
              </h6>
              <p>
                Rénovation, nous comprenons que chaque maison est unique. C'est
                pourquoi nous offrons des solutions de ravalement de façade
                personnalisées, adaptées à vos besoins spécifiques. Nous mettons
                en avant votre style tout en préservant l'intégrité structurelle
                de votre demeure.
              </p>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <div class="text-primary h4">
                Un Investissement Qui Vaut la Peine Investir dans le ravalement
              </div>
              <p>
                de façade avec Audits Rénovation est un choix judicieux. Non
                seulement cela valorise votre propriété, mais cela crée
                également un environnement plus sain et plus agréable.
                Transformez votre espace de vie avec notre expertise et
                redécouvrez le charme de votre maison.
              </p>
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
      link: [
        {
          rel: "canonical",
          href: "https://auditsrenovation.fr/renovation-façade/",
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
      title: "Entreprise de ravalement de façade | Audits rénovation",
      description:
        "Entreprise de ravalement de façade | Un projet de rénovation de façade, ravelement de façade ou nettoyage de façade, Audits rénovation mets à votre disposition une équipe dédiée",

      url: "https://auditsrenovation.fr/renovation-façade/",
    },
  }),
};
</script>
  