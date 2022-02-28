<template>
  <div class="rating">
    <v-row class="bg-img" justify="center">
      <div class="block-value"></div>

      <v-col cols="12" md="6" sm="12" class="margin-bg">
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
          votre disposition Une équipe dédiée.
        </p>
        <p class="p3">
          Vous pouvez nous contactez par téléphone ou bien remplir notre
          formulaire en ligne.
        </p>

        <v-row>
          <v-form>
            <v-col cols="12">
              <v-text-field
                filled
                clear-icon="mdi-close-circle"
                clearable
                label="Tapez votre numéro pour être rappeler"
                solo
                type="number"
                hint="cliquez sur le button"
              ></v-text-field>
            </v-col>
            <v-col class="mt-btn-rplmoi">
              <v-btn color="success"> Rappelez Moi </v-btn>
              <div>
                100% de clients satisfaits ! Devis Gratuit sans engagement.
              </div>
            </v-col>
          </v-form>
        </v-row>
      </v-col>
      <v-col cols="12" md="4" sm="12" class="mt-4">
        <v-card id="formDevis">
          <v-card-title class="text-primary"> Devis Gratuit </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="8">
                Remplissez ce formulaire pour recevoir votre devis gratuit et
                sans engagement sous 24h ouvrés.
              </v-col>
              <v-col cols="12" md="4">
                <img src="rge.jpeg" width="70px" />
              </v-col>
            </v-row>
          </v-card-text>

          <v-card-text>
            <v-form>
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
                required
              ></v-select>

              <v-text-field label="Nom *" single-line></v-text-field>
              <v-text-field label="code postal *" single-line></v-text-field>
              <v-text-field
                label="votre téléphone *"
                single-line
              ></v-text-field>
              <v-text-field label="votre email *" single-line></v-text-field>
              <v-textarea
                clearable
                clear-icon="mdi-close-circle"
                label="Décrivez votre projet et leur de rappel souhaitée"
              ></v-textarea>
              <v-btn color="primary">Envoyer ma demande de devis</v-btn>
              <small class="d-block mt-4">
                Vos données personnelles sont collectées exclusivement dans le
                cadre de votre demande de devis et ne font l’objet d’aucune
                diffusion ni commercialisation. Elles sont destinées au
                personnel de Mieux Rénover en charge du traitement de votre
                demande. Le présent site est déclaré à la CNIL sous le n°
                1502515v0.
              </small>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="m-4">
      <v-card width="100%">
        <v-row justify="center">
          <v-col cols="12" md="2">
            <img src="decennale.png" class="logo-decennal" alt="" />
          </v-col>
          <v-col cols="12" md="6">
            <v-card-title class="text-center text-primary">
              Responsabilité civile professionnelle
            </v-card-title>
            <v-card-text>
              L’entreprise AUDITS Rénovation couvre et garantit l’intégralité
              des dommages qui apparaissent après la réception des travaux
              pendant 10 ans.
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>
    </v-row>

    <v-row class="m-4 small-screen">
      <v-card>
        <v-row justify="center">
          <v-col cols="12" md="5">
            <span class="h4 mt-4 d-block p-2 text-center text-primary"
              >Découvrez nos experts par métier du bâtiment</span
            >
            <hr />
          </v-col>
        </v-row>
        <v-row class="m-2" justify="center">
          <v-col cols="12" md="2">
            <v-card>
              <v-img
                src="plaquiste.jpg"
                width="100%"
                height="300px"
                alt=""
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              >
                <v-card-title class="text-light bg-primary"
                  >Plaquiste</v-card-title
                >
              </v-img>
            </v-card>
          </v-col>
          <v-col cols="12" md="2">
            <v-card>
              <v-img
                src="macon.jpg"
                width="100%"
                height="300px"
                alt=""
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              >
                <v-card-title class="text-light bg-primary">Maçon</v-card-title>
              </v-img>
            </v-card>
          </v-col>
          <v-col cols="12" md="2">
            <v-card>
              <v-img
                src="electricien.jpg"
                width="100%"
                height="300px"
                alt=""
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              >
                <v-card-title class="text-light bg-primary"
                  >Électricien</v-card-title
                >
              </v-img>
            </v-card>
          </v-col>
          <v-col cols="12" md="2">
            <v-card>
              <v-img
                src="plombier.jpg"
                width="100%"
                height="300px"
                alt=""
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              >
                <v-card-title class="text-light bg-primary"
                  >Plombier</v-card-title
                >
              </v-img>
            </v-card>
          </v-col>
        </v-row>

        <v-row class="m-2" justify="center">
          <v-col cols="12" md="2">
            <v-card>
              <v-img
                src="menuisier.jpg"
                width="100%"
                height="300px"
                alt=""
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              >
                <v-card-title class="text-light bg-primary"
                  >Menuisier</v-card-title
                >
              </v-img>
            </v-card>
          </v-col>
          <v-col cols="12" md="2">
            <v-card>
              <v-img
                src="peintre.jpg"
                width="100%"
                height="300px"
                alt=""
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              >
                <v-card-title class="text-light bg-primary"
                  >Peintre</v-card-title
                >
              </v-img>
            </v-card>
          </v-col>
          <v-col cols="12" md="2">
            <v-card>
              <v-img
                src="carreleur.jpg"
                width="100%"
                height="300px"
                alt=""
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              >
                <v-card-title class="text-light bg-primary"
                  >Carreleur</v-card-title
                >
              </v-img>
            </v-card>
          </v-col>
          <v-col cols="12" md="2">
            <v-card>
              <v-img
                src="isolation1.jpg"
                width="100%"
                height="300px"
                alt=""
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              >
                <v-card-title class="text-light bg-primary"
                  >Isolation</v-card-title
                >
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-row>

    <v-row class="m-4">
      <v-card width="100%">
        <v-row justify="center">
          <v-col cols="12" md="3">
            <div class="h2 text-center">
              <span class="text-primary"> Nos </span> points fort
            </div>
            <hr />
          </v-col>
        </v-row>
        <v-row class="m-2">
          <div class="rapport-prix">
            <img src="rapportqualite.png" class="img-rapport-prix" alt="" />
          </div>
          <v-col cols="12" md="3">
            <div class="d-flex flex-column align-items-center">
              <div>
                <v-icon color="primary" x-large
                  >mdi-truck-delivery-outline</v-icon
                >
              </div>
              <div class="h5 text-primary">Livraison rapide</div>
            </div>
          </v-col>
          <v-col cols="12" md="3">
            <div class="d-flex flex-column align-items-center">
              <div>
                <v-icon color="primary" x-large
                  >mdi-calculator-variant-outline</v-icon
                >
              </div>
              <div class="h5 text-primary">Devis Gratuit</div>
            </div>
          </v-col>
          <v-col cols="12" md="3">
            <div class="d-flex flex-column align-items-center">
              <div>
                <v-icon color="primary" x-large
                  >mdi-sun-thermometer-outline</v-icon
                >
              </div>
              <div class="h5 text-primary">Coeficient thermique Excelent</div>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-row>
    <v-row class="small-screen" justify="center">
      <v-col cols="12" md="5">
        <v-carousel>
          <v-carousel-item
            v-for="(item, i) in imagesRenovation"
            :key="i"
            :src="item"
            reverse-transition="fade-transition"
            transition="fade-transition"
          >
            <v-row class="fill-height" align="center" justify="center">
              <div class="text-h2">Rénovation</div>
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col cols="12" md="5">
        <v-carousel>
          <v-carousel-item
            v-for="(item, i) in imagesRavalement"
            :key="i"
            :src="item"
            reverse-transition="fade-transition"
            transition="fade-transition"
          >
            <v-row class="fill-height" align="center" justify="center">
              <div class="text-h2">Isolation</div>
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    <v-row>
      <hr />
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="3" sm="12">
        <v-card height="200px">
          <v-card-title> Adresse </v-card-title>
          <v-card-text>
            <address>
              <v-icon>mdi-map-marker-radius-outline</v-icon> Adresse: 3 abenue
              de 25 aout 1944 <br />
              Choisy Le Roi
            </address>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="3" sm="12">
        <v-card height="200px">
          <v-card-title> Coordonnées de contact </v-card-title>
          <v-card-text>
            <v-icon>mdi-email-send-outline</v-icon> Email:
            auditsrenovation@gmail.com <br />
            <v-icon>mdi-phone</v-icon> téléphone : 06 18 66 29 19
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
                  ({{ 5 }}/5) basé sur 14 avis
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
                      </v-col>
                    </v-row>
                  </v-container>

                  <v-divider></v-divider>
                  <v-container>
                    <v-row justify="center">
                      <v-col cols="12" md="12" sm="12">
                        <p class="text-primary text-center h5">
                          Ajouter votre avis
                        </p>
                      </v-col>
                      <v-col cols="12" md="10" sm="10">
                        <v-textarea
                          label="Ajouter un commentaire"
                          value="Votre commentaire ici ..!!"
                          hint="commenter"
                        ></v-textarea>
                      </v-col>
                      <v-col cols="12" md="10" sm="10">
                        <v-rating
                          v-model="rating"
                          color="yellow darken-3"
                          background-color="grey darken-1"
                          empty-icon="$ratingFull"
                          half-increments
                          hover
                          large
                        ></v-rating>
                      </v-col>

                      <v-col cols="12" md="10" sm="10">
                        <v-btn color="success"> Envoyer votre avis </v-btn>
                      </v-col>
                    </v-row>
                  </v-container>

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
    <v-row>
      <hr />
    </v-row>
    <div>
      <Footer />
    </div>
  </div>
