"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7427],{22690:function(e,a,t){t.d(a,{Z:function(){return d}});var n=t(74165),s=t(67855),r=t(15861),l=t(67294);function o(e){var a=e.className,t=e.path,n=e.imgSrc,s=e.text,r=e.gameID;return l.createElement("li",{className:a},l.createElement("a",{href:t},l.createElement("span",{className:"game-info"},l.createElement("img",{src:n})," ",s),l.createElement("span",{className:"game-id"},"Game ID: ",l.createElement("span",null,r))))}var i=function(e){var a=function(e){return e.map((function(e){var a="game ";switch(e.state){case 1:a+="good";break;case 2:a+="medium";break;case 3:a+="bad"}return l.createElement(o,{key:e.id,gameID:e.displayId?e.displayId:e.id,className:a,path:e.path,imgSrc:e.iconUrl,text:e.name})}))}(e.gameListData);return a.sort((function(e,a){return e.props.text<a.props.text?-1:1})),l.createElement("article",null,l.createElement("div",{className:"gep-games-list"},l.createElement("ul",{className:"legend"},l.createElement("li",{className:"good"},"Good to go"),l.createElement("li",{className:"medium"},"Some game events may be unavailable"),l.createElement("li",{className:"bad"},"Game events are currently unavailable")),l.createElement("ul",{className:"list"},a)))},g=t(62517),m=t(5240);function c(e){return l.createElement("form",{role:"search",method:"get",className:"search-game",action:"#",autoComplete:"off",onSubmit:function(e){e.preventDefault()}},l.createElement("input",{type:"search",name:"search",className:"search-input",placeholder:"Search for game events, e.g. \u201ckill\u201d",onKeyUp:function(e){!function(e){var a=e.target,t=document.querySelectorAll(".game-data ul li"),n=a.value.toLowerCase();0===n.length?t.forEach((function(e){return e.removeAttribute("style")})):t.forEach((function(e){e.textContent.toLowerCase().includes(n)?e.removeAttribute("style"):e.style.display="none"}))}(e)}}),l.createElement("button",{type:"submit",className:"search-submit",title:"Search"},l.createElement("svg",{className:"games-icon"},l.createElement("use",{href:"../../img/sprite.svg#searchIcon"}))))}var u=function(e){var a=e.gameStatusData,t=e.gameID,n=(e.docsPath,function(e){if(!a.features||0===a.features.length)return l.createElement("li",{className:"coming-soon"},"Coming soon");for(var t,n=0,r=[],o=(0,s.Z)(a.features);!(t=o()).done;)for(var i,g=t.value,c=(0,s.Z)(g.keys);!(i=c()).done;){var u=i.value;u.type==e&&r.push(l.createElement("li",{className:(0,m.F)(u.state),key:n++},u.name))}return r}),r=n(0),o=n(1);return l.createElement("article",null,l.createElement("div",{className:"entry-content"},l.createElement("div",{className:"gep-game"},l.createElement(g.Z,{gameID:t,showStatus:!1}),l.createElement(c,null),l.createElement("div",{className:"game-events-info"},l.createElement("div",{className:"game-data"},l.createElement("h4",null,"Events"),l.createElement("ul",null,r)),l.createElement("div",{className:"game-data"},l.createElement("h4",null,"Info updates"),l.createElement("ul",null,o))))))},p=t(66410);var d=function(e){var a=e.allGames,t=e.specificGame,o=e.gameID,g=e.docsPath,m=e.onlyGames,c=void 0!==m&&m,d=e.onlyLaunchers,h=void 0!==d&&d,f=(0,l.useState)(null),v=f[0],E=f[1],w=(0,l.useState)(null),U=w[0],b=w[1];return(0,l.useEffect)((function(){if(a){function e(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://game-events-status.overwolf.com/all_prod.json").then((function(e){return e.json()})).then((function(e){for(var a,t=[],n=(0,s.Z)(e);!(a=n()).done;){var r=a.value;0!=r.state&&(p.z[r.game_id]&&(c&&p.z[r.game_id].launcher||h&&!p.z[r.game_id].launcher||(p.z[r.game_id].state=r.state,t.push(p.z[r.game_id]))))}E(t)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e()}if(t){function i(){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://game-events-status.overwolf.com/"+o+"_prod.json").then((function(e){return e.json()})).then((function(e){return b(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i()}}),[]),l.createElement(l.Fragment,null,a&&null!=v&&l.createElement(i,{gameListData:v}),t&&null!=U&&l.createElement(u,{gameStatusData:U,gameID:o,docsPath:g}))}},5240:function(e,a,t){t.d(a,{F:function(){return n}});var n=function(e){var a="";switch(e){case 1:a="good";break;case 2:a="medium";break;case 3:a="bad"}return a}},66410:function(e,a,t){t.d(a,{z:function(){return n}});var n={21566:{id:21566,path:"/status/apex-legends",docs:"/api/games/events/apex-legends",iconUrl:"/img/games-logos/apex-legends.png",iconLargeUrl:"/img/games-logos/large/apex-legends.png",name:"Apex Legends"},21960:{id:21960,path:"/status/axie-infinity-origin",docs:"/api/games/events/axie-infinity-origin",iconUrl:"/img/games-logos/axie-infinity-origin.png",iconLargeUrl:"/img/games-logos/large/axie-infinity-origin.png",name:"Axie Infinity Origin"},21876:{id:21876,path:"/status/call-of-duty-vanguard",docs:"/api/games/events/call-of-duty-vanguard",iconUrl:"/img/games-logos/call-of-duty-vanguard.png",iconLargeUrl:"/img/games-logos/large/call-of-duty-vanguard.png",name:"Call of Duty: Vanguard"},21626:{id:21626,path:"/status/call-of-duty-warzone",compliance:"/start/game-compliance/call-of-duty-warzone",docs:"/api/games/events/call-of-duty-warzone",iconUrl:"/img/games-logos/call-of-duty-warzone.png",iconLargeUrl:"/img/games-logos/large/call-of-duty-warzone.png",name:"Call of Duty: Warzone"},7764:{id:7764,path:"/status/counter-strike-global-offensive",docs:"/api/games/events/counter-strike-global-offensive",iconUrl:"/img/games-logos/counter-strike-global-offensive.png",iconLargeUrl:"/img/games-logos/large/counter-strike-global-offensive.png",name:"Counter-Strike: Global Offensive"},21848:{id:21848,path:"/status/diablo-2-resurrected",docs:"/api/games/events/diablo-2-resurrected",iconUrl:"/img/games-logos/diablo-2-resurrected.png",iconLargeUrl:"/img/games-logos/large/diablo-2-resurrected.png",name:"Diablo 2 Resurrected"},7314:{id:7314,path:"/status/dota-2",docs:"/api/games/events/dota-2",iconUrl:"/img/games-logos/dota-2.png",iconLargeUrl:"/img/games-logos/large/dota-2.png",name:"Dota 2"},21586:{id:21586,path:"/status/dota-underlords",docs:"/api/games/events/dota-underlords",iconUrl:"/img/games-logos/dota-underlords.png",iconLargeUrl:"/img/games-logos/large/dota-underlords.png",name:"Dota Underlords"},21634:{id:21634,path:"/status/escape-from-tarkov",docs:"/api/games/events/escape-from-tarkov",iconUrl:"/img/games-logos/escape-from-tarkov.png",iconLargeUrl:"/img/games-logos/large/escape-from-tarkov.png",name:"Escape From Tarkov"},21672:{id:21672,path:"/status/eternal-return",docs:"/api/games/events/eternal-return",iconUrl:"/img/games-logos/eternal-return.png",iconLargeUrl:"/img/games-logos/large/eternal-return.png",name:"Eternal Return"},6350:{id:6350,path:"/status/final-fantasy-xiv",docs:"/api/games/events/final-fantasy-xiv",iconUrl:"/img/games-logos/final-fantasy-xiv.png",iconLargeUrl:"/img/games-logos/large/final-fantasy-xiv.png",name:"Final Fantasy XIV"},21666:{id:21666,path:"/status/football-manager-2021",docs:"/api/games/events/football-manager-2021",iconUrl:"/img/games-logos/football-manager-2021.png",iconLargeUrl:"/img/games-logos/large/football-manager-2021.png",name:"Football Manager 2021"},21856:{id:21856,path:"/status/football-manager-2022",docs:"/api/games/events/football-manager-2022",iconUrl:"/img/games-logos/football-manager-2022.png",iconLargeUrl:"/img/games-logos/large/football-manager-2022.png",name:"Football Manager 2022"},21216:{id:21216,path:"/status/fortnite",docs:"/api/games/events/fortnite",iconUrl:"/img/games-logos/fortnite.png",iconLargeUrl:"/img/games-logos/large/fortnite.png",name:"Fortnite"},21854:{id:21854,path:"/status/halo-infinite",docs:"/api/games/events/halo-infinite",iconUrl:"/img/games-logos/halo-infinite.png",iconLargeUrl:"/img/games-logos/large/halo-infinite.png",name:"Halo Infinite"},9898:{id:9898,path:"/status/hearthstone",docs:"/api/games/events/hearthstone",iconUrl:"/img/games-logos/hearthstone.png",iconLargeUrl:"/img/games-logos/large/hearthstone.png",name:"Hearthstone"},10624:{id:10624,path:"/status/heroes-of-the-storm",docs:"/api/games/events/heroes-of-the-storm",iconUrl:"/img/games-logos/heroes-of-the-storm.png",iconLargeUrl:"/img/games-logos/large/heroes-of-the-storm.png",name:"Heroes of the Storm"},21328:{id:21328,path:"/status/hunt-showdown",docs:"/api/games/events/hunt-showdown",iconUrl:"/img/games-logos/hunt-showdown.png",iconLargeUrl:"/img/games-logos/large/hunt-showdown.png",name:"Hunt: Showdown"},5426:{id:5426,launcherID:10902,path:"/status/league-of-legends",docs:"/api/games/events/league-of-legends",iconUrl:"/img/games-logos/league-of-legends.png",iconLargeUrl:"/img/games-logos/large/league-of-legends.png",name:"League of Legends"},10902:{id:10902,path:"/status/launchers/league-of-legends",docs:"/api/games/launchers/events/league-of-legends",iconUrl:"/img/games-logos/launchers/league-of-legends.png",iconLargeUrl:"/img/games-logos/large/launchers/league-of-legends.png",name:"League of Legends Launcher",launcher:{games:[5426,21570,215701]}},21620:{id:21620,path:"/status/legends-of-runeterra",docs:"/api/games/events/legends-of-runeterra",iconUrl:"/img/games-logos/legends-of-runeterra.png",iconLargeUrl:"/img/games-logos/large/legends-of-runeterra.png",name:"Legends of Runeterra"},21308:{id:21308,path:"/status/magic-the-gathering-arena",docs:"/api/games/events/magic-the-gathering-arena",iconUrl:"/img/games-logos/magic-the-gathering-arena.png",iconLargeUrl:"/img/games-logos/large/magic-the-gathering-arena.png",name:"Magic: The Gathering Arena"},8032:{id:8032,path:"/status/minecraft",docs:"/api/games/events/minecraft",iconUrl:"/img/games-logos/minecraft.png",iconLargeUrl:"/img/games-logos/large/minecraft.png",name:"Minecraft"},21816:{id:21816,path:"/status/new-world",compliance:"/start/game-compliance/new-world",docs:"/api/games/events/new-world",iconUrl:"/img/games-logos/new-world.png",iconLargeUrl:"/img/games-logos/large/new-world.png",name:"New World"},10844:{id:10844,path:"/status/overwatch",docs:"/api/games/events/overwatch",iconUrl:"/img/games-logos/overwatch.png",iconLargeUrl:"/img/games-logos/large/overwatch.png",name:"Overwatch"},7212:{id:7212,path:"/status/path-of-exile",docs:"/api/games/events/path-of-exile",iconUrl:"/img/games-logos/path-of-exile.png",iconLargeUrl:"/img/games-logos/large/path-of-exile.png",name:"Path of Exile"},10906:{id:10906,path:"/status/player-unknowns-battlegrounds",docs:"/api/games/events/player-unknowns-battlegrounds",iconUrl:"/img/games-logos/player-unknowns-battlegrounds.png",iconLargeUrl:"/img/games-logos/large/player-unknowns-battlegrounds.png",name:"PlayerUnkown's Battlegrounds"},10826:{id:10826,path:"/status/rainbow-six-siege",compliance:"/start/game-compliance/rainbow-six-siege",docs:"/api/games/events/rainbow-six-siege",iconUrl:"/img/games-logos/rainbow-six-siege.png",iconLargeUrl:"/img/games-logos/large/rainbow-six-siege.png",name:"Rainbow Six Siege"},10798:{id:10798,path:"/status/rocket-league",docs:"/api/games/events/rocket-league",iconUrl:"/img/games-logos/rocket-league.png",iconLargeUrl:"/img/games-logos/large/rocket-league.png",name:"Rocket League"},21404:{id:21404,path:"/status/splitgate-arena-warfare",docs:"/api/games/events/splitgate-arena-warfare",iconUrl:"/img/games-logos/splitgate-arena-warfare.png",iconLargeUrl:"/img/games-logos/large/splitgate-arena-warfare.png",name:"Splitgate: Arena Warfare"},5855:{id:5855,path:"/status/starcraft-2",docs:"/api/games/events/starcraft-2",iconUrl:"/img/games-logos/starcraft-2.png",iconLargeUrl:"/img/games-logos/large/starcraft-2.png",name:"StarCraft II"},21570:{id:21570,displayId:5426,launcherID:10902,mainVariant:215701,path:"/status/teamfight-tactics",docs:"/api/games/events/teamfight-tactics",iconUrl:"/img/games-logos/teamfight-tactics.png",iconLargeUrl:"/img/games-logos/large/teamfight-tactics.png",name:"Teamfight Tactics"},215701:{id:215701,displayId:5426,launcherID:10902,subVariant:21570,path:"/status/teamfight-tactics-public-beta",docs:"/api/games/events/teamfight-tactics-public-beta",iconUrl:"/img/games-logos/teamfight-tactics-public-beta.png",iconLargeUrl:"/img/games-logos/large/teamfight-tactics-public-beta.png",name:"Teamfight Tactics PBE"},21668:{id:21668,path:"/status/valheim",docs:"/api/games/events/valheim",iconUrl:"/img/games-logos/valheim.png",iconLargeUrl:"/img/games-logos/large/valheim.png",name:"Valheim"},21640:{id:21640,path:"/status/valorant",docs:"/api/games/events/valorant",iconUrl:"/img/games-logos/valorant.png",iconLargeUrl:"/img/games-logos/large/valorant.png",name:"Valorant"},8954:{id:8954,path:"/status/warframe",docs:"/api/games/events/warframe",iconUrl:"/img/games-logos/warframe.png",iconLargeUrl:"/img/games-logos/large/warframe.png",name:"Warframe"},6365:{id:6365,path:"/status/world-of-tanks",docs:"/api/games/events/world-of-tanks",iconUrl:"/img/games-logos/world-of-tanks.png",iconLargeUrl:"/img/games-logos/large/world-of-tanks.png",name:"World of Tanks"},765:{id:765,path:"/status/world-of-warcraft",docs:"/api/games/events/world-of-warcraft",iconUrl:"/img/games-logos/world-of-warcraft.png",iconLargeUrl:"/img/games-logos/large/world-of-warcraft.png",name:"World of Warcraft"},10746:{id:10746,path:"/status/world-of-warships",docs:"/api/games/events/world-of-warships",iconUrl:"/img/games-logos/world-of-warships.png",iconLargeUrl:"/img/games-logos/large/world-of-warships.png",name:"World of Warships"}}},62517:function(e,a,t){t.d(a,{Z:function(){return c}});var n=t(74165),s=t(15861),r=t(67294),l=t(66410),o=t(5240);var i=function(e){var a=e.name,t=e.pathUrl;return r.createElement("a",{href:""+t},r.createElement("svg",null,r.createElement("use",{href:"/img/sprite.svg#urlIcon"})),a)};var g=function(e){var a=e.gamesListData,t=(0,r.useState)(!1),n=t[0],s=t[1],o=(0,r.useState)(0),g=o[0],m=o[1],c=(0,r.useRef)(null),u=a.map((function(e){return r.createElement("li",null,r.createElement("h3",null,r.createElement("img",{src:l.z[e].iconLargeUrl}),r.createElement("span",null,l.z[e].name)),r.createElement("p",null,r.createElement("span",null,"Game ID: "),e),l.z[e].path&&r.createElement(i,{name:"Game events status",pathUrl:l.z[e].path}),l.z[e].docs&&r.createElement(i,{name:"Game API docs",pathUrl:l.z[e].docs}),l.z[e].compliance&&r.createElement(i,{name:"Game compliance page",pathUrl:l.z[e].compliance}))}));function p(){n?(m(0),s(!1)):(m(c.current.querySelector("ul").clientHeight),s(!0))}return r.createElement("div",{className:"expended-launcher-game-list "+(n?"is-open":"")},r.createElement("button",{className:"expend-btn",onClick:p},r.createElement("svg",{className:"games-icon"},r.createElement("use",{href:"/img/sprite.svg#gamesIcon"})),"Launcher's supported games list",r.createElement("svg",null,r.createElement("use",{href:"/img/sprite.svg#arrowDown"}))),r.createElement("div",{className:"launcher-game-list-inner",ref:c,style:{height:g+"px"}},r.createElement("ul",{className:"launcher-game-list"},u),r.createElement("button",{className:"hide-button",onClick:p},"Hide List")))};var m=function(e){var a=e.gameState;return r.createElement("div",{className:"status-tooltip-trigger"},r.createElement("div",{className:"status-tooltip"},r.createElement("span",null,function(e){var a="";switch(e){case 1:a="Good to go";break;case 2:a="Some events may be unavailable";break;case 3:a="Events are currently unavailable"}return a}(a))))};var c=function(e){var a=e.gameID,t=e.showCompliance,c=void 0===t||t,u=e.showDocs,p=void 0===u||u,d=e.showStatus,h=void 0===d||d,f=e.showLauncherDocs,v=void 0===f||f,E=(0,r.useState)(null),w=E[0],U=E[1];(0,r.useEffect)((function(){function e(){return(e=(0,s.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://game-events-status.overwolf.com/"+a+"_prod.json").then((function(e){return e.json()})).then((function(e){return U(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var b=l.z[a].launcher?"Game Launcher ID":"Game ID",L=l.z[a].launcher?"Launcher":"Game",y=l.z[a].launcherId,z=l.z[a].launcher?l.z[a].launcher.games.length:0,k=l.z[a].displayId?l.z[a].displayId:a,x=l.z[a].mainVariant?l.z[a].mainVariant:0,N=l.z[a].subVariant?l.z[a].subVariant:0;return r.createElement("section",{className:"game-info-section"},r.createElement("div",{className:"game-info-item"},r.createElement("h1",{className:"game-info-title "+(w?(0,o.F)(w.state):"")},r.createElement("img",{src:l.z[a].iconLargeUrl}),r.createElement("span",null,l.z[a].name),w&&r.createElement(m,{gameState:w.state})),r.createElement("ul",{className:"game-info-list"},r.createElement("li",null,r.createElement("span",null,b,":"),k),l.z[a].path&&h&&r.createElement("li",null,r.createElement(i,{name:L+" events status",pathUrl:l.z[a].path})),l.z[a].path&&h&&0!=x&&r.createElement("li",null,r.createElement(i,{name:l.z[x].name+" events status",pathUrl:l.z[x].path})),l.z[a].docs&&p&&v&&0===N&&r.createElement("li",null,r.createElement(i,{name:L+" API docs",pathUrl:l.z[a].docs})),l.z[a].docs&&p&&v&&0!=N&&r.createElement("li",null,r.createElement(i,{name:L+" API docs",pathUrl:l.z[N].docs})),l.z[a].compliance&&c&&"Game"==L&&0===N&&r.createElement("li",null,r.createElement(i,{name:"Game compliance page",pathUrl:l.z[a].compliance})),l.z[a].compliance&&c&&"Game"==L&&0!=N&&r.createElement("li",null,r.createElement(i,{name:"Game compliance page",pathUrl:l.z[N].compliance}))),y&&r.createElement("ul",{className:"launcher-info-list"},r.createElement("li",null,r.createElement("span",null,"Game Launcher ID:"),y),l.z[y].path&&r.createElement("li",null,r.createElement(i,{name:"Launcher events status",pathUrl:l.z[y].path})),l.z[y].docs&&r.createElement("li",null,r.createElement(i,{name:"Launcher API docs",pathUrl:l.z[y].docs})))),z>0&&r.createElement(g,{gamesListData:l.z[a].launcher.games}),!h&&r.createElement("ul",{className:"legend"},r.createElement("li",{className:"good"},"Good to go"),r.createElement("li",{className:"medium"},"Some events may be unavailable"),r.createElement("li",{className:"bad"},"Events are currently unavailable")))}},46086:function(e,a,t){t.r(a),t.d(a,{assets:function(){return c},contentTitle:function(){return g},default:function(){return d},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return u}});var n=t(87462),s=t(63366),r=(t(67294),t(3905)),l=t(22690),o=["components"],i={id:"valheim",image:"/img/embed/games/valheim.jpg",title:"Valheim status",hide_title:!0,sidebar_label:"Valheim",showLastUpdateAuthor:!1,showLastUpdateTime:!1},g=void 0,m={unversionedId:"status/valheim",id:"status/valheim",title:"Valheim status",description:"",source:"@site/pages/docs/status/valheim.mdx",sourceDirName:"status",slug:"/status/valheim",permalink:"/status/valheim",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/status/valheim.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1660566440,formattedLastUpdatedAt:"8/15/2022",frontMatter:{id:"valheim",image:"/img/embed/games/valheim.jpg",title:"Valheim status",hide_title:!0,sidebar_label:"Valheim",showLastUpdateAuthor:!1,showLastUpdateTime:!1},sidebar:"status",previous:{title:"Teamfight Tactics",permalink:"/status/teamfight-tactics"},next:{title:"Valorant",permalink:"/status/valorant"}},c={},u=[],p={toc:u};function d(e){var a=e.components,t=(0,s.Z)(e,o);return(0,r.mdx)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)("head",null,(0,r.mdx)("meta",{name:"keywords",content:"API for Valheim, Valheim API, SDK for Valheim, Valheim SDK"})),(0,r.mdx)(l.Z,{specificGame:!0,gameID:21668,mdxType:"EventsData"}))}d.isMDXComponent=!0}}]);