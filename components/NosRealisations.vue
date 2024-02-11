<template>
  <section>
    <v-row>
      <v-col cols="12" md="3" sm="6" xs="12">
        <v-card class="mx-auto my-12" max-width="374">
          <template slot="progress">
            <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
          </template>

          <v-img height="250" src="appartement92.jpg" title="rénovation cuisine" alt="rénovation cuisine"></v-img>

          <v-card-title>Rénovation d'un appartement 54 m2 </v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating :value="5" color="amber" dense half-increments readonly size="14"></v-rating>
              <hr />
            </v-row>

            <div class="my-4 text-subtitle-1">
              <v-icon>mdi-currency-eur</v-icon> 17 500 Euros TTC
            </div>

            <div><v-icon>mdi-calendar-clock-outline</v-icon> 1 mois</div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-actions>
            <v-btn color="deep-purple lighten-2" text href="#formDevis">
              Demandez un devis
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="3" sm="6" xs="12">
        <v-card class="mx-auto my-12" max-width="374">
          <template slot="progress">
            <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
          </template>

          <v-img height="250" src="paris16.jpg"></v-img>

          <v-card-title>Rénovation toilette <br> à paris 16 éme 2.5m2</v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating :value="5" color="amber" dense half-increments readonly size="14"></v-rating>
              <hr />
            </v-row>

            <div class="my-4 text-subtitle-1">
              <v-icon>mdi-currency-eur</v-icon>2 150 Euros TTC
            </div>

            <div><v-icon>mdi-calendar-clock-outline</v-icon> 1 semaine</div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-actions>
            <v-btn color="deep-purple lighten-2" text href="#formDevis">
              Demandez un devis
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="3" sm="6" xs="12">
        <v-card class="mx-auto my-12" max-width="374">
          <template slot="progress">
            <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
          </template>

          <v-img height="250" src="salledebain11.jpg" alt="rénovation salle de bain"
            title=" rénovation salle de bain"></v-img>

          <v-card-title>Rénovation salle de bain <br> à paris 11 éme 4.5m2</v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating :value="5" color="amber" dense half-increments readonly size="14"></v-rating>
              <hr />
            </v-row>

            <div class="my-4 text-subtitle-1">
              <v-icon>mdi-currency-eur</v-icon>8 900 Euros TTC
            </div>

            <div><v-icon>mdi-calendar-clock-outline</v-icon> 2 semaines</div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-actions>
            <v-btn color="deep-purple lighten-2" href="#formDevis" text>
              Demandez un devis
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="12" md="3" sm="6" xs="12">
        <v-card class="mx-auto my-12" max-width="374">
          <template slot="progress">
            <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
          </template>

          <v-img height="250" src="vitrification.jpg" title="rénovation cuisine" alt="rénovation cuisine"></v-img>

          <v-card-title>Vitrification de parquets <br> à choisy 30m2 </v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating :value="5" color="amber" dense half-increments readonly size="14"></v-rating>
              <hr />
            </v-row>

            <div class="my-4 text-subtitle-1">
              <v-icon>mdi-currency-eur</v-icon> 1 650 Euros TTC
            </div>

            <div><v-icon>mdi-calendar-clock-outline</v-icon> 2 jours</div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-actions>
            <v-btn color="deep-purple lighten-2" text href="#formDevis">
              Demandez un devis
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

    </v-row>
    <div class="text-center m-4">
          <v-btn text :color="voirPlus? 'error':'primary'" @click="voirPlus = voirPlus ? false : true" small icon>
            {{ voirPlus ? 'Fermer' : ' voir plus' }}
            <v-icon small>

              {{ voirPlus?'mdi-chevron-double-up':'mdi-chevron-double-down' }}
              mdi-arrow-top-right-bottom-left-bold
            </v-icon>
          </v-btn>
        </div>


    <v-row v-if="voirPlus">
      <v-col cols="12" md="3" sm="6" xs="12">
        <v-card class="mx-auto my-12" max-width="374">
          <template slot="progress">
            <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
          </template>

          <v-img height="250" src="ravalement façade95.jpg" title="rénovation cuisine" alt="rénovation cuisine"></v-img>

          <v-card-title>Ravalement de façade <br> à Sarcelles 140 m2 </v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating :value="5" color="amber" dense half-increments readonly size="14"></v-rating>
              <hr />
            </v-row>

            <div class="my-4 text-subtitle-1">
              <v-icon>mdi-currency-eur</v-icon> 11 500 Euros TTC
            </div>

            <div><v-icon>mdi-calendar-clock-outline</v-icon> 2 semaines</div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-actions>
            <v-btn color="deep-purple lighten-2" text href="#formDevis">
              Demandez un devis
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="3" sm="6" xs="12">
        <v-card class="mx-auto my-12" max-width="374">
          <template slot="progress">
            <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
          </template>

          <v-img height="250" src="ravalement94.jpg" title="rénovation cuisine" alt="rénovation cuisine"></v-img>

          <v-card-title>Ravalement de façade <br> à champigny 190 m2 </v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating :value="5" color="amber" dense half-increments readonly size="14"></v-rating>
              <hr />
            </v-row>

            <div class="my-4 text-subtitle-1">
              <v-icon>mdi-currency-eur</v-icon> 14 700 Euros TTC
            </div>

            <div><v-icon>mdi-calendar-clock-outline</v-icon> 2 semaines</div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-actions>
            <v-btn color="deep-purple lighten-2" text href="#formDevis">
              Demandez un devis
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="12" md="3" sm="6" xs="12">
        <v-card class="mx-auto my-12" max-width="374">
          <template slot="progress">
            <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
          </template>

          <v-img height="250" src="ravalement91.jpg" title="ravalement de façade" alt="ravalement de façade"></v-img>

          <v-card-title>Réalisation d'un encadrement <br> fenêtre Athis Mons</v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating :value="5" color="amber" dense half-increments readonly size="14"></v-rating>
              <hr />
            </v-row>

            <div class="my-4 text-subtitle-1">
              <v-icon>mdi-currency-eur</v-icon>1 800 Euros TTC
            </div>

            <div><v-icon>mdi-calendar-clock-outline</v-icon> 2 jours</div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-actions>
            <v-btn color="deep-purple lighten-2" text href="#formDevis">
              Demandez un devis
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="3" sm="6" xs="12">
        <v-card class="mx-auto my-12" max-width="374">
          <template slot="progress">
            <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
          </template>

          <v-img height="250" src="ravalement-peinture95.jpg" alt="ravalement de façade"
            title="ravalement de façade"></v-img>

          <v-card-title>Peinture extérieurs murs et <br> volets à sarcelles 42 m2
          </v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating :value="5" color="amber" dense half-increments readonly size="14"></v-rating>
              <hr />
            </v-row>

            <div class="my-4 text-subtitle-1">
              <v-icon>mdi-currency-eur</v-icon>3190 Euros TTC
            </div>

            <div><v-icon>mdi-calendar-clock-outline</v-icon>2 jours</div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-actions>
            <v-btn color="deep-purple lighten-2" href="#formDevis" text>
              Demandez un devis
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

  </section>
</template>

<script>
export default {
  data: () => {
    return {
      voirPlus: false,

    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 3.6em;
  font-weight: 100;
  text-align: center;
  margin-bottom: 0;
  color: #42b883;
}

.avis {
  widows: 200px;
  height: 200px;
  margin: 10px;
}

@media (max-width: 576px) {
  .avis {
    display: block;

    widows: 150px;
    height: 150px;
    margin: 10px auto 10px auto;
  }
}

/* Base */
h1 {
  margin-top: 50px;
  color: hsl(216, 91%, 54%);
  font-size: 30px;
  font-weight: bold;
  font-family: monospace;
  letter-spacing: 7px;
  cursor: pointer;
  text-transform: uppercase;
}

h1 {
  background: linear-gradient(to right,
      hsl(216, 91%, 54%) 0,
      hsl(0, 0%, 100%) 10%,
      hsl(216, 91%, 54%) 20%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 3s infinite linear;
}

@keyframes shine {
  0% {
    background-position: 0;
  }

  60% {
    background-position: 600px;
  }

  100% {
    background-position: 900px;
  }
}

@media (max-width: 576px) {
  h1 {
    margin-top: 30px;
    font-size: 15px;
    letter-spacing: 4px;
  }



}
</style>