</template>

<script>
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
    dialogAvis: false,
    rating: "",
    auditsSeo: {
      title: "AUDITS rénovation",
      description:
        "pour tous vos travaux de rénovation , isolation, travaux de couverture ou de façade, audits rénovation répond à vos besoins devis gratuit + diagnostics techniques ",
      url: "https://auditsrenovation.fr",
      img: require("~/static/ravalement.jpg"),
    },
    imagesRenovation: [
      "bureau.jpg",
      "bain.jpg",
      "cuisine.jpg",
      "bainmarbre.jpg",
    ],
    imagesRavalement: [
      "ite.jpg",
      "ravalement.jpg",
      "itecomble.jpg",
      "couverture.jpg",
    ],
    avis: [
      {
        img: require("~/static/avatar1.jpg"),
        text: "Isolation du comble Rapide efficace et proprement exécutée",
        date: "Le 27/01/2022",
      },
      {
        img: require("~/static/avatar2.jpg"),
        text: "Trés satisfait, livraison rapide .Je recommande Audits rénovation pour isolation des combles perdus.",
        date: "Le 24/01/2022",
      },
      {
        img: require("~/static/avatar3.jpg"),
        text: "Aucun soucis tout a été bien réalisé comme prévu",
        date: "Le 5/01/2022",
      },
      {
        img: require("~/static/avatar4.jpg"),
        text: "Trés satisfait de résultat le meilleur rapport qualité prix, je recommande",
        date: "Le 24/11/2021",
      },
      {
        img: require("~/static/avatar5.jpg"),
        text: "Entreprise sérieux, personnel qualifié, livraison rapide. Je recommande",
        date: "Le 03/10/2021",
      },
    ],
  }),
  methods: {
    calme() {
      return alert("on vous appelera");
    },
  },
};
</script>
<style scoped>
.bg-img {
  color: rgb(252, 252, 252);
  font-size: 20px;
  background-image: url(~/static/isolation.jpg);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  height: 900px;
}
.rapport-prix {
  margin-top: -70px;
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
  width: 100%;
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
.logo-decennal {
  width: 200px;
}
.mt-btn-rplmoi {
  margin-top: -30px;
}

@media (max-width: 575.98px) {
  .margin-bg[data-v-2a183b29] {
    margin-top: 40px;
  }
  h2,
  .h2,
  .bg-img[data-v-2a183b29] {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    font-weight: 300;
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
  .logo-decennal {
    width: 140px;
    display: block;
    margin: 0 auto 0 auto;
  }
  .text-primary {
    font-size: 1rem;
    font-weight: 370;
  }
  .img-rapport-prix {
    width: 110px;
  }
  .rapport-prix {
    margin: 10px auto 10px auto;
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
