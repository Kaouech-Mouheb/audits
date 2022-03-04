<template>
  <div>
    <div>
      <v-card id="formDevis">
        <v-card-title class="text-primary"> Devis Gratuit </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" md="8">
              Remplissez ce formulaire pour recevoir votre devis gratuit et sans
              engagement sous 24h ouvrés.
            </v-col>
            <v-col cols="12" md="4">
              <img src="rge.jpeg" width="70px" />
            </v-col>
          </v-row>
        </v-card-text>

        <v-card-text>
          <v-form
            ref="formDevis"
            lazy-validation
            @submit.prevent="sendEmailDevis"
            v-model="validFormDevis"
          >
            <v-select
              :items="[
                'Isolation des combles',
                'Aménagement de combles',
                'Traitement Bois Charpente',

                'isolation thermique',
                'travaux de couverture',
                'travaux de peinture',
                'Isolation des murs par l\'intérieur',
                'Isolation des murs par l\'extérieur',
                'Ravalement de façade',
                'Traitement de façade',
                'Isolation toiture par l\’extérieur',
                'Isolation sous toiture',
                'Rénovation de toiture',
                'Démoussage toiture',
                'Traitement de toiture',
                'Menuiseries, fenêtres, portes',
                'Ventilation, VMC',
                'Isolation garage',
                'Autres',
              ]"
              label="Type de travaux"
              :rules="Rules.typeTravaux"
              v-model="devis.typeTravaux"
              name="type_travaux"
              required
            ></v-select>

            <v-text-field
              v-model="devis.name"
              :rules="Rules.name"
              name="client_name"
              label="Nom *"
              single-line
            ></v-text-field>
            <v-text-field
              v-model="devis.codePostal"
              :rules="Rules.codePostal"
              name="code_postal"
              label="code postal *"
              single-line
            ></v-text-field>
            <v-text-field
              label="votre téléphone *"
              :rules="Rules.tel"
              regex="^(71|72|74|76|81|82|84|85|86|87|88|89)\\d{5}$"
              v-model="devis.tel"
              type="number"
              name="client_tel"
              single-line
            ></v-text-field>
            <v-text-field
              v-model="devis.email"
              :rules="Rules.email"
              name="client_email"
              label="votre email *"
              single-line
            ></v-text-field>
            <v-textarea
              clearable
              v-model="devis.message"
              name="message"
              clear-icon="mdi-close-circle"
              label="Décrivez votre projet et leur de rappel souhaitée"
            ></v-textarea>
            <v-btn color="primary" type="submit" :disabled="!validFormDevis"
              >Envoyer ma demande de devis</v-btn
            >
            <small class="d-block mt-4">
              Vos données personnelles sont collectées exclusivement dans le
              cadre de votre demande de devis et ne font l’objet d’aucune
              diffusion ni commercialisation. Elles sont destinées au personnel
              de AUDITS rénovation en charge du traitement de votre demande.
            </small>
          </v-form>
        </v-card-text>
      </v-card>
    </div>
    <div v-if="alertDevis" class="alert">
      <v-alert dense type="success">
        On vous confirme avoir bien reçu votre demande pour<strong>
          un devis gratuit.</strong
        >
        Un chargé d'affaire vous contactera dans les meilleurs délais
      </v-alert>
    </div>
  </div>
</template>
<script>
import emailjs from "emailjs-com";
export default {
  data: () => ({
    validFormDevis: true,
    devis: {
      typeTravaux: "",
      name: "",
      codePostal: "",
      tel: "",
      message: "",
    },
    alertDevis: false,
    Rules: {
      typeTravaux: [(v) => !!v || "Champs requies"],
      name: [(v) => !!v || "Champs requies"],
      tel: [
        (v) => !!v || "Champs requies",
        (v) =>
          (v && v.length >= 8) ||
          "Un numéro valid contient minumum 8 caractéres",
      ],
      email: [
        (v) => !!v || "E-mail est requies",
        (v) => /.+@.+\..+/.test(v) || "Format non valide",
      ],
      codePostal: [
        (v) => !!v || "Champs requies",
        (v) => /[0-9]{5}/g.test(v) || "Format non valide",
      ],
    },
  }),
  methods: {
    sendEmailDevis(e) {
      this.validateDevis();
      setTimeout(() => {
        if (this.validFormDevis) {
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
                  this.resetFormDevis(),
                  this.alertDevisSucces()
                );
              },
              (error) => {
                console.log("FAILED...", error);
              }
            );
        }
      }, 5);
    },
    validateDevis() {
      this.$refs.formDevis.validate();
    },
    alertDevisSucces() {
      this.alertDevis = true;
      setTimeout(() => {
        this.alertDevis = false;
      }, 7000);
    },
    resetFormDevis() {
      this.$refs.formDevis.reset();
    },
  },
};
</script>
<style scoped>
.alert {
  position: fixed;
  top: 50px;
  z-index: 1000;
}
</style>
