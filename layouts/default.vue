<template>
  <v-app id="app">
    <v-app-bar fixed app>
      <v-toolbar-title>
        <NuxtLink to="/">
          <v-img src="auditsrenovationlogo.png" class="logo" title="AUDITS rénovation"></v-img>
        </NuxtLink>
      </v-toolbar-title>

      <v-spacer />
      <div>
          <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn

               color="#0095f1"
              dark
              v-bind="attrs"
              v-on="on"
              href="#formDevis"

              class="small-screen"
              text
            >
              <v-icon medium> mdi-file-document-outline</v-icon>
              Obtenir un devis
            </v-btn>
          </template>
          <span>Obtenir un devis</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn

               color="#0095f1"
              dark
              v-bind="attrs"
              v-on="on"
              href="tel:+33954064773"

              class="small-screen"
              text
            >
              <v-icon medium> mdi-phone</v-icon>
              Appeler Maintenant
            </v-btn>
          </template>
          <span>Lancer l'appel</span>
        </v-tooltip>

        <v-btn

          href="tel:+33954064773"
          color="#0095f1"
          class="small-screen-active"
          dark
          text
          small
        >
          <span class="mt-2">
            <v-icon small> mdi-phone </v-icon>
            Appeler Maintenant
          </span>
        </v-btn>
      </div>

    </v-app-bar>
    <v-main>
      <div>
        <Nuxt />
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      title: "audits rénovation",
    };
  },
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Montserrat:ital,wght@0,300;1,400&display=swap');

#app {
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
width: 100%;
 font-family: 'Josefin Sans', sans-serif;
}

.theme--light.v-app-bar.v-toolbar.v-sheet {
  background-color: #fffdfd;
}
.theme--light.v-footer {
  background-color: #ffffff;
  color: rgba(0, 0, 0, 0.87);
}
.small-screen-active {
  display: none;
}
.logo {
  width: 180px;
}
.small-screen:hover {
  text-decoration: none;
}
@media (max-width: 575.98px) {
  .small-screen {
    display: none;
  }
  .small-screen-active {
    display: block;
  }
  .small-screen-active:hover {
    text-decoration: none;
  }
  .logo {
    width: 150px;
  }
}
@media (min-width: 576px) and (max-width: 991.98px) {
  .logo {
    width: 170px;
  }
}
</style>
