import{o as a,c as l,k as r,j as v,w as _,b as t,u,a as d,t as p,_ as y,r as k}from"./entry.557cf84b.js";import{_ as b,a as x,b as w}from"./latenightbanner.33117e88.js";const E={class:"card",itemscope:"",itemtype:"http://data-vocabulary.org/Event"},N={key:0,class:"card__banner-img",alt:"Late Night Programs Flag",role:"presentation",src:b},C=["src","height","width","alt","aria-label"],L={class:"card-body"},B={class:"card-title"},F={itemprop:"summary"},$={class:"card-text"},V={class:"card-subtitle"},j=t("br",null,null,-1),D={__name:"EventCard",props:["event"],setup(e){const n=e,m=n.event.id;var o="/event/"+n.event.id;function c(){if(!n.event.filters||!n.event.filters.event_general_interest)return!1;var s=n.event.filters.event_general_interest;return!!s.find(({id:i})=>i===7491)}return(s,h)=>{const i=y,f=x,g=w;return a(),l("div",E,[c()==!0?(a(),l("img",N)):r("",!0),e.event.media?(a(),v(i,{key:1,to:u(o)},{default:_(()=>[t("img",{class:"card-img-top",src:e.event.media[0].large_image,loading:"lazy",height:e.event.media[0].original_height,width:e.event.media[0].original_width,alt:e.event.media[0].alt_text,"aria-label":e.event.title},null,8,C)]),_:1},8,["to"])):r("",!0),t("div",L,[t("h3",B,[d(i,{to:/event/+u(m),itemprop:"url"},{default:_(()=>[t("span",F,p(e.event.title),1)]),_:1},8,["to"])]),t("div",$,[t("p",V,[e.event.event_instances?(a(),v(f,{key:0,eventInstances:e.event.event_instances},null,8,["eventInstances"])):r("",!0),j,d(g,{event:e.event},null,8,["event"])])])])])}}},I={key:1,class:"text-center"},P={__name:"EventWall",props:{eventFeed:Object},setup(e){return(n,m)=>{const o=D,c=k("masonry-wall");return e.eventFeed.events?(a(),v(c,{key:0,items:e.eventFeed.events,"ssr-columns":4,"column-width":300,gap:16},{default:_(({item:s})=>[d(o,{event:s.event},null,8,["event"])]),_:1},8,["items"])):(a(),l("p",I,"No upcoming events found."))}}};export{P as _};