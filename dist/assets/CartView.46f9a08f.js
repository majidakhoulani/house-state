import{u as r}from"./cart.8a947c16.js";import{l as i,n as _,q as c,ak as n,A as t,U as h,ao as p,B as e,c as l,x as u,y as b}from"./index.a0f6f40f.js";import{_ as m}from"./_plugin-vue_export-helper.cdc0426e.js";import{V as d}from"./VIcon.b6ce3d6d.js";const y={computed:{...i(r,["cartContent","quantity"])},methods:{..._(r,["removeFromCart","incrementQ","decrementQ"])}},C={class:"row my-4"},g={cols:"12"},f={class:"table"},k=t("thead",{class:"bg-grey-darken-2"},[t("tr",{class:""},[t("th",{class:"pa-4"},"#"),t("th",{class:"pa-4"},"Image"),t("th",{class:"pa-4"},"Name"),t("th",{class:"pa-4"},"Quantity"),t("th",{class:"pa-4"},"Price"),t("th",{class:"pa-4"},"Subtotal"),t("th",{class:"pa-4"},"Delete")])],-1),$={class:"text-center"},v={class:"table-body"},x={class:"table-body"},V=["src"],S={class:"table-body"},q={class:"table-body"},w={class:"mx-2"},Q={class:"table-body"},B={class:"table-body"},N={class:"table-body"},F=t("th",{colSpan:"3",class:"text-center table-body"}," Total ",-1),A={colSpan:"4",class:"text-center table-body"},D={class:"badge bg-danger rounded-pill"};function I(a,T,z,E,L,P){return c(),n("div",C,[t("div",g,[t("table",f,[k,t("tbody",$,[(c(!0),n(h,null,p(a.cartContent,s=>(c(),n("tr",{key:s.id},[t("td",v,e(s.id),1),t("td",x,[t("img",{src:s.image,class:"fluid rounded",width:"150",height:"150"},null,8,V)]),t("td",S,e(s.title),1),t("td",q,[l(d,{icon:"mdi-plus",onClick:o=>a.incrementQ(s)},null,8,["onClick"]),t("span",w,e(s.quantity),1),l(d,{icon:"mdi-minus",onClick:o=>a.decrementQ(s)},null,8,["onClick"])]),t("td",Q," $"+e(s.price),1),t("td",B," $"+e(s.price*s.quantity),1),t("td",N,[l(d,{onClick:o=>a.removeFromCart(s),class:"text-red",size:"24"},{default:u(()=>[b("mdi-delete")]),_:2},1032,["onClick"])])]))),128)),t("tr",null,[F,t("td",A,[t("span",D," $"+e(a.cartContent.reduce((s,o)=>s+=o.price*o.quantity,0)),1)])])])])])])}const J=m(y,[["render",I]]);export{J as default};
