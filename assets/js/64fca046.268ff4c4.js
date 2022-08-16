"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3913],{22690:function(e,a,t){t.d(a,{Z:function(){return d}});var n=t(74165),s=t(67855),r=t(15861),l=t(67294);function o(e){var a=e.className,t=e.path,n=e.imgSrc,s=e.text,r=e.gameID;return l.createElement("li",{className:a},l.createElement("a",{href:t},l.createElement("span",{className:"game-info"},l.createElement("img",{src:n})," ",s),l.createElement("span",{className:"game-id"},"Game ID: ",l.createElement("span",null,r))))}var i=function(e){var a=function(e){return e.map((function(e){var a="game ";switch(e.state){case 1:a+="good";break;case 2:a+="medium";break;case 3:a+="bad"}return l.createElement(o,{key:e.id,gameID:e.displayId?e.displayId:e.id,className:a,path:e.path,imgSrc:e.iconUrl,text:e.name})}))}(e.gameListData);return a.sort((function(e,a){return e.props.text<a.props.text?-1:1})),l.createElement("article",null,l.createElement("div",{className:"gep-games-list"},l.createElement("ul",{className:"legend"},l.createElement("li",{className:"good"},"Good to go"),l.createElement("li",{className:"medium"},"Some game events may be unavailable"),l.createElement("li",{className:"bad"},"Game events are currently unavailable")),l.createElement("ul",{className:"list"},a)))},m=t(62517),g=t(5240);function c(e){return l.createElement("form",{role:"search",method:"get",className:"search-game",action:"#",autoComplete:"off",onSubmit:function(e){e.preventDefault()}},l.createElement("input",{type:"search",name:"search",className:"search-input",placeholder:"Search for game events, e.g. \u201ckill\u201d",onKeyUp:function(e){!function(e){var a=e.target,t=document.querySelectorAll(".game-data ul li"),n=a.value.toLowerCase();0===n.length?t.forEach((function(e){return e.removeAttribute("style")})):t.forEach((function(e){e.textContent.toLowerCase().includes(n)?e.removeAttribute("style"):e.style.display="none"}))}(e)}}),l.createElement("button",{type:"submit",className:"search-submit",title:"Search"},l.createElement("svg",{className:"games-icon"},l.createElement("use",{href:"../../img/sprite.svg#searchIcon"}))))}var p=function(e){var a=e.gameStatusData,t=e.gameID,n=(e.docsPath,function(e){if(!a.features||0===a.features.length)return l.createElement("li",{className:"coming-soon"},"Coming soon");for(var t,n=0,r=[],o=(0,s.Z)(a.features);!(t=o()).done;)for(var i,m=t.value,c=(0,s.Z)(m.keys);!(i=c()).done;){var p=i.value;p.type==e&&r.push(l.createElement("li",{className:(0,g.F)(p.state),key:n++},p.name))}return r}),r=n(0),o=n(1);return l.createElement("article",null,l.createElement("div",{className:"entry-content"},l.createElement("div",{className:"gep-game"},l.createElement(m.Z,{gameID:t,showStatus:!1}),l.createElement(c,null),l.createElement("div",{className:"game-events-info"},l.createElement("div",{className:"game-data"},l.createElement("h4",null,"Events"),l.createElement("ul",null,r)),l.createElement("div",{className:"game-data"},l.createElement("h4",null,"Info updates"),l.createElement("ul",null,o))))))},u=t(66410);var d=function(e){var a=e.allGames,t=e.specificGame,o=e.gameID,m=e.docsPath,g=e.onlyGames,c=void 0!==g&&g,d=e.onlyLaunchers,h=void 0!==d&&d,f=(0,l.useState)(null),v=f[0],w=f[1],x=(0,l.useState)(null),b=x[0],E=x[1];return(0,l.useEffect)((function(){if(a){function e(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://game-events-status.overwolf.com/all_prod.json").then((function(e){return e.json()})).then((function(e){for(var a,t=[],n=(0,s.Z)(e);!(a=n()).done;){var r=a.value;0!=r.state&&(u.z[r.game_id]&&(c&&u.z[r.game_id].launcher||h&&!u.z[r.game_id].launcher||(u.z[r.game_id].state=r.state,t.push(u.z[r.game_id]))))}w(t)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e()}if(t){function i(){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://game-events-status.overwolf.com/"+o+"_prod.json").then((function(e){return e.json()})).then((function(e){return E(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i()}}),[]),l.createElement(l.Fragment,null,a&&null!=v&&l.createElement(i,{gameListData:v}),t&&null!=b&&l.createElement(p,{gameStatusData:b,gameID:o,docsPath:m}))}},5240:function(e,a,t){t.d(a,{F:function(){return n}});var n=function(e){var a="";switch(e){case 1:a="good";break;case 2:a="medium";break;case 3:a="bad"}return a}},66410:function(e,a,t){t.d(a,{z:function(){return n}});var n={21566:{id:21566,path:"/status/apex-legends",docs:"/api/games/events/apex-legends",iconUrl:"/img/games-logos/apex-legends.png",iconLargeUrl:"/img/games-logos/large/apex-legends.png",name:"Apex Legends"},21960:{id:21960,path:"/status/axie-infinity-origin",docs:"/api/games/events/axie-infinity-origin",iconUrl:"/img/games-logos/axie-infinity-origin.png",iconLargeUrl:"/img/games-logos/large/axie-infinity-origin.png",name:"Axie Infinity Origin"},21876:{id:21876,path:"/status/call-of-duty-vanguard",docs:"/api/games/events/call-of-duty-vanguard",iconUrl:"/img/games-logos/call-of-duty-vanguard.png",iconLargeUrl:"/img/games-logos/large/call-of-duty-vanguard.png",name:"Call of Duty: Vanguard"},21626:{id:21626,path:"/status/call-of-duty-warzone",compliance:"/start/game-compliance/call-of-duty-warzone",docs:"/api/games/events/call-of-duty-warzone",iconUrl:"/img/games-logos/call-of-duty-warzone.png",iconLargeUrl:"/img/games-logos/large/call-of-duty-warzone.png",name:"Call of Duty: Warzone"},7764:{id:7764,path:"/status/counter-strike-global-offensive",docs:"/api/games/events/counter-strike-global-offensive",iconUrl:"/img/games-logos/counter-strike-global-offensive.png",iconLargeUrl:"/img/games-logos/large/counter-strike-global-offensive.png",name:"Counter-Strike: Global Offensive"},21848:{id:21848,path:"/status/diablo-2-resurrected",docs:"/api/games/events/diablo-2-resurrected",iconUrl:"/img/games-logos/diablo-2-resurrected.png",iconLargeUrl:"/img/games-logos/large/diablo-2-resurrected.png",name:"Diablo 2 Resurrected"},7314:{id:7314,path:"/status/dota-2",docs:"/api/games/events/dota-2",iconUrl:"/img/games-logos/dota-2.png",iconLargeUrl:"/img/games-logos/large/dota-2.png",name:"Dota 2"},21586:{id:21586,path:"/status/dota-underlords",docs:"/api/games/events/dota-underlords",iconUrl:"/img/games-logos/dota-underlords.png",iconLargeUrl:"/img/games-logos/large/dota-underlords.png",name:"Dota Underlords"},21634:{id:21634,path:"/status/escape-from-tarkov",docs:"/api/games/events/escape-from-tarkov",iconUrl:"/img/games-logos/escape-from-tarkov.png",iconLargeUrl:"/img/games-logos/large/escape-from-tarkov.png",name:"Escape From Tarkov"},21672:{id:21672,path:"/status/eternal-return",docs:"/api/games/events/eternal-return",iconUrl:"/img/games-logos/eternal-return.png",iconLargeUrl:"/img/games-logos/large/eternal-return.png",name:"Eternal Return"},6350:{id:6350,path:"/status/final-fantasy-xiv",docs:"/api/games/events/final-fantasy-xiv",iconUrl:"/img/games-logos/final-fantasy-xiv.png",iconLargeUrl:"/img/games-logos/large/final-fantasy-xiv.png",name:"Final Fantasy XIV"},21666:{id:21666,path:"/status/football-manager-2021",docs:"/api/games/events/football-manager-2021",iconUrl:"/img/games-logos/football-manager-2021.png",iconLargeUrl:"/img/games-logos/large/football-manager-2021.png",name:"Football Manager 2021"},21856:{id:21856,path:"/status/football-manager-2022",docs:"/api/games/events/football-manager-2022",iconUrl:"/img/games-logos/football-manager-2022.png",iconLargeUrl:"/img/games-logos/large/football-manager-2022.png",name:"Football Manager 2022"},21216:{id:21216,path:"/status/fortnite",docs:"/api/games/events/fortnite",iconUrl:"/img/games-logos/fortnite.png",iconLargeUrl:"/img/games-logos/large/fortnite.png",name:"Fortnite"},21854:{id:21854,path:"/status/halo-infinite",docs:"/api/games/events/halo-infinite",iconUrl:"/img/games-logos/halo-infinite.png",iconLargeUrl:"/img/games-logos/large/halo-infinite.png",name:"Halo Infinite"},9898:{id:9898,path:"/status/hearthstone",docs:"/api/games/events/hearthstone",iconUrl:"/img/games-logos/hearthstone.png",iconLargeUrl:"/img/games-logos/large/hearthstone.png",name:"Hearthstone"},10624:{id:10624,path:"/status/heroes-of-the-storm",docs:"/api/games/events/heroes-of-the-storm",iconUrl:"/img/games-logos/heroes-of-the-storm.png",iconLargeUrl:"/img/games-logos/large/heroes-of-the-storm.png",name:"Heroes of the Storm"},21328:{id:21328,path:"/status/hunt-showdown",docs:"/api/games/events/hunt-showdown",iconUrl:"/img/games-logos/hunt-showdown.png",iconLargeUrl:"/img/games-logos/large/hunt-showdown.png",name:"Hunt: Showdown"},5426:{id:5426,launcherID:10902,path:"/status/league-of-legends",docs:"/api/games/events/league-of-legends",iconUrl:"/img/games-logos/league-of-legends.png",iconLargeUrl:"/img/games-logos/large/league-of-legends.png",name:"League of Legends"},10902:{id:10902,path:"/status/launchers/league-of-legends",docs:"/api/games/launchers/events/league-of-legends",iconUrl:"/img/games-logos/launchers/league-of-legends.png",iconLargeUrl:"/img/games-logos/large/launchers/league-of-legends.png",name:"League of Legends Launcher",launcher:{games:[5426,21570,215701]}},21620:{id:21620,path:"/status/legends-of-runeterra",docs:"/api/games/events/legends-of-runeterra",iconUrl:"/img/games-logos/legends-of-runeterra.png",iconLargeUrl:"/img/games-logos/large/legends-of-runeterra.png",name:"Legends of Runeterra"},21308:{id:21308,path:"/status/magic-the-gathering-arena",docs:"/api/games/events/magic-the-gathering-arena",iconUrl:"/img/games-logos/magic-the-gathering-arena.png",iconLargeUrl:"/img/games-logos/large/magic-the-gathering-arena.png",name:"Magic: The Gathering Arena"},8032:{id:8032,path:"/status/minecraft",docs:"/api/games/events/minecraft",iconUrl:"/img/games-logos/minecraft.png",iconLargeUrl:"/img/games-logos/large/minecraft.png",name:"Minecraft"},21816:{id:21816,path:"/status/new-world",compliance:"/start/game-compliance/new-world",docs:"/api/games/events/new-world",iconUrl:"/img/games-logos/new-world.png",iconLargeUrl:"/img/games-logos/large/new-world.png",name:"New World"},10844:{id:10844,path:"/status/overwatch",docs:"/api/games/events/overwatch",iconUrl:"/img/games-logos/overwatch.png",iconLargeUrl:"/img/games-logos/large/overwatch.png",name:"Overwatch"},7212:{id:7212,path:"/status/path-of-exile",docs:"/api/games/events/path-of-exile",iconUrl:"/img/games-logos/path-of-exile.png",iconLargeUrl:"/img/games-logos/large/path-of-exile.png",name:"Path of Exile"},10906:{id:10906,path:"/status/player-unknowns-battlegrounds",docs:"/api/games/events/player-unknowns-battlegrounds",iconUrl:"/img/games-logos/player-unknowns-battlegrounds.png",iconLargeUrl:"/img/games-logos/large/player-unknowns-battlegrounds.png",name:"PlayerUnkown's Battlegrounds"},10826:{id:10826,path:"/status/rainbow-six-siege",compliance:"/start/game-compliance/rainbow-six-siege",docs:"/api/games/events/rainbow-six-siege",iconUrl:"/img/games-logos/rainbow-six-siege.png",iconLargeUrl:"/img/games-logos/large/rainbow-six-siege.png",name:"Rainbow Six Siege"},10798:{id:10798,path:"/status/rocket-league",docs:"/api/games/events/rocket-league",iconUrl:"/img/games-logos/rocket-league.png",iconLargeUrl:"/img/games-logos/large/rocket-league.png",name:"Rocket League"},21404:{id:21404,path:"/status/splitgate-arena-warfare",docs:"/api/games/events/splitgate-arena-warfare",iconUrl:"/img/games-logos/splitgate-arena-warfare.png",iconLargeUrl:"/img/games-logos/large/splitgate-arena-warfare.png",name:"Splitgate: Arena Warfare"},5855:{id:5855,path:"/status/starcraft-2",docs:"/api/games/events/starcraft-2",iconUrl:"/img/games-logos/starcraft-2.png",iconLargeUrl:"/img/games-logos/large/starcraft-2.png",name:"StarCraft II"},21570:{id:21570,displayId:5426,launcherID:10902,mainVariant:215701,path:"/status/teamfight-tactics",docs:"/api/games/events/teamfight-tactics",iconUrl:"/img/games-logos/teamfight-tactics.png",iconLargeUrl:"/img/games-logos/large/teamfight-tactics.png",name:"Teamfight Tactics"},215701:{id:215701,displayId:5426,launcherID:10902,subVariant:21570,path:"/status/teamfight-tactics-public-beta",docs:"/api/games/events/teamfight-tactics-public-beta",iconUrl:"/img/games-logos/teamfight-tactics-public-beta.png",iconLargeUrl:"/img/games-logos/large/teamfight-tactics-public-beta.png",name:"Teamfight Tactics PBE"},21668:{id:21668,path:"/status/valheim",docs:"/api/games/events/valheim",iconUrl:"/img/games-logos/valheim.png",iconLargeUrl:"/img/games-logos/large/valheim.png",name:"Valheim"},21640:{id:21640,path:"/status/valorant",docs:"/api/games/events/valorant",iconUrl:"/img/games-logos/valorant.png",iconLargeUrl:"/img/games-logos/large/valorant.png",name:"Valorant"},8954:{id:8954,path:"/status/warframe",docs:"/api/games/events/warframe",iconUrl:"/img/games-logos/warframe.png",iconLargeUrl:"/img/games-logos/large/warframe.png",name:"Warframe"},6365:{id:6365,path:"/status/world-of-tanks",docs:"/api/games/events/world-of-tanks",iconUrl:"/img/games-logos/world-of-tanks.png",iconLargeUrl:"/img/games-logos/large/world-of-tanks.png",name:"World of Tanks"},765:{id:765,path:"/status/world-of-warcraft",docs:"/api/games/events/world-of-warcraft",iconUrl:"/img/games-logos/world-of-warcraft.png",iconLargeUrl:"/img/games-logos/large/world-of-warcraft.png",name:"World of Warcraft"},10746:{id:10746,path:"/status/world-of-warships",docs:"/api/games/events/world-of-warships",iconUrl:"/img/games-logos/world-of-warships.png",iconLargeUrl:"/img/games-logos/large/world-of-warships.png",name:"World of Warships"}}},62517:function(e,a,t){t.d(a,{Z:function(){return c}});var n=t(74165),s=t(15861),r=t(67294),l=t(66410),o=t(5240);var i=function(e){var a=e.name,t=e.pathUrl;return r.createElement("a",{href:""+t},r.createElement("svg",null,r.createElement("use",{href:"/img/sprite.svg#urlIcon"})),a)};var m=function(e){var a=e.gamesListData,t=(0,r.useState)(!1),n=t[0],s=t[1],o=(0,r.useState)(0),m=o[0],g=o[1],c=(0,r.useRef)(null),p=a.map((function(e){return r.createElement("li",null,r.createElement("h3",null,r.createElement("img",{src:l.z[e].iconLargeUrl}),r.createElement("span",null,l.z[e].name)),r.createElement("p",null,r.createElement("span",null,"Game ID: "),e),l.z[e].path&&r.createElement(i,{name:"Game events status",pathUrl:l.z[e].path}),l.z[e].docs&&r.createElement(i,{name:"Game API docs",pathUrl:l.z[e].docs}),l.z[e].compliance&&r.createElement(i,{name:"Game compliance page",pathUrl:l.z[e].compliance}))}));function u(){n?(g(0),s(!1)):(g(c.current.querySelector("ul").clientHeight),s(!0))}return r.createElement("div",{className:"expended-launcher-game-list "+(n?"is-open":"")},r.createElement("button",{className:"expend-btn",onClick:u},r.createElement("svg",{className:"games-icon"},r.createElement("use",{href:"/img/sprite.svg#gamesIcon"})),"Launcher's supported games list",r.createElement("svg",null,r.createElement("use",{href:"/img/sprite.svg#arrowDown"}))),r.createElement("div",{className:"launcher-game-list-inner",ref:c,style:{height:m+"px"}},r.createElement("ul",{className:"launcher-game-list"},p),r.createElement("button",{className:"hide-button",onClick:u},"Hide List")))};var g=function(e){var a=e.gameState;return r.createElement("div",{className:"status-tooltip-trigger"},r.createElement("div",{className:"status-tooltip"},r.createElement("span",null,function(e){var a="";switch(e){case 1:a="Good to go";break;case 2:a="Some events may be unavailable";break;case 3:a="Events are currently unavailable"}return a}(a))))};var c=function(e){var a=e.gameID,t=e.showCompliance,c=void 0===t||t,p=e.showDocs,u=void 0===p||p,d=e.showStatus,h=void 0===d||d,f=e.showLauncherDocs,v=void 0===f||f,w=(0,r.useState)(null),x=w[0],b=w[1];(0,r.useEffect)((function(){function e(){return(e=(0,s.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://game-events-status.overwolf.com/"+a+"_prod.json").then((function(e){return e.json()})).then((function(e){return b(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var E=l.z[a].launcher?"Game Launcher ID":"Game ID",U=l.z[a].launcher?"Launcher":"Game",y=l.z[a].launcherId,N=l.z[a].launcher?l.z[a].launcher.games.length:0,I=l.z[a].displayId?l.z[a].displayId:a,L=l.z[a].mainVariant?l.z[a].mainVariant:0,D=l.z[a].subVariant?l.z[a].subVariant:0;return r.createElement("section",{className:"game-info-section"},r.createElement("div",{className:"game-info-item"},r.createElement("h1",{className:"game-info-title "+(x?(0,o.F)(x.state):"")},r.createElement("img",{src:l.z[a].iconLargeUrl}),r.createElement("span",null,l.z[a].name),x&&r.createElement(g,{gameState:x.state})),r.createElement("ul",{className:"game-info-list"},r.createElement("li",null,r.createElement("span",null,E,":"),I),l.z[a].path&&h&&r.createElement("li",null,r.createElement(i,{name:U+" events status",pathUrl:l.z[a].path})),l.z[a].path&&h&&0!=L&&r.createElement("li",null,r.createElement(i,{name:l.z[L].name+" events status",pathUrl:l.z[L].path})),l.z[a].docs&&u&&v&&0===D&&r.createElement("li",null,r.createElement(i,{name:U+" API docs",pathUrl:l.z[a].docs})),l.z[a].docs&&u&&v&&0!=D&&r.createElement("li",null,r.createElement(i,{name:U+" API docs",pathUrl:l.z[D].docs})),l.z[a].compliance&&c&&"Game"==U&&0===D&&r.createElement("li",null,r.createElement(i,{name:"Game compliance page",pathUrl:l.z[a].compliance})),l.z[a].compliance&&c&&"Game"==U&&0!=D&&r.createElement("li",null,r.createElement(i,{name:"Game compliance page",pathUrl:l.z[D].compliance}))),y&&r.createElement("ul",{className:"launcher-info-list"},r.createElement("li",null,r.createElement("span",null,"Game Launcher ID:"),y),l.z[y].path&&r.createElement("li",null,r.createElement(i,{name:"Launcher events status",pathUrl:l.z[y].path})),l.z[y].docs&&r.createElement("li",null,r.createElement(i,{name:"Launcher API docs",pathUrl:l.z[y].docs})))),N>0&&r.createElement(m,{gamesListData:l.z[a].launcher.games}),!h&&r.createElement("ul",{className:"legend"},r.createElement("li",{className:"good"},"Good to go"),r.createElement("li",{className:"medium"},"Some events may be unavailable"),r.createElement("li",{className:"bad"},"Events are currently unavailable")))}},1479:function(e,a,t){t.r(a),t.d(a,{assets:function(){return c},contentTitle:function(){return m},default:function(){return d},frontMatter:function(){return i},metadata:function(){return g},toc:function(){return p}});var n=t(87462),s=t(63366),r=(t(67294),t(3905)),l=t(22690),o=["components"],i={id:"ids",image:"/img/embed/api-docs.jpg",title:"Games IDs",sidebar_label:"Games IDs",sidebar_position:-3},m=void 0,g={unversionedId:"api/games/ids",id:"api/games/ids",title:"Games IDs",description:"What is an Overwolf Supported Game?",source:"@site/pages/docs/api/games/ids.mdx",sourceDirName:"api/games",slug:"/api/games/ids",permalink:"/api/games/ids",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/games/ids.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1660566440,formattedLastUpdatedAt:"8/15/2022",sidebarPosition:-3,frontMatter:{id:"ids",image:"/img/embed/api-docs.jpg",title:"Games IDs",sidebar_label:"Games IDs",sidebar_position:-3},sidebar:"api",previous:{title:"Games",permalink:"/api/games/"},next:{title:"Events",permalink:"/api/games/events/"}},c={},p=[{value:"What is an Overwolf Supported Game?",id:"what-is-an-overwolf-supported-game",level:2},{value:"What is the Game ID",id:"what-is-the-game-id",level:2},{value:"The gamelist.xml file",id:"the-gamelistxml-file",level:2},{value:"Game-ID and Instance-ID",id:"game-id-and-instance-id",level:2},{value:"Games with game events support",id:"games-with-game-events-support",level:2},{value:"Game launcher IDs",id:"game-launcher-ids",level:2}],u={toc:p};function d(e){var a=e.components,t=(0,s.Z)(e,o);return(0,r.mdx)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)("h2",{id:"what-is-an-overwolf-supported-game"},"What is an Overwolf Supported Game?"),(0,r.mdx)("p",null,'In Overwolf, when we refer to a "supported game" it could mean one of two levels of support:'),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Overlay support - games that support overlay injection.\nIn these games, we can display OW apps as an overlay, and make use of Overwolf APIs.\nThe full list of games that support overlay injection can be found in the ",(0,r.mdx)("a",{parentName:"p",href:"#the-gamelistxml-file"},"gamelist.xml")," file.")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Game events support - games which support overlay injection as well as real-time game events.\nYou can create OW apps for these games, that leverage game events using the ",(0,r.mdx)("a",{parentName:"p",href:"/api"},"overwolf.games.events")," API.\nThe full list of games that supports events can be found ",(0,r.mdx)("a",{parentName:"p",href:"/status/"},"here"),"."),(0,r.mdx)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,r.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,r.mdx)("h5",{parentName:"div"},(0,r.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,r.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Note")),(0,r.mdx)("div",{parentName:"div",className:"admonition-content"},(0,r.mdx)("p",{parentName:"div"},"Game events can vary between games. If you'd like us to enable a new game event, you can request it ",(0,r.mdx)("a",{parentName:"p",href:"https://discuss.overwolf.com/c/game-events-features/42"},"here"),"."))))),(0,r.mdx)("h2",{id:"what-is-the-game-id"},"What is the Game ID"),(0,r.mdx)("p",null,"Each ",(0,r.mdx)("a",{parentName:"p",href:"#what-is-an-overwolf-supported-game"},"supported game")," has its own unique Game ID."),(0,r.mdx)("p",null,"Game IDs are used in your app\u2019s manifest.json in multiple ways:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("a",{parentName:"p",href:"../manifest#game_targeting"},"game_targeting")," property - A list of games which enable overlay for this app.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("a",{parentName:"p",href:"../manifest#game_events"},"game_events")," property - A list of games for which game events are required.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("a",{parentName:"p",href:"../manifest#launch_events"},"launch_events")," property -  A list of games triggering the app to launch."))),(0,r.mdx)("h2",{id:"the-gamelistxml-file"},"The gamelist.xml file"),(0,r.mdx)("p",null,"We support overlay injection in a vast and growing number of games.\nThe list is kept up to date, and you can find it in your local Overwolf app data folder after installing Overwolf."),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Navigate to your ",(0,r.mdx)("inlineCode",{parentName:"p"},"%localappdata%")," folder and open the ",(0,r.mdx)("inlineCode",{parentName:"p"},"overwolf")," folder.")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Open the Game List XML file (named with a number postfix, for example, gamelistXXX.xml, higher number means newer version), and search your game by name.")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Under each game, you can find game ID listed.\nIf you didn\u2019t find the game you need, ",(0,r.mdx)("a",{parentName:"p",href:"/support/contact-us"},"contact us"),"."))),(0,r.mdx)("h2",{id:"game-id-and-instance-id"},"Game-ID and Instance-ID"),(0,r.mdx)("p",null,'A single game can have multiple executables: Steam, GOG, 32 / 64-bit clients, etc.\nWe differentiate between them by adding one digit to each game ID, which is called an "Instance ID."\nBasically, you have the base game ID, and then a series of instances (212160, 212161, \u2026)'),(0,r.mdx)("p",null,"When you call ",(0,r.mdx)("a",{parentName:"p",href:"../games#ongameinfoupdated"},"overwolf.games.onGameInfoUpdated"),' you will get the same full ID including the instance ID.\nBesides, there is a file called "gamelist.xml" in the OW client folder that contains all the supported game ids, including instance ID.\nIn order to translate the instance ID into the game ID that needs to be used in the manifest, you can divide the instance ID by 10 and round down.'),(0,r.mdx)("p",null,"For example for Fortnite: in order to get 21216 instead of 212161, you can do:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"Math.floor(gameInfoResult.gameInfo.id/10)\n")),(0,r.mdx)("p",null,"You can see how we use it in the ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/overwolf/events-sample-apps/blob/master/fortnite-sample-app/main.js#L81"},"Fortnite events sample")," app."),(0,r.mdx)("p",null,"Note that the ",(0,r.mdx)("a",{parentName:"p",href:"../games#runninggameinfo-object"},"RunningGameInfo object")," also has a ",(0,r.mdx)("inlineCode",{parentName:"p"},"classId")," property, which already equals the game ID."),(0,r.mdx)("h2",{id:"games-with-game-events-support"},"Games with game events support"),(0,r.mdx)(l.Z,{allGames:!0,onlyGames:!0,mdxType:"EventsData"}),(0,r.mdx)("h2",{id:"game-launcher-ids"},"Game launcher IDs"),(0,r.mdx)("p",null,"IDs for Launchers such as the League of Legends launcher can be found ",(0,r.mdx)("a",{parentName:"p",href:"launchers/ids"},"here"),"."))}d.isMDXComponent=!0}}]);