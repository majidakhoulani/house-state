import{cb as d,bE as m,aG as p,ay as u,W as _,X as t,a2 as e,b1 as a,I as b,bF as n}from"./index.2fa4f297.js";import{_ as f}from"./VIcon.a67ec551.js";import{V as g}from"./VContainer.fd86f9dd.js";import{a as h,V,i as r}from"./VTextField.224396ac.js";import{V as w}from"./VForm.b21d7f8e.js";import{i}from"./VBtn.fab7ac77.js";const v={computed:{...d(n,["email","password"])},methods:{...m(n,["register"])}},x={class:"login text-center pt-16 pb-16 h-100"},y={class:"text-center w-50 ma-auto",style:{"background-color":"#536642"}},k=t("div",{class:"login-title pt-6"},[t("h1",{class:"text-h4 font-weight-bold pb-2 text-primary"},"Create an Account"),t("p",{class:"font-italic",style:{color:"rgb(228, 190, 141)"}},"Welcome To Our Website")],-1),C={class:"login-content mt-12"},F=t("span",{class:"text-white text-uppercase text-h6"},"SignIn",-1),W=t("span",{class:"text-white text-uppercase text-h6"},"WithGoogle",-1);function B(o,s,T,$,E,G){const c=p("TheFooter");return u(),_(b,null,[t("section",x,[t("div",y,[k,t("div",C,[e(g,null,{default:a(()=>[e(h,{"no-gutters":""},{default:a(()=>[e(V,{cols:"12",class:"ma-auto",xs:"12",sm:"9"},{default:a(()=>[e(w,null,{default:a(()=>[e(r,{type:"text",modelValue:o.email,"onUpdate:modelValue":s[0]||(s[0]=l=>o.email=l),label:"Email",variant:"solo"},null,8,["modelValue"]),e(r,{modelValue:o.password,"onUpdate:modelValue":s[1]||(s[1]=l=>o.password=l),type:"password",label:"Password",variant:"solo"},null,8,["modelValue"]),e(i,{elevation:"2",class:"mt-4 mb-4 pa-2 h-50 w-100 mr-12",onClick:o.register,style:{"border-color":"#44c662","background-color":"#536642"},variant:"outlined"},{default:a(()=>[F]),_:1},8,["onClick"]),e(i,{elevation:"2",class:"mt-4 mb-4 pa-2 w-100 h-50",onClick:o.SignINWithGoogle,style:{"border-color":"#44c662","background-color":"#536642"},variant:"outlined"},{default:a(()=>[W]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})]),_:1})])])]),e(c)],64)}const O=f(v,[["render",B]]);export{O as default};