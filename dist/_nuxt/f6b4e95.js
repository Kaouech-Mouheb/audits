(window.webpackJsonp=window.webpackJsonp||[]).push([[9,12],{418:function(e,t,n){var content=n(431);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(36).default)("31472e50",content,!0,{sourceMap:!1})},425:function(e,t,n){var content=n(442);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(36).default)("b30e4344",content,!0,{sourceMap:!1})},430:function(e,t,n){"use strict";n(418)},431:function(e,t,n){var o=n(35)(!1);o.push([e.i,".alert[data-v-7b7bffa2]{position:fixed;top:50px;z-index:1000}",""]),e.exports=o},432:function(e,t,n){"use strict";n.r(t);n(11),n(40);var o=n(409),r={data:function(){return{validFormDevis:!0,devis:{typeTravaux:"",name:"",codePostal:"",tel:"",message:""},alertDevis:!1,Rules:{typeTravaux:[function(e){return!!e||"Champs requies"}],name:[function(e){return!!e||"Champs requies"}],tel:[function(e){return!!e||"Champs requies"},function(e){return e&&e.length>=8||"Un numéro valid contient minumum 8 caractéres"}],email:[function(e){return!!e||"E-mail est requies"},function(e){return/.+@.+\..+/.test(e)||"Format non valide"}],codePostal:[function(e){return!!e||"Champs requies"},function(e){return/[0-9]{5}/g.test(e)||"Format non valide"}]}}},methods:{sendEmailDevis:function(e){var t=this;this.validateDevis(),setTimeout((function(){t.validFormDevis&&o.a.sendForm("service_rpc1vli","template_vh0cdqy",e.target,"OwCoJCs42AJa_Sheh").then((function(e){return console.log("SUCCESS!",e.status,e.text),t.resetFormDevis(),t.alertDevisSucces()}),(function(e){console.log("FAILED...",e)}))}),5)},validateDevis:function(){this.$refs.formDevis.validate()},alertDevisSucces:function(){var e=this;this.alertDevis=!0,setTimeout((function(){e.alertDevis=!1}),7e3)},resetFormDevis:function(){this.$refs.formDevis.reset()}}},l=(n(430),n(78)),c=n(90),d=n.n(c),v=n(564),h=n(388),f=n(419),m=n(406),y=n(397),x=n(549),_=n(399),w=n(552),O=n(489),C=n(551),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[n("v-card",{attrs:{id:"formDevis"}},[n("v-card-title",{staticClass:"text-primary"},[e._v(" Devis Gratuit ")]),e._v(" "),n("v-card-text",[n("v-row",[n("v-col",{attrs:{cols:"12",md:"8"}},[e._v("\n            Remplissez ce formulaire pour recevoir votre devis gratuit et sans\n            engagement sous 24h ouvrés.\n          ")]),e._v(" "),n("v-col",{attrs:{cols:"12",md:"4"}},[n("img",{attrs:{src:"rge.jpeg",width:"70px"}})])],1)],1),e._v(" "),n("v-card-text",[n("v-form",{ref:"formDevis",attrs:{"lazy-validation":""},on:{submit:function(t){return t.preventDefault(),e.sendEmailDevis.apply(null,arguments)}},model:{value:e.validFormDevis,callback:function(t){e.validFormDevis=t},expression:"validFormDevis"}},[n("v-select",{attrs:{items:["Rénovation de toiture","Démoussage toiture","Traitement de toiture","Traitement Bois Charpente","Isolation toiture par l’extérieur","Isolation sous toiture","pose de fenêtre Velux","Isolation des combles","Aménagement de combles","Autres"],label:"Type de travaux",rules:e.Rules.typeTravaux,name:"type_travaux",required:""},model:{value:e.devis.typeTravaux,callback:function(t){e.$set(e.devis,"typeTravaux",t)},expression:"devis.typeTravaux"}}),e._v(" "),n("v-text-field",{attrs:{rules:e.Rules.name,name:"client_name",label:"Nom *","single-line":""},model:{value:e.devis.name,callback:function(t){e.$set(e.devis,"name",t)},expression:"devis.name"}}),e._v(" "),n("v-text-field",{attrs:{rules:e.Rules.codePostal,name:"code_postal",label:"code postal *","single-line":""},model:{value:e.devis.codePostal,callback:function(t){e.$set(e.devis,"codePostal",t)},expression:"devis.codePostal"}}),e._v(" "),n("v-text-field",{attrs:{label:"votre téléphone *",rules:e.Rules.tel,regex:"^(71|72|74|76|81|82|84|85|86|87|88|89)\\\\d{5}$",type:"number",name:"client_tel","single-line":""},model:{value:e.devis.tel,callback:function(t){e.$set(e.devis,"tel",t)},expression:"devis.tel"}}),e._v(" "),n("v-text-field",{attrs:{rules:e.Rules.email,name:"client_email",label:"votre email *","single-line":""},model:{value:e.devis.email,callback:function(t){e.$set(e.devis,"email",t)},expression:"devis.email"}}),e._v(" "),n("v-textarea",{attrs:{clearable:"",name:"message","clear-icon":"mdi-close-circle",label:"Décrivez votre projet et leur de rappel souhaitée"},model:{value:e.devis.message,callback:function(t){e.$set(e.devis,"message",t)},expression:"devis.message"}}),e._v(" "),n("v-btn",{attrs:{color:"primary",type:"submit",disabled:!e.validFormDevis}},[e._v("Envoyer ma demande de devis")]),e._v(" "),n("small",{staticClass:"d-block mt-4"},[e._v("\n            Vos données personnelles sont collectées exclusivement dans le\n            cadre de votre demande de devis et ne font l’objet d’aucune\n            diffusion ni commercialisation. Elles sont destinées au personnel\n            de AUDITS rénovation en charge du traitement de votre demande.\n          ")])],1),e._v(" "),n("div",{staticClass:"mt-4"})],1)],1)],1),e._v(" "),e.alertDevis?n("div",{staticClass:"alert"},[n("v-alert",{attrs:{dense:"",type:"success"}},[e._v("\n      On vous confirme avoir bien reçu votre demande pour"),n("strong",[e._v("\n        un devis gratuit.")]),e._v("\n      Un chargé d'affaire vous contactera dans les meilleurs délais\n    ")])],1):e._e()])}),[],!1,null,"7b7bffa2",null);t.default=component.exports;d()(component,{VAlert:v.a,VBtn:h.a,VCard:f.a,VCardText:m.b,VCardTitle:m.c,VCol:y.a,VForm:x.a,VRow:_.a,VSelect:w.a,VTextField:O.a,VTextarea:C.a})},441:function(e,t,n){"use strict";n(425)},442:function(e,t,n){var o=n(35)(!1);o.push([e.i,".fermer-dialog[data-v-ad3dc0f2]{position:absolute;bottom:10px;right:40px;z-index:1000}.img[data-v-ad3dc0f2]{max-width:600px}.a-propos[data-v-ad3dc0f2]{font-size:22px;font-weight:200}.container-toiture[data-v-ad3dc0f2]{position:relative}.close[data-v-ad3dc0f2]{position:absolute;top:10px;right:10px;z-index:1000}@media (max-width:575.98px){.a-propos[data-v-ad3dc0f2]{font-size:16px}}@media (min-width:576px) and (max-width:1024px){.img[data-v-ad3dc0f2]{max-width:800px}}",""]),e.exports=o},459:function(e,t,n){"use strict";n.r(t);var o={data:function(){return{dialog:!1}}},r=(n(441),n(78)),l=n(90),c=n.n(l),d=n(388),v=n(419),h=n(397),f=n(548),m=n(387),y=n(283),x=n(399),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"12",md:"5"}},[n("h1",{staticClass:"h4 mt-4 d-block p-2 text-center text-primary"},[e._v(" Travaux de couverture ")]),e._v(" "),n("hr")])],1),e._v(" "),n("v-card",{staticClass:"mt-4 p-4"},[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"12",md:"6",sm:"12"}},[n("div",{staticClass:"a-propos"},[n("h1",[e._v("Audits rénovation")]),e._v(" "),n("ul",[e._v("\n            Audits rénovation Spécialiste en\n            "),n("strong",[e._v("travaux de couverture")]),e._v("\n            et offre Une grande variété de services pour\n            "),n("strong",[e._v("rénover votre toiture")]),e._v(".\n            "),n("li",[n("strong",[e._v("Rénovation compléte de toiture")])]),e._v(" "),n("li",[n("strong",[e._v("Réparation des fuites de toitures")]),e._v(" et la remise\n              en étanchéité\n            ")]),e._v(" "),n("li",[e._v("Nettoyage et "),n("strong",[e._v("démoussage de toiture")])]),e._v(" "),n("li",[e._v("Pose de fenêtre velux")]),e._v(" "),n("li",[n("strong",[e._v("Isolation de toiture")])]),e._v(" "),n("li",[n("strong",[e._v(" Pose de toiture")]),e._v(", gouttières et canalisations\n              d'eaux pluviales.\n            ")])])]),e._v(" "),n("hr"),e._v(" "),n("v-row",{attrs:{justify:"center"}},[n("v-btn",{attrs:{color:"success",dark:""},on:{click:function(t){t.stopPropagation(),e.dialog=!0}}},[e._v("\n            En savoir plus\n          ")]),e._v(" "),n("v-dialog",{attrs:{"max-width":"600"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("div",{staticClass:"container-toiture"},[n("div",{staticClass:"close"},[n("v-btn",{attrs:{icon:""},on:{click:function(t){e.dialog=!1}}},[n("v-icon",{attrs:{large:""}},[e._v(" mdi-close-circle-outline ")])],1)],1),e._v(" "),n("FormulaireDevisToiture"),e._v(" "),n("v-btn",{staticClass:"fermer-dialog",attrs:{color:"error"},on:{click:function(t){e.dialog=!1}}},[e._v("\n                  Fermer\n                ")])],1)])],1)],1),e._v(" "),n("v-col",{attrs:{cols:"12",md:"6",sm:"12"}},[n("v-card",{staticClass:"img"},[n("v-img",{attrs:{src:"couverture.jpg"}})],1)],1)],1)],1)],1)}),[],!1,null,"ad3dc0f2",null);t.default=component.exports;c()(component,{FormulaireDevisToiture:n(432).default}),c()(component,{VBtn:d.a,VCard:v.a,VCol:h.a,VDialog:f.a,VIcon:m.a,VImg:y.a,VRow:x.a})},468:function(e,t,n){var content=n(469);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(36).default)("2065bca8",content,!0,{sourceMap:!1})},469:function(e,t,n){var o=n(35)(!1);o.push([e.i,".v-dialog{border-radius:4px;margin:24px;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__subtitle,.v-dialog>.v-card>.v-card__text{padding:0 24px 20px}.v-dialog>.v-card>.v-card__actions{padding:8px 16px}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;width:100%;z-index:6;outline:none}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{-webkit-animation-duration:.15s;animation-duration:.15s;-webkit-animation-name:animate-dialog;animation-name:animate-dialog;-webkit-animation-timing-function:cubic-bezier(.25,.8,.25,1);animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;margin:0;height:100%;position:fixed;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-card{min-height:100%;min-width:100%;margin:0!important;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{-webkit-backface-visibility:hidden;backface-visibility:hidden;flex:1 1 auto;overflow-y:auto}@-webkit-keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}@keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}",""]),e.exports=o},470:function(e,t,n){var content=n(471);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(36).default)("3f95a174",content,!0,{sourceMap:!1})},471:function(e,t,n){var o=n(35)(!1);o.push([e.i,".theme--light.v-overlay{color:rgba(0,0,0,.87)}.theme--dark.v-overlay{color:#fff}.v-overlay{align-items:center;border-radius:inherit;display:flex;justify-content:center;position:fixed;top:0;left:0;right:0;bottom:0;pointer-events:none;transition:.3s cubic-bezier(.25,.8,.5,1),z-index 1ms}.v-overlay__content{position:relative}.v-overlay__scrim{border-radius:inherit;bottom:0;height:100%;left:0;position:absolute;right:0;top:0;transition:inherit;width:100%;will-change:opacity}.v-overlay--absolute{position:absolute}.v-overlay--active{pointer-events:auto}",""]),e.exports=o},548:function(e,t,n){"use strict";var o=n(33),r=n(0),l=(n(45),n(37),n(40),n(53),n(64),n(1),n(111),n(4),n(5),n(2),n(6),n(3),n(7),n(468),n(550)),c=n(126),d=n(207),v=n(229),h=(n(470),n(79)),f=n(66),m=n(80),y=n(29);function x(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var _=Object(y.a)(h.a,f.a,m.a).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var data=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",data)},classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(e){var t=[this.__scrim];return this.isActive&&t.push(this.genContent()),e("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},t)}}),w=_,O=n(9),C=n(8).default.extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data:function(){return{animationFrame:0,overlay:null}},watch:{hideOverlay:function(e){this.isActive&&(e?this.removeOverlay():this.genOverlay())}},beforeDestroy:function(){this.removeOverlay()},methods:{createOverlay:function(){var e=new w({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});e.$mount();var t=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");t&&t.insertBefore(e.$el,t.firstChild),this.overlay=e},genOverlay:function(){var e=this;if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame((function(){e.overlay&&(void 0!==e.activeZIndex?e.overlay.zIndex=String(e.activeZIndex-1):e.$el&&(e.overlay.zIndex=Object(O.r)(e.$el)),e.overlay.value=!0)})),!0},removeOverlay:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.overlay&&(Object(O.a)(this.overlay.$el,"transitionend",(function(){e.overlay&&e.overlay.$el&&e.overlay.$el.parentNode&&!e.overlay.value&&!e.isActive&&(e.overlay.$el.parentNode.removeChild(e.overlay.$el),e.overlay.$destroy(),e.overlay=null)})),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),t&&this.showScroll()},scrollListener:function(e){if("keydown"===e.type){if(["INPUT","TEXTAREA","SELECT"].includes(e.target.tagName)||e.target.isContentEditable)return;var t=[O.t.up,O.t.pageup],n=[O.t.down,O.t.pagedown];if(t.includes(e.keyCode))e.deltaY=-1;else{if(!n.includes(e.keyCode))return;e.deltaY=1}}(e.target===this.overlay||"keydown"!==e.type&&e.target===document.body||this.checkPath(e))&&e.preventDefault()},hasScrollbar:function(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;var style=window.getComputedStyle(e);return(["auto","scroll"].includes(style.overflowY)||"SELECT"===e.tagName)&&e.scrollHeight>e.clientHeight||["auto","scroll"].includes(style.overflowX)&&e.scrollWidth>e.clientWidth},shouldScroll:function(e,t){if(e.hasAttribute("data-app"))return!1;var n,o,r=t.shiftKey||t.deltaX?"x":"y",l="y"===r?t.deltaY:t.deltaX||t.deltaY;return"y"===r?(n=0===e.scrollTop,o=e.scrollTop+e.clientHeight===e.scrollHeight):(n=0===e.scrollLeft,o=e.scrollLeft+e.clientWidth===e.scrollWidth),!(n||!(l<0))||(!(o||!(l>0))||!(!n&&!o)&&this.shouldScroll(e.parentNode,t))},isInside:function(e,t){return e===t||null!==e&&e!==document.body&&this.isInside(e.parentNode,t)},checkPath:function(e){var path=Object(O.f)(e);if("keydown"===e.type&&path[0]===document.body){var dialog=this.$refs.dialog,t=window.getSelection().anchorNode;return!(dialog&&this.hasScrollbar(dialog)&&this.isInside(t,dialog))||!this.shouldScroll(dialog,e)}for(var n=0;n<path.length;n++){var o=path[n];if(o===document)return!0;if(o===document.documentElement)return!0;if(o===this.$refs.content)return!0;if(this.hasScrollbar(o))return!this.shouldScroll(o,e)}return!0},hideScroll:function(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(O.b)(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll:function(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}}),k=n(467),j=n(228),$=n(452),D=n(21);function S(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function E(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?S(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):S(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var A=Object(y.a)(c.a,d.a,v.a,C,k.a,j.a,m.a);t.a=A.extend({name:"v-dialog",directives:{ClickOutside:$.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var e;return e={},Object(r.a)(e,"v-dialog ".concat(this.contentClass).trim(),!0),Object(r.a)(e,"v-dialog--active",this.isActive),Object(r.a)(e,"v-dialog--persistent",this.persistent),Object(r.a)(e,"v-dialog--fullscreen",this.fullscreen),Object(r.a)(e,"v-dialog--scrollable",this.scrollable),Object(r.a)(e,"v-dialog--animated",this.animate),e},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(e){var t;e?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(t=this.previousActiveElement)||t.focus())},fullscreen:function(e){this.isActive&&(e?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(D.d)("full-width",this)},beforeMount:function(){var e=this;this.$nextTick((function(){e.isBooted=e.isActive,e.isActive&&e.show()}))},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var e=this;this.animate=!1,this.$nextTick((function(){e.animate=!0,window.clearTimeout(e.animateTimeout),e.animateTimeout=window.setTimeout((function(){return e.animate=!1}),150)}))},closeConditional:function(e){var t=e.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(t)||this.overlay&&t&&!this.overlay.$el.contains(t))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):C.options.methods.hideScroll.call(this)},show:function(){var e=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){e.$nextTick((function(){e.$refs.content.contains(document.activeElement)||(e.previousActiveElement=document.activeElement,e.$refs.content.focus()),e.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(e){this.$emit("click:outside",e),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(e){if(e.keyCode===O.t.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var t=this.getActivator();this.$nextTick((function(){return t&&t.focus()}))}this.$emit("keydown",e)},onFocusin:function(e){if(e&&this.retainFocus){var t=e.target;if(t&&![document,this.$refs.content].includes(t)&&!this.$refs.content.contains(t)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(e){return e.contains(t)}))){var n=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),r=Object(o.a)(n).find((function(e){return!e.hasAttribute("disabled")}));r&&r.focus()}}},genContent:function(){var e=this;return this.showLazyContent((function(){return[e.$createElement(l.a,{props:{root:!0,light:e.light,dark:e.dark}},[e.$createElement("div",{class:e.contentClasses,attrs:E({role:"dialog",tabindex:e.isActive?0:void 0,"aria-modal":e.hideOverlay?void 0:"true"},e.getScopeIdAttrs()),on:{keydown:e.onKeydown},style:{zIndex:e.activeZIndex},ref:"content"},[e.genTransition()])])]}))},genTransition:function(){var content=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[content]):content},genInnerContent:function(){var data={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(data.style=E(E({},data.style),{},{maxWidth:Object(O.g)(this.maxWidth),width:Object(O.g)(this.width)})),this.$createElement("div",data,this.getContentSlot())}},render:function(e){return e("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}})}}]);