<template>
  <v-container>
    <v-card elevation="4" shaped class="p-4">
      <div class="h1 text-primary text-center">
        Estimer vos travaux de rénovation en ligne
      </div>

      <v-divider></v-divider>
      <v-row>
        <v-col>
          <p class="p-estimation primary">
            Pas le temps d'organiser des visites ? Utilisez notre estimateur en
            ligne pour recevoir une estimation de vos travaux par email. Le prix
            de notre simulation est proche de 90 % du coût final.
          </p>
        </v-col>
      </v-row>
      <!-- Ligne 1 -->
      <v-row>
        <v-col cols="12">
          <p>Peinture & Enduit - prix incluant la fourniture</p>
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model="estimation.peinture"
            label="Peinture (m2) - 1 impression + 2 couche de peinture"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model="estimation.peintureEnduit"
            label="Peinture & Enduit (m2) "
          ></v-text-field>
        </v-col>
      </v-row>

      <!-- Ligne 2 -->
      <v-row>
        <v-col cols="12">
          <p>Révetements sol - prix de pose colle et joint inclus</p>
        </v-col>
        <v-col cols="4">
          <v-text-field
            v-model="estimation.carrelage"
            label="Carrelage (m2)"
            placeholder="carrelage, mosaique, faîence (m2)"
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field
            v-model="estimation.lino"
            label="Révetement souple pvc & lino (m2)"
            placeholder="PVC ou lino (m2)"
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field
            v-model="estimation.parquets"
            label="Parquet (m2)"
            placeholder="massif ou flottant (m2)"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <p>Plâtrerie & placo BA13 - prix incluant la fourniture</p>
        </v-col>
        <v-col cols="4">
          <v-text-field
            v-model="estimation.placo.cloison"
            label="Cloisonnement (m2)"
            type="number"
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field
            v-model="estimation.placo.doublage"
            label="Doublage (m2)"
            type="number"
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field
            v-model="estimation.placo.plafond"
            label="Faux plafond (m2)"
            type="number"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-radio-group label="Isolation" row>
            <v-radio
              label="Oui"
              v-model="estimation.placo.isolation"
              value="true"
            ></v-radio>
            <v-radio
              v-model="estimation.placo.isolation"
              label="Non"
              value="false"
            ></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12"> Démolition & Dépose - Estimation </v-col>
        <v-col>
          <v-textarea
            v-model="estimation.depose"
            label="Décrire ce que vous souhaitiez faire ..!"
            hint="Mettez les quantité"
          ></v-textarea>
        </v-col>
      </v-row>

      <!-- Ligne 3 -->
      <v-row>
        <v-col cols="12">Plomberie - prix incluant la fourniture </v-col>

        <v-col>
          <v-select
            v-model="estimation.plomberie"
            :items="[
              'Installation cuisine',
              'Installation SDB',
              'Pose toilette Geberit',
              'Pose vasque',
              'Pose receveur de douche',
              'Pose parois de douche',
              'Pose colonne de douche',
              'Pose robinet',
            ]"
            label="Travaux de plomberie"
            multiple
            small-chips
          >
            <template v-slot:append>
              <v-icon small> mdi-arrow-down-bold </v-icon>
            </template>
          </v-select>
        </v-col>
      </v-row>

      <!-- Ligne 4 -->

      <v-row>
        <v-col cols="12"> Électricité - prix incluant la fourniture </v-col>
        <v-col>
          <div text class="text-secondary d-flex justify-content-between">
            <div>Travaux d'électricité</div>
            <div>
              <v-dialog max-width="700" v-model="dialogElectricite">
                <template #activator="{ on, attrs }">
                  <v-btn text icon v-bind="attrs" v-on="on"
                    ><v-icon small> mdi-arrow-down-bold </v-icon></v-btn
                  >
                </template>
                <v-form ref="formMenuiserie" @click.prevent="">
                  <v-card>
                    <v-card-title class="headline"> </v-card-title>
                    <v-card-text>
                      <v-container fluid>
                        <v-row>
                          <v-col cols="12">
                            <v-text-field
                              v-model="estimation.electricite.tableaux"
                              label="Pose tableau électrique"
                              type="number"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-text-field
                              v-model="estimation.electricite.cercuit"
                              label="Mise en norme circuit électrique"
                              placeholder="mise en norme NFC 15 - 100"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-text-field
                              v-model="estimation.electricite.prises"
                              label="Pose prises"
                              type="number"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-text-field
                              v-model="estimation.electricite.interupteurs"
                              label="Pose interrupteurs"
                              type="number"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        text
                        color="error"
                        @click="dialogElectricite = false"
                        >Fermer</v-btn
                      >
                      <v-btn text color="primary">Ajouter +</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-form>
              </v-dialog>
            </div>
          </div>
          <hr />
        </v-col>
      </v-row>

      <!-- Ligne 5 -->
      <v-row>
        <v-col cols="12"
          >Menuiserire intérieur et extérieur- prix de pose n'incluant pas la
          fourniture</v-col
        >

        <v-col>
          <div text class="text-secondary d-flex justify-content-between">
            <div>Travaux de menuiserie</div>
            <div>
              <v-dialog max-width="700" v-model="dialogMenuiserie">
                <template #activator="{ on, attrs }">
                  <v-btn text icon v-bind="attrs" v-on="on"
                    ><v-icon small> mdi-arrow-down-bold </v-icon></v-btn
                  >
                </template>
                <v-form ref="formMenuiserie" @click.prevent="">
                  <v-card>
                    <v-card-title class="headline">
                      Indiquez le nombre de portes et fenêtres à poser
                    </v-card-title>
                    <v-card-text>
                      <v-container fluid>
                        <v-row>
                          <v-col cols="12">
                            <v-text-field
                              v-model="estimation.menuiserie.porteinterieur"
                              label="Pose portes intérieures"
                              type="number"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-text-field
                              v-model="estimation.menuiserie.cuisine"
                              label="Pose cuisine"
                              placeholder="dimensions et n°element"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-text-field
                              v-model="estimation.menuiserie.placard"
                              label="Pose placard"
                              placeholder="dimensions et n° de porte"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-text-field
                              v-model="estimation.menuiserie.porteexterieur"
                              label="Menuiserie extérieure - Pose fenêtre"
                              type="number"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-text-field
                              v-model="estimation.menuiserie.fenetre"
                              label="Menuiserie extérieure - Pose porte fenêtre"
                              type="number"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-text-field
                              v-model="estimation.menuiserie.portefenetre"
                              label="Menuiserie extérieure - Pose porte d\'entrée"
                              type="number"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        text
                        color="error"
                        @click="dialogMenuiserie = false"
                        >Fermer</v-btn
                      >
                      <v-btn text color="primary">Ajouter +</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-form>
              </v-dialog>
            </div>
          </div>
          <hr />
        </v-col>
      </v-row>
      <!-- Ligne 6 -->

      <v-row>
        <v-col cols="12">
          Travaux de ventilation & VMC - prix de pose n'incluant pas la
          fourniture
        </v-col>
        <v-col>
          <div text class="text-secondary d-flex justify-content-between">
            <div>Travaux de ventilation</div>
            <div>
              <v-dialog max-width="700" v-model="dialogVmc">
                <template #activator="{ on, attrs }">
                  <v-btn text icon v-bind="attrs" v-on="on"
                    ><v-icon small> mdi-arrow-down-bold </v-icon></v-btn
                  >
                </template>
                <v-form ref="formMenuiserie" @click.prevent="">
                  <v-card>
                    <v-card-title class="headline"> </v-card-title>
                    <v-card-text>
                      <v-container fluid>
                        <v-row>
                          <v-col cols="12">
                            <v-text-field
                              v-model="estimation.vmc.travaux"
                              label="Travaux de ventilation"
                            ></v-text-field>
                          </v-col>

                          <v-col cols="12">
                            <v-text-field
                              v-model="estimation.vmc.extractor"
                              label="Pose extractor d\'air"
                              type="number"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-text-field
                              v-model="estimation.vmc.vmcs"
                              label="Pose kit vmc simple flux"
                              type="number"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-text-field
                              v-model="estimation.vmc.vmcd"
                              label="Pose des grilles d\'aération"
                              type="number"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn text color="error" @click="dialogVmc = false"
                        >Fermer</v-btn
                      >
                      <v-btn text color="primary">Ajouter +</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-form>
              </v-dialog>
            </div>
          </div>
          <hr />
        </v-col>
      </v-row>

      <!-- Ligne 6 -->
      <v-row>
        <v-col cols="12">Rénovation du façade - ravalement & isolation</v-col>
        <v-col cols="6">
          <v-text-field
            v-model="estimation.ite"
            label="Isolation thermique par l'extérieur (m2) - prix incluant la fourniture "
            type="number"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model="estimation.ravalement"
            label="Ravalement de façade (m2) - prix incluant la fourniture"
            type="number"
          ></v-text-field>
        </v-col>
      </v-row>

      <!-- Bouton de soumission -->
      <v-row>
        <v-col>
          <v-dialog v-model="dialogMessage" persistent max-width="700px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" block v-bind="attrs" v-on="on">
                Valider
              </v-btn>
            </template>
            <v-card>
              <v-card-title class="text-primary">
                Compléter votre demandee
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-form
                    ref="formulaireEstimation"
                    @submit.prevent="submitForm"
                    lazy-validation
                  >
                    <v-row>
                      <v-textarea
                        v-model="estimation.message"
                        clearable
                        clear-icon="mdi-close-circle"
                        label="Décrire votre projet en détails avant de l'envoyer"
                        :rules="[(v) => !!v || 'ce champs est requise']"
                      ></v-textarea>
                    </v-row>
                    <v-row>
                      <v-col>
                        <v-text-field
                          v-model="estimation.address"
                          label="Adresse"
                          :rules="[(v) => !!v || 'ce champs est requise']"
                        >
                        </v-text-field>
                      </v-col>
                      <v-col>
                        <v-text-field
                          v-model="estimation.cP"
                          label="Code postal"
                          type="number"
                          :rules="[(v) => !!v || 'ce champs est requise']"
                        >
                        </v-text-field>
                      </v-col>
                      <v-col>
                        <v-text-field
                          v-model="estimation.ville"
                          label="ville"
                          :rules="[(v) => !!v || 'ce champs est requise']"
                        >
                        </v-text-field>
                      </v-col>
                    </v-row>

                    <v-row>
                      <v-col>
                        <v-text-field
                          v-model="estimation.nomComplet"
                          label="Nom Complet"
                          :rules="[(v) => !!v || 'ce champs est requise']"
                          require
                        >
                        </v-text-field>
                      </v-col>
                      <v-col>
                        <v-text-field
                          v-model="estimation.email"
                          type="email"
                          label="Votre Email"
                          :rules="[
                            (v) => !!v || 'adresse email est requise',
                            (v) =>
                              /.+@.+\..+/.test(v) ||
                              'adresse email doit être valide',
                          ]"
                        >
                        </v-text-field>
                      </v-col>
                      <v-col>
                        <v-text-field
                          v-model="estimation.tel"
                          type="number"
                          label="Numéro de téléphone"
                          :rules="[(v) => !!v || 'ce champs est requise']"
                        >
                        </v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-btn color="success" type="submit" text
                          >Envoyer votre demande</v-btn
                        >
                      </v-col>
                    </v-row>
                  </v-form>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="error" text @click="dialogMessage = false"
                  >Fermer
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
  <script>
