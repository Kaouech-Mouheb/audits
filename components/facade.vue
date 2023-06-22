<template>
  <section>
    <h1 class="h4 text-primary text-center">Nos dernières réalisations</h1>
    <v-row>
      <v-col cols="12" md="3">
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
            src="ravalement façade95.jpg"
            title="rénovation cuisine"
            alt="rénovation cuisine"
          ></v-img>

          <v-card-title>Ravalement de façade à Sarcelles 140 m2 </v-card-title>

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
              <v-icon>mdi-currency-eur</v-icon> 10 500 Euros TTC
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
      <v-col cols="12" md="3">
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
            src="ravalement94.jpg"
            title="rénovation cuisine"
            alt="rénovation cuisine"
          ></v-img>

          <v-card-title>Ravalement de façade à champigny 190 m2 </v-card-title>

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
              <v-icon>mdi-currency-eur</v-icon> 13 700 Euros TTC
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

      <v-col cols="12" md="3">
        <v-card class="mx-auto my-12" max-width="374">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img height="250" src="ravalement91.jpg" title="ravalement de façade" alt="ravalement de façade"></v-img>

          <v-card-title
            >Réalisation d'un encadrement fenêtre Athis Mons</v-card-title
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
      <v-col cols="12" md="3">
        <v-card class="mx-auto my-12" max-width="374">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img height="250" src="ravalement-peinture95.jpg" title="ravalement peinture" alt="ravalement peinture"></v-img>

          <v-card-title
            >Peinture extérieurs murs et volets à sarcelles 42 m2
          </v-card-title>

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
              <v-icon>mdi-currency-eur</v-icon>2 190 Euros TTC
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
<style scoped>

h1
{
  font-size: 3.6em;
  font-weight: 100;
  text-align: center;
  margin-bottom: 0;
  color: #42b883;
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
