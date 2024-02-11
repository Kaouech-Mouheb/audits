<template>
  <v-container>
   
    <h1 class="text-center h3 text-primary mt-4 mb-4">
      Rénovez la menuiserie de votre maison et donnez-lui une nouvelle allure
    </h1>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card class="img">
          <v-img src="fenetre.jpg" />
        </v-card>
      </v-col>
    </v-row>
    <hr />
    <v-row>
      <v-col cols="12" md="12">
        <section>
          <p class="h5 bg-light p-2">
            Audits rénovation, votre spécialiste en rénovation vous accompagne
            dans votre projet de remplacement de votre
            <strong>menuiserie extérieure </strong> incluant
            <strong> portes et fenêtres PVC ou aluminium</strong>.
          </p>

          <v-img src="/fabriquenfrance.jpg" max-width="400" />
          <p class="bg-light p-2">
            Profitez de la puissance d'une entreprise tout corps d'état dans
            votre projet de remplacement de fenêtre, en effet le
            <strong>remplacement de votre menuiserie extérieur</strong> engage
            généralement des frais complémentaires, au-delà de la
            <strong
              >fourniture et pose de vos portes et fenêtres en PVC ou
              Aluminium</strong
            >. <br />
            Les frais sans lier aux dégâts qui sont causés par la dépose de la
            menuiserie existante, notamment des reprises en enduit et peinture
            et dans certains cas d'autres travaux seront nécessaires.
          </p>
        </section>
        <section>
          <v-alert type="info" variant="outlined">
            <h1 class="h5">
              Demander un devis gratuit pour le remplacement de vos fenêtres ou
              Portes
            </h1>
          </v-alert>

          <div>
            <FormulaireFenetre />
          </div>
        </section>
        <section>
          <Etape />
        </section>
        <section>
          <Avis />
          <v-divider></v-divider>
        </section>

        <section class="bg-light p-2">
          <h1 class="h2 text-center h5 text-primary">
            Améliorez l'esthétique et l'efficacité énergétique de votre maison
            avec notre menuiserie sur mesure (fenêtre PVC, aluminum et portes)
          </h1>
          <p>
            <b>
              Le remplacement de la menuiserie extérieur de votre maison,
              notament les portes et les fenêtres est une étape importante pour
              améliorer votre maison à la fois sur le planesthétique et
              énergétique.
              <br />
              Que vous souhaitiez remplacer des fenêtres, des portes-fenêtres ou
              des portes d'entrée, ce guide vous fournira toutes les
              informations nécessaires pour mener à bien ce projet.
              <br />
              Découvrez les avantages du remplacement de la menuiserie, les
              étapes clés du processus et les considérations essentielles à
              prendre en compte.
            </b>
          </p>
          <h2 class="h5 text-primary">
            Avant de vous mettre à rénover vos fenêtres.
          </h2>
          <ul>
            <li>
              <h3 class="h5">Évaluation de la situation actuelle :</h3>
              <p>
                Avant de commencer le remplacement de la menuiserie (vos fenêtre
                ou portes extérieur), il est important d'évaluer l'état actuel
                de vos fenêtres et portes. Examinez attentivement l'usure, les
                fuites d'air, les problèmes d'isolation et les dommages
                éventuels. Cette évaluation vous aidera à déterminer si le
                remplacement complet est nécessaire ou si des réparations
                partielles peuvent suffire.
              </p>
            </li>

            <li>
              <h3 class="h5">Choix des nouveaux matériaux :</h3>
              <p>
                Lors du remplacement de la menuiserie (portes et fenêtre
                extérieur), vous aurez la possibilité de choisir de nouveaux
                matériaux. Les options les plus courantes incluent le PVC, le
                bois, l'aluminium et les composites. Chaque matériau présente
                ses propres avantages en termes d'esthétique, d'isolation, de
                durabilité et d'entretien. Prenez le temps de comparer les
                différentes options pour choisir celle qui convient le mieux à
                votre style et à vos besoins. Chez Audits rénovation nous avons
                formé des experts pour répondre à votre besoin et vous
                recommander les matériaux et les configurations à mettre en
                place par rapport à votre budget
              </p>
            </li>

            <li>
              <h3 class="h5">
                Sélection des caractéristiques et des fonctionnalités :
              </h3>
              <p>
                Outre le choix du matériau, vous devrez également prendre en
                compte d'autres caractéristiques et fonctionnalités pour votre
                nouvelle menuiserie. Cela peut inclure des options telles que
                des vitrages isolants, des systèmes de sécurité avancés, des
                mécanismes d'ouverture faciles à utiliser, des stores intégrés,
                etc. Pensez à vos besoins spécifiques en termes d'isolation
                acoustique, de protection solaire et de sécurité pour faire les
                bons choix.
              </p>
            </li>

            <li>
              <h3 class="h5">Préparation du chantier et installation :</h3>
              <p>
                Avant l'installation, assurez-vous de préparer le chantier en
                dégageant l'espace autour des fenêtres ou des portes concernées.
                Le jour de l'installation, les professionnels retireront les
                anciennes menuiseries avec soin, prépareront les ouvertures et
                installeront les nouvelles fenêtres ou portes. Veillez à ce que
                l'installation soit effectuée selon les normes de l'industrie
                pour garantir une étanchéité optimale et une performance
                thermique maximale.
              </p>
            </li>

            <li>
              <h3 class="h5">Finition et entretien :</h3>
              <p>Une fois l'installation</p>
            </li>
          </ul>
        </section>
        <v-divider></v-divider>
        <section class="bg-light p-2">
          <h1 class="text-primary h5">
            Le remplacement de fenêtres et de portes extérieures présente de
            nombreux avantages. Voici quelques-uns des principaux avantages :
          </h1>
          <ul>
            <li>
              <h2 class="h5">Efficacité énergétique :</h2>
              <p>
                Les nouvelles fenêtres et portes extérieures sont conçues avec
                des technologies avancées qui améliorent l'isolation thermique
                de votre maison. Elles réduisent les pertes de chaleur en hiver
                et l'infiltration d'air frais en été, ce qui vous permet de
                réduire votre consommation d'énergie et de réaliser des
                économies sur vos factures de chauffage et de climatisation.
              </p>
            </li>
            <li>
              <h2 class="h5">Confort accru :</h2>
              <p>
                Les fenêtres et portes de qualité supérieure offrent une
                meilleure étanchéité à l'air, réduisant ainsi les courants d'air
                indésirables et les infiltrations d'humidité. Cela crée un
                environnement intérieur plus confortable, avec une température
                plus constante et une réduction des bruits extérieurs.
                Amélioration de l'esthétique : Le remplacement des fenêtres et
                portes extérieures peut donner un nouveau look à votre maison.
                Vous pouvez choisir parmi une variété de styles, de finitions et
                de couleurs pour correspondre à votre esthétique personnelle.
                Cela peut également augmenter la valeur de votre propriété et
                améliorer son attrait visuel.
              </p>
            </li>
            <li>
              <h2 class="h5">Réduction des entretiens :</h2>
              <p>
                Les nouvelles fenêtres et portes sont souvent fabriquées avec
                des matériaux modernes et durables qui nécessitent moins
                d'entretien. Par exemple, les fenêtres en PVC ne se dégradent
                pas, ne se fissurent pas et ne nécessitent pas de peinture
                régulière. Cela vous permet d'économiser du temps et des efforts
                en matière d'entretien.
              </p>
            </li>
            <li>
              <h2 class="h5">Sécurité renforcée :</h2>
              <p>
                Les fenêtres et portes modernes sont équipées de dispositifs de
                sécurité avancés tels que des serrures multipoints, des verrous
                renforcés et des vitrages sécurisés. Cela améliore la sécurité
                de votre maison en décourageant les tentatives d'effraction.
              </p>
            </li>
            <li>
              <h2 class="h5">Réduction des bruits :</h2>

              <p>
                Les nouvelles fenêtres et portes extérieures peuvent aider à
                réduire les nuisances sonores provenant de l'extérieur. Elles
                sont dotées de caractéristiques d'isolation acoustique qui
                minimisent les bruits indésirables, créant ainsi un
                environnement intérieur plus paisible.
              </p>
            </li>
            <li>
              <h2 class="h5">Durabilité et longévité :</h2>
              <p>
                Les fenêtres et portes de qualité supérieure sont conçues pour
                durer. Elles sont résistantes aux intempéries, aux rayons UV et
                à la décoloration, ce qui garantit qu'elles restent en bon état
                esthétique et fonctionnel pendant de nombreuses années.
              </p>
            </li>
          </ul>
          <b>
            En considérant ces avantages, le remplacement de vos fenêtres et
            portes extérieures peut être un investissement judicieux pour
            améliorer le confort, l'efficacité énergétique et l'esthétique de
            votre maison.
          </b>
        </section>
      </v-col>
    </v-row>
    <v-row> <Footer />> </v-row>
  </v-container>
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
      title:
        "Transformez votre maison avec nos fenêtres de qualité supérieure et économes en énergie",
      description:
        "Découvrez tous les avantages du changement de fenêtre pour améliorer l'esthétique, l'isolation et l'efficacité énergétique de votre maison. Obtenez des conseils pratiques sur le choix des matériaux, les fonctionnalités, les étapes d'installation et trouvez des professionnels qualifiés pour mener à bien votre projet de remplacement de fenêtre.",
      url: "https://auditsrenovation.fr/changement-fenêtre/",
    },
  }),
};
</script>