<template>
  <div>
    <v-divider></v-divider>

    <template>
      <v-card>
        <v-container fluid>
          <h1 class="text-primary h3">Estimer votre projet de rénovation en ligne</h1>
          <div>Le prix estimé avoisine a 90 % le prix final !</div>
          <v-divider></v-divider>
          <v-btn color="primary" @click="estimer = true"  >
            <template v-slot:prepend>
        <v-icon></v-icon>
      </template>
             Estimer </v-btn>
        </v-container>
      </v-card>
    </template>

    <v-dialog width="auto" v-model="estimer">
      <v-card class="container">
        <v-container>
          <v-row>
            <p>
              Cette function est en cour de développement, si vous souhaitez
              estimer votre projet veuillez nous contacter via notre formulaire
              de contact
            </p>
          </v-row>
          <v-divider></v-divider>
          <v-row>
            <v-btn color="error" @click="estimer = false">Fermer</v-btn>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      estimer: false,
    };
  },
};
</script>
