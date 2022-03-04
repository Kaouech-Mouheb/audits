<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" md="3" sm="12">
        <v-card height="200px">
          <div class="text-center">
            <img src="decennale.png" class="logo-decennal" alt="" />
          </div>

          <v-card-text class="decennal-p">
            AUDITS Rénovation couvre et garantit l’intégralité des dommages qui
            apparaissent après la réception des travaux pendant 10 ans.
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="3" sm="12">
        <v-card height="200px">
          <v-card-title> Coordonnées de contact </v-card-title>
          <v-card-text>
            <address>
              <a href="mailto:contact@auditsrenovation.fr" target="_blank"
                ><v-icon>mdi-email-send-outline</v-icon>
                Email:contact@auditsrenovation.fr</a
              >
              <br />
              <a href="tel:+33618662919">
                <v-icon>mdi-phone</v-icon> téléphone : 06 18 66 29 19
              </a>
            </address>

            <v-btn color="primary" href="#formDevis">demander un devis</v-btn>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="3" sm="12" class="mt-2">
        <v-card height="200px" color="blue darken-3" class="text-light">
          <v-row>
            <v-col>
              <h3 class="m-4">
                Avis client
                <span class="grey--text text--lighten-2 text-caption mr-2">
                  ({{ 5 }}/5) basé sur 9 avis
                </span>
              </h3>
              <div class="m-4">
                <span v-for="i in 5" :key="i">
                  <v-icon color="orange"> mdi-star </v-icon>
                </span>
              </div>
              <v-divider class="mx-4" color="white"></v-divider>

              <v-dialog v-model="dialogAvis" max-width="500">
                <template v-slot:activator="{ on, attrs }">
                  <small
                    ><a v-bind="attrs" v-on="on" class="text-light m-4"
                      >voir les avis</a
                    ></small
                  >
                </template>

                <v-card>
                  <v-card-title
                    class="text-h5 text-center text-primary lighten-2"
                  >
                    Toutes les avis
                  </v-card-title>
                  <v-divider></v-divider>
                  <v-container>
                    <v-row
                      class="shadow-none p-3 mb-5 bg-light rounded"
                      justify="center"
                      v-for="av in avis"
                      :key="av.index"
                    >
                      <v-col cols="12" md="2" sm="4">
                        <v-avatar>
                          <img :src="av.img" alt="jhon" />
                        </v-avatar>
                      </v-col>
                      <v-col cols="12" md="8" sm="6">
                        <small>{{ av.text }}</small>
                        <div>
                          <span v-for="i in 5" :key="i">
                            <v-icon color="orange"> mdi-star </v-icon>
                          </span>
                        </div>
                      </v-col>

                      <v-col cols="12" md="8" sm="6">
                        <small class="text-secondary">{{ av.date }}</small>
                        <small class="text-secondary d-block">{{ av.client}}</small>
                      </v-col>
                    </v-row>
                  </v-container>
                  <v-col cols="12" md="12" sm="12">
                    <p class="text-primary text-center h5">
                      Ajouter votre avis
                    </p>
                  </v-col>
                  <v-form
                    ref="formAvis"
                    v-model="validFormAvis"
                    lazy-validation
                    @submit.prevent="sendEmailAvis"
                  >
                    <v-col cols="12" md="11" sm="11">
                      <v-textarea
                        v-model="rating.commentaire"
                        name="avis_commentaire"
                        label="Ajouter un commentaire"
                        value="Votre commentaire ici ..!!"
                        hint="commenter"
                      ></v-textarea>
                    </v-col>
                    <v-col cols="12" md="11" sm="11">
                      <v-rating
                        v-model="rating.note"
                        name="avis_note"
                        color="yellow darken-3"
                        background-color="grey darken-1"
                        empty-icon="$ratingFull"
                        half-increments
                        hover
                        large
                      ></v-rating>
                    </v-col>
                    <!---cette section de champs en display none permet l'envoie de l'avis par mail car le v-rating n'envoie le valeur--->
                    <v-col class="d-none">
                      <v-text-field
                        v-model="rating.note"
                        name="avis_note"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="10" sm="10">
                      <div v-if="!validFormAvis">
                        <small class="text-danger">
                          Ce champs est requies
                        </small>
                      </div>
                      <v-btn
                        color="success"
                        :disabled="!validFormAvis"
                        type="submit"

                      >
                        Envoyer votre avis
                      </v-btn>
                    </v-col>
                  </v-form>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="error" text @click="dialogAvis = false">
                      Fermer
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <div>
       <div v-if="alertAvis" class="alert">
      <v-alert dense type="success">
        On vous remercie de nous avoir transmis vôtre <strong>
          avis !</strong
        >
        Nous le publierons prochainement
      </v-alert>
    </div>
    </div>
  </v-container>
