<template>
  <div class="container-fluid">
    <v-row class="bg-img" justify="center">
      <v-col cols="12" md="10" sm="12">
        <hr />
        <h1 class="h4">AUDITS rénovation – Entreprise de Rénovation Totale TCE</h1>
        <div>
          <span>
            <v-rating :value="4.7" color="amber" dense half-increments readonly size="14"></v-rating>
            <span class="evaluation">
              Basé sur <span>16</span> avis clients
            </span>
          </span>
        </div>
      </v-col>
      <v-col cols="12" md="6" sm="12">
        <div>
          <hr />
          <h2>Spécialistes en <strong>rénovation intérieure</strong> et <strong>rénovation extérieure</strong></h2>
          <p>Que ce soit pour moderniser vos intérieurs, restaurer une façade ou isoler votre habitation, nous offrons des services de qualité pour tous vos projets de rénovation. Demandez un devis gratuit et profitez de notre expertise pour donner vie à vos idées.</p>
          <hr />
        </div>
      </v-col>
      <v-col cols="12" md="4" sm="12">
        <FormulaireDevis />
      </v-col>
    </v-row>

    <!-- Section pour SEO avec liens internes -->
    <section class="nos-realisation-margin-sm">
      <div><Estimer /></div>
      <div><DernierProjet /></div>
      <div><NosRealisations /></div>
      <div><AvantApres /></div>
      <div><Review /></div>
      <div><Estimation /></div>
      <div><Apropos /></div>
    </section>

    <!-- Section de partenariat -->
    <div class="demande-partenariat">
      <v-col cols="auto">
        <v-dialog transition="dialog-bottom-transition" max-width="600" v-model="dialogPartenaire">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="amber" v-bind="attrs" v-on="on">Devenir partenaire</v-btn>
          </template>
          <v-card>
            <v-toolbar color="primary" class="text-center h3" dark>Demande de partenariat</v-toolbar>
            <v-card-text>
              <div class="pa-12">
                AUDITS rénovation vous propose des solutions pour vos chantiers. En recherche de <strong>chantiers à sous-traiter en rénovation</strong> ? Contactez-nous à <a href="mailto:auditsrenovation@gmail.com">auditsrenovation@gmail.com</a> ou par téléphone au <a href="tel:+33618662919">0618662919</a>.
              </div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn text color="error" @click="dialogPartenaire = false">Fermer</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </div>
    <hr />
    <div><Footer /></div>
    <div v-if="alertTel">
      <v-alert dense type="success" class="alert">
        Nous avons bien reçu votre demande de rappel. Un chargé d'affaires vous contactera dans les plus brefs délais.
      </v-alert>
    </div>
  </div>
</template>

<script>
import emailjs from "emailjs-com";
import Renovation from "../components/apropos.vue";

export default {
  name: "IndexPage",
  Reviewhead() {
    return {
      title: "AUDITS rénovation - Experts en rénovation intérieure et extérieure",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "Spécialistes en rénovation de façade, isolation et couverture. Basés à Choisy-le-Roi, nous intervenons sur tous vos projets de rénovation." },
        { hid: "og:title", name: "og:title", content: "AUDITS rénovation - Experts en rénovation intérieure et extérieure" },
        { hid: "og:description", name: "og:description", content: "Spécialistes en rénovation de façade, isolation et couverture." },
        { hid: "og:url", name: "og:url", content: "https://auditsrenovation.fr" },
        { hid: "og:image", name: "og:image", content: require("~/static/isolation.jpg") },
        { hide: "twitter:card", name: "twitter:card", content: "summary_large_image" },
        { hide: "twitter:site", name: "twitter:site", content: "https://auditsrenovation.fr" },
      ],
      link: [
        { rel: 'canonical', href: 'https://auditsrenovation.fr/' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    };
  },
  data: () => ({
    validFormAppel: true,
    dialogPartenaire: false,
    auditsSeo: {
      title: "AUDITS rénovation",
      description: "Spécialistes en rénovation, isolation, couverture et façade. Devis gratuit et diagnostics techniques inclus.",
      url: "https://auditsrenovation.fr",
      img: require("~/static/isolation.jpg"),
    },
    client: {
      tel: "",
      name: "",
    },
    alertTel: false,
    Rules: {
      name: [(v) => !!v || "Champ requis"],
      tel: [(v) => !!v || "Numéro requis", (v) => (v && v.length >= 8) || "Numéro valide de 8 caractères minimum"],
    },
  }),
  methods: {
    sendEmailTel(e) {
      this.validate();
      if (this.validFormAppel) {
        emailjs.sendForm("service_rpc1vli", "template_cyagjyi", e.target, "OwCoJCs42AJa_Sheh")
          .then(
            (result) => {
              this.reset();
              this.alertTelSucces();
            },
            (error) => {
              console.error("Erreur...", error);
            }
          );
      }
    },
    alertTelSucces() {
      this.alertTel = true;
      setTimeout(() => {
        this.alertTel = false;
      }, 7000);
    },
    validate() {
      this.$refs.formAppel.validate();
    },
    reset() {
      this.$refs.formAppel.reset();
    },
  },
};
</script>


<style scoped>
.demande-partenariat {
  position: fixed;
  bottom: 5px;
  z-index: 1001;
}

.bg-img {
  color: rgb(252, 252, 252);
  font-size: 20px;

  background-image: linear-gradient(
      to bottom,
      rgba(49, 135, 247, 0.5),
      rgba(0, 0, 255, 0.5)
    ),
    url("~/static/background.jpg");
  background-repeat: no-repeat;
}

.v-dialog {
  padding: 10px;
}

.p2,
.p3 {
  font-size: 15px;
}

.block-value {
  position: absolute;
  right: 1px;
  height: 900px;
  background: #0095f1;
  background: linear-gradient(
    90deg,
    rgba(0, 149, 241, 0.7) 0,
    rgba(41, 184, 248, 0.7)
  );
}

.margin-bg {
  margin-top: 100px;
}

.mt-btn-rplmoi {
  margin-top: -30px;
}

@media (max-width: 575.98px) {
  .nos-realisation-margin-sm {
    margin-top: 100px;
  }

  .evaluation {
    font-size: 12px;
  }

  .margin-bg[data-v-2a183b29] {
    margin-top: 40px;
  }

  .demande-partenariat {
    position: static;
  }

  h1 {
    font-size: 1.5rem;
  }

  h2,
  .h2,
  .bg-img[data-v-2a183b29] {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    font-weight: 400;
  }

  .p2,
  .p3 {
    font-size: 15px;
  }

  .bg-img {
    height: 1570px;
  }

  .block-value {
    height: 1570px;
  }

  .text-primary {
    font-size: 1rem;
    font-weight: 370;
  }

  .m-4 {
    margin-left: -10px;
    margin-right: -10px;
  }

  .small-screen {
    display: none;
  }
}

@media (min-width: 576px) and (max-width: 991.98px) {
  .bg-img {
    height: 1600px;
  }

  .block-value {
    height: 1600px;
  }

  .img-rapport-prix {
    width: 140px;
  }

  .rapport-prix {
    margin: 10px auto 10px auto;
  }

  .logo-decennal {
    display: block;
    margin: 0 auto 0 auto;
  }
}
</style>
