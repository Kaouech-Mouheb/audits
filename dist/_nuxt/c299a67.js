(window.webpackJsonp=window.webpackJsonp||[]).push([[19,11],{408:function(e,t,n){var content=n(414);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(36).default)("96a668f0",content,!0,{sourceMap:!1})},413:function(e,t,n){"use strict";n(408)},414:function(e,t,n){var r=n(35)(!1);r.push([e.i,".alert[data-v-23f78320]{position:fixed;top:50px;z-index:1000}",""]),e.exports=r},416:function(e,t,n){"use strict";n.r(t);n(11),n(40);var r=n(409),o={data:function(){return{validFormDevis:!0,devis:{typeTravaux:"",name:"",codePostal:"",tel:"",message:""},alertDevis:!1,Rules:{typeTravaux:[function(e){return!!e||"Champs requies"}],name:[function(e){return!!e||"Champs requies"}],tel:[function(e){return!!e||"Champs requies"},function(e){return e&&e.length>=8||"Un numéro valid contient minumum 8 caractéres"}],email:[function(e){return!!e||"E-mail est requies"},function(e){return/.+@.+\..+/.test(e)||"Format non valide"}],codePostal:[function(e){return!!e||"Champs requies"},function(e){return/[0-9]{5}/g.test(e)||"Format non valide"}]}}},methods:{sendEmailDevis:function(e){var t=this;this.validateDevis(),setTimeout((function(){t.validFormDevis&&r.a.sendForm("service_rpc1vli","template_vh0cdqy",e.target,"OwCoJCs42AJa_Sheh").then((function(e){return console.log("SUCCESS!",e.status,e.text),t.resetFormDevis(),t.alertDevisSucces()}),(function(e){console.log("FAILED...",e)}))}),5)},validateDevis:function(){this.$refs.formDevis.validate()},alertDevisSucces:function(){var e=this;this.alertDevis=!0,setTimeout((function(){e.alertDevis=!1}),7e3)},resetFormDevis:function(){this.$refs.formDevis.reset()}}},l=(n(413),n(78)),d=n(90),v=n.n(d),c=n(564),m=n(388),f=n(419),_=n(406),h=n(397),x=n(549),D=n(399),C=n(552),y=n(489),w=n(551),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[n("v-card",{attrs:{id:"formDevis"}},[n("v-card-title",{staticClass:"text-primary"},[e._v(" Devis Gratuit ")]),e._v(" "),n("v-card-text",[n("v-row",[n("v-col",{attrs:{cols:"12",md:"8"}},[e._v("\n            Remplissez ce formulaire pour recevoir votre devis gratuit et sans\n            engagement sous 24h ouvrés.\n          ")]),e._v(" "),n("v-col",{attrs:{cols:"12",md:"4"}},[n("img",{attrs:{src:"rge.jpeg",width:"70px"}})])],1)],1),e._v(" "),n("v-card-text",[n("v-form",{ref:"formDevis",attrs:{"lazy-validation":""},on:{submit:function(t){return t.preventDefault(),e.sendEmailDevis.apply(null,arguments)}},model:{value:e.validFormDevis,callback:function(t){e.validFormDevis=t},expression:"validFormDevis"}},[n("v-select",{attrs:{items:["Isolation des combles","Aménagement de combles","Traitement Bois Charpente","isolation thermique","travaux de couverture","travaux de peinture","Isolation des murs par l'intérieur","Isolation des murs par l'extérieur","Ravalement de façade","Traitement de façade","Isolation toiture par l’extérieur","Isolation sous toiture","Rénovation de toiture","Démoussage toiture","Traitement de toiture","Menuiseries, fenêtres, portes","Ventilation, VMC","Isolation garage","Autres"],label:"Type de travaux",rules:e.Rules.typeTravaux,name:"type_travaux",required:""},model:{value:e.devis.typeTravaux,callback:function(t){e.$set(e.devis,"typeTravaux",t)},expression:"devis.typeTravaux"}}),e._v(" "),n("v-text-field",{attrs:{rules:e.Rules.name,name:"client_name",label:"Nom *","single-line":""},model:{value:e.devis.name,callback:function(t){e.$set(e.devis,"name",t)},expression:"devis.name"}}),e._v(" "),n("v-text-field",{attrs:{rules:e.Rules.codePostal,name:"code_postal",label:"code postal *","single-line":""},model:{value:e.devis.codePostal,callback:function(t){e.$set(e.devis,"codePostal",t)},expression:"devis.codePostal"}}),e._v(" "),n("v-text-field",{attrs:{label:"votre téléphone *",rules:e.Rules.tel,regex:"^(71|72|74|76|81|82|84|85|86|87|88|89)\\\\d{5}$",type:"number",name:"client_tel","single-line":""},model:{value:e.devis.tel,callback:function(t){e.$set(e.devis,"tel",t)},expression:"devis.tel"}}),e._v(" "),n("v-text-field",{attrs:{rules:e.Rules.email,name:"client_email",label:"votre email *","single-line":""},model:{value:e.devis.email,callback:function(t){e.$set(e.devis,"email",t)},expression:"devis.email"}}),e._v(" "),n("v-textarea",{attrs:{clearable:"",name:"message","clear-icon":"mdi-close-circle",label:"Décrivez votre projet et leur de rappel souhaitée"},model:{value:e.devis.message,callback:function(t){e.$set(e.devis,"message",t)},expression:"devis.message"}}),e._v(" "),n("v-btn",{attrs:{color:"primary",type:"submit",disabled:!e.validFormDevis}},[e._v("Envoyer ma demande de devis")]),e._v(" "),n("small",{staticClass:"d-block mt-4"},[e._v("\n            Vos données personnelles sont collectées exclusivement dans le\n            cadre de votre demande de devis et ne font l’objet d’aucune\n            diffusion ni commercialisation. Elles sont destinées au personnel\n            de AUDITS rénovation en charge du traitement de votre demande.\n          ")])],1)],1)],1)],1),e._v(" "),e.alertDevis?n("div",{staticClass:"alert"},[n("v-alert",{attrs:{dense:"",type:"success"}},[e._v("\n      On vous confirme avoir bien reçu votre demande pour"),n("strong",[e._v("\n        un devis gratuit.")]),e._v("\n      Un chargé d'affaire vous contactera dans les meilleurs délais\n    ")])],1):e._e()])}),[],!1,null,"23f78320",null);t.default=component.exports;v()(component,{VAlert:c.a,VBtn:m.a,VCard:f.a,VCardText:_.b,VCardTitle:_.c,VCol:h.a,VForm:x.a,VRow:D.a,VSelect:C.a,VTextField:y.a,VTextarea:w.a})},482:function(e,t,n){var content=n(536);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(36).default)("21876321",content,!0,{sourceMap:!1})},535:function(e,t,n){"use strict";n(482)},536:function(e,t,n){var r=n(35)(!1);r.push([e.i,".deperdition[data-v-1180fd99]{max-width:300px}",""]),e.exports=r},560:function(e,t,n){"use strict";n.r(t);n(5),n(72);var r={head:function(){return{title:this.isolation.title,meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:this.isolation.description},{hid:"og:title",name:"og:title",content:this.isolation.title},{hid:"og:description",name:"og:description",content:this.isolation.description},{hid:"og:url",name:"og:url",content:this.isolation.url},{hide:"twitter:card",name:"twitter:card"},{hide:"twitter:site",name:"twitter:site",content:this.isolation.url}]}},data:function(){return{isolation:{title:"Audits rénovation | Travaux d'isolation thermique",description:"Audits rénovation |Les travaux d'isolation bénéficient d'une TVA réduite. Le taux de 5,5 % s'applique directement sur votre facture. AUDITS rénovation effectue les démarches pour vous. Audits rénovation siége : Choisy Le Roi",url:"https://auditsrenovation.fr/isolation-thermique/"}}}},o=(n(535),n(78)),l=n(90),d=n.n(l),v=n(397),c=n(405),m=n(399),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",md:"12"}},[n("h1",{staticClass:"text-center text-primary"},[e._v("\n          AUDITS rénovation isolation thermique\n        ")])])],1),e._v(" "),n("v-row",{attrs:{justify:"space-between"}},[n("v-col",{attrs:{cols:"12",md:"6"}},[n("h2",{staticClass:"h5"},[e._v("L’isolation d’un maison et pourquoi ?")]),e._v(" "),n("p",[e._v("\n          L’"),n("strong",[e._v("isolation thermique")]),e._v(" fait partie des travaux\n          incontournables pour réduire vos dépenses énergétiques, améliorer\n          votre confort ou faire augmenter la valeur de votre maison.\n        ")]),e._v(" "),n("p",[e._v("\n          L'"),n("strong",[e._v("isolation thermique")]),e._v(" d'une maison, en particulier\n          du toit et des murs extérieurs, peut empêcher plus de 50 % des\n          pertes de chaleur.\n        ")]),e._v(" "),n("p",[e._v("\n          La régulation de la ventilation et de l'humidité optimisent\n          l'efficacité de l'"),n("strong",[e._v("isolation thermique")]),e._v(" et augmentent\n          la durée de vie des isolants\n        ")]),e._v(" "),n("div",[n("img",{staticClass:"deperdition",attrs:{src:"deperdition.jpg",alt:""}})]),e._v(" "),n("p",{staticClass:"h3"},[e._v("\n          Isoler sa maison pour gagner en confort et faire des économies\n        ")]),e._v(" "),n("p",[e._v("\n          L'isolation d'une maison est importante pour plusieurs raisons :  \n          en effet en réduisant les échanges thermiques avec l'extérieur,\n          l'"),n("strong",[e._v("isolation thermique")]),e._v("\n          permet d'éviter les variations de température au cours de la journée\n          et ainsi de faire des économies de chauffage et de climatisation.\n        ")]),e._v(" "),n("p",[e._v("\n          L'"),n("strong",[e._v("isolation thermique")]),e._v(" contribue à faire baisser la\n          consommation d'énergie, l'isolation participe à diminuer votre\n          empreinte carbone. La température étant plus stable, les occupants\n          de la maison ne ressentent pas de courants d'air. En hiver comme en\n          été, l’amélioration du confort thermique peut avoir un impact sur le\n          repos, la gestion du stress, le sommeil... *\n        ")]),e._v(" "),n("p",[e._v("\n          La valeur de la maison augmente aprés avoir effectuer les travaux\n          d'"),n("strong",[e._v("isolation thermique")]),e._v(" : en cas de vente,\n          le Diagnostic de Performance Énergétique, obligatoirement joint au\n          dossier des documents techniques, est considéré comme un élément\n          important par la plupart des acheteurs.\n        ")]),e._v(" "),n("p",[e._v("\n          L'"),n("strong",[e._v("'isolation thermique")]),e._v(" contribue aussi au maintien\n          du niveau d'hygrométrie et peut aider à prévenir certains soucis\n          d'humidité. Bien que ce ne soit pas leur rôle premier, les\n          "),n("strong",[e._v("isolants thermiques")]),e._v(" atténuent tous aussi la\n          diffusion des bruits (à des niveaux différents), ils luttent donc\n          aussi contre la pollution sonore.\n        ")]),e._v(" "),n("h3",{staticClass:"h3"},[e._v("Les différentes techniques d'isolation")]),e._v(" "),n("p",[e._v("\n          L'"),n("strong",[e._v("isolation thermique par l'intérieur")]),e._v(", rapide et\n          peu onéreuse, est la plus courante en France.\n        ")]),e._v(" "),n("p",[e._v("\n          L'"),n("strong",[e._v("isolation thermique par l'extérieur")]),e._v(" : souvent\n          plus efficace que l'isolation par l'intérieur, elle évite aussi de\n          perdre du volume habitable. Très connue pour les murs, cette méthode\n          peut aussi être appliquée au niveau de la toiture : l'isolant est\n          alors mis en place après dépose de la couverture.\n        ")]),e._v(" "),n("p",[e._v("\n          L'"),n("strong",[e._v("isolation répartie")]),e._v(": réservée aux chantiers de\n          construction ou aux projets de rénovation affectant des parties\n          porteuses du bâtiment. Elle consiste à placer les matériaux isolants\n          directement au niveau de la structure, sans créer une épaisseur\n          supplémentaire.\n        ")])]),e._v(" "),n("v-col",{attrs:{cols:"12",md:"4"}},[n("FormulaireDevis")],1)],1)],1),e._v(" "),n("div",[n("Footer")],1)],1)}),[],!1,null,"1180fd99",null);t.default=component.exports;d()(component,{FormulaireDevis:n(416).default,Footer:n(286).default}),d()(component,{VCol:v.a,VContainer:c.a,VRow:m.a})}}]);