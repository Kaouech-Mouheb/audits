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
              href="tel:+33618662919"
              x-large
              class="small-screen"
            >
              <v-icon medium> mdi-phone</v-icon>
              06 18 66 29 19
            </v-btn>
          </template>
          <span>Lancer l'appel</span>
        </v-tooltip>

        <v-btn

          href="tel:+33618662919"
          color="#0095f1"
          class="small-screen-active"
          dark
          small
        >
          <span class="mt-2">
            <v-icon small> mdi-phone </v-icon>
            06 18 66 29 19
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
#app {
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
width: 100%;
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
