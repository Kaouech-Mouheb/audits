<template>
  <v-footer class="bg-light">
    <v-container>
      <v-row>
        <v-col cols="12" md="3">
          <NuxtLink to="/renovationdappartement">
            <h3 class="h5 m-4">
              Rénovation
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-box-arrow-up-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                />
                <path
                  fill-rule="evenodd"
                  d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                />
              </svg>
            </h3>
          </NuxtLink>
          <v-divider class="mx-4" color="white"></v-divider>
          <ul v-for="i in itemsRenovation" :key="i.name">
            <span v-if="i.path">
              <NuxtLink :to="i.path">
                <li class="list-unstyled">
                  {{ i.name }}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-box-arrow-up-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                    />
                  </svg>
                </li>
              </NuxtLink>
            </span>
            <span v-else>
              <li class="list-unstyled">{{ i.name }}</li>
            </span>
          </ul>
        </v-col>
        <v-col cols="12" md="3">
          <NuxtLink to="/ravalement">
            <h3 class="h5 m-4">
              Rénovation façade
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-box-arrow-up-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                />
                <path
                  fill-rule="evenodd"
                  d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                />
              </svg>
            </h3>
          </NuxtLink>

          <v-divider class="mx-4" color="white"></v-divider>
          <ul v-for="i in itemsRavalement" :key="i">
            <nuxtLink v-if="i.path" :to="i.path">
              {{ i.name }}
            </nuxtLink>
            <span v-else>
              {{ i.name }}

            </span>
          </ul>
        </v-col>
        <v-col cols="12" md="3">
          <NuxtLink to="/peinture">
            <h3 class="h5 m-4">
              Travaux de peinture
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-box-arrow-up-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                />
                <path
                  fill-rule="evenodd"
                  d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                />
              </svg>
            </h3>
          </NuxtLink>

          <v-divider class="mx-4" color="white"></v-divider>
          <ul v-for="i in itemsIsolation" :key="i">
            <li class="list-unstyled">
              {{ i }}
            </li>
          </ul>
        </v-col>
        <v-col cols="12" md="3">
          <NuxtLink to="/toiture">
            <h3 class="h5 m-4">
              Toiture
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-box-arrow-up-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                />
                <path
                  fill-rule="evenodd"
                  d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                />
              </svg>
            </h3>
          </NuxtLink>
          <v-divider class="mx-4" color="white"></v-divider>
          <ul v-for="i in itemsToiture" :key="i">
            <li class="list-unstyled">{{ i }}</li>
          </ul>
        </v-col>

        <v-divider class="mx-4" color="white"></v-divider>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" class="text-center">
          <a
            href="https://www.linkedin.com/in/mouheb-kaouech-b8559b1a1/"
            target="_blanck"
          >
            <v-icon> mdi-linkedin </v-icon>
          </a>
          <v-icon>mdi-youtube</v-icon>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col class="text-center" cols="12">
          <span class="fo-span">
            {{ new Date().getFullYear() }} — <strong>AUDITS Rénovation</strong>
            <NuxtLink to="/mentions-legales"> Mentions Légales </NuxtLink>
          </span>
          <div class="Keywords">
            <h1>AUDITS rénovation</h1>
            <span>Keywords:</span>
            <h2 class="d-inline">Audtis rénovation</h2>
            <h3 class="d-inline">audits rénovation</h3>
            <h4 class="d-inline">audit rénovation travaux de rénovation</h4>
            <h5 class="d-inline">auditsrénovation travaux de toiture</h5>
            <h6 class="d-inline">auditrénovation isolation thermique</h6>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    itemsIsolation: [
      "— Peinture intérieur",
      "— Peinture extérieur",
      "— Mise en enduit",
      "— Peinture par pulvérisation",
      "— Peinture Décorative",
    ],

    itemsToiture: [
      "— Traitement de charpentes",
      "— Remaniement et rénovation de toiture",
      "— Hydrofuge de toiture",
      "— Les gouttières et descentes",
      "— Velux",
    ],
    itemsRenovation: [
      {
        name: "— Rénovation salle de bain",
        path: "/renovationsalledebain",
      },

      {
        name: "— Rénovation cuisine",
        path: "/renovationcuisine",
      },
      {
        name: "— Travaux de placo",
        path: "",
      },
      {
        name: "— Menuiseries, fenêtres, portes",
        path: "/changement-fenetre",
      },

      {
        name: "— Carrelage, parquets, revêtements de sol",
        path: "",
      },
      {
        name: "— Ventilation, VMC",
        path: "",
      },
    ],
    itemsRavalement: [
      {
        name: "— Rénovation de façade",
        path: "/renovation-façade",
      },
      {
        name: "— Nettoyage de façade",
        path: "",
      },
      {
        name: "— Entretien de façade",
        path: "",
      },
    ],
  }),
};
</script>
<style lang="scss" scoped>
li {
  font-size: 16px;
}
.fo-span {
  font-size: 13px;
}
.Keywords {
  font-size: 9px;
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 9px;
  }
}
@media (max-width: 575.98px) {
  li {
    font-size: 10px;
  }
  .fo-span {
    font-size: 11px;
  }
  h1 {
    font-size: 2rem;
  }
  .Keywords {
    font-size: 6px;
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-size: 6px;
    }
  }
}
</style>
