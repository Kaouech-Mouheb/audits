(window.webpackJsonp=window.webpackJsonp||[]).push([[24,13],{409:function(e,t,n){var content=n(415);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(36).default)("33c6d565",content,!0,{sourceMap:!1})},410:function(e,t,n){var content=n(411);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(36).default)("5939d713",content,!0,{sourceMap:!1})},411:function(e,t,n){var r=n(35)(!1);r.push([e.i,".v-rating{max-width:100%;white-space:nowrap}.v-rating .v-icon{padding:.5rem;border-radius:50%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none}.v-rating .v-icon:after{display:none}.v-application--is-ltr .v-rating .v-icon{transform:scaleX(1)}.v-application--is-rtl .v-rating .v-icon{transform:scaleX(-1)}.v-rating--readonly .v-icon{pointer-events:none}.v-rating--dense .v-icon{padding:.1rem}",""]),e.exports=r},414:function(e,t,n){"use strict";n(409)},415:function(e,t,n){var r=n(35)(!1);r.push([e.i,".alert[data-v-9d5fba2e]{position:fixed;top:50px;z-index:1000}",""]),e.exports=r},416:function(e,t,n){"use strict";n.r(t);n(11),n(40);var r=n(417),o={data:function(){return{validFormDevis:!0,devis:{typeTravaux:"",name:"",codePostal:"",tel:"",message:""},alertDevis:!1,Rules:{typeTravaux:[function(e){return!!e||"Champs requies"}],name:[function(e){return!!e||"Champs requies"}],tel:[function(e){return!!e||"Champs requies"},function(e){return e&&e.length>=8||"Un numéro valid contient minumum 8 caractéres"}],email:[function(e){return!!e||"E-mail est requies"},function(e){return/.+@.+\..+/.test(e)||"Format non valide"}],codePostal:[function(e){return!!e||"Champs requies"},function(e){return/[0-9]{5}/g.test(e)||"Format non valide"}]}}},methods:{sendEmailDevis:function(e){var t=this;this.validateDevis(),setTimeout((function(){t.validFormDevis&&r.a.sendForm("service_rpc1vli","template_vh0cdqy",e.target,"OwCoJCs42AJa_Sheh").then((function(e){return console.log("SUCCESS!",e.status,e.text),t.resetFormDevis(),t.alertDevisSucces()}),(function(e){console.log("FAILED...",e)}))}),5)},validateDevis:function(){this.$refs.formDevis.validate()},alertDevisSucces:function(){var e=this;this.alertDevis=!0,setTimeout((function(){e.alertDevis=!1}),7e3)},resetFormDevis:function(){this.$refs.formDevis.reset()}}},l=(n(414),n(78)),v=n(90),c=n.n(v),d=n(558),m=n(389),f=n(412),h=n(406),_=n(397),x=n(543),y=n(399),C=n(545),w=n(484),D=n(544),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("div",[n("v-card",{attrs:{id:"formDevis"}},[n("v-card-title",{staticClass:"text-primary"},[e._v(" Devis Gratuit ")]),e._v(" "),n("v-card-text",[n("v-row",[n("v-col",{attrs:{cols:"12",md:"8"}},[e._v("\n            Remplissez ce formulaire pour recevoir votre devis gratuit et sans\n            engagement sous 24h ouvrés.\n          ")])],1)],1),e._v(" "),n("v-card-text",[n("v-form",{ref:"formDevis",attrs:{"lazy-validation":""},on:{submit:function(t){return t.preventDefault(),e.sendEmailDevis.apply(null,arguments)}},model:{value:e.validFormDevis,callback:function(t){e.validFormDevis=t},expression:"validFormDevis"}},[n("v-select",{attrs:{items:["Isolation des combles","Aménagement de combles","Traitement Bois Charpente","isolation thermique","travaux de couverture","travaux de peinture","Isolation des murs par l'intérieur","Isolation des murs par l'extérieur","Ravalement de façade","Traitement de façade","Isolation toiture par l’extérieur","Isolation sous toiture","Rénovation de toiture","Démoussage toiture","Traitement de toiture","Menuiseries, fenêtres, portes","Ventilation, VMC","Isolation garage","Autres"],label:"Type de travaux",rules:e.Rules.typeTravaux,name:"type_travaux",required:""},model:{value:e.devis.typeTravaux,callback:function(t){e.$set(e.devis,"typeTravaux",t)},expression:"devis.typeTravaux"}}),e._v(" "),n("v-text-field",{attrs:{rules:e.Rules.name,name:"client_name",label:"Nom *","single-line":""},model:{value:e.devis.name,callback:function(t){e.$set(e.devis,"name",t)},expression:"devis.name"}}),e._v(" "),n("v-text-field",{attrs:{rules:e.Rules.codePostal,name:"code_postal",label:"code postal *","single-line":""},model:{value:e.devis.codePostal,callback:function(t){e.$set(e.devis,"codePostal",t)},expression:"devis.codePostal"}}),e._v(" "),n("v-text-field",{attrs:{label:"votre téléphone *",rules:e.Rules.tel,regex:"^(71|72|74|76|81|82|84|85|86|87|88|89)\\\\d{5}$",type:"number",name:"client_tel","single-line":""},model:{value:e.devis.tel,callback:function(t){e.$set(e.devis,"tel",t)},expression:"devis.tel"}}),e._v(" "),n("v-text-field",{attrs:{rules:e.Rules.email,name:"client_email",label:"votre email *","single-line":""},model:{value:e.devis.email,callback:function(t){e.$set(e.devis,"email",t)},expression:"devis.email"}}),e._v(" "),n("v-textarea",{attrs:{clearable:"",name:"message","clear-icon":"mdi-close-circle",label:"Décrivez votre projet et leur de rappel souhaitée"},model:{value:e.devis.message,callback:function(t){e.$set(e.devis,"message",t)},expression:"devis.message"}}),e._v(" "),n("v-btn",{attrs:{color:"primary",type:"submit",disabled:!e.validFormDevis}},[e._v("Envoyer ma demande de devis")]),e._v(" "),n("small",{staticClass:"d-block mt-4"},[e._v("\n            Vos données personnelles sont collectées exclusivement dans le\n            cadre de votre demande de devis et ne font l’objet d’aucune\n            diffusion ni commercialisation. Elles sont destinées au personnel\n            de AUDITS rénovation en charge du traitement de votre demande.\n          ")])],1)],1)],1)],1),e._v(" "),e.alertDevis?n("div",{staticClass:"alert"},[n("v-alert",{attrs:{dense:"",type:"success"}},[e._v("\n      On vous confirme avoir bien reçu votre demande pour"),n("strong",[e._v("\n        un devis gratuit.")]),e._v("\n      Un chargé d'affaire vous contactera dans les meilleurs délais\n    ")])],1):e._e()])}),[],!1,null,"9d5fba2e",null);t.default=component.exports;c()(component,{VAlert:d.a,VBtn:m.a,VCard:f.a,VCardText:h.b,VCardTitle:h.c,VCol:_.a,VForm:x.a,VRow:y.a,VSelect:C.a,VTextField:w.a,VTextarea:D.a})},422:function(e,t,n){"use strict";n(45),n(91),n(17),n(410);var r=n(285),o=n(79),l=n(132),v=n(131),c=n(204),d=n(8).default.extend({name:"rippleable",directives:{ripple:c.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",data)):null}}}),m=n(66),f=n(9),h=n(29);t.a=Object(h.a)(o.a,l.a,d,v.a,m.a).extend({name:"v-rating",props:{backgroundColor:{type:String,default:"accent"},color:{type:String,default:"primary"},clearable:Boolean,dense:Boolean,emptyIcon:{type:String,default:"$ratingEmpty"},fullIcon:{type:String,default:"$ratingFull"},halfIcon:{type:String,default:"$ratingHalf"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,size:[Number,String],value:{type:Number,default:0},iconLabel:{type:String,default:"$vuetify.rating.ariaLabel.icon"}},data:function(){return{hoverIndex:-1,internalValue:this.value}},computed:{directives:function(){return this.readonly||!this.ripple?[]:[{name:"ripple",value:{circle:!0}}]},iconProps:function(){var e=this.$props,t=e.dark,n=e.large,r=e.light,o=e.medium,small=e.small;return{dark:t,large:n,light:r,medium:o,size:e.size,small:small,xLarge:e.xLarge,xSmall:e.xSmall}},isHovering:function(){return this.hover&&this.hoverIndex>=0}},watch:{internalValue:function(e){e!==this.value&&this.$emit("input",e)},value:function(e){this.internalValue=e}},methods:{createClickFn:function(i){var e=this;return function(t){if(!e.readonly){var n=e.genHoverIndex(t,i);e.clearable&&e.internalValue===n?e.internalValue=0:e.internalValue=n}}},createProps:function(i){var e={index:i,value:this.internalValue,click:this.createClickFn(i),isFilled:Math.floor(this.internalValue)>i,isHovered:Math.floor(this.hoverIndex)>i};return this.halfIncrements&&(e.isHalfHovered=!e.isHovered&&(this.hoverIndex-i)%1>0,e.isHalfFilled=!e.isFilled&&(this.internalValue-i)%1>0),e},genHoverIndex:function(e,i){var t=this.isHalfEvent(e);return this.halfIncrements&&this.$vuetify.rtl&&(t=!t),i+(t?.5:1)},getIconName:function(e){var t=this.isHovering?e.isHovered:e.isFilled,n=this.isHovering?e.isHalfHovered:e.isHalfFilled;return t?this.fullIcon:n?this.halfIcon:this.emptyIcon},getColor:function(e){if(this.isHovering){if(e.isHovered||e.isHalfHovered)return this.color}else if(e.isFilled||e.isHalfFilled)return this.color;return this.backgroundColor},isHalfEvent:function(e){if(this.halfIncrements){var rect=e.target&&e.target.getBoundingClientRect();if(rect&&e.pageX-rect.left<rect.width/2)return!0}return!1},onMouseEnter:function(e,i){var t=this;this.runDelay("open",(function(){t.hoverIndex=t.genHoverIndex(e,i)}))},onMouseLeave:function(){var e=this;this.runDelay("close",(function(){return e.hoverIndex=-1}))},genItem:function(i){var e=this,t=this.createProps(i);if(this.$scopedSlots.item)return this.$scopedSlots.item(t);var n={click:t.click};return this.hover&&(n.mouseenter=function(t){return e.onMouseEnter(t,i)},n.mouseleave=this.onMouseLeave,this.halfIncrements&&(n.mousemove=function(t){return e.onMouseEnter(t,i)})),this.$createElement(r.a,this.setTextColor(this.getColor(t),{attrs:{"aria-label":this.$vuetify.lang.t(this.iconLabel,i+1,Number(this.length))},directives:this.directives,props:this.iconProps,on:n}),[this.getIconName(t)])}},render:function(e){var t=this,n=Object(f.h)(Number(this.length)).map((function(i){return t.genItem(i)}));return e("div",{staticClass:"v-rating",class:{"v-rating--readonly":this.readonly,"v-rating--dense":this.dense}},n)}})},424:function(e,t,n){"use strict";n.r(t);var r=n(78),o=n(90),l=n.n(o),v=n(389),c=n(412),d=n(406),m=n(397),f=n(388),h=n(283),_=n(465),x=n(422),y=n(399),component=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("v-row",[n("v-col",{attrs:{cols:"12",md:"12"}},[n("h1",{staticClass:"h4 text-primary"},[e._v("\n        Nos dernières offres et promotions de rénovation\n      ")])]),e._v(" "),n("v-col",{attrs:{md:"4",sm:"6",xs:"12"}},[n("v-card",{staticClass:"mx-auto my-12",attrs:{"max-width":"374"}},[n("template",{slot:"progress"},[n("v-progress-linear",{attrs:{color:"deep-purple",height:"10",indeterminate:""}})],1),e._v(" "),n("v-img",{attrs:{height:"250",src:"cuisine.jpeg",title:"rénovation cuisine",alt:"rénovation cuisine"}}),e._v(" "),n("v-card-title",[e._v("Forfait rénovation cuisine")]),e._v(" "),n("v-card-text",[n("v-row",{staticClass:"mx-0",attrs:{align:"center"}},[n("v-rating",{attrs:{value:5,color:"amber",dense:"","half-increments":"",readonly:"",size:"14"}}),e._v(" "),n("div",{staticClass:"grey--text ms-4"},[e._v("5 (3)")])],1),e._v(" "),n("div",{staticClass:"my-4 text-subtitle-1"},[e._v("\n            3700 Euros TTC - sans forniture\n          ")]),e._v(" "),n("div",[e._v("\n            Dépose de l'ancien cuisine, évacuation et mise en décharge +\n            rénovation compléte de votre cuisine, valable pour les cuisine de\n            moins de 6m2\n          ")])],1),e._v(" "),n("v-divider",{staticClass:"mx-4"}),e._v(" "),n("v-card-title",[e._v("Offre limité")]),e._v(" "),n("v-card-actions",[n("v-btn",{attrs:{color:"deep-purple lighten-2",text:"",href:"#formDevis"}},[e._v("\n            Réserver\n          ")])],1)],2)],1),e._v(" "),n("v-col",{attrs:{md:"4",sm:"6",xs:"12"}},[n("v-card",{staticClass:"mx-auto my-12",attrs:{"max-width":"374"}},[n("template",{slot:"progress"},[n("v-progress-linear",{attrs:{color:"deep-purple",height:"10",indeterminate:""}})],1),e._v(" "),n("v-img",{attrs:{height:"250",src:"bain.jpg",alt:"rénovation salle de bain",title:"rénovation salle de bain"}}),e._v(" "),n("v-card-title",[e._v("Forfait rénovation salle de bain")]),e._v(" "),n("v-card-text",[n("v-row",{staticClass:"mx-0",attrs:{align:"center"}},[n("v-rating",{attrs:{value:5,color:"amber",dense:"","half-increments":"",readonly:"",size:"14"}}),e._v(" "),n("div",{staticClass:"grey--text ms-4"},[e._v("5(7)")])],1),e._v(" "),n("div",{staticClass:"my-4 text-subtitle-1"},[e._v("\n            5200 Euros TTC - sans forniture\n          ")]),e._v(" "),n("div",[e._v("\n            Dépose, évacuation et mise en décharge + rénovation compléte de\n            votre salle de bain, valable pour les salles de bain de moins de\n            5m2\n          ")])],1),e._v(" "),n("v-divider",{staticClass:"mx-4"}),e._v(" "),n("v-card-title",[e._v("Offre limité")]),e._v(" "),n("v-card-actions",[n("v-btn",{attrs:{color:"deep-purple lighten-2",text:"",href:"#formDevis"}},[e._v("\n            Réserver\n          ")])],1)],2)],1),e._v(" "),n("v-col",{attrs:{cols:"12",md:"4",sm:"6",xs:"12"}},[n("v-card",{staticClass:"mx-auto my-12",attrs:{"max-width":"374"}},[n("template",{slot:"progress"},[n("v-progress-linear",{attrs:{color:"deep-purple",height:"10",indeterminate:""}})],1),e._v(" "),n("v-img",{attrs:{height:"250",src:"peintre.jpg",alt:"travaux de peinture",title:"travaux de peinture"}}),e._v(" "),n("v-card-title",[e._v("Forfait peinture")]),e._v(" "),n("v-card-text",[n("v-row",{staticClass:"mx-0",attrs:{align:"center"}},[n("v-rating",{attrs:{value:5,color:"amber",dense:"","half-increments":"",readonly:"",size:"14"}}),e._v(" "),n("div",{staticClass:"grey--text ms-4"},[e._v("5 (5)")])],1),e._v(" "),n("div",{staticClass:"my-4 text-subtitle-1"},[e._v("\n            3400 Euros TTC - fourniture inclus\n          ")]),e._v(" "),n("div",[e._v("\n            Traitment des imperféction et fissures à l'enduit + 2 couche de peinture, valable\n            pour les appartement de moins de 45 m2\n          ")])],1),e._v(" "),n("v-divider",{staticClass:"mx-4"}),e._v(" "),n("v-card-title",[e._v("Offre limité")]),e._v(" "),n("v-card-actions",[n("v-btn",{attrs:{color:"deep-purple lighten-2",href:"#formDevis",text:""}},[e._v("\n            Reserver\n          ")])],1)],2)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{VBtn:v.a,VCard:c.a,VCardActions:d.a,VCardText:d.b,VCardTitle:d.c,VCol:m.a,VDivider:f.a,VImg:h.a,VProgressLinear:_.a,VRating:x.a,VRow:y.a})},471:function(e,t,n){var content=n(526);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(36).default)("348292f3",content,!0,{sourceMap:!1})},525:function(e,t,n){"use strict";n(471)},526:function(e,t,n){var r=n(35)(!1);r.push([e.i,".h-renovation[data-v-322f2cbf]{text-shadow:1px 1px red;font-weight:700;padding:5px}",""]),e.exports=r},551:function(e,t,n){"use strict";n.r(t);n(5),n(72);var r={head:function(){return{title:this.isolation.title,meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:this.isolation.description},{hid:"og:title",name:"og:title",content:this.isolation.title},{hid:"og:description",name:"og:description",content:this.isolation.description},{hid:"og:url",name:"og:url",content:this.isolation.url},{hide:"twitter:card",name:"twitter:card"},{hide:"twitter:site",name:"twitter:site",content:this.isolation.url}]}},data:function(){return{isolation:{title:"AUDITS Rénovation | Rénovation de cuisine",description:"Vous avez un projet de rénovation de cuisine, une rénovation partielle de cuisine ou la rénovation compléte de votre cuisine. Audits rénovation vous accompagne dans votre projet. ",url:"https://auditsrenovation.fr/renovation-dappartement/"}}}},o=(n(525),n(78)),l=n(90),v=n.n(l),c=n(389),d=n(397),m=n(405),f=n(422),h=n(399),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",md:"8"}},[n("v-row",[n("v-col",{attrs:{cols:"12",md:"12"}},[n("div",[n("h1",{staticClass:"h3 text-primary text-center h-renovation"},[e._v("\n                Rénovation de cuisine\n              ")]),e._v(" "),n("hr"),e._v(" "),n("img",{staticClass:"img-fluid",staticStyle:{width:"100%"},attrs:{src:"/howens_background.jpg",title:"rénovation de cuisine",alt:"rénovation de cuisine"}}),e._v(" "),n("v-rating",{attrs:{value:4.7,color:"amber",dense:"","half-increments":"",readonly:"",size:"14"}}),e._v(" "),n("span",{staticClass:"text-secondary"},[e._v("\n                Basé sur "),n("span",[e._v("14")]),e._v(" évaluations d'utilisateurs\n              ")])],1),e._v(" "),n("hr"),e._v(" "),n("h2",{staticClass:"h5"},[e._v("\n              Vous avez un projet de rénovation de cuisine à paris ?\n            ")]),e._v(" "),n("p",[e._v("\n              Pour la rénovation de votre cuisine audits rénovation posséde\n              une partenarait avec Howdens Cuisine, LEADER EUROPÉEN ET N°1 DE\n              LA CUISINE EN ANGLETERRE !\n            ")]),e._v(" "),n("v-btn",{attrs:{dark:"",color:"red",href:"https://www.flipsnack.com/howdens/howdens_cuisines_catalogue/full-view.html",target:"_blank"}},[e._v("\n              Consultez le catalogue HOWDENS\n            ")])],1),e._v(" "),n("v-col",{attrs:{cols:"12",md:"12"}},[e._v("\n            L’esthétique de votre cuisine commence à dater ? ou n’est pas du\n            tout à votre goût et vous souhaitez la\n            "),n("strong",[e._v("rénover")]),e._v(" ?\n            "),n("br"),e._v(" "),n("span",[e._v("Audits rénovation est une")]),e._v(" "),n("span",[e._v("entreprise de rénovation")]),e._v("\n            qui vous accompagnent de votre projet de\n            "),n("strong",[e._v("rénovation de cuisine")]),e._v(" et nous mettons à votre\n            disposition notre savoir-faire et nous équipes expérimentées.\n            "),n("br"),e._v("\n            Même avec un budget serré, il est parfaitement possible de rénover\n            votre cuisine à moindre coût.\n          ")]),e._v(" "),n("v-col",{attrs:{cols:"12",md:"12"}},[n("section",[n("h1",{staticClass:"h3"},[e._v("\n                Quel budget pour une rénovation complète de cuisine?\n              ")]),e._v(" "),n("p",[e._v("\n                La rénovation complète d’une cuisine consiste, quant à elle, à\n                « mettre à nu » l’espace pour le modifier en profondeur :\n                refaire les circuits de plomberie et d’électricité à neuf,\n                remplacer les menuiseries (porte, fenêtres) si besoin, isoler\n                la pièce, installer un système de ventilation, cloisonner et\n                réorganiser l’espace, poser des revêtements (carrelage,\n                peinture) et, bien entendu, installer de nouveaux équipements\n                (évier, électroménager, meuble…). Si vous souhaitez une\n                rénovation complète de votre cuisine, prévoyez un budget\n                global compris entre 850 et 1700 €/m², en fonction de\n                l’ampleur des travaux et de la qualité des produits choisis.\n              ")])])]),e._v(" "),n("v-col",[n("section",[n("h1",{staticClass:"h3"},[e._v("\n                Quel est le coût d’une rénovation partielle de cuisine ?\n              ")]),e._v(" "),n("p",[e._v("\n                La réhabilitation partielle d'une cuisine se compose de\n                rafraîchir l'existant, sans apporter de modifications.\n                structurelles (cloisons, murs) ni à de gros travaux de\n                plomberie. Cependant, ce type de rénovation, dit aussi.\n                légère, intègre le changement des équipements - évier,\n                électroménager, meuble… . Pour ce type de réalisation,\n                prévoyez un budget d’environ 450 €/m².\n              ")])])])],1)],1),e._v(" "),n("v-col",{attrs:{cols:"12",md:"4"}},[n("FormulaireDevis")],1)],1),e._v(" "),n("div",[n("Promotions")],1)],1),e._v(" "),n("div",[n("Footer")],1)],1)}),[],!1,null,"322f2cbf",null);t.default=component.exports;v()(component,{FormulaireDevis:n(416).default,Promotions:n(424).default,Footer:n(286).default}),v()(component,{VBtn:c.a,VCol:d.a,VContainer:m.a,VRating:f.a,VRow:h.a})}}]);