</template>
<script>
import emailjs from "emailjs-com";
export default {
  data: () => ({
    rating: {
      message: "",
      note: "",
    },
        avis: [
      {
        img: require("~/static/avatar5.jpg"),
        text: "Isolation du comble Rapide efficace et proprement exécutée",
        date: "Le 27/02/2022",
         client:"André S."
      },
       {
        img: require("~/static/avatar5.jpg"),
        text: "Nous avons été entièrement satisfait.",
        date: "Le 22/01/2022",
         client:"Rachid M."
      },
        {
        img: require("~/static/avatar5.jpg"),
        text: "Excellent travail avec une équipe à l'écoute et compétente.",
        date: "Le 16/01/2022",
         client:"George P."
      },
          {
        img: require("~/static/avatar5.jpg"),
        text: "Grand professionnalisme et efficacité. Travail soigné et de qualité.",
        date: "Le 10/01/2022",
         client:"Sabrine M."
      },
            {
        img: require("~/static/avatar5.jpg"),
        text: "Travail et conseils professionnels au top. Merci.",
        date: "Le 10/01/2022",
         client:"Patrick J."
      },
      {
        img: require("~/static/avatar5.jpg"),
        text: "Trés satisfait, livraison rapide .Je recommande Audits rénovation pour isolation des combles perdus.",
        date: "Le 24/01/2022",
        client:"Parmatzian H."
      },
      {
        img: require("~/static/avatar5.jpg"),
        text: "Aucun soucis tout a été bien réalisé comme prévu",
        date: "Le 5/01/2022",
        client:"Rachid K."
      },
      {
        img: require("~/static/avatar5.jpg"),
        text: "Trés satisfait de résultat le meilleur rapport qualité prix, je recommande",
        date: "Le 24/11/2021",
        client:"Daniel J."
      },
      {
        img: require("~/static/avatar5.jpg"),
        text: "Entreprise sérieux, personnel qualifié, livraison rapide. Je recommande",
        date: "Le 03/10/2021",
        client:"Sachat M."
      },
    ],
    alertAvis: false,
      validFormAvis: true,
     dialogAvis: false,
  }),
  methods: {
    sendEmailAvis(e) {
      this.validateAvis();
      setTimeout(() => {
        if (this.validFormAvis) {
          emailjs
            .sendForm(
              "service_rpc1vli",
              "template_vh0cdqy",
              e.target,
              "OwCoJCs42AJa_Sheh"
            )
            .then(
              (result) => {
                return (
                  console.log("SUCCESS!", result.status, result.text),
                  this.resetFormAvis(),
                  (this.dialogAvis = false),
                  this.alertAvisSucces()
                );
              },
              (error) => {
                console.log("FAILED...", error);
              }
            );
        }
      }, 5);
    },
    validateAvis() {
      if (!this.rating.note || !this.rating.commentaire) {
        return (this.validFormAvis = false);
      }
    },
    resetFormAvis() {
      this.$refs.formAvis.reset();
    },
    alertAvisSucces() {
      this.alertAvis = true;
      setTimeout(() => {
        this.alertAvis = false;
      }, 7000);
    },
  },
};
</script>
<style scoped>
.logo-decennal {
  width: 130px;
}
.decennal-p {
  margin-top: -20px;
}
.alert {
  position: fixed;
  top: 50px;
  z-index: 1000;
}
@media (max-width: 575.98px) {
  .logo-decennal {
    width: 130px;

    margin: 0 auto 0 auto;
  }
}
</style>
