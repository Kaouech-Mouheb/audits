<template>
  <section>
    <h1 class="h4 text-primary text-center">
      Avant et aprés notre intervention
    </h1>
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
            src="/menuiserie92/IMG_8.jpg"
            title="rénovation cuisine"
            alt="rénovation cuisine"
          ></v-img>

          <v-card-title>Changement de menuiserie extérieur</v-card-title>

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

            <div><v-icon>mdi-calendar-clock-outline</v-icon> 1 mois</div>
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
            src="/ravalement78/IMG_7.jpg"
            title="ravalement de façade"
            alt="ravalement de façade"
          ></v-img>

          <v-card-title
            >Réalisation d'une crépie + ravalement de façade</v-card-title
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
              <v-icon>mdi-currency-eur</v-icon> 8500 Euros TTC
            </div>

            <div><v-icon>mdi-calendar-clock-outline</v-icon> 3 semaines</div>
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
            src="/ravalement92/IMG_6.jpg"
            title="ravalement de façade"
            alt="ravalement de façade"
          ></v-img>

          <v-card-title
            >Rénvation et Ravalement de façade a la taloché</v-card-title
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
              <v-icon>mdi-currency-eur</v-icon> 22 500 Euros TTC
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
            src="/sdb75/IMG_8.jpg"
            title="rénovation cuisine"
            alt="rénovation cuisine"
          ></v-img>

          <v-card-title>Rénovation 14 SDB dans un Hôtel **</v-card-title>

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
              <v-icon>mdi-currency-eur</v-icon>9 200 Euros TTC Unité
            </div>

            <div><v-icon>mdi-calendar-clock-outline</v-icon> 5 mois</div>
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

          <!-----------chantier mesuiserie-->
          <v-row>
            <v-col cols="12" md="3" sm="6">
              <v-img
                max-width="250"
                src="/menuiserie92/IMG_1.jpg"
                title="rénovation cuisine"
                class="d-block"
                alt="rénovation cuisine"
              ></v-img>
            </v-col>
            <v-col cols="12" md="3" sm="6">
              <v-img
                max-width="250"
                src="/menuiserie92/IMG_2.jpg"
                title="rénovation cuisine"
                class="d-block"
                alt="rénovation cuisine"
              ></v-img>
            </v-col>
            <v-col cols="12" md="3" sm="6">
              <v-img
                max-width="250"
                src="/menuiserie92/IMG_3.jpg"
                title="rénovation cuisine"
                class="d-block"
                alt="rénovation cuisine"
              ></v-img>
            </v-col>
            <v-col cols="12" md="3" sm="6">
              <v-img
                max-width="250"
                src="/menuiserie92/IMG_4.jpg"
                title="rénovation cuisine"
                class="d-block"
                alt="rénovation cuisine"
              ></v-img>
            </v-col>
          </v-row>
          <!-------seconde paritier chantieru menuiserie-->
          <v-row>
            <v-col cols="12" md="3" sm="6">
              <v-img
                max-width="250"
                src="/menuiserie92/IMG_5.jpg"
                title="rénovation cuisine"
                class="d-block"
                alt="rénovation cuisine"
              ></v-img>
            </v-col>
            <v-col cols="12" md="3" sm="6">
              <v-img
                max-width="250"
                src="/menuiserie92/IMG_6.jpg"
                title="rénovation cuisine"
                class="d-block"
                alt="rénovation cuisine"
              ></v-img>
            </v-col>
            <v-col cols="12" md="3" sm="6">
              <v-img
                max-width="250"
                src="/menuiserie92/IMG_7.jpg"
                title="rénovation cuisine"
                class="d-block"
                alt="rénovation cuisine"
              ></v-img>
            </v-col>
            <v-col cols="12" md="3" sm="6">
              <v-img
                max-width="250"
                src="/menuiserie92/IMG_8.jpg"
                title="rénovation cuisine"
                class="d-block"
                alt="rénovation cuisine"
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

          <!-----------chantier mesuiserie-->
          <v-row>
            <v-col cols="12" md="3" sm="6">
              <v-img
                max-width="250"
                src="/ravalement78/IMG_1.jpg"
                title="ravalement de façade"
                class="d-block"
                alt="ravalement de façade"
              ></v-img>
            </v-col>
            <v-col cols="12" md="3" sm="6">
              <v-img
                max-width="250"
                src="/ravalement78/IMG_2.jpg"
                title="ravalement de façade"
                class="d-block"
                alt="ravalement de façade"
              ></v-img>
            </v-col>
            <v-col cols="12" md="3" sm="6">
              <v-img
                max-width="250"
                src="/ravalement78/IMG_3.jpg"
                title="ravalement de façade"
                class="d-block"
                alt="ravalement de façade"
              ></v-img>
            </v-col>
            <v-col cols="12" md="3" sm="6">
              <v-img
                max-width="250"
                src="/ravalement78/IMG_4.jpg"
                title="ravalement de façade"
                class="d-block"
                alt="ravalement de façade"
              ></v-img>
            </v-col>
          </v-row>
          <!-------seconde paritier chantieru menuiserie-->
          <v-row>
            <v-col cols="12" md="3" sm="6">
              <v-img
                max-width="250"
                src="/ravalement78/IMG_5.jpg"
                title="ravalement de façade"
                class="d-block"
                alt="ravalement de façade"
              ></v-img>
            </v-col>
            <v-col cols="12" md="3" sm="6">
              <v-img
                max-width="250"
                src="/ravalement78/IMG_6.jpg"
                title="ravalement de façade"
                class="d-block"
                alt="ravalement de façade"
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

          <!-----------chantier mesuiserie-->
          <v-row>
            <v-col cols="12" md="3" sm="6">
              <v-img
                max-width="250"
                src="/ravalement92/IMG_1.jpg"
                title="ravalement de façade"
                class="d-block"
                alt="ravalement de façade"
              ></v-img>
            </v-col>
            <v-col cols="12" md="3" sm="6">
              <v-img
                max-width="250"
                src="/ravalement92/IMG_2.jpg"
                title="ravalement de façade"
                class="d-block"
                alt="ravalement de façade"
              ></v-img>
            </v-col>
            <v-col cols="12" md="3" sm="6">
              <v-img
                max-width="250"
                src="/ravalement92/IMG_3.jpg"
                title="ravalement de façade"
                class="d-block"
                alt="ravalement de façade"
              ></v-img>
            </v-col>
            <v-col cols="12" md="3" sm="6">
              <v-img
                max-width="250"
                src="/ravalement92/IMG_4.jpg"
                title="ravalement de façade"
                class="d-block"
                alt="ravalement de façade"
              ></v-img>
            </v-col>
          </v-row>
          <!-------seconde paritier chantieru menuiserie-->
          <v-row>
            <v-col cols="12" md="3" sm="6">
              <v-img
                max-width="250"
                src="/ravalement92/IMG_5.jpg"
                title="ravalement de façade"
                class="d-block"
                alt="ravalement de façade"
              ></v-img>
            </v-col>
            <v-col cols="12" md="3" sm="6">
              <v-img
                max-width="250"
                src="/ravalement92/IMG_6.jpg"
                title="ravalement de façade"
                class="d-block"
                alt="ravalement de façade"
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

          <!-----------chantier mesuiserie-->
          <v-row>
            <v-col cols="12" md="3" sm="6">
              <v-img
                max-width="250"
                src="/sdb75/IMG_1.jpg"
                title="ravalement de façade"
                class="d-block"
                alt="ravalement de façade"
              ></v-img>
            </v-col>
            <v-col cols="12" md="3" sm="6">
              <v-img
                max-width="250"
                src="/sdb75/IMG_2.jpg"
                title="ravalement de façade"
                class="d-block"
                alt="ravalement de façade"
              ></v-img>
            </v-col>
            <v-col cols="12" md="3" sm="6">
              <v-img
                max-width="250"
                src="/sdb75/IMG_3.jpg"
                title="ravalement de façade"
                class="d-block"
                alt="ravalement de façade"
              ></v-img>
            </v-col>
            <v-col cols="12" md="3" sm="6">
              <v-img
                max-width="250"
                src="/sdb75/IMG_4.jpg"
                title="ravalement de façade"
                class="d-block"
                alt="ravalement de façade"
              ></v-img>
            </v-col>
          </v-row>
          <!-------seconde paritier chantieru menuiserie-->
          <v-row>
            <v-col cols="12" md="3" sm="6">
              <v-img
                max-width="250"
                src="/sdb75/IMG_5.jpg"
                title="ravalement de façade"
                class="d-block"
                alt="ravalement de façade"
              ></v-img>
            </v-col>
            <v-col cols="12" md="3" sm="6">
              <v-img
                max-width="250"
                src="/sdb75/IMG_6.jpg"
                title="ravalement de façade"
                class="d-block"
                alt="ravalement de façade"
              ></v-img>
            </v-col>
            <v-col cols="12" md="3" sm="6">
              <v-img
                max-width="250"
                src="/sdb75/IMG_7.jpg"
                title="ravalement de façade"
                class="d-block"
                alt="ravalement de façade"
              ></v-img>
            </v-col>
            <v-col cols="12" md="3" sm="6">
              <v-img
                max-width="250"
                src="/sdb75/IMG_8.jpg"
                title="ravalement de façade"
                class="d-block"
                alt="ravalement de façade"
              ></v-img>
            </v-col>
          </v-row>
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
