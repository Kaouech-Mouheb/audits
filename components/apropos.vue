<template>
  <section>
    <div>
    <v-card class="mt-4 p-4">
      <v-row justify="center">
        <v-col cols="12" md="6" sm="12">
          <div class="a-propos">
            <h1>À propos de la société Audits rénovation</h1>
            AUDITS rénovation est une société de rénovation tous corps d'État.
            Nous mettons notre savoir-faire et notre compétence au service de
            tous projets de rénovation intérieure, rénovation extérieure
            menuiseries; salles de bains et cuisine.
          </div>

          <hr />
          <v-btn color="success" to="/a-propos-auditsrenovation"> En savoir plus </v-btn>

            <v-card height="220px" class="mt-2">
              <v-card-title> Coordonnées de contact </v-card-title>
              <v-card-text>
                <address>
                  <a href="mailto:contact@auditsrenovation.fr" target="_blank"
                    ><v-icon>mdi-email-edit-outline</v-icon>
                    Email:contact@auditsrenovation.fr</a
                  >
                  <br />
                  <a href="tel:+33618662919">
                    <v-icon>mdi-phone</v-icon> téléphone : 0618662919
                  </a>
                </address>

                <v-btn color="primary" href="#formDevis"
                  >demander un devis</v-btn
                >
              </v-card-text>
            </v-card>

        </v-col>
      </v-row>
    </v-card>
  </div>
  </section>
</template>
<style scoped>
.img {
  max-width: 600px;
}
.a-propos {
  font-size: 22px;
}
@media (max-width: 575.98px) {
  .a-propos {
    font-size: 16px;
  }
}
@media (min-width: 576px) and (max-width: 1024px) {
  .img {
    max-width: 800px;
  }
}
</style>
