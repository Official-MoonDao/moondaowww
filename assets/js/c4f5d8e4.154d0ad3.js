"use strict";(self.webpackChunkmoondao_web=self.webpackChunkmoondao_web||[]).push([[195],{7635:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});n(7757);var a,l=n(7294),r=n(7019),o=n(2263),c=n(5999),i=n(9960),s=n(3990),m=n(859),u=["title","titleId"];function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}function E(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=function(e){var t=e.title,n=e.titleId,r=E(e,u);return l.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 245 240","aria-labelledby":n},r),t?l.createElement("title",{id:n},t):null,a||(a=l.createElement("path",{d:"M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z"})))};var h=n(7462),v=n(428),f=3600,g=86400,N={isPlaying:!0,rotation:"counterclockwise",size:100,trailStrokeWidth:6,strokeWidth:6,trailColor:"#808080"};function w(){var e=Date.now()/1e3,t=new Date("2022-05-16T15:00:00Z")/1e3-e,n=Math.ceil(t/g)*g;return l.createElement("div",{className:"countdownContainer"},l.createElement("div",{className:"countdownSeperator"},l.createElement("div",{className:"timer"},l.createElement(v.$,(0,h.Z)({},N,{colors:"#1bab8f",duration:n,initialRemainingTime:t}),(function(e){var t=e.elapsedTime;return l.createElement("div",{className:"timerText"},l.createElement("div",{className:"timerTime"},(n-t)/g|0),l.createElement("div",null,l.createElement(c.Z,null,"Days")))}))),l.createElement("div",{className:"timer"},l.createElement(v.$,(0,h.Z)({className:"timer"},N,{colors:"#2980b8",duration:g,initialRemainingTime:t%g,onComplete:function(e){return{shouldRepeat:t-e>f}}}),(function(e){var t=e.elapsedTime;return l.createElement("div",{className:"timerText"},l.createElement("div",{className:"timerTime"},(g-t)%g/f|0),l.createElement("div",null,l.createElement(c.Z,null,"Hours")))})))),l.createElement("div",{className:"countdownSeperator"},l.createElement("div",{className:"timer"},l.createElement(v.$,(0,h.Z)({},N,{colors:"#8e44ad",duration:f,initialRemainingTime:t%f,onComplete:function(e){return{shouldRepeat:t-e>60}}}),(function(e){var t=e.elapsedTime;return l.createElement("div",{className:"timerText"},l.createElement("div",{className:"timerTime"},(f-t)%f/60|0),l.createElement("div",null,l.createElement(c.Z,null,"Min")))}))),l.createElement("div",{className:"timer"},l.createElement(v.$,(0,h.Z)({},N,{colors:"#f39c12",duration:60,initialRemainingTime:t%60,onComplete:function(e){return{shouldRepeat:t-e>0}}}),(function(e){var t=e.elapsedTime;return l.createElement("div",{className:"timerText"},l.createElement("div",{className:"timerTime"},60-t|0),l.createElement("div",null,l.createElement(c.Z,null,"Sec")))})))))}var y=function(){return l.createElement("div",{className:"HomeHero"},l.createElement("div",{className:"BigHero"},l.createElement("div",{className:"Block__Contents",id:"homeTitle"},l.createElement("h1",{id:"homeTitle"},l.createElement(c.Z,null,"We are sending MoonDAO members to space!")),l.createElement("div",{id:"NFTContainer",className:"NFTContainer"},l.createElement("div",{id:"NFTBox",className:"NFTBox"},l.createElement("video",{id:"NFTVideo",autoPlay:!0,muted:!0,src:"img/NFTTicketV3.mp4",onMouseEnter:function(e){return e.target.play()},onLoadedData:function(e){return e.target.play()},width:"100%",height:"auto"})),l.createElement("div",{id:"NFTInfo",className:"NFTInfo"},l.createElement("p",{id:"NFTInfoHeading"},"Win a chance to go to space with our Ticket To Space NFT!"),l.createElement("p",{id:"countdownLabel"},l.createElement(c.Z,null,"NFT Minting Begins In...")),l.createElement(w,null),l.createElement("div",{className:"HeroButtonGroup"},l.createElement("a",{href:"https://mirror.xyz/pmoncada.eth/HyA4_czQTchCx6x_BN_2zk87zED9w6_AtEGcWhF-vCg",target:"_blank"},l.createElement(c.Z,null,"Learn More")),l.createElement("a",{href:"https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x20d4DB1946859E2Adb0e5ACC2eac58047aD41395&chain=mainnet",target:"_blank",className:"buyMooney"},l.createElement(c.Z,null,"Buy $MOONEY"))))))))};function b(){var e=(0,o.Z)().siteConfig,t=void 0===e?{}:e;return l.createElement(r.Z,{title:t.title,description:t.tagline},l.createElement("meta",{charSet:"UTF-8"}),l.createElement("div",{className:"Home"},l.createElement(y,null),l.createElement("div",{className:"Goal Block"},l.createElement("div",{className:"Block__Contents"},l.createElement("div",{className:"Row"},l.createElement("div",{className:"Column--100"},l.createElement("h3",null,l.createElement(c.Z,null,"Our plan to send a MoonDAO member to space in 2022:")),l.createElement("ol",null,l.createElement("li",null,l.createElement(c.Z,{values:{token:l.createElement(i.Z,{to:"/docs/token"},"$MOONEY governance tokens")}},"Offer {token} to begin decentralized community governance of MoonDAO."),"\xa0",l.createElement("strong",null,l.createElement(c.Z,null,"This will be our only supply of tokens."))),l.createElement("li",null,l.createElement(c.Z,{values:{ticketToSpace:l.createElement("strong",null,l.createElement(c.Z,null,"Ticket to Space"))}},"Purchase a ticket to space with Blue Origin!")),l.createElement("li",null,l.createElement(c.Z,null,"Release the Ticket To Space NFT collection. These NFTs will give you a chance to fly to space in 2022.")),l.createElement("li",null,l.createElement(c.Z,null,"Send MoonDAO member(s) to space in 2022."))))))),l.createElement("div",{className:"Block PrimaryBg"},l.createElement("div",{className:"Block__Contents"},l.createElement("div",{className:"Row"},l.createElement("div",{className:"Column--100"},l.createElement("h5",{className:"daoColor"},l.createElement(c.Z,null,"Mission")),l.createElement("h2",null,l.createElement(c.Z,null,"MoonDAO is going to the moon.")),l.createElement("p",null,l.createElement(c.Z,null,"MoonDAO is an international collective of people united by the mission of decentralizing access to space research and exploration. We are currently living at the inflection point of a privatized space race, and the implications of this moment will define our future. Making life multi-planetary is one of the most inspiring and important missions in our lifetime. The big question is: how? We believe that an international, decentralized, inclusive, and transparent organization would be much better aligned with the needs of the everyday person.")),l.createElement("blockquote",null,l.createElement("p",null,'"',l.createElement(c.Z,null,"All civilizations become either spacefaring or extinct."),'"'),l.createElement("p",{className:"attribution"},"\u2014 Carl Sagan")))))),l.createElement("div",{className:"Values Block"},l.createElement("div",{className:"Block__Contents"},l.createElement("div",{className:"Row"},l.createElement("div",{className:"Column--100"},l.createElement("h5",null,l.createElement(c.Z,null,"Values")),l.createElement("h3",null,l.createElement(c.Z,null,"Space should be in the hands of the people.")),l.createElement("p",null,l.createElement(c.Z,null,"We uphold values of inclusion, peace, transparency, freedom of organization and speech. Space should be in the hands of the people, not any one nation or private entity.")),l.createElement("p",null,l.createElement(c.Z,null,"As such, MoonDAO will support funding for individuals to go to space and fund future space research and exploration as it fits into the mission of becoming a governing body for the moon and other celestial bodies.")),l.createElement("p",null,l.createElement(c.Z,null,"It is very important to note that the core team has not pre-mined any tokens for ourselves. We have not given \u201cspecial terms\u201d to any Venture Capitalists, Influencers, Angel Investors, Rich Friends or Family, or any other person. We are all being treated equally.")))))),l.createElement("div",{className:"Roadmap Block PrimaryBg",id:"MoonPhase"},l.createElement("div",{className:"Block__Contents"},l.createElement("h5",null,l.createElement(c.Z,null,"Moon Phases")),l.createElement("h3",null,l.createElement(c.Z,null,"Our roadmap to the stars.")),l.createElement("div",{className:"Row AlignCenter"},l.createElement("div",{className:"Column--66"},l.createElement("h4",null,l.createElement(c.Z,null,"Moon phase 1")),l.createElement("p",null,l.createElement("strong",null,l.createElement(c.Z,null,"Deploy a token for decentralized governance of MoonDAO."))),l.createElement("p",{className:"small"},l.createElement(c.Z,{values:{token:l.createElement(i.Z,{to:"/docs/token"},"$MOONEY governance tokens")}},"In order to be a DAO, we need a governance token for decision making. Launching the {token} is our first step. There is no expectation of profit with this token, this token\u2019s purpose is to coordinate our governance.")),l.createElement("p",{className:"small"},l.createElement(c.Z,null,"Every investor, builder, or fren, big or small, has gotten the same terms. No special treatment for anyone. This is unusual for an Ethereum project, but we thought it would be more fair for everyone involved that we did not airdrop or pre-mine any number of tokens for people ahead of time. We are not VC funded, we are community organized and led, this is very important to us!"))),l.createElement("div",{className:"Column--33"},l.createElement("p",{className:"center roadmap-moon-icon"},"\ud83c\udf12 ",l.createElement("br",null)))),l.createElement("div",{className:"Row AlignCenter",id:"MoonPhase"},l.createElement("div",{className:"Column--66"},l.createElement("h4",null,l.createElement(c.Z,null,"Moon phase 2")),l.createElement("p",null,l.createElement("strong",null,l.createElement(c.Z,null,"Send a MoonDAO member to space."))),l.createElement("p",{className:"small"},l.createElement(c.Z,null,"Virgin Galactic advertises its tickets will be sold for \u201cas low as\u201d $450K and it has been reported that Blue Origin\u2019s tickets are have gone up for auction for over $28M. The range is large. MoonDAO wants to help create a world where anyone can fly to space regardless of their financial situation. We hope that this can be a meaningful and inspirational first step in decentralizing space exploration.")),l.createElement("p",{className:"small"},l.createElement(c.Z,null,"So far in history, space exploration has been gated to the rest of the world \u2014 accessible to only the privileged. MoonDAO changes this for the first time in history."))),l.createElement("div",{className:"Column--33"},l.createElement("p",{className:"center roadmap-moon-icon"},"\ud83c\udf13 ",l.createElement("br",null)))),l.createElement("div",{className:"Row AlignCenter",id:"MoonPhase"},l.createElement("div",{className:"Column--66"},l.createElement("h4",null,l.createElement(c.Z,null,"Moon phase 3")),l.createElement("p",null,l.createElement("strong",null,l.createElement(c.Z,null,"Provide funding to space research and exploration."))),l.createElement("p",{className:"small"},l.createElement(c.Z,null,"We don\u2019t want to just take a ride on someone else\u2019s rockets, we\u2019d like to fund and coordinate our own plans. We think an international collective could move much faster than any red-taped organization, and we can contract out certain aspects of rocket development to private companies -- just like NASA.")),l.createElement("p",{className:"small"},l.createElement(c.Z,null,"The exploration of space should unify the world, not pit us against each other like the last space race. After all, aren't we all just curious earthlings that want to explore the unknown? Now, Web 3.0 represents a technology that can unify earthlings and decentralize space exploration."))),l.createElement("div",{className:"Column--33"},l.createElement("p",{className:"center roadmap-moon-icon"},"\ud83c\udf14 ",l.createElement("br",null)))),l.createElement("div",{className:"Row AlignCenter",id:"MoonPhase"},l.createElement("div",{className:"Column--66"},l.createElement("h4",null,l.createElement(c.Z,null,"Moon phase 4")),l.createElement("p",null,l.createElement("strong",null,l.createElement(c.Z,null,"Put a MoonDAO colony on the moon."))),l.createElement("p",{className:"small"},l.createElement(c.Z,null,"That's one small step for man, one giant leap for mankind.")),l.createElement("p",{className:"small"},l.createElement(c.Z,null,"The 1967 Space Treaty forms the basis for all law concerning space. In this treaty it states that no national appropriation of the Moon can take place. However, a DAO is not a nation \u2014 it is an international collective of frens.")),l.createElement("p",{className:"small"},l.createElement(c.Z,null,"We have the opportunity to use these new governance and coordination tools in order to form a more perfect union as we extend the rights and liberties of every human on earth into the solar system."))),l.createElement("div",{className:"Column--33"},l.createElement("p",{className:"center roadmap-moon-icon"},"\ud83c\udf15 ",l.createElement("br",null)))),l.createElement("div",{className:"Row AlignCenter",id:"MoonPhase5"},l.createElement("div",{className:"Column--66"},l.createElement("h4",null,l.createElement(c.Z,null,"Moon phase 5")),l.createElement("p",null,l.createElement("strong",null,l.createElement(c.Z,null,"Have sweet moon parties (everyone's invited)."))),l.createElement("p",{className:"small"},l.createElement(c.Z,null,"They're gonna be sweet. BYOB but we'll provide transportation."))),l.createElement("div",{className:"Column--33"},l.createElement("p",{className:"center roadmap-moon-icon"},"\ud83c\udf1d ",l.createElement("br",null)))))),l.createElement("div",{className:"Block",id:"community"},l.createElement("div",{className:"Block__Contents"},l.createElement("div",{className:"Row"},l.createElement("div",{className:"Column--50"},l.createElement("h3",null,l.createElement(c.Z,null,"Join our mission.")),l.createElement("p",null,l.createElement(c.Z,null,"Contribute to our efforts by buying our governance token to fund our treasury, or lend us your brain power and help us build the world's first decentralized public space program.")),l.createElement("div",{id:"community_actions",className:"Row AlignCenter"},l.createElement("div",null,l.createElement("a",{href:"https://moondao.com/docs/contribute",className:"Button Primary Outlined"},l.createElement(c.Z,null,"Contribute"))),l.createElement("div",{className:"Social"},l.createElement("a",{href:"https://discord.gg/5nAu7K9aES",target:"_blank",rel:"noopener noreferrer"},l.createElement(p,null)),l.createElement("a",{href:"https://github.com/Official-MoonDao",target:"_blank",rel:"noopener noreferrer"},l.createElement(m.gik,null)),l.createElement("a",{href:"https://twitter.com/OfficialMoonDAO",target:"_blank",rel:"noopener noreferrer"},l.createElement(s.Fwv,null))))),l.createElement("div",{className:"Column--50"},l.createElement("p",{className:"center"},l.createElement("img",{width:"75%",src:"img/undraw_launch_day_4e04.svg",alt:"illustration of astronaut in space with moon in distance"}))))))))}}}]);