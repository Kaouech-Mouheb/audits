(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{407:function(t,e,n){t.exports=n.p+"img/avatar5.f89ad8c.jpg"},429:function(t,e,n){var content=n(458);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("16ca3555",content,!0,{sourceMap:!1})},457:function(t,e,n){"use strict";n(429)},458:function(t,e,n){var r=n(35)(!1);r.push([t.i,".close-avis[data-v-d8b06734]{position:relative}.close[data-v-d8b06734]{position:absolute;top:10px;right:10px}.logo-decennal[data-v-d8b06734]{width:130px}.decennal-p[data-v-d8b06734]{margin-top:-20px}.alert[data-v-d8b06734]{position:fixed;top:50px;z-index:1000}@media (max-width:575.98px){.logo-decennal[data-v-d8b06734]{width:130px;margin:0 auto}.avis-voir[data-v-d8b06734]{margin-top:-30px}}",""]),t.exports=r},475:function(t,e,n){"use strict";n.r(e);n(40);var r=n(409),o={data:function(){return{rating:{message:"",note:"",email:""},avis:[{img:n(407),text:"Isolation du comble Rapide efficace et proprement exécutée",date:"Le 27/02/2022",client:"André S."},{img:n(407),text:"Nous avons été entièrement satisfait.",date:"Le 22/01/2022",client:"Rachid M."},{img:n(407),text:"Excellent travail avec une équipe à l'écoute et compétente.",date:"Le 16/01/2022",client:"George P."},{img:n(407),text:"Grand professionnalisme et efficacité. Travail soigné et de qualité.",date:"Le 10/01/2022",client:"Sabrine M."},{img:n(407),text:"Travail et conseils professionnels au top. Merci.",date:"Le 10/01/2022",client:"Patrick J."},{img:n(407),text:"Trés satisfait, livraison rapide .Je recommande Audits rénovation pour isolation des combles perdus.",date:"Le 24/01/2022",client:"Parmatzian H."},{img:n(407),text:"Aucun soucis tout a été bien réalisé comme prévu",date:"Le 5/01/2022",client:"Rachid K."},{img:n(407),text:"Trés satisfait de résultat le meilleur rapport qualité prix, je recommande",date:"Le 24/11/2021",client:"Daniel J."},{img:n(407),text:"Entreprise sérieux, personnel qualifié, livraison rapide. Je recommande",date:"Le 03/10/2021",client:"Sachat M."}],alertAvis:!1,validFormAvis:!0,dialogAvis:!1}},methods:{sendEmailAvis:function(t){var e=this;this.validateAvis(),setTimeout((function(){e.validFormAvis&&r.a.sendForm("service_rpc1vli","template_vh0cdqy",t.target,"OwCoJCs42AJa_Sheh").then((function(t){return console.log("SUCCESS!",t.status,t.text),e.resetFormAvis(),e.dialogAvis=!1,e.alertAvisSucces()}),(function(t){console.log("FAILED...",t)}))}),5)},validateAvis:function(){if(!this.rating.note||!this.rating.commentaire)return this.validFormAvis=!1},resetFormAvis:function(){this.$refs.formAvis.reset()},alertAvisSucces:function(){var t=this;this.alertAvis=!0,setTimeout((function(){t.alertAvis=!1}),7e3)}}},l=(n(457),n(78)),c=n(90),v=n.n(c),d=n(550),m=n(469),_=n(388),x=n(413),f=n(406),h=n(397),A=n(405),C=n(537),y=n(389),k=n(540),V=n(386),w=n(551),F=n(399),T=n(402),S=n(478),E=n(542),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"12",md:"5"}},[n("span",{staticClass:"h4 mt-4 d-block p-2 text-center text-primary"},[t._v("NOUS CONTACTER ")]),t._v(" "),n("hr")])],1),t._v(" "),n("div",{staticClass:"d-flex justify-content-center row"},[n("div",{staticClass:"col-md-4 col-sm-12"},[n("v-card",{attrs:{height:"220px"}},[n("div",{staticClass:"text-center"},[n("img",{staticClass:"logo-decennal",attrs:{src:"decennale.png",alt:""}})]),t._v(" "),n("v-card-text",{staticClass:"decennal-p"},[t._v("\n          AUDITS Rénovation couvre et garantit l’intégralité des dommages qui\n          apparaissent après la réception des travaux pendant 10 ans.\n        ")])],1)],1),t._v(" "),n("div",{staticClass:"col-md-4 col-sm-12"},[n("v-card",{attrs:{height:"220px"}},[n("v-card-title",[t._v(" Coordonnées de contact ")]),t._v(" "),n("v-card-text",[n("address",[n("a",{attrs:{href:"mailto:contact@auditsrenovation.fr",target:"_blank"}},[n("v-icon",[t._v("mdi-email-send-outline")]),t._v("\n              Email:contact@auditsrenovation.fr")],1),t._v(" "),n("br"),t._v(" "),n("a",{attrs:{href:"tel:+33954064773"}},[n("v-icon",[t._v("mdi-phone")]),t._v(" téléphone : 0954064773\n            ")],1)]),t._v(" "),n("v-btn",{attrs:{color:"primary",href:"#formDevis"}},[t._v("demander un devis")])],1)],1)],1),t._v(" "),n("div",{staticClass:"col-md-4 col-sm-12 mt-2"},[n("v-card",{staticClass:"text-light",attrs:{height:"220px",color:"blue darken-3"}},[n("v-row",[n("v-col",[n("h3",{staticClass:"m-4"},[n("small",[t._v("TÉMOIGNAGES")]),t._v(" "),n("span",{staticClass:"grey--text text--lighten-2 text-caption mr-2"},[t._v("\n                ("+t._s(5)+"/5) basé sur 9 avis\n              ")])]),t._v(" "),n("div",{staticClass:"m-4"},t._l(5,(function(i){return n("span",{key:i},[n("v-icon",{attrs:{color:"orange"}},[t._v(" mdi-star ")])],1)})),0),t._v(" "),n("v-divider",{staticClass:"mx-4",attrs:{color:"white"}}),t._v(" "),n("v-dialog",{attrs:{"max-width":"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("small",[n("a",t._g(t._b({staticClass:"text-light avis-voir m-4"},"a",o,!1),r),[t._v("voir les avis")])])]}}]),model:{value:t.dialogAvis,callback:function(e){t.dialogAvis=e},expression:"dialogAvis"}},[t._v(" "),n("v-card",[n("div",{staticClass:"close-avis"},[n("v-card-title",{staticClass:"text-h5 text-center text-primary lighten-2"},[t._v("\n                    Toutes les avis\n                  ")]),t._v(" "),n("span",{staticClass:"close"},[n("v-btn",{attrs:{icon:""},on:{click:function(e){t.dialogAvis=!1}}},[n("v-icon",{attrs:{large:""}},[t._v(" mdi-close-circle-outline ")])],1)],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-container",t._l(t.avis,(function(e){return n("v-row",{key:e.index,staticClass:"shadow-none p-3 mb-5 bg-light rounded",attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"12",md:"2",sm:"4"}},[n("v-avatar",[n("img",{attrs:{src:e.img,alt:"jhon"}})])],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"8",sm:"6"}},[n("small",[t._v(t._s(e.text))]),t._v(" "),n("div",t._l(5,(function(i){return n("span",{key:i},[n("v-icon",{attrs:{color:"orange"}},[t._v(" mdi-star ")])],1)})),0)]),t._v(" "),n("v-col",{attrs:{cols:"12",md:"8",sm:"6"}},[n("small",{staticClass:"text-secondary"},[t._v(t._s(e.date))]),t._v(" "),n("small",{staticClass:"text-secondary d-block"},[t._v(t._s(e.client))])])],1)})),1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"12",sm:"12"}},[n("p",{staticClass:"text-primary text-center h5"},[t._v("\n                    Ajouter votre avis\n                  ")])]),t._v(" "),n("v-form",{ref:"formAvis",attrs:{"lazy-validation":""},on:{submit:function(e){return e.preventDefault(),t.sendEmailAvis.apply(null,arguments)}},model:{value:t.validFormAvis,callback:function(e){t.validFormAvis=e},expression:"validFormAvis"}},[n("v-col",{attrs:{cols:"12",md:"11",sm:"11"}},[n("v-text-field",{attrs:{name:"avis_email",label:"Email",value:"Votre adresse email",rules:[function(t){return!!t||"E-mail est requies"},function(t){return/.+@.+\..+/.test(t)||"Format non valide"}]},model:{value:t.rating.email,callback:function(e){t.$set(t.rating,"email",e)},expression:"rating.email"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"11",sm:"11"}},[n("v-textarea",{attrs:{name:"avis_commentaire",label:"Ajouter un commentaire",value:"Votre commentaire ici ..!!",hint:"commenter"},model:{value:t.rating.commentaire,callback:function(e){t.$set(t.rating,"commentaire",e)},expression:"rating.commentaire"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"11",sm:"11"}},[n("v-rating",{attrs:{name:"avis_note",color:"yellow darken-3","background-color":"grey darken-1","empty-icon":"$ratingFull","half-increments":"",hover:"",large:""},model:{value:t.rating.note,callback:function(e){t.$set(t.rating,"note",e)},expression:"rating.note"}})],1),t._v(" "),n("v-col",{staticClass:"d-none"},[n("v-text-field",{attrs:{name:"avis_note"},model:{value:t.rating.note,callback:function(e){t.$set(t.rating,"note",e)},expression:"rating.note"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"10",sm:"10"}},[t.validFormAvis?t._e():n("div",[n("small",{staticClass:"text-danger"},[t._v("\n                        Ce champs est requies\n                      ")])]),t._v(" "),n("v-btn",{attrs:{color:"success",disabled:!t.validFormAvis,type:"submit"}},[t._v("\n                      Envoyer votre avis\n                    ")])],1)],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"error",text:""},on:{click:function(e){t.dialogAvis=!1}}},[t._v("\n                    Fermer\n                  ")])],1)],1)],1)],1)],1)],1)],1)]),t._v(" "),n("div",[t.alertAvis?n("div",{staticClass:"alert"},[n("v-alert",{attrs:{dense:"",type:"success"}},[t._v("\n        On vous remercie de nous avoir transmis vôtre "),n("strong",[t._v(" avis !")]),t._v("\n        Nous le publierons prochainement\n      ")])],1):t._e()])],1)}),[],!1,null,"d8b06734",null);e.default=component.exports;v()(component,{VAlert:d.a,VAvatar:m.a,VBtn:_.a,VCard:x.a,VCardActions:f.a,VCardText:f.b,VCardTitle:f.c,VCol:h.a,VContainer:A.a,VDialog:C.a,VDivider:y.a,VForm:k.a,VIcon:V.a,VRating:w.a,VRow:F.a,VSpacer:T.a,VTextField:S.a,VTextarea:E.a})}}]);