const axios = require("axios").default;
// Obtenez l'URL de base à partir des variables d'environnement
const API_URL =
  "https://api-travaux-60f80ab3c1e1.herokuapp.com/api/estimation/ajouter";

class EstimationService {
  envoyerEstimation(estimation) {
    return axios({
      method: "post",
      url: API_URL,
      data: estimation,
    });
  }
}
export default {
  data() {
    return {
      estimation: {
        peinture: "",
        peintureEnduit: "",
        carrelage: "",
        lino: "",
        parquets: "",
        placo: {
          cloison: "",
          doublage: "",
          plafond: "",
        },

        depose: "",
        plomberie: [],
        electricite: {
          tableaux: "",
          cercuit: "",
          prises: "",
          interupteurs: "",
        },
        menuiserie: {
          porteinterieur: "",
          cuisine: "",
          placard: "",
          porteexterieur: "",
          fenetre: "",
          portefenetre: "",
        },
        vmc: {
          travaux: "",
          extractor: "",
          vmcs: "",
          vmcd: "",
        },
        ravalement: "",
        ite: "",
        message: "",
        email: "",
        tel: "",
        nomComplet: "",
        address: "",
        cP: "",
        ville: "",
      },

      //les dialogues
      dialogMenuiserie: false,
      dialogElectricite: false,
      dialogVmc: false,
      dialogMessage: false,
    };
  },
  methods: {
    submitForm() {
      // Ajoutez ici la logique pour traiter les données soumises
      // Créer une mise en forme HTML
      let contenuEmail = `
    <h1 class="text-primary text-center">Estimation de travaux</h1>
    <div>
      <!-- Coordonnées client -->
      <h3 class="text-primary">Coordonnées client</h3>
      <table>
        <tr>
          <td><strong>Email:</strong></td>
          <td>${this.estimation.email}</td>
        </tr>
        <tr>
          <td><strong>Téléphone:</strong></td>
          <td>${this.estimation.tel}</td>
        </tr>
        <tr>
          <td><strong>Nom du client:</strong></td>
          <td>${this.estimation.nomComplet}</td>
        </tr>
      </table>
  
      <!-- Adresse du chantier -->
      <hr/>
      <h3>Adresse du chantier</h3>
      <table>
        <tr>
          <td><strong>Adresse du chantier:</strong></td>
          <td>${this.estimation.address}</td>
        </tr>
        <tr>
          <td><strong>Code Postal:</strong></td>
          <td>${this.estimation.cP}</td>
        </tr>
        <tr>
          <td><strong>Ville:</strong></td>
          <td>${this.estimation.ville}</td>
        </tr>
      </table>
  
      <!-- Message client -->
      <hr/>
      <h3>Message client</h3>
      <p>${this.estimation.message}</p>
    </div>
  
    <!-- Déscriptifs détaillés des travaux -->
    <h2 class="text-primary text-center">Déscriptifs détaillés des travaux</h2>
    
    <!-- Travaux de peinture -->
    <div class="row">
      <h3>Travaux de peinture</h3>
      <table>
        <tr>
          <td><strong>Peinture:</strong></td>
          <td>${this.estimation.peinture}</td>
        </tr>
        <tr>
          <td><strong>Peinture Enduit:</strong></td>
          <td>${this.estimation.peintureEnduit}</td>
        </tr>
      </table>
    </div>
  
    <!-- Rénovation du sol -->
    <hr />
    <div class="row">
      <h3>Rénovation du sol</h3>
      <table>
        <tr>
          <td><strong>Carrelage:</strong></td>
          <td>${this.estimation.carrelage}</td>
        </tr>
        <tr>
          <td><strong>Lino:</strong></td>
          <td>${this.estimation.lino}</td>
        </tr>
        <tr>
          <td><strong>Parquets:</strong></td>
          <td>${this.estimation.parquets}</td>
        </tr>
      </table>
    </div>
    
    <!-- Plâtrerie & placo -->
    <hr />
    <div class="row">
      <h3>Plâtrerie & placo</h3>
      <table>
        <tr>
          <td><strong>Placo Cloison:</strong></td>
          <td>${this.estimation.placo.cloison}</td>
        </tr>
        <tr>
          <td><strong>Placo Doublage:</strong></td>
          <td>${this.estimation.placo.doublage}</td>
        </tr>
        <tr>
          <td><strong>Placo Plafond:</strong></td>
          <td>${this.estimation.placo.plafond}</td>
        </tr>
        <tr>
          <td><strong>Dépose:</strong></td>
          <td>${this.estimation.depose}</td>
        </tr>
        <tr>
          <td><strong>Plomberie:</strong></td>
          <td>${this.estimation.plomberie.join(", ")}</td>
        </tr>
      </table>
    </div>
  
    <!-- Travaux d'électricité -->
    <div>
      <h3>Travaux d'électricité</h3>
      <table>
        <tr>
          <td><strong>Électricité Tableaux:</strong></td>
          <td>${this.estimation.electricite.tableaux}</td>
        </tr>
        <tr>
          <td><strong>Électricité Circuit:</strong></td>
          <td>${this.estimation.electricite.cercuit}</td>
        </tr>
        <tr>
          <td><strong>Électricité Prises:</strong></td>
          <td>${this.estimation.electricite.prises}</td>
        </tr>
        <tr>
          <td><strong>Électricité Interrupteurs:</strong></td>
          <td>${this.estimation.electricite.interupteurs}</td>
        </tr>
      </table>
    </div>
  
    <!-- Changement de menuiserie -->
    <div>
      <h3>Changement de menuiserie</h3>
      <table>
        <tr>
          <td><strong>Menuiserie Porte Intérieure:</strong></td>
          <td>${this.estimation.menuiserie.porteinterieur}</td>
        </tr>
        <tr>
          <td><strong>Menuiserie Cuisine:</strong></td>
          <td>${this.estimation.menuiserie.cuisine}</td>
        </tr>
        <tr>
          <td><strong>Menuiserie Placard:</strong></td>
          <td>${this.estimation.menuiserie.placard}</td>
        </tr>
        <tr>
          <td><strong>Menuiserie Porte Extérieure:</strong></td>
          <td>${this.estimation.menuiserie.porteexterieur}</td>
        </tr>
        <tr>
          <td><strong>Menuiserie Fenêtre:</strong></td>
          <td>${this.estimation.menuiserie.fenetre}</td>
        </tr>
        <tr>
          <td><strong>Menuiserie Porte Fenêtre:</strong></td>
          <td>${this.estimation.menuiserie.portefenetre}</td>
        </tr>
      </table>
    </div>
  
    <!-- Travaux de ventilation -->
    <div>
      <h3>Travaux de ventilation</h3>
      <table>
        <tr>
          <td><strong>VMC Travaux:</strong></td>
          <td>${this.estimation.vmc.travaux}</td>
        </tr>
        <tr>
          <td><strong>VMC Extracteur:</strong></td>
          <td>${this.estimation.vmc.extractor}</td>
        </tr>
        <tr>
          <td><strong>VMC Simple Flux:</strong></td>
          <td>${this.estimation.vmc.vmcs}</td>
        </tr>
        <tr>
          <td><strong>VMC Double Flux:</strong></td>
          <td>${this.estimation.vmc.vmcd}</td>
        </tr>
      </table>
    </div>
  
    <!-- Rénovation de façade -->
    <hr />
    <div>
      <h3>Rénovation de façade</h3>
      <table>
        <tr>
          <td><strong>Ravalement:</strong></td>
          <td>${this.estimation.ravalement}</td>
        </tr>
        <tr>
          <td><strong>ITE:</strong></td>
          <td>${this.estimation.ite}</td>
        </tr>
      </table>
    </div>
  `;

      // Reste du code inchangé

      console.log(contenuEmail);
      const contenu = {
        contenu: contenuEmail,
      };

      if (this.$refs.formulaireEstimation.validate()) {
        return axios({
          method: "post",
          url: API_URL,
          data: contenu,
        })
          .then((response) => {
            if (response.status === 200) {
              alert("L'e-mail a bien été envoyé");
            }
            this.$refs.formulaireEstimation.reset();
            this.dialogMessage = false;
          })
          .catch((e) => console.error(e));
      }
    },
  },
};
</script>
<style scoped>
.p-estimation {
  color: white;
  text-align: center;
  font-weight: 500;
  border-radius: 7px;
  font-size: medium;
  letter-spacing: 0.2rem;
  padding: 10px;
}
@media (max-width: 576px) {
  .p-estimation {
    font-weight: 400;
    border-radius: 7px;
    font-size: small;
    letter-spacing: 0.12rem;
    padding: 6px;
  }
}
/* Base */
.h1 {
  margin-top: 50px;
  color: hsl(216, 91%, 54%);
  font-size: 30px;
  font-weight: bold;
  font-family: monospace;
  letter-spacing: 7px;
  cursor: pointer;
  text-transform: uppercase;
}

.h1 {
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
  .h1 {
    margin-top: 30px;
    font-size: 15px;
    letter-spacing: 4px;
  }
}
</style>