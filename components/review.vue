<template>
  <v-row>
    <v-col cols="12" md="12">
      <h2>Les avis de nos clients</h2>
    </v-col>
    <v-col cols="12" md="2" sm="12">
      <img src="avisverifer.png" class="avis" />
    </v-col>
    <v-col cols="12" md="10">
      <div class="card-carousel-wrapper">
        <div
          class="card-carousel--nav__left"
          @click="moveCarousel(-1)"
          :disabled="atHeadOfList"
        ></div>
        <div class="card-carousel">
          <div class="card-carousel--overflow-container">
            <div
              class="card-carousel-cards"
              :style="{
                transform: 'translateX' + '(' + currentOffset + 'px' + ')',
              }"
            >
              <div
                class="card-carousel--card"
                v-for="item in items"
                :key="item.name"
              >
                <div class="card-carousel--card--footer">
                  <v-avatar>
                    <img :src="item.img" alt="avis Audits renovation" />
                  </v-avatar>
                  <p>{{ item.text }}</p>
                  <p>{{ item.client }}</p>
                  <p>{{ item.date }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="card-carousel--nav__right"
          @click="moveCarousel(1)"
          :disabled="atEndOfList"
        ></div>
      </div>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      currentOffset: 0,
      windowSize: 3,
      paginationFactor: 220,

      items: [
        {
          img: require("~/static/avatar5.jpg"),
          text: "Isolation du comble Rapide efficace et proprement exécutée",
          date: "Le 27/02/2022",
          client: "André S.",
        },
        {
          img: require("~/static/avatar5.jpg"),
          text: "Nous avons été entièrement satisfait.",
          date: "Le 22/01/2022",
          client: "Rachid M.",
        },
        {
          img: require("~/static/avatar5.jpg"),
          text: "Excellent travail avec une équipe à l'écoute et compétente.",
          date: "Le 16/01/2022",
          client: "George P.",
        },
        {
          img: require("~/static/avatar5.jpg"),
          text: "Grand professionnalisme et efficacité. Travail soigné et de qualité.",
          date: "Le 10/01/2022",
          client: "Sabrine M.",
        },
        {
          img: require("~/static/avatar5.jpg"),
          text: "Travail et conseils professionnels au top. Merci.",
          date: "Le 10/01/2022",
          client: "Patrick J.",
        },
        {
          img: require("~/static/avatar5.jpg"),
          text: "Trés satisfait, livraison rapide .Je recommande Audits rénovation pour isolation des combles perdus.",
          date: "Le 24/01/2022",
          client: "Parmatzian H.",
        },
        {
          img: require("~/static/avatar5.jpg"),
          text: "Aucun soucis tout a été bien réalisé comme prévu",
          date: "Le 5/01/2022",
          client: "Rachid K.",
        },
        {
          img: require("~/static/avatar5.jpg"),
          text: "Trés satisfait de résultat le meilleur rapport qualité prix, je recommande",
          date: "Le 24/11/2021",
          client: "Daniel J.",
        },
        {
          img: require("~/static/avatar5.jpg"),
          text: "Entreprise sérieux, personnel qualifié, livraison rapide. Je recommande",
          date: "Le 03/10/2021",
          client: "Sachat M.",
        },
        {
          img: require("~/static/avatar5.jpg"),
          text: "Je ferai apel à eux pour mes futurs travaux",
          date: "Le 07/9/2022",
          client: "Fabienne ben.",
        },
        {
          img: require("~/static/avatar5.jpg"),
          text: "Bonne réactivité et accompagnement pour les travaux. Je recommande",
          date: "Le 05/9/2022",
          client: "Eric her.",
        },
        {
          img: require("~/static/avatar5.jpg"),
          text: "Entreprise sérieuse. Je recommande",
          date: "Le 12/8/2022",
          client: "Carole G.",
        },
        {
          img: require("~/static/avatar5.jpg"),
          text: "Bonne réactivité et accompagnement pour les travaux. Je recommande",
          date: "Le 05/6/2022",
          client: "Mostapha h.",
        },
        {
          img: require("~/static/avatar5.jpg"),
          text: ".Vraiment satisfait. Je recommande",
          date: "Le 11/7/2022",
          client: "Caroline E.",
        },
      ],
    };
  },
  computed: {
    atEndOfList() {
      return (
        this.currentOffset <=
        this.paginationFactor * -1 * (this.items.length - this.windowSize)
      );
    },
    atHeadOfList() {
      return this.currentOffset === 0;
    },
  },
  methods: {
    moveCarousel(direction) {
      // Find a more elegant way to express the :style. consider using props to make it truly generic
      if (direction === 1 && !this.atEndOfList) {
        this.currentOffset -= this.paginationFactor;
      } else if (direction === -1 && !this.atHeadOfList) {
        this.currentOffset += this.paginationFactor;
      }
    },
  },
};
</script>

