<template>
    <v-container>
      <v-row justify="center">
        <!-- Section Titre -->
        <v-col cols="12" md="10" class="text-center my-5">
          <h1 class="display-2 font-weight-bold text-primary">À Propos de Nous</h1>
          <p class="subtitle-1">
            <strong>AUDITS rénovation</strong> – Expert en <strong>rénovation intérieure</strong> et <strong>rénovation extérieure</strong> pour améliorer, moderniser, et valoriser votre bien immobilier.
          </p>
        </v-col>
  
        <!-- Section Mission -->
        <v-col cols="12" md="8">
          <h2 class="display-1 text-primary">Notre Mission</h2>
          <p class="body-1">
            Offrir à nos clients un <strong>service de rénovation complet et personnalisé</strong>. Nous croyons que chaque projet est unique et mérite une attention particulière. Notre équipe s'engage à fournir un travail de qualité supérieure, en respectant les <strong>délais</strong>, le <strong>budget</strong> et les attentes de nos clients.
          </p>
        </v-col>
  
        <!-- Section Services -->
        <v-col cols="12" md="8">
          <h2 class="display-1 text-primary">Nos Services</h2>
          <ul class="service-list body-1">
            <li><strong>Rénovation intérieure :</strong> peinture, revêtements muraux et de sols, installation de cuisines et salles de bain.</li>
            <li><strong>Rénovation extérieure :</strong> ravalement de façades, isolation extérieure, peinture extérieure.</li>
            <li><strong>Travaux de couverture :</strong> réfection de toitures, nettoyage et traitement de toits.</li>
          </ul>
        </v-col>
  
        <!-- Section Équipe -->
        <v-col cols="12" md="8">
          <h2 class="display-1 text-primary">Notre Équipe</h2>
          <p class="body-1">
            Composée de professionnels expérimentés, notre équipe travaille avec rigueur et précision. Chez <strong>AUDITS rénovation</strong>, nous valorisons le <strong>respect</strong>, l'<strong>écoute</strong> et l'<strong>excellence</strong>.
          </p>
        </v-col>
  
        <!-- Section Pourquoi Nous Choisir -->
        <v-col cols="12" md="8">
          <h2 class="display-1 text-primary">Pourquoi Choisir AUDITS rénovation ?</h2>
          <ul class="reasons-list body-1">
            <li><strong>Expertise et Savoir-Faire :</strong> Une expérience de plusieurs années et une réputation solide dans le domaine de la rénovation.</li>
            <li><strong>Accompagnement Personnalisé :</strong> Un suivi de chaque projet pour des résultats à la hauteur de vos attentes.</li>
            <li><strong>Engagement Qualité :</strong> La satisfaction de nos clients est notre priorité. Travail soigné et réalisé dans les règles de l'art.</li>
          </ul>
        </v-col>
  
        <!-- Section Contact -->
        <v-col cols="12" md="8" class="text-center my-5">
          <h2 class="display-1 text-primary">Nous Contacter</h2>
          <p class="body-1">
            Pour un <strong>devis gratuit</strong> ou toute information, contactez-nous dès aujourd'hui. <strong>AUDITS rénovation</strong> est à votre écoute pour transformer vos idées en réalité !
          </p>
          <v-btn color="primary" href="mailto:auditsrenovation@gmail.com">Envoyer un Email</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: "AboutUsPage",
    head() {
      return {
        title: "À Propos de AUDITS rénovation | Rénovation Intérieure et Extérieure",
        meta: [
          {
            hid: "description",
            name: "description",
            content: "Découvrez AUDITS rénovation, expert en rénovation intérieure et extérieure. Notre équipe qualifiée réalise vos projets de rénovation avec professionnalisme et respect des délais.",
          },
          { hid: "og:title", property: "og:title", content: "À Propos de AUDITS rénovation" },
          {
            hid: "og:description",
            property: "og:description",
            content: "AUDITS rénovation - Services de rénovation intérieure, extérieure et couverture. Obtenez un devis gratuit pour vos travaux.",
          },
          { hid: "og:image", property: "og:image", content: "/path/to/image.jpg" },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .text-primary {
    color: #0056b3;
  }
  
  .about-us-container {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .service-list,
  .reasons-list {
    list-style: none;
    padding: 0;
    margin: 15px 0;
  }
  
  .service-list li,
  .reasons-list li {
    margin-bottom: 10px;
    line-height: 1.6;
  }
  
  .my-5 {
    margin-top: 2.5rem !important;
    margin-bottom: 2.5rem !important;
  }
  </style>
  