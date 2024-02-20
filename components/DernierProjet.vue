<template>
  <section>
    <h1 class="h4 text-primary text-center">Nos derniéres réalisations</h1>
    <v-row>
      <v-col cols="12" md="3" sm="6" xs="12">
        <v-card class="mx-auto my-12" max-width="374">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img
            height="250"
            src="/tarek/tarek6.jpeg"
            title="rénovation cuisine"
            alt="rénovation cuisine"
          ></v-img>

          <v-card-title
            >Rénovation Appartement 63m2 <br />
            Chevilly-larue</v-card-title
          >

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating
                :value="5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>
              <hr />
            </v-row>

            <div class="my-4 text-subtitle-1">
              <v-icon>mdi-currency-eur</v-icon> 38 Euros TTC
            </div>

            <div><v-icon>mdi-calendar-clock-outline</v-icon> 2 mois</div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-actions>
            <v-btn
              color="primary"
              tonal
              small
              @click="(dialog = true), (btn = false)"
            >
              Voir projet
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="3" sm="6" xs="12">
        <v-card class="mx-auto my-12" max-width="374">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img
            height="250"
            src="/dounia/dounia12.jpeg"
            title="rénovation appartement"
            alt="rénovation appartement"
          ></v-img>

          <v-card-title
            >Rénovation appartement 28m2 <br />
            Puteaux</v-card-title
          >

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating
                :value="5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>
              <hr />
            </v-row>

            <div class="my-4 text-subtitle-1">
              <v-icon>mdi-currency-eur</v-icon> 17500 Euros TTC
            </div>

            <div><v-icon>mdi-calendar-clock-outline</v-icon> 2 mois</div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-actions>
            <v-btn color="primary" tonal small @click="dialog1 = true">
              Voir projet
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="3" sm="6" xs="12">
        <v-card class="mx-auto my-12" max-width="374">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img
            height="250"
            src="/chantier93/chantier3.jpeg"
            title="ravalement de façade"
            alt="ravalement de façade"
          ></v-img>

          <v-card-title
            >Rénovation appartement  47m2<br />
            Villpinte</v-card-title
          >
          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating
                :value="5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>
              <hr />
            </v-row>

            <div class="my-4 text-subtitle-1">
              <v-icon>mdi-currency-eur</v-icon> 14 500 Euros TTC
            </div>

            <div>
              <v-icon>mdi-calendar-clock-outline</v-icon> 1 mois et 2 semaines
            </div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-actions>
            <v-btn color="primary" tonal small @click="dialog2 = true">
              Voir projet
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="3" sm="6" xs="12">
        <v-card class="mx-auto my-12" max-width="374">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img
            height="250"
            src="/sdb/sdb3.jpeg"
            title="rénovation de salle de bain"
            alt="rénovation de salle de bain"
          ></v-img>

          <v-card-title>Rénovation SDB <br /> Paris</v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating
                :value="5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>
              <hr />
            </v-row>

            <div class="my-4 text-subtitle-1">
              <v-icon>mdi-currency-eur</v-icon>6 200 Euros TTC Unité
            </div>

            <div><v-icon>mdi-calendar-clock-outline</v-icon> 3 semaines</div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-actions>
            <v-btn color="primary" tonal small @click="dialog3 = true">
              Voir projet
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!----les Dialogs-->
    <v-row>
      <v-dialog v-model="dialog" width="auto">
        <v-card class="container">
          <div>
            <h2>Voir le projet</h2>
          </div>

          <v-row>
            <v-col cols="12" md="3" sm="6" v-for="img in 11" :key="img.index">
              <v-img
                max-width="250"
                :src="`/tarek/tarek${img}.jpeg`"
                :title="`rénovation appartement chevilly larue photo n${img}`"
                class="d-block"
                :alt="`rénovation appartement photo n${img}`"
              ></v-img>
            </v-col>
          </v-row>

          <!--------------chantier menuiserie/-->
          <v-card-actions>
            <v-divider class="mx-4"></v-divider>
            <v-btn color="error" small @click="dialog = false"> Fermer </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>

    <!------------ravalement 78-->
    <v-row>
      <v-dialog v-model="dialog1" width="auto">
        <v-card class="container">
          <div>
            <h2>Voir le projet</h2>
          </div>

          <!-------seconde paritier chantieru menuiserie-->
          <v-row>
            <v-col cols="12" md="3" sm="6" v-for="img in 14" :key="img.index">
              <v-img
                max-width="250"
                :src="`/dounia/dounia${img}.jpeg`"
                :title="`rénovation appartement puteaux photo n${img}`"
                class="d-block"
                :alt="`rénovation appartement  puteaux photo n${img}`"
              ></v-img>
            </v-col>
          </v-row>
          <v-card-actions>
            <v-divider class="mx-4"></v-divider>
            <v-btn color="error" small @click="dialog1 = false"> Fermer </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>

    <!------ravalement 92-->
    <v-row>
      <v-dialog v-model="dialog2" width="auto">
        <v-card class="container">
          <div>
            <h2>Voir le projet</h2>
          </div>

         
          <!-------seconde paritier chantieru menuiserie-->
          <v-row>
            <v-col cols="12" md="3" sm="6" v-for="img in 6" :key="img.index">
              <v-img
                max-width="250"
                :src="`/chantier93/chantier${img}.jpeg`"
                :title="`rénovation appartement n${img}`"
                class="d-block"
                :alt="`rénovation appartementn${img}`"
              ></v-img>
            </v-col>
          </v-row>
          <v-card-actions>
            <v-divider class="mx-4"></v-divider>
            <v-btn color="error" small @click="dialog2 = false"> Fermer </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>

    <!------renovation sdb -->
    <v-row>
      <v-dialog v-model="dialog3" width="auto">
        <v-card class="container">
          <div>
            <h2>Voir le projet</h2>
          </div>
          <v-row>
            <v-col cols="12" md="3" sm="6" v-for="img in 4" :key="img.index">
              <v-img
                max-width="250"
                :src="`/sdb/sdb${img}.jpeg`"
                :title="`rénovation de salle de bain n${img}`"
                class="d-block"
                :alt="`rénovation de salle de bain n${img}`"
              ></v-img>
            </v-col>
          </v-row>
          <!-------seconde paritier chantieru menuiserie-->
          <v-card-actions>
            <v-divider class="mx-4"></v-divider>
            <v-btn color="error" small @click="dialog3 = false"> Fermer </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </section>
</template>
  
  <script>
export default {
  data() {
    return {
      dialog: false,

      dialog1: false,

      dialog2: false,

      dialog3: false,
    };
  },
};
</script>
  
  <style scoped>
h1 {
  font-size: 3.6em;
  font-weight: 100;
  text-align: center;
  margin-bottom: 0;
  color: #42b883;
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
  background: linear-gradient(
    to right,
    hsl(216, 91%, 54%) 0,
    hsl(0, 0%, 100%) 10%,
    hsl(216, 91%, 54%) 20%
  );
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
  