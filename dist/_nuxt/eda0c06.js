(window.webpackJsonp=window.webpackJsonp||[]).push([[25,18],{437:function(e,t,n){var content=n(438);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(36).default)("5939d713",content,!0,{sourceMap:!1})},438:function(e,t,n){var r=n(35)(!1);r.push([e.i,".v-rating{max-width:100%;white-space:nowrap}.v-rating .v-icon{padding:.5rem;border-radius:50%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none}.v-rating .v-icon:after{display:none}.v-application--is-ltr .v-rating .v-icon{transform:scaleX(1)}.v-application--is-rtl .v-rating .v-icon{transform:scaleX(-1)}.v-rating--readonly .v-icon{pointer-events:none}.v-rating--dense .v-icon{padding:.1rem}",""]),e.exports=r},450:function(e,t,n){"use strict";n(45),n(93),n(17),n(437);var r=n(296),o=n(80),l=n(134),c=n(133),v=n(436),d=n(68),m=n(9),f=n(29);t.a=Object(f.a)(o.a,l.a,v.a,c.a,d.a).extend({name:"v-rating",props:{backgroundColor:{type:String,default:"accent"},color:{type:String,default:"primary"},clearable:Boolean,dense:Boolean,emptyIcon:{type:String,default:"$ratingEmpty"},fullIcon:{type:String,default:"$ratingFull"},halfIcon:{type:String,default:"$ratingHalf"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,size:[Number,String],value:{type:Number,default:0},iconLabel:{type:String,default:"$vuetify.rating.ariaLabel.icon"}},data:function(){return{hoverIndex:-1,internalValue:this.value}},computed:{directives:function(){return this.readonly||!this.ripple?[]:[{name:"ripple",value:{circle:!0}}]},iconProps:function(){var e=this.$props,t=e.dark,n=e.large,r=e.light,o=e.medium,small=e.small;return{dark:t,large:n,light:r,medium:o,size:e.size,small:small,xLarge:e.xLarge,xSmall:e.xSmall}},isHovering:function(){return this.hover&&this.hoverIndex>=0}},watch:{internalValue:function(e){e!==this.value&&this.$emit("input",e)},value:function(e){this.internalValue=e}},methods:{createClickFn:function(i){var e=this;return function(t){if(!e.readonly){var n=e.genHoverIndex(t,i);e.clearable&&e.internalValue===n?e.internalValue=0:e.internalValue=n}}},createProps:function(i){var e={index:i,value:this.internalValue,click:this.createClickFn(i),isFilled:Math.floor(this.internalValue)>i,isHovered:Math.floor(this.hoverIndex)>i};return this.halfIncrements&&(e.isHalfHovered=!e.isHovered&&(this.hoverIndex-i)%1>0,e.isHalfFilled=!e.isFilled&&(this.internalValue-i)%1>0),e},genHoverIndex:function(e,i){var t=this.isHalfEvent(e);return this.halfIncrements&&this.$vuetify.rtl&&(t=!t),i+(t?.5:1)},getIconName:function(e){var t=this.isHovering?e.isHovered:e.isFilled,n=this.isHovering?e.isHalfHovered:e.isHalfFilled;return t?this.fullIcon:n?this.halfIcon:this.emptyIcon},getColor:function(e){if(this.isHovering){if(e.isHovered||e.isHalfHovered)return this.color}else if(e.isFilled||e.isHalfFilled)return this.color;return this.backgroundColor},isHalfEvent:function(e){if(this.halfIncrements){var rect=e.target&&e.target.getBoundingClientRect();if(rect&&e.pageX-rect.left<rect.width/2)return!0}return!1},onMouseEnter:function(e,i){var t=this;this.runDelay("open",(function(){t.hoverIndex=t.genHoverIndex(e,i)}))},onMouseLeave:function(){var e=this;this.runDelay("close",(function(){return e.hoverIndex=-1}))},genItem:function(i){var e=this,t=this.createProps(i);if(this.$scopedSlots.item)return this.$scopedSlots.item(t);var n={click:t.click};return this.hover&&(n.mouseenter=function(t){return e.onMouseEnter(t,i)},n.mouseleave=this.onMouseLeave,this.halfIncrements&&(n.mousemove=function(t){return e.onMouseEnter(t,i)})),this.$createElement(r.a,this.setTextColor(this.getColor(t),{attrs:{"aria-label":this.$vuetify.lang.t(this.iconLabel,i+1,Number(this.length))},directives:this.directives,props:this.iconProps,on:n}),[this.getIconName(t)])}},render:function(e){var t=this,n=Object(m.h)(Number(this.length)).map((function(i){return t.genItem(i)}));return e("div",{staticClass:"v-rating",class:{"v-rating--readonly":this.readonly,"v-rating--dense":this.dense}},n)}})},473:function(e,t,n){var content=n(489);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(36).default)("4918bda4",content,!0,{sourceMap:!1})},488:function(e,t,n){"use strict";n(473)},489:function(e,t,n){var r=n(35)(!1);r.push([e.i,".text-center[data-v-54554190]{text-align:center}",""]),e.exports=r},528:function(e,t,n){"use strict";n.r(t);n(10),n(40);var r=n(444),o={data:function(){return{Type:"Travaux de menuiserie",typeTravaux:"",nom:"",email:"",telephone:"",message:"",adresse:"",codePostal:"",menuiserie:"",habitation:"",alertForm:!1,validFormDevis:!0,Rules:{typeTravaux:[function(e){return!!e||"Champs requies"}],name:[function(e){return!!e||"Champs requies"}],tel:[function(e){return!!e||"Champs requies"},function(e){return e&&e.length>=8||"Un numéro valid contient minumum 8 caractéres"}],email:[function(e){return!!e||"E-mail est requies"},function(e){return/.+@.+\..+/.test(e)||"Format non valide"}],codePostal:[function(e){return!!e||"Champs requies"},function(e){return/[0-9]{5}/g.test(e)||"Format non valide"}]}}},methods:{submitForm:function(e){var t=this;this.validForm(),setTimeout((function(){t.validFormDevis&&r.a.sendForm("service_rpc1vli","template_vh0cdqy",e.target,"OwCoJCs42AJa_Sheh").then((function(e){return console.log("SUCCESS!",e.status,e.text),t.resetFormDevis(),t.alertDevisSucces()}),(function(e){console.log("FAILED...",e)}))}),5)},validForm:function(){this.$refs.form.validate()},alertDevisSucces:function(){var e=this;this.alertForm=!0,setTimeout((function(){e.alertForm=!1}),7e3)},resetFormDevis:function(){this.$refs.form.reset(),this.menuiserie="",this.habitation=""}}},l=(n(488),n(79)),c=n(92),v=n.n(c),d=n(457),m=n(416),f=n(445),h=n(435),_=n(426),x=n(434),C=n(418),y=n(596),V=n(294),w=n(595),F=n(549),I=n(428),P=n(598),z=n(537),k=n(597),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-container",[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-card",[n("v-card-title",{staticClass:"text-center text-primary h4"},[e._v("Demander votre devis sans\n                        engagement")]),e._v(" "),n("v-divider"),e._v(" "),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"5"}},[n("v-card",{staticClass:"p-4",attrs:{"max-width":"210"}},[n("v-img",{attrs:{height:"120","max-width":"100",src:"formulairefenetre/appartement.png"}})],1),e._v(" "),n("v-radio-group",{model:{value:e.habitation,callback:function(t){e.habitation=t},expression:"habitation"}},[n("v-radio",{attrs:{label:"Appartement",value:"Appartement"}})],1)],1),e._v(" "),n("v-col",{attrs:{cols:"5"}},[n("v-card",{staticClass:"p-4",attrs:{"max-width":"210"}},[n("v-img",{attrs:{height:"120","max-width":"100",src:"formulairefenetre/maison.png"}})],1),e._v(" "),n("v-radio-group",{model:{value:e.habitation,callback:function(t){e.habitation=t},expression:"habitation"}},[n("v-radio",{attrs:{label:"Maison",value:"Maison"}})],1)],1),e._v(" "),n("v-col",{attrs:{cols:"5"}},[n("v-card",{staticClass:"p-4",attrs:{"max-width":"210"}},[n("v-img",{attrs:{height:"120","max-width":"100",src:"formulairefenetre/portepvcexterieur.png"}})],1),e._v(" "),n("v-radio-group",{model:{value:e.menuiserie,callback:function(t){e.menuiserie=t},expression:"menuiserie"}},[n("v-radio",{attrs:{label:"Portes extérieur",value:"Porte"}})],1)],1),e._v(" "),n("v-col",{attrs:{cols:"5"}},[n("v-card",{staticClass:"p-4",attrs:{"max-width":"210"}},[n("v-img",{attrs:{height:"120","max-width":"100",src:"formulairefenetre/portefenetrepvc3.webp"}})],1),e._v(" "),n("v-radio-group",{model:{value:e.menuiserie,callback:function(t){e.menuiserie=t},expression:"menuiserie"}},[n("v-radio",{attrs:{label:"Fenêtres & Portes Fenêtres",value:"Fenêtres"}})],1)],1),e._v(" "),n("v-col",{attrs:{cols:"10"}},[n("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(t){return t.preventDefault(),e.submitForm.apply(null,arguments)}},model:{value:e.validFormDevis,callback:function(t){e.validFormDevis=t},expression:"validFormDevis"}},[n("v-text-field",{attrs:{rules:e.Rules.name,name:"client_name",label:"Nom",required:""},model:{value:e.nom,callback:function(t){e.nom=t},expression:"nom"}}),e._v(" "),n("v-text-field",{attrs:{rules:e.Rules.email,name:"client_email",label:"Email",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),n("v-text-field",{attrs:{rules:e.Rules.tel,name:"client_tel",label:"Téléphone",regex:"^(71|72|74|76|81|82|84|85|86|87|88|89)\\\\d{5}$",required:""},model:{value:e.telephone,callback:function(t){e.telephone=t},expression:"telephone"}}),e._v(" "),n("v-text-field",{attrs:{rules:e.Rules.codePostal,name:"code_postal",label:"Code Postal",required:""},model:{value:e.codePostal,callback:function(t){e.codePostal=t},expression:"codePostal"}}),e._v(" "),n("v-select",{attrs:{items:["changement de menuiserie extérieur en PVC","changement de menuiserie extérieur en Aluminium","changement de fenêtre extérieur PVC ou Aluminium","changement de porte exrérieur PVC ou Aluminium"],label:"Type de travaux",rules:e.Rules.typeTravaux,name:"type_travaux",required:""},model:{value:e.typeTravaux,callback:function(t){e.typeTravaux=t},expression:"typeTravaux"}}),e._v(" "),n("v-textarea",{attrs:{name:"message",label:"Message",required:""},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}}),e._v(" "),n("v-btn",{attrs:{type:"submit",color:"primary",disabled:!e.validFormDevis}},[e._v("Envoyer")])],1)],1)],1)],1)],1),e._v(" "),n("v-col",{attrs:{cols:"12"}},[e.alertForm?n("div",[n("v-alert",{attrs:{dense:"",type:"success"}},[e._v("\n                        On vous confirme avoir bien reçu votre demande pour"),n("strong",[e._v("\n                            un devis gratuit.")]),e._v("\n                        Un chargé d'affaire vous contactera dans les meilleurs délais\n                    ")])],1):e._e()])],1)],1),e._v(" "),n("v-divider")],1)}),[],!1,null,"54554190",null);t.default=component.exports;v()(component,{VAlert:d.a,VBtn:m.a,VCard:f.a,VCardTitle:h.c,VCol:_.a,VContainer:x.a,VDivider:C.a,VForm:y.a,VImg:V.a,VRadio:w.a,VRadioGroup:F.a,VRow:I.a,VSelect:P.a,VTextField:z.a,VTextarea:k.a})},529:function(e,t,n){"use strict";n.r(t);var r={},o=n(79),l=n(92),c=n.n(l),v=n(457),d=n(426),m=n(418),f=n(417),h=n(428),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",{staticClass:"h5 text-center text-primary"},[e._v("\n    Votre chantier de remplacement de fenêtre en quelques étapes\n  ")]),e._v(" "),n("hr"),e._v(" "),n("v-row",{staticClass:"p-2"},[n("v-alert",{attrs:{type:"info",icon:"mdi-monitor-account"}},[n("span",{staticClass:"h5"},[e._v("\n        Utiliser notre formulaire de contact qui se trouve ci-dessus.\n      ")])]),e._v(" "),n("v-alert",{attrs:{type:"info",icon:"mdi-account-tie"}},[n("span",{staticClass:"h5"},[e._v("\n        Un de nos techniciens d'installation vous recontacte pour un\n        rendez-vous.\n      ")])]),e._v(" "),n("v-alert",{attrs:{type:"info",icon:"mdi-calendar-account"}},[n("span",{staticClass:"h5"},[e._v("\n        Après le rendez-vous un devis détaillé vous sera envoyé dans les\n        meilleurs délais.\n      ")])]),e._v(" "),n("v-alert",{attrs:{type:"info",icon:"mdi-file-sign"}},[n("span",{staticClass:"h5"},[e._v("\n        Après acceptation du devis, prévoyez environ 2 mois de délais comprend\n        les délais de fabrication pour l'installation de votre menuiserie.\n      ")])])],1),e._v(" "),n("v-divider"),e._v(" "),n("v-row",{staticClass:"bg-light p-2",attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"12",md:"4"}},[n("p",{staticClass:"text-primary h5"},[n("v-icon",{attrs:{color:"primary"}},[e._v(" mdi-account-tie-voice ")]),e._v("\n        Interlocuteur unique\n      ")],1)]),e._v(" "),n("v-col",{attrs:{cols:"12",md:"4"}},[n("p",{staticClass:"text-primary h5"},[n("v-icon",{attrs:{large:"",color:"primary"}},[e._v("mdi-cash-check")]),e._v("\n        Bon rapport qualité-prix, nos prix sont bien meilleur marché que nos\n        concurrents.\n      ")],1)]),e._v(" "),n("v-col",{attrs:{cols:"12",md:"3"}},[n("p",{staticClass:"text-primary h5"},[e._v("\n        Travaux de finition compris dans le prix d'installation.\n      ")])])],1),e._v(" "),n("v-divider")],1)}),[],!1,null,"4809ff08",null);t.default=component.exports;c()(component,{VAlert:v.a,VCol:d.a,VDivider:m.a,VIcon:f.a,VRow:h.a})},530:function(e,t,n){"use strict";n.r(t);var r={data:function(){return{description:[{name:"Johel D",avis:"\n              J'ai récemment fait changer toutes les fenêtres de ma maison par cette entreprise et je suis extrêmement satisfait du résultat.\n              "},{name:"Sarah R.",avis:"\n       Pleinement satisfait des travaux de remplacement de fenêtres effectués par cette entreprise. Malgré des délais un peu longs, le résultat final est impeccable.\n              "},{name:"Michael T",avis:"\n              Estimation précise et détaillée. L'équipe d'installation a fait un travail remarquable, en veillant à ce que tout soit propre et bien fini. je recommande\n              "}]}}},o=n(79),l=n(92),c=n.n(l),v=n(485),d=n(445),m=n(435),f=n(426),h=n(434),_=n(418),x=n(450),C=n(428),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("h1",{staticClass:"h4 text-primary text-center"},[e._v("\n    Retour d'expérience\n  ")]),e._v(" "),n("v-row",e._l(e.description,(function(a){return n("v-col",{key:e.description.index,attrs:{cols:"12",md:"4",sm:"12"}},[n("v-card",[n("v-card-text",{staticClass:"text-h6 text-secondary py-2"},[n("v-avatar",[n("img",{attrs:{src:"avatar5.jpg"}})]),e._v("\n            "+e._s(a.name)+"\n          ")],1),e._v(" "),n("p",{staticClass:"p-4"},[n("small",[e._v(e._s(a.avis))])]),e._v(" "),n("v-divider"),e._v(" "),n("div",{staticClass:"p-4"},[n("v-rating",{attrs:{value:4.7,color:"amber",dense:"","half-increments":"",readonly:"",size:"14"}})],1)],1)],1)})),1)],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VAvatar:v.a,VCard:d.a,VCardText:m.b,VCol:f.a,VContainer:h.a,VDivider:_.a,VRating:x.a,VRow:C.a})},599:function(e,t,n){"use strict";n.r(t);n(5),n(69);var r={head:function(){return{title:this.isolation.title,meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:this.isolation.description},{hid:"og:title",name:"og:title",content:this.isolation.title},{hid:"og:description",name:"og:description",content:this.isolation.description},{hid:"og:url",name:"og:url",content:this.isolation.url},{hide:"twitter:card",name:"twitter:card"},{hide:"twitter:site",name:"twitter:site",content:this.isolation.url}]}},data:function(){return{isolation:{title:"Transformez votre maison avec nos fenêtres de qualité supérieure et économes en énergie",description:"Découvrez tous les avantages du changement de fenêtre pour améliorer l'esthétique, l'isolation et l'efficacité énergétique de votre maison. Obtenez des conseils pratiques sur le choix des matériaux, les fonctionnalités, les étapes d'installation et trouvez des professionnels qualifiés pour mener à bien votre projet de remplacement de fenêtre.",url:"https://auditsrenovation.fr/changement-fenêtre/"}}}},o=n(79),l=n(92),c=n.n(l),v=n(457),d=n(445),m=n(426),f=n(434),h=n(418),_=n(294),x=n(428),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("h1",{staticClass:"text-center h3 text-primary mt-4 mb-4"},[e._v("\n    Rénovez la menuiserie de votre maison et donnez-lui une nouvelle allure\n  ")]),e._v(" "),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"12",md:"8"}},[n("v-card",{staticClass:"img"},[n("v-img",{attrs:{src:"fenetre.jpg"}})],1)],1)],1),e._v(" "),n("hr"),e._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12",md:"12"}},[n("section",[n("p",{staticClass:"h5 bg-light p-2"},[e._v("\n          Audits rénovation, votre spécialiste en rénovation vous accompagne\n          dans votre projet de remplacement de votre\n          "),n("strong",[e._v("menuiserie extérieure ")]),e._v(" incluant\n          "),n("strong",[e._v(" portes et fenêtres PVC ou aluminium")]),e._v(".\n        ")]),e._v(" "),n("v-img",{attrs:{src:"/fabriquenfrance.jpg","max-width":"400"}}),e._v(" "),n("p",{staticClass:"bg-light p-2"},[e._v("\n          Profitez de la puissance d'une entreprise tout corps d'état dans\n          votre projet de remplacement de fenêtre, en effet le\n          "),n("strong",[e._v("remplacement de votre menuiserie extérieur")]),e._v(" engage\n          généralement des frais complémentaires, au-delà de la\n          "),n("strong",[e._v("fourniture et pose de vos portes et fenêtres en PVC ou\n            Aluminium")]),e._v(". "),n("br"),e._v("\n          Les frais sans lier aux dégâts qui sont causés par la dépose de la\n          menuiserie existante, notamment des reprises en enduit et peinture\n          et dans certains cas d'autres travaux seront nécessaires.\n        ")])],1),e._v(" "),n("section",[n("v-alert",{attrs:{type:"info",variant:"outlined"}},[n("h1",{staticClass:"h5"},[e._v("\n            Demander un devis gratuit pour le remplacement de vos fenêtres ou\n            Portes\n          ")])]),e._v(" "),n("div",[n("FormulaireFenetre")],1)],1),e._v(" "),n("section",[n("Etape")],1),e._v(" "),n("section",[n("Avis"),e._v(" "),n("v-divider")],1),e._v(" "),n("section",{staticClass:"bg-light p-2"},[n("h1",{staticClass:"h2 text-center h5 text-primary"},[e._v("\n          Améliorez l'esthétique et l'efficacité énergétique de votre maison\n          avec notre menuiserie sur mesure (fenêtre PVC, aluminum et portes)\n        ")]),e._v(" "),n("p",[n("b",[e._v("\n            Le remplacement de la menuiserie extérieur de votre maison,\n            notament les portes et les fenêtres est une étape importante pour\n            améliorer votre maison à la fois sur le planesthétique et\n            énergétique.\n            "),n("br"),e._v("\n            Que vous souhaitiez remplacer des fenêtres, des portes-fenêtres ou\n            des portes d'entrée, ce guide vous fournira toutes les\n            informations nécessaires pour mener à bien ce projet.\n            "),n("br"),e._v("\n            Découvrez les avantages du remplacement de la menuiserie, les\n            étapes clés du processus et les considérations essentielles à\n            prendre en compte.\n          ")])]),e._v(" "),n("h2",{staticClass:"h5 text-primary"},[e._v("\n          Avant de vous mettre à rénover vos fenêtres.\n        ")]),e._v(" "),n("ul",[n("li",[n("h3",{staticClass:"h5"},[e._v("Évaluation de la situation actuelle :")]),e._v(" "),n("p",[e._v("\n              Avant de commencer le remplacement de la menuiserie (vos fenêtre\n              ou portes extérieur), il est important d'évaluer l'état actuel\n              de vos fenêtres et portes. Examinez attentivement l'usure, les\n              fuites d'air, les problèmes d'isolation et les dommages\n              éventuels. Cette évaluation vous aidera à déterminer si le\n              remplacement complet est nécessaire ou si des réparations\n              partielles peuvent suffire.\n            ")])]),e._v(" "),n("li",[n("h3",{staticClass:"h5"},[e._v("Choix des nouveaux matériaux :")]),e._v(" "),n("p",[e._v("\n              Lors du remplacement de la menuiserie (portes et fenêtre\n              extérieur), vous aurez la possibilité de choisir de nouveaux\n              matériaux. Les options les plus courantes incluent le PVC, le\n              bois, l'aluminium et les composites. Chaque matériau présente\n              ses propres avantages en termes d'esthétique, d'isolation, de\n              durabilité et d'entretien. Prenez le temps de comparer les\n              différentes options pour choisir celle qui convient le mieux à\n              votre style et à vos besoins. Chez Audits rénovation nous avons\n              formé des experts pour répondre à votre besoin et vous\n              recommander les matériaux et les configurations à mettre en\n              place par rapport à votre budget\n            ")])]),e._v(" "),n("li",[n("h3",{staticClass:"h5"},[e._v("\n              Sélection des caractéristiques et des fonctionnalités :\n            ")]),e._v(" "),n("p",[e._v("\n              Outre le choix du matériau, vous devrez également prendre en\n              compte d'autres caractéristiques et fonctionnalités pour votre\n              nouvelle menuiserie. Cela peut inclure des options telles que\n              des vitrages isolants, des systèmes de sécurité avancés, des\n              mécanismes d'ouverture faciles à utiliser, des stores intégrés,\n              etc. Pensez à vos besoins spécifiques en termes d'isolation\n              acoustique, de protection solaire et de sécurité pour faire les\n              bons choix.\n            ")])]),e._v(" "),n("li",[n("h3",{staticClass:"h5"},[e._v("Préparation du chantier et installation :")]),e._v(" "),n("p",[e._v("\n              Avant l'installation, assurez-vous de préparer le chantier en\n              dégageant l'espace autour des fenêtres ou des portes concernées.\n              Le jour de l'installation, les professionnels retireront les\n              anciennes menuiseries avec soin, prépareront les ouvertures et\n              installeront les nouvelles fenêtres ou portes. Veillez à ce que\n              l'installation soit effectuée selon les normes de l'industrie\n              pour garantir une étanchéité optimale et une performance\n              thermique maximale.\n            ")])]),e._v(" "),n("li",[n("h3",{staticClass:"h5"},[e._v("Finition et entretien :")]),e._v(" "),n("p",[e._v("Une fois l'installation")])])])]),e._v(" "),n("v-divider"),e._v(" "),n("section",{staticClass:"bg-light p-2"},[n("h1",{staticClass:"text-primary h5"},[e._v("\n          Le remplacement de fenêtres et de portes extérieures présente de\n          nombreux avantages. Voici quelques-uns des principaux avantages :\n        ")]),e._v(" "),n("ul",[n("li",[n("h2",{staticClass:"h5"},[e._v("Efficacité énergétique :")]),e._v(" "),n("p",[e._v("\n              Les nouvelles fenêtres et portes extérieures sont conçues avec\n              des technologies avancées qui améliorent l'isolation thermique\n              de votre maison. Elles réduisent les pertes de chaleur en hiver\n              et l'infiltration d'air frais en été, ce qui vous permet de\n              réduire votre consommation d'énergie et de réaliser des\n              économies sur vos factures de chauffage et de climatisation.\n            ")])]),e._v(" "),n("li",[n("h2",{staticClass:"h5"},[e._v("Confort accru :")]),e._v(" "),n("p",[e._v("\n              Les fenêtres et portes de qualité supérieure offrent une\n              meilleure étanchéité à l'air, réduisant ainsi les courants d'air\n              indésirables et les infiltrations d'humidité. Cela crée un\n              environnement intérieur plus confortable, avec une température\n              plus constante et une réduction des bruits extérieurs.\n              Amélioration de l'esthétique : Le remplacement des fenêtres et\n              portes extérieures peut donner un nouveau look à votre maison.\n              Vous pouvez choisir parmi une variété de styles, de finitions et\n              de couleurs pour correspondre à votre esthétique personnelle.\n              Cela peut également augmenter la valeur de votre propriété et\n              améliorer son attrait visuel.\n            ")])]),e._v(" "),n("li",[n("h2",{staticClass:"h5"},[e._v("Réduction des entretiens :")]),e._v(" "),n("p",[e._v("\n              Les nouvelles fenêtres et portes sont souvent fabriquées avec\n              des matériaux modernes et durables qui nécessitent moins\n              d'entretien. Par exemple, les fenêtres en PVC ne se dégradent\n              pas, ne se fissurent pas et ne nécessitent pas de peinture\n              régulière. Cela vous permet d'économiser du temps et des efforts\n              en matière d'entretien.\n            ")])]),e._v(" "),n("li",[n("h2",{staticClass:"h5"},[e._v("Sécurité renforcée :")]),e._v(" "),n("p",[e._v("\n              Les fenêtres et portes modernes sont équipées de dispositifs de\n              sécurité avancés tels que des serrures multipoints, des verrous\n              renforcés et des vitrages sécurisés. Cela améliore la sécurité\n              de votre maison en décourageant les tentatives d'effraction.\n            ")])]),e._v(" "),n("li",[n("h2",{staticClass:"h5"},[e._v("Réduction des bruits :")]),e._v(" "),n("p",[e._v("\n              Les nouvelles fenêtres et portes extérieures peuvent aider à\n              réduire les nuisances sonores provenant de l'extérieur. Elles\n              sont dotées de caractéristiques d'isolation acoustique qui\n              minimisent les bruits indésirables, créant ainsi un\n              environnement intérieur plus paisible.\n            ")])]),e._v(" "),n("li",[n("h2",{staticClass:"h5"},[e._v("Durabilité et longévité :")]),e._v(" "),n("p",[e._v("\n              Les fenêtres et portes de qualité supérieure sont conçues pour\n              durer. Elles sont résistantes aux intempéries, aux rayons UV et\n              à la décoloration, ce qui garantit qu'elles restent en bon état\n              esthétique et fonctionnel pendant de nombreuses années.\n            ")])])]),e._v(" "),n("b",[e._v("\n          En considérant ces avantages, le remplacement de vos fenêtres et\n          portes extérieures peut être un investissement judicieux pour\n          améliorer le confort, l'efficacité énergétique et l'esthétique de\n          votre maison.\n        ")])])],1)],1),e._v(" "),n("v-row",[n("Footer"),e._v("> ")],1)],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{FormulaireFenetre:n(528).default,Etape:n(529).default,Avis:n(530).default,Footer:n(297).default}),c()(component,{VAlert:v.a,VCard:d.a,VCol:m.a,VContainer:f.a,VDivider:h.a,VImg:_.a,VRow:x.a})}}]);