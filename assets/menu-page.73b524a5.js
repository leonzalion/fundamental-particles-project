import{f as r,o as d,g as c,h as o,u as s,n as m,i as p,j as h,k as f,w as b,l as g}from"./vendor.8c0b89ba.js";import{u as x,c as _}from"./index.56623eb8.js";let k=(a=21)=>{let e="",n=crypto.getRandomValues(new Uint8Array(a));for(;a--;){let t=n[a]&63;t<36?e+=t.toString(36):t<62?e+=(t-26).toString(36).toUpperCase():t<63?e+="_":e+="-"}return e};const y={class:"form-check"},V=["id","value"],v=["for"],w=r({props:{inputClass:null,modelValue:{type:Boolean}},emits:["update:modelValue"],setup(a){const e=k();return(n,t)=>(d(),c("div",y,[o("input",{id:s(e),class:m(["form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-0.5 mr-2 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer",a.inputClass]),type:"checkbox",value:a.modelValue,onChange:t[0]||(t[0]=i=>n.$emit("update:modelValue",!a.modelValue))},null,42,V),o("label",{class:"form-check-label inline-block text-gray-800 cursor-pointer",for:s(e)},[p(n.$slots,"default")],8,v)]))}}),$={class:"column center h-full p-8"},C=o("div",{class:"text-[8rem] text-center font-bold leading-none"}," Fundamental Particles Game ",-1),S=o("div",{class:"text-xl"},[o("strong",null,"By:"),g(" Leon Si")],-1),B=o("div",{class:"text-lg text-center my-5"},[o("span",{class:"font-bold"},"Instructions: "),o("span",null," Drag the fundamental particles to the grid cell with the correct information! ")],-1),G=o("span",{class:"text-3xl font-bold"},"Hard Mode",-1),A=r({setup(a){const e=x();e.clearGame(),e.$state=_();const n=h();async function t(){e.startGame(),await n.push(`/game${e.hardMode?"?mode=hard":""}`)}return(i,l)=>(d(),c("div",$,[C,S,B,f(w,{modelValue:s(e).hardMode,"onUpdate:modelValue":l[0]||(l[0]=u=>s(e).hardMode=u),class:"mb-5","input-class":"h-8 w-8"},{default:b(()=>[G]),_:1},8,["modelValue"]),o("div",{role:"button",class:"bg-green-500 text-white font-bold rounded-md px-5 py-2 text-4xl hover:bg-green-600 cursor-pointer",onClick:t}," Start Game ")]))}});export{A as default};
