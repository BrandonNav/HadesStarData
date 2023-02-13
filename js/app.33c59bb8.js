(()=>{var e={41758:(e,t,n)=>{var o={"./de.json":[19445,445],"./en.json":[16506,506],"./es.json":[7891,891],"./fr.json":[79383,383],"./it.json":[10955,955],"./jp.json":[72454,454],"./ko.json":[2335,335],"./pt.json":[42707,707],"./ru.json":[47708,708],"./zh-si.json":[60275,275]};function a(e){if(!n.o(o,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],a=t[0];return n.e(t[1]).then((()=>n(a)))}a.keys=()=>Object.keys(o),a.id=41758,e.exports=a},15925:(e,t,n)=>{"use strict";n.d(t,{J1:()=>d,ZP:()=>l,g:()=>r});var o=n(66252),a=n(7978),s=n(51578);const i=(0,a.o)({locale:s.Z.state.userSettings.language});c(),d(i.global.locale);const l=i;async function r(e){await d(e),c(),i.global.locale=e}async function d(e){const t=await n(41758)(`./${e}.json`).then((e=>e.default));return i.global.setLocaleMessage(e,t),(0,o.Y3)()}function c(){document.querySelector("html")?.setAttribute("lang",i.global.locale)}},59782:(e,t,n)=>{"use strict";n.d(t,{s:()=>f,U:()=>b});const o=!!{NODE_ENV:"production",BASE_URL:"/HadesSpace/",VERSION:"3.2.0"}.VUE_APP_NEBULA_BUILD,a=[{name:"Index",path:"/",component:()=>Promise.all([n.e(449),n.e(726)]).then(n.bind(n,68123))},{text:{locKey:"TID_SHIP_UPGRADE_DLG_TITLE"},children:[{name:"Trade",text:{locKey:o?"TID_MODULE_BLUEPRINTS_LIST_CATEGORY_TRADE":"TYPE_MOD_TRADE"},path:"/trade",component:()=>Promise.all([n.e(449),n.e(22),n.e(398),n.e(683)]).then(n.bind(n,10669)),icon:{name:o?"Mod_Category_Trade":"Mod_TransportAutopilot_Icon",dir:"game/Modules"}},{name:"Mining",text:{locKey:o?"TID_MODULE_BLUEPRINTS_LIST_CATEGORY_MINING":"TYPE_MOD_MINING"},path:"/mining",component:()=>Promise.all([n.e(449),n.e(22),n.e(398),n.e(837)]).then(n.bind(n,3336)),icon:{name:o?"Mod_Category_Mining":"Mod_MiningBoost_Icon",dir:"game/Modules"}},{name:"Weapon",text:{locKey:o?"TID_MODULE_BLUEPRINTS_LIST_CATEGORY_WEAPONS":"TYPE_MOD_WEAPON"},path:"/weapon",component:()=>Promise.all([n.e(449),n.e(22),n.e(398),n.e(749)]).then(n.bind(n,23458)),icon:{name:o?"Mod_Category_Weapon":"Mod_Barrage_Icon",dir:"game/Modules"}},{name:"Shield",text:{locKey:o?"TID_MODULE_BLUEPRINTS_LIST_CATEGORY_SHIELDS":"TYPE_MOD_SHIELD"},path:"/shield",component:()=>Promise.all([n.e(449),n.e(22),n.e(398),n.e(662)]).then(n.bind(n,76566)),icon:{name:o?"Mod_Category_Shield":"Mod_Shields_Icon",dir:"game/Modules"}},{name:"Support",text:{locKey:o?"TID_MODULE_BLUEPRINTS_LIST_CATEGORY_SUPPORT":"TYPE_MOD_SUPPORT"},path:"/support",component:()=>Promise.all([n.e(449),n.e(22),n.e(398),n.e(677)]).then(n.bind(n,13318)),icon:{name:o?"Mod_Category_Support":"Mod_Destiny_Icon",dir:"game/Modules"}},o?{name:"Drone",text:{locKey:"TID_MODULE_BLUEPRINTS_LIST_CATEGORY_DRONE"},path:"/drone",component:()=>Promise.all([n.e(449),n.e(22),n.e(398),n.e(177)]).then(n.bind(n,87982)),icon:{name:"Mod_Category_Drone",dir:"game/Modules"}}:void 0,o?{text:{locKey:"TID_CORP_FLAGSHIP"},path:"/ships#FlagshipModules",icon:{name:"Mod_Category_Support",dir:"game/Modules"}}:void 0]},{text:{locKey:"SECTIONS"},children:[{name:"Planets",text:{locKey:"PLANETS"},path:"/yellowstar#Planets",icon:{name:"planet",dir:"icons"}},{name:"Ships",text:{locKey:"TID_PRODUCTION_DLG_SHIPS"},path:"/ships",component:()=>Promise.all([n.e(449),n.e(22),n.e(398),n.e(85),n.e(406)]).then(n.bind(n,22030)),icon:{name:o?"Transport_DrkNeb_lv5":"Miner_lv6",dir:"game/Ships"}},{name:"Cerberus",text:{locKey:"CERBERUS"},path:"/cerberus",component:()=>Promise.all([n.e(449),n.e(22),n.e(85),n.e(362)]).then(n.bind(n,29087)),icon:{name:o?"Fighter_DrkNeb_Cerberus5_lv1":"Fighter_Cerberus6_lv1",dir:"game/Ships"}},{name:"SpaceBuildings",text:{locKey:"TID_PRODUCTION_DLG_STATIONS"},path:"/spacebuildings",component:()=>Promise.all([n.e(449),n.e(22),n.e(142)]).then(n.bind(n,85491)),icon:{name:o?"station_trade":"trade_station",dir:"game/SpaceBuildings"}},{text:{locKey:"TID_OBJECT_ACTION_ARTIFACTS"},path:"/redstar#Artifacts",icon:{name:"art",dir:"icons",bg:""}},{name:"AllianceLevels",text:{locKey:"TID_CORP_LEVELS_LABEL"},path:"/alliancelevels",component:()=>Promise.all([n.e(449),n.e(22),n.e(626)]).then(n.bind(n,90483)),icon:{name:o?"corpXp":"relic",dir:"icons"}},{name:"PlayerGoals",text:{locKey:"TID_EMPIRE_OBJECTIVES"},path:"/playergoals",component:()=>Promise.all([n.e(449),n.e(22),n.e(636)]).then(n.bind(n,89859)),icon:{name:"influence",dir:"icons"}},{name:"Achievements",text:{locKey:"TID_PLAYER_INFO_DLG_TAB_ACHIEVEMENTS"},path:"/achievements",component:()=>Promise.all([n.e(449),n.e(22),n.e(607)]).then(n.bind(n,97389)),icon:{name:"Leaderboards",dir:"icons"}},{name:"Distinctions",text:{locKey:"TID_PLAYER_INFO_SECTION_BADGES"},path:"/distinctions",component:()=>Promise.all([n.e(449),n.e(22),n.e(607)]).then(n.bind(n,38200)),icon:{name:"Distinction_Emperor",dir:"game/Distinctions"}}]},{text:{locKey:"STARS"},children:[{name:"YellowStar",text:{locKey:"TID_YELLOW_STAR"},path:"/yellowstar",component:()=>Promise.all([n.e(449),n.e(22),n.e(790)]).then(n.bind(n,83961)),icon:{name:"star_yellow",dir:"game/Stars"}},{name:"RedStar",text:{locKey:"TID_RED_STAR"},path:"/redstar",component:()=>Promise.all([n.e(449),n.e(22),n.e(65)]).then(n.bind(n,99330)),icon:{name:"star_red",dir:"game/Stars"}},{name:"WhiteStar",text:{locKey:"TID_WHITE_STAR"},path:"/whitestar",component:()=>Promise.all([n.e(449),n.e(22),n.e(670)]).then(n.bind(n,22598)),icon:{name:"star_white",dir:"game/Stars"}},{name:"BlueStar",text:{locKey:"TID_BLUE_STAR"},path:"/bluestar",component:()=>Promise.all([n.e(449),n.e(22),n.e(261)]).then(n.bind(n,4750)),icon:{name:"star_blue",dir:"game/Stars"}}]},{text:{locKey:"OTHER"},children:[{name:"PlanetsCalc",text:{locKey:"PLANETS_CALC"},path:"/planetscalc",component:()=>Promise.all([n.e(449),n.e(22),n.e(410),n.e(530)]).then(n.bind(n,72460)),icon:{name:"planets-calc",dir:"icons"}},{name:"ModulesCalc",text:{locKey:"MODULES_CALC"},path:"/modulescalc",component:()=>Promise.all([n.e(449),n.e(22),n.e(398),n.e(410),n.e(752)]).then(n.bind(n,93344)),icon:{name:"modules-calc",dir:"icons"}},o?{name:"GameDiffLog",text:{locKey:"Nerf log"},path:"/GameDiffLog",component:()=>Promise.all([n.e(449),n.e(22),n.e(398),n.e(934)]).then(n.bind(n,46931)),icon:{name:"clock",dir:"icons"}}:void 0,{text:{locKey:"SWITCH_ACCS",params:["by Raerten","up to Android 10"]},path:{externalLink:"https://github.com/Raerten/HSAccs"},icon:{name:"github_logo",dir:"icons"}},{name:"About",text:{locKey:"ABOUT"},path:"/about",component:()=>n.e(74).then(n.bind(n,26334)),icon:{name:"info",dir:"icons"}}]}];var s=n(66252);const i=e=>((0,s.dD)("data-v-77ab1840"),e=e(),(0,s.Cn)(),e),l={class:"container"},r=i((()=>(0,s._)("title",null,"Page not found",-1))),d=i((()=>(0,s._)("h1",{class:"glitch"}," 404 ",-1))),c=i((()=>(0,s._)("p",null," Page not found ",-1)));function u(e,t,n,o,a,i){const u=(0,s.up)("Head"),p=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",l,[(0,s.Wm)(u,null,{default:(0,s.w5)((()=>[r])),_:1}),d,c,(0,s.Wm)(p,{to:"/"},{default:(0,s.w5)((()=>[(0,s.Uk)(" Home ")])),_:1})])}var p=n(21232);const h={components:{Head:p.Fb}};var m=n(83744);const g=(0,m.Z)(h,[["render",u],["__scopeId","data-v-77ab1840"]]),_=g,S={path:"/:pathMatch(.*)*",name:"NotFound",component:_};function f(){return[...a.reduce(e,[]),S];function e(t,{name:n,path:o,component:a,children:s}){return a&&t.push({name:n,path:o,component:a}),s&&t.push(...s.filter(Boolean).reduce(e,[])),t}}function b(){return a.filter((e=>e.children)).map((t=>e(t)));function e({text:t,path:n,icon:o,children:a}){return{text:t,icon:o,children:a?a.filter(Boolean).map(e):void 0,link:{path:n?.externalLink||n,type:n?.externalLink?"external":"router"}}}}},20957:(e,t,n)=>{"use strict";var o=n(49963),a=n(42119),s=n(59782);const i=(0,a.p7)({history:(0,a.PO)("/HadesSpace/"),routes:(0,s.s)(),scrollBehavior(e,t,n){return n||(e.hash?new Promise((t=>{setTimeout((()=>{t({el:e.hash,behavior:"smooth",top:100})}),500)})):{top:0})}}),l=i;var r=n(15925),d=n(51578),c=n(66252);const u=e=>((0,c.dD)("data-v-5880ec45"),e=e(),(0,c.Cn)(),e),p=u((()=>(0,c._)("title",null,"Hades Space",-1))),h=u((()=>(0,c._)("div",{class:"target-wrap"},[(0,c._)("div",{id:"table-head-target"})],-1)));function m(e,t,n,o,a,s){const i=(0,c.up)("Head"),l=(0,c.up)("vue-progress-bar"),r=(0,c.up)("router-view"),d=(0,c.up)("the-header"),u=(0,c.up)("Sidebar"),m=(0,c.up)("go-top"),g=(0,c.up)("changelog"),_=(0,c.Q2)("touch");return(0,c.wg)(),(0,c.iD)("div",null,[(0,c.Wm)(i,null,{default:(0,c.w5)((()=>[p])),_:1}),(0,c.Wm)(l),(0,c.wy)(((0,c.wg)(),(0,c.iD)("div",null,[(0,c._)("div",null,[(0,c.Wm)(d,{"is-min-mode":e.isMinMode,"open-sidebar":()=>e.setShowSidebar(!0)},{default:(0,c.w5)((()=>[h,(0,c.Wm)(r)])),_:1},8,["is-min-mode","open-sidebar"]),e.isMinMode?((0,c.wg)(),(0,c.j4)(u,{key:0,open:e.sidebarIsOpen,"onUpdate:open":t[0]||(t[0]=t=>e.sidebarIsOpen=t),"swipe-handler":e.swipeHandler},null,8,["open","swipe-handler"])):(0,c.kq)("",!0)])])),[[_,e.swipeHandler,"swipe"]]),(0,c.Wm)(m),(0,c.Wm)(g,{"is-open":e.changelogIsOpen,onClose:e.changelogOnClose},null,8,["is-open","onClose"])])}var g=n(2262),_=n(21232);const S=e=>((0,c.dD)("data-v-64d51f0a"),e=e(),(0,c.Cn)(),e),f=S((()=>(0,c._)("div",{class:"icon"},null,-1))),b=[f];function v(e,t,n,a,s,i){return(0,c.wg)(),(0,c.j4)(o.uT,null,{default:(0,c.w5)((()=>[s.show?((0,c.wg)(),(0,c.iD)("div",{key:0,class:"btn",onClick:t[0]||(t[0]=(...e)=>i.scrollToTop&&i.scrollToTop(...e))},b)):(0,c.kq)("",!0)])),_:1})}var w=n(91296),C=n.n(w);const E={data(){return{show:!1}},created(){this.hide=C()((()=>this.show=!1),4e3)},mounted(){document.addEventListener("scroll",this.scroll)},unmounted(){document.removeEventListener("scroll",this.scroll)},methods:{scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})},scroll(){const e=window.scrollY>300;this.show!=e&&(this.show=e,this.hide())}}};var y=n(83744);const D=(0,y.Z)(E,[["render",v],["__scopeId","data-v-64d51f0a"]]),T=D,L=e=>((0,c.dD)("data-v-15822e8a"),e=e(),(0,c.Cn)(),e),O=L((()=>(0,c._)("div",{class:"offset"},null,-1))),I={class:"header"},A={class:"buttons"},M={class:"logo"},k=L((()=>(0,c._)("div",{class:"image"},null,-1)));function N(e,t,n,o,a,s){const i=(0,c.up)("navigation"),l=(0,c.up)("settings"),r=(0,c.up)("router-link");return(0,c.wg)(),(0,c.iD)("div",null,[O,(0,c.WI)(e.$slots,"default",{},void 0,!0),(0,c._)("header",I,[(0,c._)("div",A,[n.isMinMode?((0,c.wg)(),(0,c.iD)("div",{key:0,class:"sidebar",onClick:t[0]||(t[0]=(...e)=>n.openSidebar&&n.openSidebar(...e))})):((0,c.wg)(),(0,c.iD)(c.HY,{key:1},[(0,c.Wm)(i),(0,c.Wm)(l)],64))]),(0,c._)("div",M,[(0,c.Wm)(r,{to:"/"},{default:(0,c.w5)((()=>[k])),_:1})])])])}var P=n(3577);const R=e=>((0,c.dD)("data-v-1ad2e428"),e=e(),(0,c.Cn)(),e),x={class:"container"},K={class:"sections"},U=["onClick"],H=R((()=>(0,c._)("div",{class:"icon"},null,-1))),G={class:"name"},W={class:"name"},B=["href"],Z={class:"name"};function j(e,t,n,a,s,i){const l=(0,c.up)("router-link"),r=(0,c.Q2)("click-outside");return(0,c.wg)(),(0,c.iD)("nav",x,[(0,c.wy)(((0,c.wg)(),(0,c.iD)("ul",K,[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(s.sections,((t,n)=>((0,c.wg)(),(0,c.iD)("li",{key:n,class:"section",onClick:()=>i.select(n)},[(0,c._)("div",null,[(0,c._)("div",{class:(0,P.C_)({selected:s.selected==n})},[H,(0,c._)("h2",G,(0,P.zw)(e.$te(t.text.locKey)?e.$t(t.text.locKey):""),1)],2),(0,c.Wm)(o.W3,{name:"list",tag:"ul",class:"list",style:(0,P.j5)({"--total":t.children.length})},{default:(0,c.w5)((()=>[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(s.selected===n?t.children:[],((t,n)=>((0,c.wg)(),(0,c.iD)("li",{key:n,style:(0,P.j5)({"--i":n+1})},["router"==t.link.type?((0,c.wg)(),(0,c.j4)(l,{key:0,to:t.link.path},{default:(0,c.w5)((()=>[(0,c._)("h2",W,(0,P.zw)(e.$t(t.text.locKey,t.text.params)),1)])),_:2},1032,["to"])):(0,c.kq)("",!0),"external"==t.link.type?((0,c.wg)(),(0,c.iD)("a",{key:1,href:t.link.path,target:"_blank"},[(0,c._)("h2",Z,(0,P.zw)(e.$t(t.text.locKey,t.text.params)),1)],8,B)):(0,c.kq)("",!0)],4)))),128))])),_:2},1032,["style"])])],8,U)))),128))])),[[r,()=>i.select(null)]])])}const $={name:"Navigation",data(){return{sections:(0,s.U)(),selected:null}},created(){this.$router.afterEach((()=>{this.select(null)}))},methods:{select(e){this.selected!==e?this.selected=e:this.selected=null}}},F=(0,y.Z)($,[["render",j],["__scopeId","data-v-1ad2e428"]]),z=F,V=e=>((0,c.dD)("data-v-2cc9f52d"),e=e(),(0,c.Cn)(),e),Y=V((()=>(0,c._)("div",{class:"icon"},null,-1))),q=V((()=>(0,c._)("span",{class:"name"},"Settings",-1))),J=[Y,q],Q={class:"select"},X={class:"name"},ee=["value"],te={class:"switch"},ne=V((()=>(0,c._)("div",null,[(0,c._)("p",{class:"name"}," Disable filters "),(0,c._)("p",{class:"description"},"Disable all characteristic filters used to hide unimportant information")],-1))),oe=["checked"],ae=V((()=>(0,c._)("label",{for:"disable-filters",class:"label"},null,-1))),se={key:0,class:"switch"},ie=V((()=>(0,c._)("div",null,[(0,c._)("p",{class:"name"}," [Debug] Show keys "),(0,c._)("p",{class:"description"})],-1))),le=["checked"],re=V((()=>(0,c._)("label",{for:"show-keys",class:"label"},null,-1)));function de(e,t,n,a,s,i){const l=(0,c.up)("Modal"),r=(0,c.up)("changelog");return(0,c.wg)(),(0,c.iD)("div",null,[(0,c._)("div",{class:"button",onClick:t[0]||(t[0]=e=>s.isOpenModal=!0)},J),(0,c.Wm)(l,{open:s.isOpenModal,"onUpdate:open":t[6]||(t[6]=e=>s.isOpenModal=e),title:e.$te("TID_SETTINGS_DLG_LANGUAGE")?e.$t("TID_SETTINGS_DLG_TITLE"):""},{body:(0,c.w5)((()=>[(0,c._)("div",Q,[(0,c._)("p",X,(0,P.zw)(e.$t("TID_SETTINGS_DLG_LANGUAGE")),1),(0,c.wy)((0,c._)("select",{"onUpdate:modelValue":t[1]||(t[1]=e=>s.languageCode=e),onChange:t[2]||(t[2]=(...e)=>i.changeLanguage&&i.changeLanguage(...e))},[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(s.languages,(e=>((0,c.wg)(),(0,c.iD)("option",{key:e.Code,value:e.Code},(0,P.zw)(e.Name),9,ee)))),128))],544),[[o.bM,s.languageCode]])]),(0,c._)("div",te,[ne,(0,c._)("input",{id:"disable-filters",class:"checkbox",type:"checkbox",checked:e.$store.state.userSettings.disableFilters,onChange:t[3]||(t[3]=(...e)=>i.switchDisableFilters&&i.switchDisableFilters(...e))},null,40,oe),ae]),s.isDebug?((0,c.wg)(),(0,c.iD)("div",se,[ie,(0,c._)("input",{id:"show-keys",class:"checkbox",type:"checkbox",checked:e.$store.state.userSettings.showKeys,onChange:t[4]||(t[4]=(...e)=>i.switchShowKeys&&i.switchShowKeys(...e))},null,40,le),re])):(0,c.kq)("",!0),(0,c._)("div",{class:"button",onClick:t[5]||(t[5]=e=>s.showChangelog=!0)},(0,P.zw)(e.$t("OPEN_CHANGELOG")),1)])),_:1},8,["open","title"]),(0,c.Wm)(r,{"is-open":s.showChangelog,title:"",onClose:t[7]||(t[7]=e=>s.showChangelog=!1)},null,8,["is-open"])])}var ce=n(36282);const ue={class:"ver"};function pe(e,t,n,o,a,s){const i=(0,c.up)("vue-markdown"),l=(0,c.up)("Modal");return(0,c.wg)(),(0,c.j4)(l,{open:e.isOpen,size:e.modalSize,title:e.titleKey?e.$t(e.titleKey):null,"onUpdate:open":t[0]||(t[0]=t=>e.$emit("close"))},{body:(0,c.w5)((()=>[(0,c._)("p",ue,(0,P.zw)(e.$t("CURRENT_VERSION"))+": "+(0,P.zw)(e.version),1),(0,c.Wm)(i,{source:e.text,class:"content"},null,8,["source"])])),_:1},8,["open","size","title"])}var he=n(48532);const me=(0,c.aZ)({name:"Changelog",components:{VueMarkdown:he.Z,Modal:ce.Z},props:{isOpen:{type:Boolean,required:!0},titleKey:{type:String,default:"UPDATED"}},emits:["close"],setup(){return{text:(0,g.iH)(""),modalSize:ce.z.LARGE,version:"3.2.0"}},mounted(){n.e(782).then(n.bind(n,95782)).then((e=>this.text=e.default))}}),ge=(0,y.Z)(me,[["render",pe],["__scopeId","data-v-738ca78d"]]),_e=ge;var Se=n(31303),fe=n(1986);const be={name:"Settings",components:{Changelog:_e,Modal:ce.Z},data(){return{isOpenModal:!1,showChangelog:!1,languages:fe.Z,languageCode:this.$store.state.userSettings.language,isDebug:!1}},methods:{changeLanguage(){this.$store.commit(Se.Z.SET_LANGUAGE,this.languageCode)},switchDisableFilters(){this.$store.commit(Se.Z.SWITCH_DISABLE_FILTERS)},switchShowKeys(){this.$store.commit(Se.Z.DEBUG_SWITCH_SHOW_KEYS)}}},ve=(0,y.Z)(be,[["render",de],["__scopeId","data-v-2cc9f52d"]]),we=ve,Ce={name:"Header",components:{Navigation:z,Settings:we},props:{isMinMode:{type:Boolean,requested:!0,default:null},openSidebar:{type:Function,requested:!0,default:null}}},Ee=(0,y.Z)(Ce,[["render",N],["__scopeId","data-v-15822e8a"]]),ye=Ee,De={key:0,class:"sidebar"};function Te(e,t){const n=(0,c.up)("navigation"),a=(0,c.up)("settings"),s=(0,c.up)("modal"),i=(0,c.Q2)("touch");return(0,c.wg)(),(0,c.j4)(s,{open:e.propModel,"onUpdate:open":t[0]||(t[0]=t=>e.propModel=t)},{default:(0,c.w5)((()=>[(0,c.Wm)(o.uT,null,{default:(0,c.w5)((()=>[e.open?(0,c.wy)(((0,c.wg)(),(0,c.iD)("div",De,[(0,c.Wm)(n),(0,c.Wm)(a)])),[[i,e.swipeHandler,"swipe"]]):(0,c.kq)("",!0)])),_:1})])),_:1},8,["open"])}const Le=(0,c.aZ)({name:"Sidebar",components:{Navigation:z,Settings:we,Modal:ce.Z},props:{open:Boolean,swipeHandler:{type:Function,default:void 0}},emits:["update:open"],computed:{propModel:{get(){return this.open},set(e){this.$emit("update:open",e)}}}}),Oe=(0,y.Z)(Le,[["render",Te],["__scopeId","data-v-2486165b"]]),Ie=Oe,Ae=60;function Me(e){const t=(0,g.iH)(!1),n=(0,g.iH)(window.innerWidth*Ae/100);return{setShow:a,swipeHandler:s,onResize:o,isOpen:t};function o(){n.value=window.innerWidth*Ae/100,e||a(!1)}function a(e){t.value=e}function s(t,o){window.TouchEvent&&"touchend"===o.type&&("right"===t&&e&&o.changedTouches[0].clientX<=n.value&&a(!0),"left"===t&&a(!1))}}const{VERSION:ke}={NODE_ENV:"production",BASE_URL:"/HadesSpace/",VERSION:"3.2.0"};function Ne(){const e=(0,g.iH)(!1);return{isOpen:e,init:t,onClose:o,version:ke};function t(){n()&&l.afterEach((()=>{e.value=!0}))}function n(){const e=e=>e.split(/\./g).slice(0,-1),t=e(ke),n=e(d.Z.state.userSettings.lastVersionChangelog);while(t.length||n.length){const e=Number(t.shift()),o=Number(n.shift());if(e!==o)return e>o||isNaN(o)}return!1}function o(){d.Z.commit(Se.Z.SET_LAST_CHECKED_VERSION_CHANGELOG,ke),e.value=!1}}const Pe=1e3,Re=(0,c.aZ)({name:"App",components:{Head:_.Fb,Changelog:_e,GoTop:T,TheHeader:ye,Sidebar:Ie},setup(){const e=(0,g.iH)(window.innerWidth<Pe),{setShow:t,swipeHandler:n,onResize:o,isOpen:a}=Me(e),{isOpen:s,init:i,onClose:l}=Ne();return{isMinMode:e,setShowSidebar:t,sidebarIsOpen:a,swipeHandler:n,onResize:o,changelogIsOpen:s,initChangelog:i,changelogOnClose:l}},mounted(){window.addEventListener("resize",this.resize),this.$Progress.finish(),this.initChangelog()},unmounted(){window.removeEventListener("resize",this.resize)},created(){this.progressBar(),this.$router.beforeEach((()=>{this.setShowSidebar(!1)}))},methods:{progressBar(){this.$Progress.start(),this.$router.beforeEach((async(e,t,n)=>{e.path!==t.path&&(this.$Progress.start(),this.$Progress.set(30)),n()})),this.$router.afterEach((async()=>{this.$Progress.finish()}))},resize(){this.isMinMode=window.innerWidth<Pe,this.onResize()}}}),xe=(0,y.Z)(Re,[["render",m],["__scopeId","data-v-5880ec45"]]),Ke=xe;var Ue=n(74366),He=n.n(Ue),Ge=n(67398),We=n(84032);const Be={VueProgressBar:{color:"#aee3fc",failedColor:"#ff4646",thickness:"3px",transition:{speed:"0.2s",opacity:"0.2s",termination:300},autoRevert:!0,location:"top",inverse:!1},VueGtag:{config:{id:"G-Q3X19N7LEN"}}},Ze={beforeMount(e,t){const n=n=>{e.contains(n.target)||e===n.target||t.value(n)};e.__vueClickEventHandler__=n,document.addEventListener("click",n)},unmounted(e){document.removeEventListener("click",e.__vueClickEventHandler__)}};var je=n(95205);(0,je.z)("/HadesSpace/service-worker.js",{ready(){console.log("App is being served from cache by a service worker. \nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh."),window.location.reload()},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}}),(0,o.ri)(Ke).use((0,_.G6)()).use(He(),Be.VueProgressBar).use(Ge.ZP,Be.VueGtag,l).use(We.Z).directive("click-outside",Ze).use(r.ZP).use(l).use(d.Z).mount("#app")},51578:(e,t,n)=>{"use strict";n.d(t,{Z:()=>C});var o=n(33907),a=n(34919),s=n(31303),i=n(1986),l=n(15925);const r="settings",d=Object.values(i.Z).map((e=>e.Code)),c="en",u=S(r),p=window.navigator.language.slice(0,2),h=!1,m={[s.Z.SET_LANGUAGE](e,t){return e.language=t,_(r,e),(0,l.g)(t)},[s.Z.SWITCH_DISABLE_FILTERS](e){return e.disableFilters=!e.disableFilters,_(r,e),e.disableFilters},[s.Z.DEBUG_SWITCH_SHOW_KEYS](e){return e.showKeys=!e.showKeys,_(r,e),e.showKeys},[s.Z.SET_LAST_CHECKED_VERSION_CHANGELOG](e,t){return e.lastVersionChangelog=t,_(r,e),e.lastVersionChangelog}},g={namespaced:!1,strict:h,state:{language:u.language||(p in d?p:c),disableFilters:u.disableFilters,showKeys:u.showKeys,lastVersionChangelog:u.lastVersionChangelog},mutations:m};function _(e,t){localStorage.setItem(e,JSON.stringify(t))}function S(e){let t={language:c,disableFilters:!1,showKeys:!1,lastVersionChangelog:"0.0.0"};if(localStorage.getItem(e))try{t={...t,...JSON.parse(localStorage.getItem(e)||"{}")}}catch(n){console.error(n),localStorage.removeItem(e)}return t}const f=!1,b={modals:[]},v={[a.Z.MODAL_OPEN](e,t){e.modals.push(t)},[a.Z.MODAL_CLOSE](e,t){const n=e.modals.indexOf(t);-1!=n&&e.modals.splice(n,1)}},w={[a.Z.MODAL_OPEN]({state:e,commit:t}){const n=e.modals.length+1;return t(a.Z.MODAL_OPEN,n),n},[a.Z.MODAL_CLOSE]({commit:e},t){e(a.Z.MODAL_CLOSE,t)}},C=(0,o.MT)({strict:f,state:b,mutations:v,actions:w,modules:{userSettings:g}})},31303:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=Object.freeze({SET_LANGUAGE:"SetLanguage",SWITCH_DISABLE_FILTERS:"SwitchDisableFilters",DEBUG_SWITCH_SHOW_KEYS:"DebugSwitchShowKeys",SET_LAST_CHECKED_VERSION_CHANGELOG:"SetLastCheckedVersionChangelog"})},34919:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=Object.freeze({MODAL_OPEN:"ModalOpen",MODAL_CLOSE:"ModalClose"})},36282:(e,t,n)=>{"use strict";n.d(t,{z:()=>u,Z:()=>g});var o=n(66252),a=n(49963),s=n(3577);const i={key:0,class:"content-wrapper fixed"},l={class:"head"},r={class:"body"};function d(e,t,n,d,c,u){return(0,o.wg)(),(0,o.iD)("div",null,[((0,o.wg)(),(0,o.j4)(o.lR,{disabled:!u.modalActive,to:"#modals"},[(0,o.Wm)(a.uT,{name:"background"},{default:(0,o.w5)((()=>[u.modalActive?((0,o.wg)(),(0,o.iD)("div",{key:0,class:"background fixed",onClick:t[0]||(t[0]=(...e)=>u.onClose&&u.onClose(...e))})):(0,o.kq)("",!0)])),_:1})],8,["disabled"])),((0,o.wg)(),(0,o.j4)(o.lR,{disabled:!u.modalActive,to:"#modals"},[(0,o.WI)(e.$slots,"default",{},(()=>[(0,o.Wm)(a.uT,{name:"content-wrapper"},{default:(0,o.w5)((()=>[u.modalActive?((0,o.wg)(),(0,o.iD)("div",i,[(0,o._)("div",{class:(0,s.C_)(["content",`size-${n.size}`])},[(0,o._)("div",l,[(0,o._)("div",{class:"close-button",onClick:t[1]||(t[1]=(...e)=>u.onClose&&u.onClose(...e))}),(0,o.WI)(e.$slots,"head",{},(()=>[(0,o._)("h2",null,(0,s.zw)(n.title),1)]),!0)]),(0,o._)("div",r,[(0,o.WI)(e.$slots,"body",{},void 0,!0)])],2)])):(0,o.kq)("",!0)])),_:3})]),!0)],8,["disabled"]))])}var c=n(34919);const u={SMALL:"small",MEDIUM:"medium",LARGE:"large"},p={name:"Modal",props:{size:{type:String,default:u.MEDIUM},title:{type:String,default:void 0},open:Boolean},emits:["update:open"],data(){return{modalKey:0}},computed:{modalActive(){return this.open&&this.$store.state.modals.at(-1)==this.modalKey}},watch:{open(){this.open?this.$store.dispatch(c.Z.MODAL_OPEN).then((e=>{this.modalKey=e})):this.$store.dispatch(c.Z.MODAL_CLOSE,this.modalKey)}},unmounted(){this.$store.dispatch(c.Z.MODAL_CLOSE,this.modalKey)},created(){this.$router.beforeResolve((()=>{if(this.modalActive)return this.onClose(),!1}))},methods:{onClose(){this.$emit("update:open",!1)}}};var h=n(83744);const m=(0,h.Z)(p,[["render",d],["__scopeId","data-v-44932565"]]),g=m},1986:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o={English:{Name:"English",Code:"en",UnityLocale:"english",SteamLocale:"english",SteamCode:"en"},Français:{Name:"Français",Code:"fr",UnityLocale:"french",SteamLocale:"french",SteamCode:"fr"},Deutsch:{Name:"Deutsch",Code:"de",UnityLocale:"german",SteamLocale:"german",SteamCode:"de"},Español:{Name:"Español",Code:"es",UnityLocale:"spanish",SteamLocale:"spanish",SteamCode:"es"},Italiano:{Name:"Italiano",Code:"it",UnityLocale:"italian",SteamLocale:"italian",SteamCode:"it"},Pусский:{Name:"Pусский",Code:"ru",UnityLocale:"russian",SteamLocale:"russian",SteamCode:"ru"},Português:{Name:"Português",Code:"pt",UnityLocale:"portuguese",SteamLocale:"portuguese",SteamCode:"pt"},한국어:{Name:"한국어",Code:"ko",UnityLocale:"korean",SteamLocale:"koreana",SteamCode:"ko"},日本語:{Name:"日本語",Code:"jp",UnityLocale:"japanese",SteamLocale:"japanese",SteamCode:"ja"},简体中文:{Name:"简体中文",Code:"zh-si",UnityLocale:"chinese",SteamLocale:"schinese",SteamCode:"zh-CN"}}}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,n),s.exports}n.m=e,(()=>{var e=[];n.O=(t,o,a,s)=>{if(!o){var i=1/0;for(c=0;c<e.length;c++){for(var[o,a,s]=e[c],l=!0,r=0;r<o.length;r++)(!1&s||i>=s)&&Object.keys(n.O).every((e=>n.O[e](o[r])))?o.splice(r--,1):(l=!1,s<i&&(i=s));if(l){e.splice(c--,1);var d=a();void 0!==d&&(t=d)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[o,a,s]}})(),(()=>{n.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return n.d(t,{a:t}),t}})(),(()=>{n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,o)=>(n.f[o](e,t),t)),[]))})(),(()=>{n.u=e=>"js/"+({65:"RedStar",74:"About",142:"SpaceBuildings",177:"Drone",261:"BlueStar",362:"Cerberus",406:"Ships",530:"PlanetsCalc",607:"Achievements",626:"AllianceLevels",636:"PlayerGoals",662:"Shield",670:"WhiteStar",677:"Support",683:"Trade",726:"Index",749:"Weapon",752:"ModulesCalc",790:"YellowStar",837:"Mining",934:"DarkRedStar"}[e]||e)+"."+{22:"fd15fc3f",65:"7cbf6d24",74:"b96a83fc",85:"633a87c8",142:"9d2e1e40",177:"06ae60ec",261:"dd59111b",275:"cb59b04c",335:"cf5efdf3",362:"a4dea04f",383:"d2a1630d",398:"4a1fdd71",406:"45d29c60",410:"98bc6684",445:"cc20613d",449:"6413f330",454:"6c37e6db",471:"2dcb17e9",506:"28ef1281",530:"bb7a384a",607:"6a570056",626:"85eb2616",636:"07368563",662:"cc78e808",670:"295a226a",677:"f64461a5",683:"b86bd1c6",707:"9f16f0a2",708:"4763abda",726:"c416bb51",749:"e3fbc772",752:"38c0c5e4",782:"599448b5",790:"61d357b9",837:"20b1ef91",891:"74793d86",934:"b4305903",955:"1e4fdd79"}[e]+".js"})(),(()=>{n.miniCssF=e=>"css/"+({65:"RedStar",74:"About",142:"SpaceBuildings",177:"Drone",261:"BlueStar",362:"Cerberus",406:"Ships",530:"PlanetsCalc",607:"Achievements",626:"AllianceLevels",636:"PlayerGoals",662:"Shield",670:"WhiteStar",677:"Support",683:"Trade",726:"Index",749:"Weapon",752:"ModulesCalc",790:"YellowStar",837:"Mining",934:"DarkRedStar"}[e]||e)+"."+{22:"111b4335",65:"f113a4a7",74:"0ffbb70d",142:"fa01bd27",177:"fa01bd27",261:"fa01bd27",362:"7a8b891e",406:"6ccbe969",449:"2b422f08",471:"236bd5b0",530:"c90d211d",607:"fa01bd27",626:"fa01bd27",636:"fa01bd27",662:"fa01bd27",670:"31d0d777",677:"fa01bd27",683:"fa01bd27",726:"a34217a2",749:"fa01bd27",752:"708d0964",790:"31fedb75",837:"fa01bd27",934:"126837d2"}[e]+".css"})(),(()=>{n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="hades-space:";n.l=(o,a,s,i)=>{if(e[o])e[o].push(a);else{var l,r;if(void 0!==s)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var u=d[c];if(u.getAttribute("src")==o||u.getAttribute("data-webpack")==t+s){l=u;break}}l||(r=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+s),l.src=o),e[o]=[a];var p=(t,n)=>{l.onerror=l.onload=null,clearTimeout(h);var a=e[o];if(delete e[o],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((e=>e(n))),t)return t(n)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),r&&document.head.appendChild(l)}}})(),(()=>{n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{n.p="/HadesSpace/"})(),(()=>{var e=(e,t,n,o)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var s=s=>{if(a.onerror=a.onload=null,"load"===s.type)n();else{var i=s&&("load"===s.type?"missing":s.type),l=s&&s.target&&s.target.href||t,r=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");r.code="CSS_CHUNK_LOAD_FAILED",r.type=i,r.request=l,a.parentNode.removeChild(a),o(r)}};return a.onerror=a.onload=s,a.href=t,document.head.appendChild(a),a},t=(e,t)=>{for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var a=n[o],s=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(s===e||s===t))return a}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){a=i[o],s=a.getAttribute("data-href");if(s===e||s===t)return a}},o=o=>new Promise(((a,s)=>{var i=n.miniCssF(o),l=n.p+i;if(t(i,l))return a();e(o,l,a,s)})),a={143:0};n.f.miniCss=(e,t)=>{var n={22:1,65:1,74:1,142:1,177:1,261:1,362:1,406:1,449:1,471:1,530:1,607:1,626:1,636:1,662:1,670:1,677:1,683:1,726:1,749:1,752:1,790:1,837:1,934:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=o(e).then((()=>{a[e]=0}),(t=>{throw delete a[e],t})))}})(),(()=>{var e={143:0};n.f.j=(t,o)=>{var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)o.push(a[2]);else{var s=new Promise(((n,o)=>a=e[t]=[n,o]));o.push(a[2]=s);var i=n.p+n.u(t),l=new Error,r=o=>{if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var s=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;l.message="Loading chunk "+t+" failed.\n("+s+": "+i+")",l.name="ChunkLoadError",l.type=s,l.request=i,a[1](l)}};n.l(i,r,"chunk-"+t,t)}},n.O.j=t=>0===e[t];var t=(t,o)=>{var a,s,[i,l,r]=o,d=0;if(i.some((t=>0!==e[t]))){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(r)var c=r(n)}for(t&&t(o);d<i.length;d++)s=i[d],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(c)},o=self["webpackChunkhades_space"]=self["webpackChunkhades_space"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=n.O(void 0,[998],(()=>n(20957)));o=n.O(o)})();