<template>
  <v-container>
    <h1 class="h4 text-primary text-center">
      Retour d'expérience
    </h1>
    <v-row>
        <v-col cols="12" md="4" sm="12" v-for="a in description" :key="description.index">
          <v-card>
            <v-card-text class="text-h6 text-secondary py-2">
              <v-avatar>
                <img src="avatar5.jpg" />
              </v-avatar>
              {{ a.name }}
            </v-card-text>
            <p class="p-4">
              <small>{{ a.avis }}</small>
            </p>
            <v-divider></v-divider>
            <div class="p-4">
              <v-rating :value="4.7" color="amber" dense half-increments readonly size="14"></v-rating>
            </div>

          </v-card>
        </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {

  data: () => ({
    description: [
      {
        name: 'Johel D',
        avis: `
              J'ai récemment fait changer toutes les fenêtres de ma maison par cette entreprise et je suis extrêmement satisfait du résultat.
              `
      },
      {
        name: 'Sarah R.',
        avis: `
       Pleinement satisfait des travaux de remplacement de fenêtres effectués par cette entreprise. Malgré des délais un peu longs, le résultat final est impeccable.
              `
      },
      {
        name: 'Michael T',
        avis: `
              Estimation précise et détaillée. L'équipe d'installation a fait un travail remarquable, en veillant à ce que tout soit propre et bien fini. je recommande
              `
      },
    ]

  }),
};
</script>