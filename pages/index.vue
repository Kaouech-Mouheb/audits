<template>
  <div class="bg-img rating">
     <div class="container-fluid block-value"></div>
    <div class="d-flex justify-content-center row">


      <div class="col-md-6 col-sm-12 margin-bg">
        <h1>AUDITS rénovation</h1>
        <h2 class="h2">
          Vous avez un projet <strong>d'isolation themrique </strong> ou de
          <strong>rénovation</strong> ?
        </h2>

        <p class="mt-4 p2">
          Pour tous vos <strong>travaux d’isolation thermique</strong>,
          <strong
            ><span class="d-none">travaux</span> d’aménagement de
            combles</strong
          >,
          <strong> <span class="d-none">travaux</span> de couverture</strong>,
          <strong><span class="d-none">travaux</span> de façades </strong> et de
          <strong>rénovation</strong>, <strong>AUDITS rénovation</strong> mais à
          votre disposition une équipe dédiée.
        </p>
        <p class="p3">
          Vous pouvez nous contactez par téléphone ou bien remplir notre
          formulaire en ligne.
        </p>

        <div>
          <h2>
            <v-icon color="white">mdi-phone-outgoing</v-icon>
            NOUS VOUS RAPPELONS GRATUITEMENT
          </h2>
          <v-form
            ref="formAppel"
            v-model="validFormAppel"
            lazy-validation
            @submit.prevent="sendEmailTel"
          >
            <div class="row">
              <div class="col-md-4 col-sm-7">
                <v-text-field
                  v-model="client.name"
                  :rules="Rules.name"
                  name="client_name"
                  filled
                  clear-icon="mdi-close-circle"
                  clearable
                  label="Votre nom"
                  solo
                ></v-text-field>
              </div>
              <div class="col-md-4 col-sm-7">
                <v-text-field
                  v-model="client.tel"
                  name="tel"
                  :rules="Rules.tel"
                  regex="^(71|72|74|76|81|82|84|85|86|87|88|89)\\d{5}$"
                  filled
                  clear-icon="mdi-close-circle"
                  clearable
                  label="Numéro de téléphone"
                  solo
                  type="number"
                  hint="cliquez sur le button"
                ></v-text-field>
              </div>

              <v-col cols="12" class="mt-btn-rplmoi">
                <v-btn
                  color="success"
                  :disabled="!validFormAppel"
                  type="submit"
                >
                  Rappelez Moi
                </v-btn>
                <div>
                  100% de clients satisfaits ! Devis Gratuit sans engagement.
                </div>
              </v-col>
            </div>
          </v-form>
        </div>
      </div>
      <v-col cols="12" md="4" sm="12" class="mt-4">
        <FormulaireDevis />
      </v-col>
    </div>
    <div>
      <Carroussel />
    </div>
    <div>
      <BilanThermque />
    </div>
    <div>
      <Expertise />
    </div>

    <div>
      <Avis />
    </div>
    <div class="demande-partenariat">
      <v-col cols="auto">
        <v-dialog
          transition="dialog-bottom-transition"
          max-width="600"
          v-model="dialogPartenaire"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="amber" v-bind="attrs" v-on="on"
              >Dévenir partenaire</v-btn
            >
          </template>
          <v-card>
            <v-toolbar color="primary" class="text-center h3" dark
              >Demande de partenariat</v-toolbar
            >
            <v-card-text>
              <div class="pa-12">
                AUDITS rénovation met à votre disposition une équipe compétente
                pour répondre à tous vos besoins en travaux pour l'instant ne
                cherchons des <strong>chantiers ont sous-traitance</strong> dans
                le cadre de notre développement, si vous avez des chantiers à
                sous traiter n'hésitez pas à nos contacter par mail
                <A bref="mailto:auditsrenovation@gmail.com"
                  >auditsrenovation@gmail.com</A
                >
                ou par téléphone au <a href="tel:+33618662919">0618662919</a>
              </div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn text color="error" @click="dialogPartenaire = false"
                >Fermer</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </div>
    <div>
      <Footer />
    </div>
    <!-----alert--->

    <div v-if="alertTel">
      <v-alert dense type="success" class="alert">
        On vous confirme avoir bien reçu votre demande pour<strong>
          être rappeler.</strong
        >
        Un chargé d'affaire vous contactera dans les meilleurs délais
      </v-alert>
    </div>
  </div>
</template>

<script>
import emailjs from "emailjs-com";
export default {
  name: "IndexPage",
  head() {
    return {
      title: this.auditsSeo.title,
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: this.auditsSeo.description,
        },

        {
          hid: "og:title",
          name: "og:title",
          content: this.auditsSeo.description,
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.auditsSeo.description,
        },
        { hid: "og:url", name: "og:url", content: this.auditsSeo.url },
        { hid: "og:image", name: "og:image", content: this.auditsSeo.img },

        {
          hide: "twitter:card",
          name: "twitter:card",
          content: this.auditsSeo.img ? "summary_large_image" : "summary",
        },
        {
          hide: "twitter:site",
          name: "twitter:site",
          content: this.auditsSeo.url,
        },
      ],
    };
  },
  data: () => ({
    validFormAppel: true,
    dialogPartenaire: false,
    auditsSeo: {
      title: "AUDITS rénovation",
      description:
        "AUDITS rénovation | Pour tous vos travaux de rénovation , isolation, travaux de couverture ou de façade, audits rénovation répond à vos besoins devis gratuit + diagnostics techniques ",
      url: "https://auditsrenovation.fr",
      img: require("~/static/ravalement.jpg"),
    },
    client: {
      tel: "",
      name: "",
    },
    alertTel: false,
    Rules: {
      name: [(v) => !!v || "Champs requies"],
      tel: [
        (v) => !!v || "Champs requies",
        (v) =>
          (v && v.length >= 8) ||
          "Un numéro valid contient minumum 8 caractéres",
      ],
    },
  }),
  methods: {
    sendEmailTel(e) {
      this.validate();
      setTimeout(() => {
        if (this.validFormAppel) {
          emailjs
            .sendForm(
              "service_rpc1vli",
              "template_cyagjyi",
              e.target,
              "OwCoJCs42AJa_Sheh"
            )
            .then(
              (result) => {
                return (
                  console.log("SUCCESS!", result.status, result.text),
                  this.reset(),
                  this.alertTelSucces()
                );
              },
              (error) => {
                console.log("FAILED...", error);
              }
            );
        }
      }, 5);
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
  background-image: url(~/static/isolation.jpg);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  width:100%;
  height: 900px;
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
  right:1px;
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
  .margin-bg[data-v-2a183b29] {
    margin-top: 40px;
  }
  .demande-partenariat {
    position: static;
  }
  h2,
  .h2,
  .bg-img[data-v-2a183b29] {
    font-size: 1.5rem;
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
