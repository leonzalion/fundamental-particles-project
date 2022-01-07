var Q=Object.defineProperty,U=Object.defineProperties;var X=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var O=(t,e,r)=>e in t?Q(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,h=(t,e)=>{for(var r in e||(e={}))Y.call(e,r)&&O(t,r,e[r]);if(E)for(var r of E(e))ee.call(e,r)&&O(t,r,e[r]);return t},R=(t,e)=>U(t,X(e));import{m as te,d as _,c as f,o as d,a as p,b as l,u as i,n as P,e as x,t as $,f as re,F as G,r as D,g as j,w as I,h as A,i as oe,j as ne,k as se,l as L,p as ae,q as ie}from"./vendor.683fa333.js";const le=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}};le();const S=(t,e)=>te(e,(r,s)=>[r,R(h({},s),{type:t})]),c=({mass:t,lessThan:e,approx:r,unit:s})=>{let o="";return r?o+="\u2248":e&&(o+="<"),o+=`${t} ${s}/c<sup>2</sup>`,o},ce=S("boson",{gluon:{name:"gluon",mass:"0",charge:"0",spin:"1"},photon:{name:"photon",mass:"0",charge:"0",spin:"1"},zBoson:{name:"Z boson",mass:c({mass:91.2,unit:"GeV"}),charge:"0",spin:"1"},wBoson:{name:"W boson",mass:c({mass:80.4,unit:"GeV"}),charge:"\xB11",spin:"1"},higgsBoson:{name:"higgs",mass:c({mass:126,unit:"GeV"}),charge:"0",spin:"0"}}),ue=S("quark",{up:{name:"up",charge:"2/3",spin:"1/2",mass:c({mass:2.3,approx:!0,unit:"MeV"})},down:{name:"down",charge:"-1/3",spin:"1/2",mass:c({mass:4.8,unit:"MeV",approx:!0})},charm:{name:"charm",charge:"2/3",spin:"1/2",mass:c({mass:1.275,unit:"GeV",approx:!0})},strange:{name:"strange",charge:"-1/3",spin:"1/2",mass:c({mass:95,unit:"MeV",approx:!0})},top:{name:"top",charge:"2/3",spin:"1/2",mass:c({mass:137,unit:"GeV",approx:!0})},bottom:{name:"bottom",charge:"-1/3",spin:"1/2",mass:c({mass:4.12,unit:"GeV",approx:!0})}}),de=S("lepton",{electron:{name:"electron",mass:c({mass:.511,unit:"MeV"}),charge:"-1",spin:"1/2"},muon:{name:"muon",mass:c({mass:.511,unit:"MeV"}),charge:"-1",spin:"1/2"},tau:{name:"tau",mass:c({mass:1.777,unit:"GeV"}),charge:"-1",spin:"1/2"},electronNeutrino:{name:"electron neutrino",mass:c({mass:2.2,unit:"eV",lessThan:!0}),charge:"0",spin:"1/2"},muonNeutrino:{name:"muon neutrino",mass:c({mass:.17,unit:"MeV",lessThan:!0}),charge:"0",spin:"1/2"},tauNeutrino:{name:"tau neutrino",mass:c({mass:15.5,unit:"MeV",lessThan:!0}),charge:"0",spin:"1/2"}}),z=h(h(h({},ue),de),ce),pe=Object.keys(z),me={up:"u",down:"d",charm:"c",strange:"s",top:"t",bottom:"b",electron:"e",electronNeutrino:"<i>v</i><sub>e</sub>",muon:"\xB5",muonNeutrino:"<i>v</i><sub>\xB5</sub>",tau:"\u03C4",tauNeutrino:"<i>v</i><sub>\u03C4</sub>",gluon:"g",photon:"\u03B3",zBoson:"Z",wBoson:"W",higgsBoson:"H"};function V(t){return z[t]}function ge(t){return me[t]}var fe=(t,e)=>{const r=t.__vccOpts||t;for(const[s,o]of e)r[s]=o;return r};const be=["innerHTML"],he=_({props:{particleId:null},setup(t){const e=t,r={boson:"bg-red-300",lepton:"bg-green-300",quark:"bg-purple-300"},s=f(()=>ge(e.particleId)),o=f(()=>V(e.particleId));return(n,a)=>(d(),p("div",{class:P(["bg-blue-200 rounded-full w-[4.5rem] h-[4.5rem] row center text-[50px]",r[i(o).type]])},[l("div",{class:"particle-letter",innerHTML:i(s)},null,8,be)],2))}});var H=fe(he,[["__scopeId","data-v-da32646a"]]);const ve={class:"mt-1"},we=_({props:{particleId:null},setup(t){const e=t,r=f(()=>V(e.particleId));function s(o){var n;(n=o.dataTransfer)==null||n.setData("data",JSON.stringify({type:"particle-drop",payload:{particleId:e.particleId}}))}return(o,n)=>(d(),p("div",{draggable:"true",class:"rounded-md w-28 h-28 m-2 center border-2 bg-white border-black column text-center text-xs cursor-grab",onDragstart:s},[x(H,{"particle-id":t.particleId},null,8,["particle-id"]),l("span",ve,$(i(r).name),1)],32))}});function q(){return{createConfetti:void 0,isComplete:!1,highlightErrors:!1,particleGrid:[[void 0,void 0,void 0,void 0,void 0],[void 0,void 0,void 0,void 0],[void 0,void 0,void 0,void 0],[void 0,void 0,void 0,void 0]]}}const _e=[["up","charm","top",["photon","gluon"],"higgsBoson"],["down","strange","bottom",["photon","gluon"]],["electron","muon","tau","zBoson"],["electronNeutrino","muonNeutrino","tauNeutrino","wBoson"]];function J({row:t,column:e}){const r=_e[t];if(r===void 0)throw new Error(`Invalid row: ${t}`);return[r[e]].flat()}function ye(t){if(this.particleGrid[t]===void 0)throw new Error(`Invalid row: ${t}`);return this.particleGrid[t]}function Ce({column:t,row:e}){return this.getRow(e)[t]}function xe({particleId:t,column:e,row:r}){const s=this.getRow(r);s[e]=t}function Pe({column:t,row:e}){const r=this.getRow(e);r[t]=void 0}function Ge(){this.highlightErrors=!0;for(let t=0;t<this.particleGrid.length;t+=1){const e=this.getRow(t);for(let r=0;r<e.length;r+=1){const s=this.getParticleGridCell({row:t,column:r});if(s===void 0||!J({row:t,column:r}).includes(s))return!1}}return this.isComplete=!0,!0}function Ie(){this.$state=q()}var ke=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",getRow:ye,getParticleGridCell:Ce,setParticleGridCell:xe,unsetParticleGridCell:Pe,checkAnswers:Ge,reset:Ie});function Be(){return this.particleGrid.flat().every(t=>t===void 0)}var Ne=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",isGridEmpty:Be});const k=re({id:"app",state:q,actions:h({},ke),getters:h({},Ne)});function F(t){return t!==null&&typeof t=="object"?t.type==="particle-drop":!1}const $e=["onDrop"],De={class:"row gap-3"},Se=["disabled"],Ve=_({setup(t){const e=k(),r=f(()=>pe.filter(o=>!e.particleGrid.flat().includes(o)));function s(o){var a,g;const n=(g=(a=o.dataTransfer)==null?void 0:a.getData("data"))!=null?g:"";if(n!==""){const v=JSON.parse(n);if(F(v)){const{sourceCell:y}=v.payload;y!==void 0&&e.unsetParticleGridCell({column:y.column,row:y.row})}}}return(o,n)=>(d(),p("div",{class:"column items-center pb-5 pt-3 bg-white border-t-2 border-gray-200 max-h-[50vh] overflow-y-auto",onDrop:I(s,["prevent"]),onDragover:n[3]||(n[3]=I(()=>{},["prevent"]))},[l("div",{class:P(["row flex-wrap content-start z-1 justify-center",{"mb-3":i(r).length>0}])},[(d(!0),p(G,null,D(i(r),a=>(d(),p("div",{key:a},[x(we,{"particle-id":a},null,8,["particle-id"])]))),128))],2),l("div",De,[i(e).isComplete?(d(),p("div",{key:0,onClick:n[0]||(n[0]=()=>{var a,g;return(g=(a=i(e)).createConfetti)==null?void 0:g.call(a)})}," Congratulations! ")):j("",!0),l("button",{class:"font-bold text-white bg-green-500 px-5 py-2 rounded-md",onClick:n[1]||(n[1]=(...a)=>i(e).checkAnswers&&i(e).checkAnswers(...a))}," Check Answers "),l("button",{disabled:i(e).isGridEmpty,class:P(["font-bold text-white px-5 p-2 rounded-md",[i(e).isGridEmpty?"bg-red-300 cursor-not-allowed":"bg-red-500"]]),onClick:n[2]||(n[2]=(...a)=>i(e).reset&&i(e).reset(...a))}," Reset ",10,Se)])],40,$e))}}),Me=["draggable","onDrop"],Te={class:"row justify-between text-xs p-2"},Ee=l("strong",null,"Charge:",-1),Oe=l("strong",null,"Spin:",-1),Re={class:"text-center text-sm pb-1"},je=l("strong",null,"Mass: ",-1),Ae=["innerHTML"],Le=_({props:{currentParticleId:null,column:null,row:null},setup(t){const e=t,r=f(()=>J({row:e.row,column:e.column})[0]),s=f(()=>V(r.value)),o={boson:{bg:"bg-orange-50",border:"border-orange-50"},lepton:{bg:"bg-cyan-50",border:"border-cyan-50"},quark:{bg:"bg-purple-50",border:"border-purple-50"}},n={boson:{bg:"bg-orange-50",border:"border-orange-200"},lepton:{bg:"bg-cyan-50",border:"border-cyan-200"},quark:{bg:"bg-purple-50",border:"border-purple-200"}},a="border-green-500",g="border-red-500",v="cursor-grab",y=f(()=>{let m,u;if(e.currentParticleId===void 0)if(r.value==="higgsBoson")m="border-yellow-100",u="bg-yellow-50";else{const{bg:b,border:w}=o[s.value.type];m=w,u=b}else if(r.value==="higgsBoson")u="bg-yellow-100",m="bg-yellow-100";else{const{bg:b,border:w}=n[s.value.type];u=b,m=w}return C.highlightErrors&&(e.currentParticleId===void 0&&(m=g),m=e.currentParticleId===r.value?a:g),`${v} ${m} ${u}`}),C=k();function Z(m){var w,M;const u=(M=(w=m.dataTransfer)==null?void 0:w.getData("data"))!=null?M:"";if(u==="")return;const b=JSON.parse(u);if(F(b)){const{payload:T}=b;if(T.sourceCell!==void 0){const{row:B,column:N}=T.sourceCell;C.getParticleGridCell({column:N,row:B})!==void 0&&(e.currentParticleId===void 0?C.unsetParticleGridCell({column:N,row:B}):C.setParticleGridCell({particleId:e.currentParticleId,column:N,row:B}))}C.setParticleGridCell({particleId:b.payload.particleId,column:e.column,row:e.row})}}function K(m){var u;e.currentParticleId!==void 0&&((u=m.dataTransfer)==null||u.setData("data",JSON.stringify({type:"particle-drop",payload:{particleId:e.currentParticleId,sourceCell:{row:e.row,column:e.column}}})))}return(m,u)=>(d(),p("div",{class:"p-2",draggable:t.currentParticleId!==void 0,onDragstart:K,onDrop:I(Z,["prevent"]),onDragover:u[0]||(u[0]=I(()=>{},["prevent"]))},[l("div",{class:P(["rounded-md h-40 w-40 border-2 column justify-between",i(y)])},[l("div",Te,[l("span",null,[Ee,A(" "+$(i(s).charge),1)]),l("span",null,[Oe,A(" "+$(i(s).spin),1)])]),t.currentParticleId!==void 0?(d(),oe(H,{key:0,class:"self-center","particle-id":t.currentParticleId},null,8,["particle-id"])):j("",!0),l("div",Re,[je,l("span",{innerHTML:i(s).mass},null,8,Ae)])],2)],40,Me))}}),ze={class:"overflow-y-auto overflow-x-auto column w-full"},He={class:"grid grid-rows-4 grid-cols-[repeat(5,max-content)] p-2 mx-auto"},qe=_({setup(t){const e=k(),r=f(()=>e.particleGrid);return(s,o)=>(d(),p("div",ze,[l("div",He,[(d(!0),p(G,null,D(i(r),(n,a)=>(d(),p(G,{key:a},[(d(!0),p(G,null,D(n,(g,v)=>(d(),p("div",{key:g,class:"row",style:ne({"grid-row-start":a+1})},[x(Le,{"current-particle-id":g,column:v,row:a},null,8,["current-particle-id","column","row"])],4))),128))],64))),128))])]))}});async function Je(){await se({particleCount:100,spread:160})}const Fe={class:"column h-full"},We=_({setup(t){const e=k();return L(()=>e.isComplete,async r=>{r&&await Je()}),L(e.particleGrid,()=>{e.highlightErrors=!1}),(r,s)=>(d(),p("div",Fe,[x(qe,{class:"m-auto"}),x(Ve)]))}});const W=ae(We);W.use(ie());W.mount("#app");