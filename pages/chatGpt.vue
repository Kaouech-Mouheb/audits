<template>
  <div>
    <h1>Rénovation : Transformer votre espace de vie</h1>
    <p>La rénovation est une étape passionnante pour donner une nouvelle vie à votre maison ou votre appartement. Découvrez nos conseils et astuces pour réussir votre projet de rénovation.</p>

    <div v-for="step in renovationSteps" :key="step.id">
      <h2>{{ step.title }}</h2>
      <img :src="step.image" :alt="step.title" />
      <p>{{ step.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      renovationSteps: [
        {
          id: 1,
          title: "Évaluation des besoins",
          image: "/assets/evaluation.png",
          description: "Avant de commencer votre projet de rénovation, évaluez vos besoins et définissez les objectifs de votre transformation."
        },
        {
          id: 2,
          title: "Consultation d'experts",
          image: "/assets/consultation.png",
          description: "Faites appel à des experts tels que des architectes ou des designers d'intérieur pour obtenir des conseils professionnels et des idées créatives."
        },
        {
          id: 3,
          title: "Planification et conception",
          image: "/assets/planification.png",
          description: "Planifiez votre rénovation en détail, créez des plans et concevez l'agencement des espaces pour obtenir le résultat souhaité."
        },
        {
          id: 4,
          title: "Sélection des matériaux",
          image: "/assets/materiaux.png",
          description: "Choisissez des matériaux de qualité adaptés à votre projet de rénovation, en tenant compte de l'esthétique et de la durabilité."
        }
      ]
    };
  }
};
</script>

<style scoped>
h1 {
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
}

h2 {
  color: #666;
  font-size: 20px;
  margin-bottom: 10px;
}

p {
  color: #777;
  font-size: 16px;
  margin-bottom: 20px;
}

img {
  max-width: 100%;
  margin-bottom: 10px;
}
</style>
