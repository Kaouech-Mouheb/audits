(window.webpackJsonp=window.webpackJsonp||[]).push([[23,11],{408:function(e,t,n){var content=n(414);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(36).default)("96a668f0",content,!0,{sourceMap:!1})},413:function(e,t,n){"use strict";n(408)},414:function(e,t,n){var r=n(35)(!1);r.push([e.i,".alert[data-v-23f78320]{position:fixed;top:50px;z-index:1000}",""]),e.exports=r},416:function(e,t,n){"use strict";n.r(t);n(11),n(40);var r=n(409),o={data:function(){return{validFormDevis:!0,devis:{typeTravaux:"",name:"",codePostal:"",tel:"",message:""},alertDevis:!1,Rules:{typeTravaux:[function(e){return!!e||"Champs requies"}],name:[function(e){return!!e||"Champs requies"}],tel:[function(e){return!!e||"Champs requies"},function(e){return e&&e.length>=8||"Un numéro valid contient minumum 8 caractéres"}],email:[function(e){return!!e||"E-mail est requies"},function(e){return/.+@.+\..+/.test(e)||"Format non valide"}],codePostal:[function(e){return!!e||"Champs requies"},function(e){return/[0-9]{5}/g.test(e)||"Format non valide"}]}}},methods:{sendEmailDevis:function(e){var t=this;this.validateDevis(),setTimeout((function(){t.validFormDevis&&r.a.sendForm("service_rpc1vli","template_vh0cdqy",e.target,"OwCoJCs42AJa_Sheh").then((function(e){return console.log("SUCCESS!",e.status,e.text),t.resetFormDevis(),t.alertDevisSucces()}),(function(e){console.log("FAILED...",e)}))}),5)},validateDevis:function(){this.$refs.formDevis.validate()},alertDevisSucces:function(){var e=this;this.alertDevis=!0,setTimeout((function(){e.alertDevis=!1}),7e3)},resetFormDevis:function(){this.$refs.formDevis.reset()}}},l=(n(413),n(78)),v=n(90),d=n.n(v),c=n(564),m=n(388),f=n(419),h=n(406),_=n(397),x=n(549),D=n(399),y=n(552),C=n(489),w=n(551),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[n("v-card",{attrs:{id:"formDevis"}},[n("v-card-title",{staticClass:"text-primary"},[e._v(" Devis Gratuit ")]),e._v(" "),n("v-card-text",[n("v-row",[n("v-col",{attrs:{cols:"12",md:"8"}},[e._v("\n            Remplissez ce formulaire pour recevoir votre devis gratuit et sans\n            engagement sous 24h ouvrés.\n          ")]),e._v(" "),n("v-col",{attrs:{cols:"12",md:"4"}},[n("img",{attrs:{src:"rge.jpeg",width:"70px"}})])],1)],1),e._v(" "),n("v-card-text",[n("v-form",{ref:"formDevis",attrs:{"lazy-validation":""},on:{submit:function(t){return t.preventDefault(),e.sendEmailDevis.apply(null,arguments)}},model:{value:e.validFormDevis,callback:function(t){e.validFormDevis=t},expression:"validFormDevis"}},[n("v-select",{attrs:{items:["Isolation des combles","Aménagement de combles","Traitement Bois Charpente","isolation thermique","travaux de couverture","travaux de peinture","Isolation des murs par l'intérieur","Isolation des murs par l'extérieur","Ravalement de façade","Traitement de façade","Isolation toiture par l’extérieur","Isolation sous toiture","Rénovation de toiture","Démoussage toiture","Traitement de toiture","Menuiseries, fenêtres, portes","Ventilation, VMC","Isolation garage","Autres"],label:"Type de travaux",rules:e.Rules.typeTravaux,name:"type_travaux",required:""},model:{value:e.devis.typeTravaux,callback:function(t){e.$set(e.devis,"typeTravaux",t)},expression:"devis.typeTravaux"}}),e._v(" "),n("v-text-field",{attrs:{rules:e.Rules.name,name:"client_name",label:"Nom *","single-line":""},model:{value:e.devis.name,callback:function(t){e.$set(e.devis,"name",t)},expression:"devis.name"}}),e._v(" "),n("v-text-field",{attrs:{rules:e.Rules.codePostal,name:"code_postal",label:"code postal *","single-line":""},model:{value:e.devis.codePostal,callback:function(t){e.$set(e.devis,"codePostal",t)},expression:"devis.codePostal"}}),e._v(" "),n("v-text-field",{attrs:{label:"votre téléphone *",rules:e.Rules.tel,regex:"^(71|72|74|76|81|82|84|85|86|87|88|89)\\\\d{5}$",type:"number",name:"client_tel","single-line":""},model:{value:e.devis.tel,callback:function(t){e.$set(e.devis,"tel",t)},expression:"devis.tel"}}),e._v(" "),n("v-text-field",{attrs:{rules:e.Rules.email,name:"client_email",label:"votre email *","single-line":""},model:{value:e.devis.email,callback:function(t){e.$set(e.devis,"email",t)},expression:"devis.email"}}),e._v(" "),n("v-textarea",{attrs:{clearable:"",name:"message","clear-icon":"mdi-close-circle",label:"Décrivez votre projet et leur de rappel souhaitée"},model:{value:e.devis.message,callback:function(t){e.$set(e.devis,"message",t)},expression:"devis.message"}}),e._v(" "),n("v-btn",{attrs:{color:"primary",type:"submit",disabled:!e.validFormDevis}},[e._v("Envoyer ma demande de devis")]),e._v(" "),n("small",{staticClass:"d-block mt-4"},[e._v("\n            Vos données personnelles sont collectées exclusivement dans le\n            cadre de votre demande de devis et ne font l’objet d’aucune\n            diffusion ni commercialisation. Elles sont destinées au personnel\n            de AUDITS rénovation en charge du traitement de votre demande.\n          ")])],1)],1)],1)],1),e._v(" "),e.alertDevis?n("div",{staticClass:"alert"},[n("v-alert",{attrs:{dense:"",type:"success"}},[e._v("\n      On vous confirme avoir bien reçu votre demande pour"),n("strong",[e._v("\n        un devis gratuit.")]),e._v("\n      Un chargé d'affaire vous contactera dans les meilleurs délais\n    ")])],1):e._e()])}),[],!1,null,"23f78320",null);t.default=component.exports;d()(component,{VAlert:c.a,VBtn:m.a,VCard:f.a,VCardText:h.b,VCardTitle:h.c,VCol:_.a,VForm:x.a,VRow:D.a,VSelect:y.a,VTextField:C.a,VTextarea:w.a})},483:function(e,t,n){var content=n(538);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(36).default)("5cc8664a",content,!0,{sourceMap:!1})},537:function(e,t,n){"use strict";n(483)},538:function(e,t,n){var r=n(35)(!1);r.push([e.i,".deperdition[data-v-743e2ce3]{max-width:600px}@media (max-width:575.98px){.deperdition[data-v-743e2ce3]{max-width:300px}}",""]),e.exports=r},556:function(e,t,n){"use strict";n.r(t);n(5),n(72);var r={head:function(){return{title:this.renovationSeo.title,meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:this.renovationSeo.description},{hid:"og:title",name:"og:title",content:this.renovationSeo.title},{hid:"og:description",name:"og:description",content:this.renovationSeo.description},{hid:"og:url",name:"og:url",content:this.renovationSeo.url},{hide:"twitter:card",name:"twitter:card",content:this.renovationSeo.img?"summary_large_image":"summary"},{hide:"twitter:site",name:"twitter:site",content:this.renovationSeo.url}]}},data:function(){return{renovationSeo:{title:"Audits rénovation - rénovation énergétique de votre logement",description:"AUDITS rénovation | besoin de réaliser des travaux de construction ou de rénovation ? AUDITS rénovation peut répondre à tous vos projets de rénovation, rénovation thermique et aménagement de comble. Audits rénovation siége : Choisy Le Roi",url:"https://auditsrenovation.fr"}}}},o=(n(537),n(78)),l=n(90),v=n.n(l),d=n(397),c=n(405),m=n(399),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",md:"12"}},[n("h1",{staticClass:"text-center text-primary"},[e._v("AUDITS rénovation, Rénovation de votre habitat")])])],1),e._v(" "),n("v-row",{attrs:{justify:"space-between"}},[n("v-col",{attrs:{cols:"12",md:"6"}},[n("section",[n("h1",{staticClass:"h4"},[e._v("La rénovation et pourquoi ?")]),e._v(" "),n("p",[e._v("\n            La rénovation permet de moderniser une habitation ou une pièce\n            rapidement, sans dépenser une somme trop conséquente. Elle peut\n            s'apparenter à un rafraîchissement des peintures et changement des\n            revêtements de sol, mais aussi à la rénovation d'une cuisine ou la\n            réfection d'une salle de bain. Très plébiscitée, la rénovation de\n            combles offre la possibilité d'exploiter tout le potentiel de\n            votre maison pour créer une suite parentale, un bureau ou encore\n            un dortoir pour enfants.\n          ")])]),e._v(" "),n("section",[n("h1",{staticClass:"h4"},[e._v("Rénovation énergétique et pourquoi ?")]),e._v(" "),n("p",[e._v("\n            Avec l’aide de l’État MaPrimeRénov’, les propriétaires se penchent\n            de plus en plus sur la question de leurs dépenses énergétiques\n            pour leurs maisons. Optimiser l’isolation, changer de système de\n            chauffage, remplacer le simple vitrage par du double vitrage sont\n            autant de pistes à explorer pour limiter les déperditions\n            énergétiques et gagner en confort thermique dans votre maison.\n            L’Ademe estime que 30 % des déperditions de chaleur se font par le\n            toit et près de 20 % par les fenêtres. La question de la\n            rénovation de l’isolation de votre maison doit donc s’inscrire\n            dans vos priorités pour alléger vos factures de chauffage, mais\n            aussi de bénéficier d’un confort aussi agréable en hiver qu’en\n            été.\n          ")]),e._v(" "),n("div",[n("img",{staticClass:"deperdition",attrs:{src:"bureau.jpg",alt:""}})]),e._v(" "),n("h2",{staticClass:"h5"},[e._v("La rénovation et les travaux de second-œuvre")]),e._v(" "),n("ul",[n("li",[e._v("l'isolation thermique et phonique")]),e._v(" "),n("li",[e._v("la ventilation la création de cloisons intérieures")]),e._v(" "),n("li",[e._v("l'électricité")]),e._v(" "),n("li",[e._v("la plomberie")]),e._v(" "),n("li",[e._v("les menuiseries intérieures")]),e._v(" "),n("li",[e._v("les équipements de chauffage")]),e._v(" "),n("li",[e._v("les revêtements (sols, murs, plafond)")]),e._v(" "),n("li",[e._v("aménagement de comble perdu")])])])]),e._v(" "),n("v-col",{attrs:{cols:"12",md:"4"}},[n("FormulaireDevis")],1)],1)],1),e._v(" "),n("div",[n("Footer")],1)],1)}),[],!1,null,"743e2ce3",null);t.default=component.exports;v()(component,{FormulaireDevis:n(416).default,Footer:n(286).default}),v()(component,{VCol:d.a,VContainer:c.a,VRow:m.a})}}]);