(window.webpackJsonp=window.webpackJsonp||[]).push([[21,12],{409:function(e,t,n){var content=n(415);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(36).default)("96a668f0",content,!0,{sourceMap:!1})},410:function(e,t,n){var content=n(411);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(36).default)("5939d713",content,!0,{sourceMap:!1})},411:function(e,t,n){var r=n(35)(!1);r.push([e.i,".v-rating{max-width:100%;white-space:nowrap}.v-rating .v-icon{padding:.5rem;border-radius:50%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none}.v-rating .v-icon:after{display:none}.v-application--is-ltr .v-rating .v-icon{transform:scaleX(1)}.v-application--is-rtl .v-rating .v-icon{transform:scaleX(-1)}.v-rating--readonly .v-icon{pointer-events:none}.v-rating--dense .v-icon{padding:.1rem}",""]),e.exports=r},414:function(e,t,n){"use strict";n(409)},415:function(e,t,n){var r=n(35)(!1);r.push([e.i,".alert[data-v-23f78320]{position:fixed;top:50px;z-index:1000}",""]),e.exports=r},418:function(e,t,n){"use strict";n.r(t);n(11),n(40);var r=n(417),o={data:function(){return{validFormDevis:!0,devis:{typeTravaux:"",name:"",codePostal:"",tel:"",message:""},alertDevis:!1,Rules:{typeTravaux:[function(e){return!!e||"Champs requies"}],name:[function(e){return!!e||"Champs requies"}],tel:[function(e){return!!e||"Champs requies"},function(e){return e&&e.length>=8||"Un numéro valid contient minumum 8 caractéres"}],email:[function(e){return!!e||"E-mail est requies"},function(e){return/.+@.+\..+/.test(e)||"Format non valide"}],codePostal:[function(e){return!!e||"Champs requies"},function(e){return/[0-9]{5}/g.test(e)||"Format non valide"}]}}},methods:{sendEmailDevis:function(e){var t=this;this.validateDevis(),setTimeout((function(){t.validFormDevis&&r.a.sendForm("service_rpc1vli","template_vh0cdqy",e.target,"OwCoJCs42AJa_Sheh").then((function(e){return console.log("SUCCESS!",e.status,e.text),t.resetFormDevis(),t.alertDevisSucces()}),(function(e){console.log("FAILED...",e)}))}),5)},validateDevis:function(){this.$refs.formDevis.validate()},alertDevisSucces:function(){var e=this;this.alertDevis=!0,setTimeout((function(){e.alertDevis=!1}),7e3)},resetFormDevis:function(){this.$refs.formDevis.reset()}}},l=(n(414),n(78)),v=n(90),d=n.n(v),c=n(562),m=n(388),f=n(408),h=n(406),_=n(397),x=n(544),y=n(399),C=n(547),w=n(480),D=n(546),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[n("v-card",{attrs:{id:"formDevis"}},[n("v-card-title",{staticClass:"text-primary"},[e._v(" Devis Gratuit ")]),e._v(" "),n("v-card-text",[n("v-row",[n("v-col",{attrs:{cols:"12",md:"8"}},[e._v("\n            Remplissez ce formulaire pour recevoir votre devis gratuit et sans\n            engagement sous 24h ouvrés.\n          ")]),e._v(" "),n("v-col",{attrs:{cols:"12",md:"4"}},[n("img",{attrs:{src:"rge.jpeg",width:"70px"}})])],1)],1),e._v(" "),n("v-card-text",[n("v-form",{ref:"formDevis",attrs:{"lazy-validation":""},on:{submit:function(t){return t.preventDefault(),e.sendEmailDevis.apply(null,arguments)}},model:{value:e.validFormDevis,callback:function(t){e.validFormDevis=t},expression:"validFormDevis"}},[n("v-select",{attrs:{items:["Isolation des combles","Aménagement de combles","Traitement Bois Charpente","isolation thermique","travaux de couverture","travaux de peinture","Isolation des murs par l'intérieur","Isolation des murs par l'extérieur","Ravalement de façade","Traitement de façade","Isolation toiture par l’extérieur","Isolation sous toiture","Rénovation de toiture","Démoussage toiture","Traitement de toiture","Menuiseries, fenêtres, portes","Ventilation, VMC","Isolation garage","Autres"],label:"Type de travaux",rules:e.Rules.typeTravaux,name:"type_travaux",required:""},model:{value:e.devis.typeTravaux,callback:function(t){e.$set(e.devis,"typeTravaux",t)},expression:"devis.typeTravaux"}}),e._v(" "),n("v-text-field",{attrs:{rules:e.Rules.name,name:"client_name",label:"Nom *","single-line":""},model:{value:e.devis.name,callback:function(t){e.$set(e.devis,"name",t)},expression:"devis.name"}}),e._v(" "),n("v-text-field",{attrs:{rules:e.Rules.codePostal,name:"code_postal",label:"code postal *","single-line":""},model:{value:e.devis.codePostal,callback:function(t){e.$set(e.devis,"codePostal",t)},expression:"devis.codePostal"}}),e._v(" "),n("v-text-field",{attrs:{label:"votre téléphone *",rules:e.Rules.tel,regex:"^(71|72|74|76|81|82|84|85|86|87|88|89)\\\\d{5}$",type:"number",name:"client_tel","single-line":""},model:{value:e.devis.tel,callback:function(t){e.$set(e.devis,"tel",t)},expression:"devis.tel"}}),e._v(" "),n("v-text-field",{attrs:{rules:e.Rules.email,name:"client_email",label:"votre email *","single-line":""},model:{value:e.devis.email,callback:function(t){e.$set(e.devis,"email",t)},expression:"devis.email"}}),e._v(" "),n("v-textarea",{attrs:{clearable:"",name:"message","clear-icon":"mdi-close-circle",label:"Décrivez votre projet et leur de rappel souhaitée"},model:{value:e.devis.message,callback:function(t){e.$set(e.devis,"message",t)},expression:"devis.message"}}),e._v(" "),n("v-btn",{attrs:{color:"primary",type:"submit",disabled:!e.validFormDevis}},[e._v("Envoyer ma demande de devis")]),e._v(" "),n("small",{staticClass:"d-block mt-4"},[e._v("\n            Vos données personnelles sont collectées exclusivement dans le\n            cadre de votre demande de devis et ne font l’objet d’aucune\n            diffusion ni commercialisation. Elles sont destinées au personnel\n            de AUDITS rénovation en charge du traitement de votre demande.\n          ")])],1)],1)],1)],1),e._v(" "),e.alertDevis?n("div",{staticClass:"alert"},[n("v-alert",{attrs:{dense:"",type:"success"}},[e._v("\n      On vous confirme avoir bien reçu votre demande pour"),n("strong",[e._v("\n        un devis gratuit.")]),e._v("\n      Un chargé d'affaire vous contactera dans les meilleurs délais\n    ")])],1):e._e()])}),[],!1,null,"23f78320",null);t.default=component.exports;d()(component,{VAlert:c.a,VBtn:m.a,VCard:f.a,VCardText:h.b,VCardTitle:h.c,VCol:_.a,VForm:x.a,VRow:y.a,VSelect:C.a,VTextField:w.a,VTextarea:D.a})},426:function(e,t,n){"use strict";n(45),n(91),n(17),n(410);var r=n(285),o=n(79),l=n(132),v=n(131),d=n(204),c=n(8).default.extend({name:"rippleable",directives:{ripple:d.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",data)):null}}}),m=n(66),f=n(9),h=n(29);t.a=Object(h.a)(o.a,l.a,c,v.a,m.a).extend({name:"v-rating",props:{backgroundColor:{type:String,default:"accent"},color:{type:String,default:"primary"},clearable:Boolean,dense:Boolean,emptyIcon:{type:String,default:"$ratingEmpty"},fullIcon:{type:String,default:"$ratingFull"},halfIcon:{type:String,default:"$ratingHalf"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,size:[Number,String],value:{type:Number,default:0},iconLabel:{type:String,default:"$vuetify.rating.ariaLabel.icon"}},data:function(){return{hoverIndex:-1,internalValue:this.value}},computed:{directives:function(){return this.readonly||!this.ripple?[]:[{name:"ripple",value:{circle:!0}}]},iconProps:function(){var e=this.$props,t=e.dark,n=e.large,r=e.light,o=e.medium,small=e.small;return{dark:t,large:n,light:r,medium:o,size:e.size,small:small,xLarge:e.xLarge,xSmall:e.xSmall}},isHovering:function(){return this.hover&&this.hoverIndex>=0}},watch:{internalValue:function(e){e!==this.value&&this.$emit("input",e)},value:function(e){this.internalValue=e}},methods:{createClickFn:function(i){var e=this;return function(t){if(!e.readonly){var n=e.genHoverIndex(t,i);e.clearable&&e.internalValue===n?e.internalValue=0:e.internalValue=n}}},createProps:function(i){var e={index:i,value:this.internalValue,click:this.createClickFn(i),isFilled:Math.floor(this.internalValue)>i,isHovered:Math.floor(this.hoverIndex)>i};return this.halfIncrements&&(e.isHalfHovered=!e.isHovered&&(this.hoverIndex-i)%1>0,e.isHalfFilled=!e.isFilled&&(this.internalValue-i)%1>0),e},genHoverIndex:function(e,i){var t=this.isHalfEvent(e);return this.halfIncrements&&this.$vuetify.rtl&&(t=!t),i+(t?.5:1)},getIconName:function(e){var t=this.isHovering?e.isHovered:e.isFilled,n=this.isHovering?e.isHalfHovered:e.isHalfFilled;return t?this.fullIcon:n?this.halfIcon:this.emptyIcon},getColor:function(e){if(this.isHovering){if(e.isHovered||e.isHalfHovered)return this.color}else if(e.isFilled||e.isHalfFilled)return this.color;return this.backgroundColor},isHalfEvent:function(e){if(this.halfIncrements){var rect=e.target&&e.target.getBoundingClientRect();if(rect&&e.pageX-rect.left<rect.width/2)return!0}return!1},onMouseEnter:function(e,i){var t=this;this.runDelay("open",(function(){t.hoverIndex=t.genHoverIndex(e,i)}))},onMouseLeave:function(){var e=this;this.runDelay("close",(function(){return e.hoverIndex=-1}))},genItem:function(i){var e=this,t=this.createProps(i);if(this.$scopedSlots.item)return this.$scopedSlots.item(t);var n={click:t.click};return this.hover&&(n.mouseenter=function(t){return e.onMouseEnter(t,i)},n.mouseleave=this.onMouseLeave,this.halfIncrements&&(n.mousemove=function(t){return e.onMouseEnter(t,i)})),this.$createElement(r.a,this.setTextColor(this.getColor(t),{attrs:{"aria-label":this.$vuetify.lang.t(this.iconLabel,i+1,Number(this.length))},directives:this.directives,props:this.iconProps,on:n}),[this.getIconName(t)])}},render:function(e){var t=this,n=Object(f.h)(Number(this.length)).map((function(i){return t.genItem(i)}));return e("div",{staticClass:"v-rating",class:{"v-rating--readonly":this.readonly,"v-rating--dense":this.dense}},n)}})},431:function(e,t,n){var content=n(451);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(36).default)("74ef34d0",content,!0,{sourceMap:!1})},450:function(e,t,n){"use strict";n(431)},451:function(e,t,n){var r=n(35)(!1);r.push([e.i,"h1[data-v-37f5fe6c]{font-size:3.6em;font-weight:100;text-align:center;margin-bottom:0;color:#42b883;margin-top:50px;color:#1f74f4;font-size:30px;font-weight:700;font-family:monospace;letter-spacing:7px;cursor:pointer;text-transform:uppercase;background:linear-gradient(90deg,#1f74f4 0,#fff 10%,#1f74f4 20%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;-webkit-animation:shine-data-v-37f5fe6c 3s linear infinite;animation:shine-data-v-37f5fe6c 3s linear infinite}@-webkit-keyframes shine-data-v-37f5fe6c{0%{background-position:0}60%{background-position:600px}to{background-position:900px}}@keyframes shine-data-v-37f5fe6c{0%{background-position:0}60%{background-position:600px}to{background-position:900px}}@media (max-width:576px){h1[data-v-37f5fe6c]{margin-top:30px;font-size:15px;letter-spacing:4px}}",""]),e.exports=r},481:function(e,t,n){"use strict";n.r(t);n(450);var r=n(78),o=n(90),l=n.n(o),v=n(388),d=n(408),c=n(406),m=n(397),f=n(389),h=n(387),_=n(283),x=n(462),y=n(426),C=n(399),component=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",{staticClass:"h4 text-primary text-center"},[e._v("Nos dernières réalisations")]),e._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12",md:"3"}},[n("v-card",{staticClass:"mx-auto my-12",attrs:{"max-width":"374"}},[n("template",{slot:"progress"},[n("v-progress-linear",{attrs:{color:"deep-purple",height:"10",indeterminate:""}})],1),e._v(" "),n("v-img",{attrs:{height:"250",src:"ravalement façade95.jpg",title:"rénovation cuisine",alt:"rénovation cuisine"}}),e._v(" "),n("v-card-title",[e._v("Ravalement de façade à Sarcelles 140 m2 ")]),e._v(" "),n("v-card-text",[n("v-row",{staticClass:"mx-0",attrs:{align:"center"}},[n("v-rating",{attrs:{value:5,color:"amber",dense:"","half-increments":"",readonly:"",size:"14"}}),e._v(" "),n("hr")],1),e._v(" "),n("div",{staticClass:"my-4 text-subtitle-1"},[n("v-icon",[e._v("mdi-currency-eur")]),e._v(" 10 500 Euros TTC\n          ")],1),e._v(" "),n("div",[n("v-icon",[e._v("mdi-calendar-clock-outline")]),e._v(" 2 semaines")],1)],1),e._v(" "),n("v-divider",{staticClass:"mx-4"}),e._v(" "),n("v-card-actions",[n("v-btn",{attrs:{color:"deep-purple lighten-2",text:"",href:"#formDevis"}},[e._v("\n            Demandez un devis\n          ")])],1)],2)],1),e._v(" "),n("v-col",{attrs:{cols:"12",md:"3"}},[n("v-card",{staticClass:"mx-auto my-12",attrs:{"max-width":"374"}},[n("template",{slot:"progress"},[n("v-progress-linear",{attrs:{color:"deep-purple",height:"10",indeterminate:""}})],1),e._v(" "),n("v-img",{attrs:{height:"250",src:"ravalement94.jpg",title:"rénovation cuisine",alt:"rénovation cuisine"}}),e._v(" "),n("v-card-title",[e._v("Ravalement de façade à champigny 190 m2 ")]),e._v(" "),n("v-card-text",[n("v-row",{staticClass:"mx-0",attrs:{align:"center"}},[n("v-rating",{attrs:{value:5,color:"amber",dense:"","half-increments":"",readonly:"",size:"14"}}),e._v(" "),n("hr")],1),e._v(" "),n("div",{staticClass:"my-4 text-subtitle-1"},[n("v-icon",[e._v("mdi-currency-eur")]),e._v(" 13 700 Euros TTC\n          ")],1),e._v(" "),n("div",[n("v-icon",[e._v("mdi-calendar-clock-outline")]),e._v(" 2 semaines")],1)],1),e._v(" "),n("v-divider",{staticClass:"mx-4"}),e._v(" "),n("v-card-actions",[n("v-btn",{attrs:{color:"deep-purple lighten-2",text:"",href:"#formDevis"}},[e._v("\n            Demandez un devis\n          ")])],1)],2)],1),e._v(" "),n("v-col",{attrs:{cols:"12",md:"3"}},[n("v-card",{staticClass:"mx-auto my-12",attrs:{"max-width":"374"}},[n("template",{slot:"progress"},[n("v-progress-linear",{attrs:{color:"deep-purple",height:"10",indeterminate:""}})],1),e._v(" "),n("v-img",{attrs:{height:"250",src:"ravalement91.jpg"}}),e._v(" "),n("v-card-title",[e._v("Réalisation d'un encadrement fenêtre Athis Mons")]),e._v(" "),n("v-card-text",[n("v-row",{staticClass:"mx-0",attrs:{align:"center"}},[n("v-rating",{attrs:{value:5,color:"amber",dense:"","half-increments":"",readonly:"",size:"14"}}),e._v(" "),n("hr")],1),e._v(" "),n("div",{staticClass:"my-4 text-subtitle-1"},[n("v-icon",[e._v("mdi-currency-eur")]),e._v("1 800 Euros TTC\n          ")],1),e._v(" "),n("div",[n("v-icon",[e._v("mdi-calendar-clock-outline")]),e._v(" 2 jours")],1)],1),e._v(" "),n("v-divider",{staticClass:"mx-4"}),e._v(" "),n("v-card-actions",[n("v-btn",{attrs:{color:"deep-purple lighten-2",text:"",href:"#formDevis"}},[e._v("\n            Demandez un devis\n          ")])],1)],2)],1),e._v(" "),n("v-col",{attrs:{cols:"12",md:"3"}},[n("v-card",{staticClass:"mx-auto my-12",attrs:{"max-width":"374"}},[n("template",{slot:"progress"},[n("v-progress-linear",{attrs:{color:"deep-purple",height:"10",indeterminate:""}})],1),e._v(" "),n("v-img",{attrs:{height:"250",src:"ravalement-peinture95.jpg"}}),e._v(" "),n("v-card-title",[e._v("Peinture extérieurs murs et volets à sarcelles 42 m2\n        ")]),e._v(" "),n("v-card-text",[n("v-row",{staticClass:"mx-0",attrs:{align:"center"}},[n("v-rating",{attrs:{value:5,color:"amber",dense:"","half-increments":"",readonly:"",size:"14"}}),e._v(" "),n("hr")],1),e._v(" "),n("div",{staticClass:"my-4 text-subtitle-1"},[n("v-icon",[e._v("mdi-currency-eur")]),e._v("2 190 Euros TTC\n          ")],1),e._v(" "),n("div",[n("v-icon",[e._v("mdi-calendar-clock-outline")]),e._v("2 jours")],1)],1),e._v(" "),n("v-divider",{staticClass:"mx-4"}),e._v(" "),n("v-card-actions",[n("v-btn",{attrs:{color:"deep-purple lighten-2",href:"#formDevis",text:""}},[e._v("\n            Demandez un devis\n          ")])],1)],2)],1)],1)],1)}),[],!1,null,"37f5fe6c",null);t.default=component.exports;l()(component,{VBtn:v.a,VCard:d.a,VCardActions:c.a,VCardText:c.b,VCardTitle:c.c,VCol:m.a,VDivider:f.a,VIcon:h.a,VImg:_.a,VProgressLinear:x.a,VRating:y.a,VRow:C.a})},549:function(e,t,n){"use strict";n.r(t);n(5),n(72);var r={head:function(){return{title:this.isolation.title,meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:this.isolation.description},{hid:"og:title",name:"og:title",content:this.isolation.title},{hid:"og:description",name:"og:description",content:this.isolation.description},{hid:"og:url",name:"og:url",content:this.isolation.url},{hide:"twitter:card",name:"twitter:card"},{hide:"twitter:site",name:"twitter:site",content:this.isolation.url}]}},data:function(){return{isolation:{title:"Entreprise de ravalement de façade | Audits rénovation",description:"Entreprise de ravalement de façade | Un projet de rénovation de façade, ravelement de façade ou nettoyage de façade, Audits rénovation mets à votre disposition une équipe dédiée",url:"https://auditsrenovation.fr/ravalement-façade/"}}}},o=n(78),l=n(90),v=n.n(l),d=n(397),c=n(405),m=n(283),f=n(426),h=n(399),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-container",{attrs:{itemscope:"",itemtype:"https://schema.org/LocalBusiness"}},[n("h1",{staticClass:"h2 text-center text-primary",attrs:{itemprop:"name"}},[e._v("\n      Ravalement de façade\n    ")]),e._v(" "),n("hr"),e._v(" "),n("v-row",{staticClass:"mt-4"},[n("v-col",{attrs:{cols:"12",md:"8"}},[n("v-row",{attrs:{justify:"center"}},[n("div",{attrs:{itemprop:"reviews",itemscope:"",itemtype:"https://schema.org/AggregateRating"}},[n("v-img",{attrs:{src:"facade.jpg",title:"Ravalement de façade",alt:"ravalement de façade","max-width":"700px"}}),e._v(" "),n("meta",{attrs:{itemprop:"ratingValue",content:"4.7"}}),e._v(" "),n("meta",{attrs:{itemprop:"bestRating",content:"5"}}),e._v(" "),n("v-rating",{attrs:{value:4.7,color:"amber",dense:"","half-increments":"",readonly:"",size:"14"}}),e._v(" "),n("span",{staticClass:"text-secondary"},[e._v("\n              Basé sur "),n("span",{attrs:{itemprop:"ratingCount"}},[e._v("14")]),e._v(" évaluations\n              d'utilisateurs\n            ")])],1),e._v(" "),n("hr"),e._v(" "),n("v-col",{attrs:{cols:"12",md:"12",itemscope:"",itemtype:"https://schema.org/LocalBusiness"}},[n("span",{attrs:{itemprop:"name"}},[e._v("Le ravalement ou la rénovation de façade")]),e._v(" "),n("span",{attrs:{itemprop:"description"}},[e._v("\n              est une suite d'actions qui vise à remettre en état les murs\n              extérieurs de votre logement.\n              "),n("br"),e._v("\n              En effet, avec le temps, votre bâtiment est susceptible d'être\n              affecté par des mouvements de structure, avec pour conséquences\n              fissures et lézardements des murs, qui peuvent elles-même\n              déboucher sur une isolation dégradée ou sur des infiltrations\n              d'eau. C'est pourquoi des travaux de ravalement réguliers sont\n              indispensables pour pallier ces problématiques.\n            ")])]),e._v(" "),n("v-col",{attrs:{cols:"12",md:"12"}},[n("h2",{staticClass:"h4"},[e._v("Les avantages d'un ravalement de façade")]),e._v("\n            Ravaler les façades de son logement permet de maintenir les murs\n            en bon état et de préserver un bâtiment sain de toute\n            infiltration. Il s’agit souvent de travaux lourds, à confier à des\n            professionnels expérimentés. De plus, rénover sa façade permet de\n            lutter contre les déperditions de chaleur et d'être bien chez soi\n            toute l'année.\n          ")]),e._v(" "),n("v-col",[e._v("\n            Plusieurs types de travaux de façade peuvent être entrepris en\n            fonction du diagnostic établi : ; Les finitions de façade :\n            enduit, bardage ou parement, il existe un vaste panel de finitions\n            pour votre façade.\n            "),n("ul",[n("span",{staticClass:"h3"},[e._v("\n                Les différents types de travaux de façade\n              ")]),e._v(" "),n("li",[e._v("\n                Le nettoyage de façade : sablage, ponçage, nettoyage au\n                Kärcher, peeling, nettoyage chimique etc.\n              ")]),e._v(" "),n("li",[e._v("\n                La rénovation de façade : Une fois la façade nettoyée et\n                traitée, les opérations de rénovation peuvent commencer :\n                rebouchage des fissures, rénovation ou remplacement des\n                joints.\n              ")]),e._v(" "),n("li",[e._v("\n                Le traitement de façade : Une fois votre façade nettoyée,\n                l'application d'un traitement adapté s'impose, qui dépendra de\n                l'état de vos murs extérieurs.\n              ")])])]),e._v(" "),n("v-col",{attrs:{cols:"12",md:"12"}},[n("ul",[n("span",{staticClass:"h3"},[e._v("\n                Quand le ravalement de façade est nécessaire ?\n              ")]),e._v(" "),n("li",[e._v("Décollement de la peinture ou de l'enduit")]),e._v(" "),n("li",[e._v("Les fissures")]),e._v(" "),n("li",[e._v("L'efflorescence (dépôt de sel)")]),e._v(" "),n("li",[e._v("\n                L'altération de la couleur (dû à la pollution atmosphérique\n                et/ou biologique)\n              ")]),e._v(" "),n("li",[e._v("Dégradation des joints de la façade..")])])])],1),e._v(" "),n("v-row",[n("v-col",[n("ul",[n("span",{staticClass:"h3"},[e._v(" Les étapes d'un ravalement de façade ")]),e._v(" "),n("li",[e._v("Préparation du chantier et mise en sécurité")]),e._v(" "),n("li",[e._v("Nettoyage et/ou décapage")]),e._v(" "),n("li",[e._v("Réparation et traitement")]),e._v(" "),n("li",[e._v("Finitions")]),e._v(" "),n("li",[e._v("Protection")])])])],1)],1),e._v(" "),n("v-col",{attrs:{cols:"12",md:"4"}},[n("FormulaireDevis")],1)],1),e._v(" "),n("v-row",[n("Facade")],1)],1),e._v(" "),n("div",[n("Footer")],1)],1)}),[],!1,null,null,null);t.default=component.exports;v()(component,{FormulaireDevis:n(418).default,Facade:n(481).default,Footer:n(286).default}),v()(component,{VCol:d.a,VContainer:c.a,VImg:m.a,VRating:f.a,VRow:h.a})}}]);