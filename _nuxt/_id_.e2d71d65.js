import{g,h as c,o as x,c as y,a as t,w as r,b as i,t as d,u as s,H as E,d as F,T as k}from"./entry.557cf84b.js";import{_ as B}from"./MetaImageDefault.d1cfe1b6.js";import{_ as H}from"./HeaderSmall.fd770c00.js";import{_ as T}from"./EventWall.43d58385.js";import{c as N,u as V}from"./getEvents.ba2bcb4f.js";import"./_plugin-vue_export-helper.a1a6add7.js";import"./brand-full.c2fcbd20.js";import"./latenightbanner.33117e88.js";const C={class:"container-fluid"},D={class:"filter-header"},U={__name:"[id]",async setup(I){let e,a;const _=g(),m=([e,a]=c(()=>N(null,null,null,_.params.id,null,null)),e=await e,a(),e),u="https://content.uiowa.edu/api/v1/views/filters_api.json?display_id=keywords",{data:l}=([e,a]=c(()=>V(u,"$eBZiqZI7vy")),e=await e,a(),e);var o;return l.value&&l.value.keywords.forEach(n=>{n.id==_.params.id&&(o=n)}),(n,S)=>{const p=k,f=B,v=E,h=H,w=T;return x(),y("div",null,[t(v,null,{default:r(()=>[t(p,null,{default:r(()=>[F(d(s(o).name),1)]),_:1}),t(f)]),_:1}),t(h),i("div",C,[i("h1",D,'Events tagged as "'+d(s(o).name)+'":',1),t(w,{eventFeed:s(m)},null,8,["eventFeed"])])])}}};export{U as default};