<style scoped>
.card-carousel-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0 40px;
  color: #666a73;
}
.card-carousel {
  display: flex;
  justify-content: center;
  width: 95%;
}
.card-carousel--overflow-container {
  overflow: hidden;
}
.card-carousel--nav__left,
.card-carousel--nav__right {
  display: inline-block;
  width: 15px;
  height: 15px;
  padding: 10px;
  box-sizing: border-box;
  border-top: 2px solid #42b883;
  border-right: 2px solid #42b883;
  cursor: pointer;
  margin: 0 10px;
  transition: transform 150ms linear;
}
.card-carousel--nav__left[disabled],
.card-carousel--nav__right[disabled] {
  opacity: 0.2;
  border-color: black;
}
.card-carousel--nav__left {
  transform: rotate(-135deg);
}
.card-carousel--nav__left:active {
  transform: rotate(-135deg) scale(0.9);
}
.card-carousel--nav__right {
  transform: rotate(45deg);
}
.card-carousel--nav__right:active {
  transform: rotate(45deg) scale(0.9);
}
.card-carousel-cards {
  display: flex;
  transition: transform 150ms ease-out;
  transform: translatex(0px);
}
.card-carousel-cards .card-carousel--card {
  margin: 0 10px;
  cursor: pointer;
  box-shadow: 0 4px 15px 0 rgba(40, 44, 53, 0.06),
    0 2px 2px 0 rgba(40, 44, 53, 0.08);
  background-color: #fff;
  border-radius: 4px;
  z-index: 3;
  margin-bottom: 2px;
}
.card-carousel-cards .card-carousel--card:first-child {
  margin-left: 0;
}
.card-carousel-cards .card-carousel--card:last-child {
  margin-right: 0;
}
.card-carousel-cards .card-carousel--card img {
  vertical-align: bottom;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  transition: opacity 150ms linear;
  user-select: none;
}
.card-carousel-cards .card-carousel--card img:hover {
  opacity: 0.5;
}
.card-carousel-cards .card-carousel--card--footer {
  width: 200px;
  border-top: 0;
  padding: 7px 15px;
}
.card-carousel-cards .card-carousel--card--footer p {
  padding: 3px 0;
  margin: 0;
  margin-bottom: 2px;
  font-size: 10px;
  font-weight: 500;
  color: #2c3e50;
  user-select: none;
}
.card-carousel-cards .card-carousel--card--footer p:nth-of-type(2) {
  font-size: 12px;
  font-weight: 300;
  padding: 6px;
  background: rgba(40, 44, 53, 0.06);
  display: inline-block;
  position: relative;
  margin-left: 4px;
  color: #666a73;
}
.card-carousel-cards .card-carousel--card--footer p:nth-of-type(2):before {
  content: "";
  float: left;
  position: absolute;
  top: 0;
  left: -12px;
  width: 0;
  height: 0;
  border-color: transparent rgba(40, 44, 53, 0.06) transparent transparent;
  border-style: solid;
  border-width: 12px 12px 12px 0;
}
.card-carousel-cards .card-carousel--card--footer p:nth-of-type(2):after {
  content: "";
  position: absolute;
  top: 10px;
  left: -1px;
  float: left;
  width: 4px;
  height: 4px;
  border-radius: 2px;
  background: white;
  box-shadow: 0px 0px 0px #004977;
}
h2 {
  font-size: 3.6em;
  font-weight: 100;
  text-align: center;
  margin-bottom: 0;
  color: #42b883;
}
.avis {
  widows: 200px;
  height: 200px;
  margin: 10px;
}
@media (max-width: 576px) {
  .avis {
    display: block;

    widows: 150px;
    height: 150px;
    margin: 10px auto 10px auto;
  }
}

/* Base */
h2 {
  margin-top: 50px;
  color: hsl(216, 91%, 54%);
  font-size: 30px;
  font-weight: bold;
  font-family: monospace;
  letter-spacing: 7px;
  cursor: pointer;
  text-transform: uppercase;
}

h2 {
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
  h2 {
    margin-top: 30px;
    font-size: 15px;
    letter-spacing: 4px;
  }



}
</style>
