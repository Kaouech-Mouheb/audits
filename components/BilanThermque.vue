<template>
<div>
    <v-card class="card-bilan">
    <v-row justify="center">
      <v-col cols="12" md="5">
        <span class="h2 mt-4 d-block p-2 text-center text-primary"
          >Nos services</span
        >
        <hr />
      </v-col>
    </v-row>

    <v-card-text>
      <v-img
        src="bilan-thermique.jpg"
        gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
        height="400px"
      >
        <v-row justify="center" align="center">
          <v-col cols="12" class="bilan">
            <p>BILAN ÉNERGÉTIQUE GRATUIT</p>
            <div class="bilan-info">
              FAITES UN AUDIT RAPIDE ET OBTENEZ DES SOLUTIONS PERSONNALISÉES !
              Economies d’énergie, Isolation, rénovation et financement de votre
              habitat. 100% gratuit et sans engagement.
              <div>
                <v-btn color="error" outlined href="#formDevis"> En Savoir plus </v-btn>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-img>
    </v-card-text>
  </v-card>
</div>
</template>

<style scoped>
.bilan {
  position: relative;
}
p {
  background: #0095f1;
  opacity: 0.8;
  text-align: center;
  color: white;
  padding-top: 10px;
  font-size: 22px;
  font-weight: bold;
}
.bilan-info {
  color: black;

  max-width: 450px;
  background: #ffffff;
  opacity: 0.7;
  font-size: 16px;
  padding: 20px;
  line-height: 2.25rem;
}
.card-bilan{
  margin-top:20px
}
</style>
