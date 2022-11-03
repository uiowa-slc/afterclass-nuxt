import{r as g,o as n,c as s,u as l,a as m,d as p,t as v,l as c,k as h,w as f,_ as y,b as i}from"./entry.aaddfbfc.js";import{a as x,c as w}from"./getEvents.064288c6.js";const N={class:"text-uppercase"},$={key:0},E={key:1},L={__name:"EventDate",props:{eventInstances:Array,showMoreDatesLink:Boolean},setup(t){const e=t;var a=[],o=[];return a=x(e.eventInstances),a.length==0?o=w(e.eventInstances):o=null,(u,r)=>{const _=g("font-awesome-icon");return n(),s("span",N,[l(a).length>0?(n(),s("span",$,[m(_,{icon:"fa-solid fa-calendar-alt"}),p(" "+v(l(a)[0]),1)])):c("",!0),l(o)?(n(),s("span",E,[m(_,{icon:"fa-solid fa-calendar-alt"}),p(" "+v(l(o)[0]),1)])):c("",!0)])}}},D={key:0,class:"text-uppercase"},B={key:0},C={key:1,itemprop:"location"},I={key:0},V={key:2},F={__name:"EventLocation",props:{event:Object},setup(t){const e=t;var a="";return e.event.room_number&&(isNaN(e.event.room_number)?a=e.event.room_number:a="Room "+e.event.room_number),(o,u)=>{const r=g("font-awesome-icon"),_=y;return e.event.location_name||e.event.virtual?(n(),s("span",D,[m(r,{icon:"fa-solid fa-map-pin"}),p("\xA0 "),e.event.virtual?(n(),s("span",B,"Virtual Event ")):c("",!0),e.event.virtual?c("",!0):(n(),s("span",C,[e.event.room_number?(n(),s("span",I,v(l(a))+", ",1)):c("",!0),e.event.location_id?(n(),h(_,{key:1,href:"/events/venue/"+e.event.location_id},{default:f(()=>[p(v(e.event.location_name),1)]),_:1},8,["href"])):(n(),s("span",V,v(e.event.location_name),1))]))])):c("",!0)}}},P=""+new URL("latenightbanner.22c84e5f.png",import.meta.url).href,j={class:"card",itemscope:"",itemtype:"http://data-vocabulary.org/Event"},O={key:0,class:"card__banner-img",alt:"Late Night Programs Flag",role:"presentation",src:P},R=["src","height","width","alt","aria-label"],U={class:"card-body"},z={class:"card-title"},A={itemprop:"summary"},M={class:"card-text"},S={class:"card-subtitle"},T=i("br",null,null,-1),W={__name:"EventCard",props:["event"],setup(t){const e=t,a=e.event.id;var o="/event/"+e.event.id;function u(){if(!e.event.filters||!e.event.filters.event_general_interest)return!1;var r=e.event.filters.event_general_interest;return!!r.find(({id:d})=>d===7491)}return(r,_)=>{const d=y,k=L,b=F;return n(),s("div",j,[u()==!0?(n(),s("img",O)):c("",!0),t.event.media?(n(),h(d,{key:1,to:l(o)},{default:f(()=>[i("img",{class:"card-img-top",src:t.event.media[0].large_image,loading:"lazy",height:t.event.media[0].original_height,width:t.event.media[0].original_width,alt:t.event.media[0].alt_text,"aria-label":t.event.title},null,8,R)]),_:1},8,["to"])):c("",!0),i("div",U,[i("h3",z,[m(d,{to:/event/+l(a),itemprop:"url"},{default:f(()=>[i("span",A,v(t.event.title),1)]),_:1},8,["to"])]),i("div",M,[i("p",S,[t.event.event_instances?(n(),h(k,{key:0,eventInstances:t.event.event_instances},null,8,["eventInstances"])):c("",!0),T,m(b,{event:t.event},null,8,["event"])])])])])}}},q={key:1,class:"text-center"},J={__name:"EventWall",props:{eventFeed:Object},setup(t){return(e,a)=>{const o=W,u=g("masonry-wall");return t.eventFeed.events?(n(),h(u,{key:0,items:t.eventFeed.events,"ssr-columns":4,"column-width":300,gap:16},{default:f(({item:r})=>[m(o,{event:r.event},null,8,["event"])]),_:1},8,["items"])):(n(),s("p",q,"No upcoming events found."))}}};export{J as _,P as a,L as b,F as c};
