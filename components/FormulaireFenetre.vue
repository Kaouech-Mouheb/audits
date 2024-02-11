<template>
    <div>
        <v-container>
            <v-row justify="center">
                <v-col cols="12" md="6">
                    <v-card>
                        <v-card-title class="text-center text-primary h4">Demander votre devis sans
                            engagement</v-card-title>
                        <v-divider></v-divider>
                        <v-row justify="center">
                            <v-col cols="5">
                                <v-card max-width="210" class="p-4">
                                    <v-img height="120" max-width="100" src="formulairefenetre/appartement.png" />
                                </v-card>
                                <v-radio-group v-model="habitation">
                                    <v-radio label="Appartement" value="Appartement"></v-radio>
                                </v-radio-group>
                            </v-col>
                            <v-col cols="5">
                                <v-card max-width="210" class="p-4">
                                    <v-img height="120" max-width="100" src="formulairefenetre/maison.png" />
                                </v-card>
                                <v-radio-group v-model="habitation">
                                    <v-radio label="Maison" value="Maison"></v-radio>
                                </v-radio-group>
                            </v-col>
                            <v-col cols="5">
                                <v-card max-width="210" class="p-4">
                                    <v-img height="120" max-width="100" src="formulairefenetre/portepvcexterieur.png" />
                                </v-card>
                                <v-radio-group v-model="menuiserie">
                                    <v-radio label="Portes extérieur" value="Porte"></v-radio>
                                </v-radio-group>
                            </v-col>
                            <v-col cols="5">
                                <v-card max-width="210" class="p-4">
                                    <v-img height="120" max-width="100" src="formulairefenetre/portefenetrepvc3.webp" />
                                </v-card>
                                <v-radio-group v-model="menuiserie">
                                    <v-radio label="Fenêtres & Portes Fenêtres" value="Fenêtres"></v-radio>
                                </v-radio-group>
                            </v-col>

                            <v-col cols="10">
                                <v-form lazy-validation @submit.prevent="submitForm" v-model="validFormDevis" ref="form">

                                    <v-text-field v-model="nom" :rules="Rules.name" name="client_name" label="Nom"
                                        required></v-text-field>

                                    <v-text-field v-model="email" :rules="Rules.email" name="client_email" label="Email"
                                        required></v-text-field>

                                    <v-text-field v-model="telephone" :rules="Rules.tel" name="client_tel" label="Téléphone"
                                        regex="^(71|72|74|76|81|82|84|85|86|87|88|89)\\d{5}$" required></v-text-field>
                                    <v-text-field v-model="codePostal" :rules="Rules.codePostal" name="code_postal"
                                        label="Code Postal" required></v-text-field>
                                    <v-select :items="[
                                        'changement de menuiserie extérieur en PVC',
                                        'changement de menuiserie extérieur en Aluminium',
                                        'changement de fenêtre extérieur PVC ou Aluminium',
                                        'changement de porte exrérieur PVC ou Aluminium'

                                    ]" label="Type de travaux" :rules="Rules.typeTravaux" v-model="typeTravaux" name="type_travaux"
                                        required></v-select>


                                    <v-textarea v-model="message" name="message" label="Message" required></v-textarea>

                                    <v-btn type="submit" color="primary" :disabled="!validFormDevis">Envoyer</v-btn>
                                </v-form>
                            </v-col>

                        </v-row>
                    </v-card>
                </v-col>
                <v-col cols="12">
                    <div v-if="alertForm">
                        <v-alert dense type="success">
                            On vous confirme avoir bien reçu votre demande pour<strong>
                                un devis gratuit.</strong>
                            Un chargé d'affaire vous contactera dans les meilleurs délais
                        </v-alert>
                    </div>
                </v-col>
            </v-row>

        </v-container>
        <v-divider></v-divider>
    </div>
</template>
  
<script>
import emailjs from "emailjs-com";

export default {
    data() {
        return {
            Type: 'Travaux de menuiserie',
            typeTravaux:'',
            nom: '',
            email: '',
            telephone: '',
            message: '',
            adresse: "",
            codePostal: '',
            menuiserie: '',
            habitation: '',
            alertForm: false,
            validFormDevis: true,
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
        };

    },
    methods: {
        submitForm(e) {
            // Effectuer des actions supplémentaires, telles que l'envoi du formulaire par e-mail ou l'enregistrement des données dans une base de données
            // Vous pouvez utiliser les données du formulaire en accédant aux propriétés du composant : this.nom, this.email, this.telephone, this.message

            this.validForm();
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
                        )
                }
            }, 5);
        },
        validForm() {
            this.$refs.form.validate();
        },
        alertDevisSucces() {
            this.alertForm = true;
            setTimeout(() => {
                this.alertForm = false;
            }, 7000);
        },
        resetFormDevis() {
            this.$refs.form.reset();
            this.menuiserie = '';
            this.habitation = '';
        },
    }
};
</script>

<style scoped>
.text-center {
    text-align: center;
}
</style>
  