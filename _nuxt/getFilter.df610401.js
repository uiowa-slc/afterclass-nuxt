import{g as r}from"./entry.aaddfbfc.js";import{u as o}from"./getEvents.064288c6.js";async function d(a,i){const e=r(await u(a));var t;return a=="keyword"?e.value.keywords&&e.value.keywords.forEach(s=>{s.id==i&&(t=s)}):e.value.length>0&&e.value.forEach(s=>{s.id==i&&(t=s)}),t}async function u(a){var i=r([]),e;a=="keyword"?e="https://content.uiowa.edu/api/v1/views/filters_api.json?display_id=keywords":e="https://content.uiowa.edu/api/v1/views/filters_api.json?display_id=filters";const{data:t}=await o(e,"$ml9Vxk1zAq");return a=="keyword"?i.value=t.value:i.value=t.value[a],i}export{d as g};
