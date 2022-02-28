<template>
  <v-app id="app">
    <v-app-bar fixed app>
      <v-toolbar-title>
       <NuxtLink to="/">
          <v-img src="auditsrenovationlogo.png" class="logo"></v-img>
       </NuxtLink>
      </v-toolbar-title>

      <v-spacer />
      <div>
        <v-btn disabled text x-large class="small-screen">
          <v-icon medium class="mr-2"> mdi-phone-forwnkard-outline </v-icon>
          Contactez-nous</v-btn
        >

        <v-btn href="tel:+33618662919" color="primary" text x-large class="small-screen">
          <v-icon medium class="mr-2e"> mdi-phone</v-icon>
          06 18 66 29 19
        </v-btn>
        <v-btn href="tel:+33618662919" color="primary" class="small-screen-active" text small>
          <v-icon small class="mr-2e"> mdi-phone </v-icon>
          06 18 66 29 19
        </v-btn>
      </div>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
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
#app{
   user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
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
  width: 250px;
}
@media (max-width: 575.98px) {
  .small-screen {
    display: none;
  }
  .small-screen-active {
    display: block;
  }
  .logo {
    width: 150px;
  }
}
@media (min-width: 576px) and (max-width: 991.98px) {
  .logo{
    width: 170px;
  }
 }
</style>
