import{bD as re,bE as ce,bF as D,ay as c,W as m,X as t,bp as ue,b3 as y,bm as F,bZ as U,aG as h,a2 as s,b1 as o,I as _,aE as q,U as T,D as f,a1 as $,bz as be,by as $e,Q as z,k as B,as as ye,aY as H,ao as we,b_ as Ve,ak as X,aH as Se,al as ie,b$ as Ce,bw as ke,c0 as Fe}from"./index.5eea81a9.js";import{_ as g,V as w,u as Re}from"./VIcon.a9286c26.js";import{V as te,a as j,b as E,c as Ue,d as ee,H as Pe,F as Ie}from"./HeroSection.2faea380.js";import{V as R}from"./ssrBoot.0b59e3e0.js";import{V,a as P,m as Be,b as He,u as qe,f as Te,c as Le,d as Ae,e as Me,g as Ne,h as ze,i as le}from"./VTextField.d819846e.js";import{V as De}from"./VForm.a52664c5.js";import{I as je,i as Ee,n as Ge}from"./VBtn.ae1e3450.js";const Qe={computed:{...re(D,["isLoggedIn","email","password"])},methods:{...ce(D,["signIn"])}},Oe={class:"modal fade",id:"login"},Ye={class:"modal-dialog"},Je={class:"modal-content"},We=t("div",{class:"modal-header"},[t("h5",{class:"modal-title"},"Iniciar sesi\xF3n"),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Ze={class:"modal-body"},Ke={class:"input-group mb-3"},Xe=t("span",{class:"input-group-text"},"Correo",-1),et={class:"input-group mb-3"},tt=t("span",{class:"input-group-text"},"Password",-1),st=t("div",{class:"d-grid gap-2"},[t("button",{type:"submit",class:"btn btn-primary","data-bs-dismiss":"modal"}," Iniciar sesi\xF3n ")],-1);function at(e,n,p,d,l,r){return c(),m("div",Oe,[t("div",Ye,[t("div",Je,[We,t("div",Ze,[t("form",{onSubmit:n[2]||(n[2]=ue(a=>e.signIn(),["prevent"]))},[t("div",Ke,[Xe,y(t("input",{"onUpdate:modelValue":n[0]||(n[0]=a=>e.email=a),type:"email",required:"true",class:"form-control"},null,512),[[F,e.email]])]),t("div",et,[tt,y(t("input",{"onUpdate:modelValue":n[1]||(n[1]=a=>e.password=a),type:"password",required:"true",class:"form-control"},null,512),[[F,e.password]])]),st],32)])])])])}const ot=g(Qe,[["render",at]]),nt={computed:{...re(D,["isLoggedIn","email","password","repassword"])},methods:{...ce(D,["register"])}},it={class:"modal fade",id:"registro"},lt={class:"modal-dialog"},rt={class:"modal-content"},ct=t("div",{class:"modal-header"},[t("h5",{class:"modal-title"},"Reg\xEDstrate"),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),ut={class:"modal-body"},dt={class:"input-group mb-3"},mt=t("span",{class:"input-group-text"},"Correo",-1),pt={class:"input-group mb-3"},ht=t("span",{class:"input-group-text"},"Password",-1),ft={class:"input-group mb-3"},_t=t("span",{class:"input-group-text"},"Repite Password",-1),gt=t("div",{class:"d-grid gap-2"},[t("button",{type:"submit",class:"btn btn-primary","data-bs-dismiss":"modal"}," Registrar ")],-1);function vt(e,n,p,d,l,r){return c(),m("div",it,[t("div",lt,[t("div",rt,[ct,t("div",ut,[t("form",{onSubmit:n[3]||(n[3]=ue(a=>e.register(),["prevent"]))},[t("div",dt,[mt,y(t("input",{"onUpdate:modelValue":n[0]||(n[0]=a=>e.email=a),type:"email",required:"true",class:"form-control"},null,512),[[F,e.email]])]),t("div",pt,[ht,y(t("input",{"onUpdate:modelValue":n[1]||(n[1]=a=>e.password=a),type:"password",required:"true",class:"form-control"},null,512),[[F,e.password]])]),t("div",ft,[_t,y(t("input",{"onUpdate:modelValue":n[2]||(n[2]=a=>e.repassword=a),type:"password",required:"true",class:"form-control"},null,512),[[F,e.repassword]])]),gt],32)])])])])}const xt=g(nt,[["render",vt]]),bt={setup(){return{imageUrl:new URL("/house-state/assets/cards",self.location).href}},data(){return{blogs:[{src:"/property-1",title:"Properties for sale",subtitle:"Sep. 15th",explain:""},{src:"/property-2",title:"Modern Home",subtitle:"Dec. 20th",explain:""},{src:"/property-3",title:"15% Deal Discount For House",subtitle:"Oct. 10th",explain:""}]}},mounted(){U.init()}},$t={class:"pt-8 pb-16 bg-grey-lighten-4"},yt=t("div",{class:"text-center pb-16"},[t("h1",{class:"text-h3 pa-4 text-primary"},"Recent From Blog"),t("p",{class:"text-subtitle-2 text-grey"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit est facilis maiores")],-1),wt={class:"ma-4"},Vt={class:"d-flex"};function St(e,n,p,d,l,r){const a=h("rounter-link");return c(),m("section",$t,[yt,t("div",null,[s(P,null,{default:o(()=>[(c(!0),m(_,null,q(l.blogs,u=>(c(),T(V,{key:u,cols:"12",sm:"4"},{default:o(()=>[t("div",wt,[s(te,{"data-aos":"zoom-in","data-aos-duration":"3000"},{default:o(()=>[s(R,{src:`${d.imageUrl}${u.src}.jpg`,class:"align-end",height:"300px",cover:""},null,8,["src"]),s(j,{class:"pt-4",textContent:f(u.title)},null,8,["textContent"]),t("div",Vt,[s(E,{textContent:f(u.subtitle)},null,8,["textContent"]),s(Ue),s(E,null,{default:o(()=>[$("21")]),_:1}),s(w,{icon:"mdi-chat",class:"text-primary pr-4"})]),s(ee,null,{default:o(()=>[$("Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.")]),_:1}),s(ee,{class:"text-primary"},{default:o(()=>[s(a,null,{default:o(()=>[$("Learn More...")]),_:1})]),_:1})]),_:2},1024)])]),_:2},1024))),128))]),_:1})])])}const Ct=g(bt,[["render",St]]),kt="/house-state/assets/clients/cover_bg_2.jpg";const Ft=be({name:"VTextarea",directives:{Intersect:je},inheritAttrs:!1,props:{autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,hint:String,persistentHint:Boolean,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,...Be(),...He()},emits:{"click:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,n){let{attrs:p,emit:d,slots:l}=n;const r=$e(e,"modelValue"),{isFocused:a,focus:u,blur:G}=qe(e),Q=z(()=>typeof e.counterValue=="function"?e.counterValue(r.value):(r.value||"").toString().length),O=z(()=>{if(p.maxlength)return p.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function Y(i,v){var x,b;!e.autofocus||!i||(x=v[0].target)==null||(b=x.focus)==null||b.call(x)}const L=B(),S=B(),se=B(""),A=B(),ae=z(()=>a.value||e.persistentPlaceholder),de=z(()=>e.messages.length?e.messages:ae.value||e.persistentHint?e.hint:"");function J(){if(A.value!==document.activeElement){var i;(i=A.value)==null||i.focus()}a.value||u()}function me(i){J(),d("click:control",i)}function pe(i){i.stopPropagation(),J(),ie(()=>{r.value="",Ce(e["onClick:clear"],i)})}function he(i){r.value=i.target.value}const C=B();function k(){!e.autoGrow||ie(()=>{if(!C.value||!S.value)return;const i=getComputedStyle(C.value),v=getComputedStyle(S.value.$el),x=parseFloat(i.getPropertyValue("--v-field-padding-top"))+parseFloat(i.getPropertyValue("--v-input-padding-top"))+parseFloat(i.getPropertyValue("--v-field-padding-bottom")),b=C.value.scrollHeight,W=parseFloat(i.lineHeight),Z=Math.max(parseFloat(e.rows)*W+x,parseFloat(v.getPropertyValue("--v-input-control-height"))),K=parseFloat(e.maxRows)*W+x||1/0;se.value=ke(Fe(b!=null?b:0,Z,K))})}ye(k),H(r,k),H(()=>e.rows,k),H(()=>e.maxRows,k),H(()=>e.density,k);let M;return H(C,i=>{if(i)M=new ResizeObserver(k),M.observe(C.value);else{var v;(v=M)==null||v.disconnect()}}),we(()=>{var i;(i=M)==null||i.disconnect()}),Re(()=>{const i=!!(l.counter||e.counter||e.counterValue),v=!!(i||l.details),[x,b]=Ve(p),[{modelValue:W,...Z}]=Te(e),[K]=Le(e);return s(Ne,X({ref:L,modelValue:r.value,"onUpdate:modelValue":I=>r.value=I,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-text-field--flush-details":["plain","underlined"].includes(e.variant)}],"onClick:prepend":e["onClick:prepend"],"onClick:append":e["onClick:append"]},x,Z,{focused:a.value,messages:de.value}),{...l,default:I=>{let{isDisabled:N,isDirty:oe,isReadonly:fe,isValid:_e}=I;return s(Ae,X({ref:S,style:{"--v-textarea-control-height":se.value},"onClick:control":me,"onClick:clear":pe,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:"textbox"},K,{active:ae.value||oe.value,dirty:oe.value||e.dirty,focused:a.value,error:_e.value===!1}),{...l,default:ge=>{let{props:{class:ne,...ve}}=ge;return s(_,null,[e.prefix&&s("span",{class:"v-text-field__prefix"},[e.prefix]),y(s("textarea",X({ref:A,class:ne,value:r.value,onInput:he,autofocus:e.autofocus,readonly:fe.value,disabled:N.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:J,onBlur:G},ve,b),null),[[Se("intersect"),{handler:Y},null,{once:!0}]]),e.autoGrow&&y(s("textarea",{class:[ne,"v-textarea__sizer"],"onUpdate:modelValue":xe=>r.value=xe,ref:C,readonly:!0,"aria-hidden":"true"},null),[[F,r.value]]),e.suffix&&s("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:v?I=>{var N;return s(_,null,[(N=l.details)==null?void 0:N.call(l,I),i&&s(_,null,[s("span",null,null),s(Me,{active:e.persistentCounter||a.value,value:Q.value,max:O.value},l.counter)])])}:void 0})}),ze({},L,S,A)}}),Rt={data:()=>({valid:!1,name:"",nameRules:[e=>!!e||"Name is required",e=>e.length<=10||"Name must be less than 10 characters"],phone:"",phoneRules:[e=>!!e||"Name is required",e=>e.length<=12||"Name must be less than 10 characters"],email:"",emailRules:[e=>!!e||"E-mail is required",e=>/.+@.+/.test(e)||"E-mail must be valid"]}),mounted(){U.init()}},Ut={class:"contact"},Pt={class:"contact-content"},It=t("div",{class:"text-center pb-4"},[t("h1",{class:"text-h3 pa-4 text-primary"},"Ask an agent, We're here to help 24/7"),t("p",{class:"text-subtitle-2 pt-4 text-grey"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit est facilis maiores, perspiciatis accusamus asperiores sint consequuntur debitis.")],-1),Bt=t("span",{class:"text-white text-subtitle-2 text-uppercase"},"send message",-1);function Ht(e,n,p,d,l,r){const a=h("TheFooter");return c(),m(_,null,[t("section",Ut,[t("div",Pt,[s(P,{"no-gutters":""},{default:o(()=>[s(V,{cols:"12",sm:"6",class:"pa-16","data-aos":"fade-up","data-aos-anchor-placement":"top-bottom","data-aos-duration":"2000"},{default:o(()=>[It,s(De,{ref:"form",id:"form",class:"pt-16"},{default:o(()=>[s(le,{modelValue:e.name,"onUpdate:modelValue":n[0]||(n[0]=u=>e.name=u),counter:10,rules:e.nameRules,label:"Your Name",required:"","bg-color":"#F8F9FA",color:"primary"},null,8,["modelValue","rules"]),s(le,{modelValue:e.email,"onUpdate:modelValue":n[1]||(n[1]=u=>e.email=u),rules:e.emailRules,label:"Your Email",required:"","bg-color":"#F8F9FA",color:"primary"},null,8,["modelValue","rules"]),s(Ft,{solo:"",name:"input-7-4",label:"",placeholder:"Your Message","bg-color":"#F8F9FA",color:"primary"}),s(Ee,{color:"primary",elevation:"2",class:"mt-4 pa-4 h-50",width:""},{default:o(()=>[Bt]),_:1})]),_:1},512)]),_:1}),s(V,{cols:"12",sm:"6"},{default:o(()=>[s(R,{src:kt,cover:"",class:"h-100"})]),_:1})]),_:1})])]),s(a)],64)}const qt=g(Rt,[["render",Ht]]);const Tt={setup(){return{imageUrl:new URL("/house-state/assets/cards",self.location).href}},data(){return{cards:[{src:"/property-1",categorey:"Rent",price:"$3000",title:"Properties Near in Beach, USA California"},{src:"/property-2",categorey:"Sale",price:"$2000",title:"Modern House at NZ"},{src:"/property-3",categorey:"Rent",price:"$3000",title:"Bonggalo House"}]}},mounted(){U.init()}},Lt={class:"pt-8 pb-16 bg-grey-lighten-4"},At=t("div",{class:"text-center pb-16"},[t("h1",{class:"text-h3 pa-4 text-primary"},"Popular Properties"),t("p",{class:"text-subtitle-2 text-grey"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit est facilis maiores")],-1),Mt={class:"text-center"},Nt={class:"ma-4"};function zt(e,n,p,d,l,r){return c(),m("section",Lt,[At,t("div",Mt,[s(P,null,{default:o(()=>[(c(!0),m(_,null,q(l.cards,a=>(c(),T(V,{key:a,cols:"12",sm:"4"},{default:o(()=>[t("div",Nt,[s(te,{"data-aos":"zoom-in","data-aos-duration":"3000"},{default:o(()=>[s(R,{src:`${d.imageUrl}${a.src}.jpg`,class:"align-start",height:"300px",cover:""},{default:o(()=>[s(j,{class:"bg-primary text-white-override",textContent:f(a.categorey)},null,8,["textContent"]),s(j,{class:"category text-center w-25 bg-primary ml-4",textContent:f(a.price)},null,8,["textContent"]),s(E,{class:"text-white text-left pa-4 text-h6",textContent:f(a.title)},null,8,["textContent"])]),_:2},1032,["src"])]),_:2},1024)])]),_:2},1024))),128))]),_:1})])])}const Dt=g(Tt,[["render",zt]]),jt={data(){return{service:[{icon:"mdi-google-maps",title:"Move House"},{icon:"mdi-folder-outline",title:"Mortgage"},{icon:"mdi-wallet-travel",title:"Make Money"},{icon:"mdi-chart-pie",title:"Business Home"},{icon:"mdi-grid",title:"Marketing"},{icon:"mdi-chat",title:"Explorer"}]}},mounted(){U.init()}},Et={class:"pt-8 pb-16"},Gt=t("div",{class:"text-center pb-16"},[t("h1",{class:"text-h3 pa-4 text-primary"},"Services"),t("p",{class:"text-subtitle-2 text-grey"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit est facilis maiores")],-1),Qt={class:"text-center"},Ot={class:"d-flex direction-column","data-aos":"fade-up","data-aos-duration":"2000"},Yt={class:"text-left"},Jt={class:"text-h6 pt-2 pb-2"},Wt=t("p",{class:"text-subtitle-2"},"Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.",-1);function Zt(e,n,p,d,l,r){const a=h("routerLink");return c(),m("section",Et,[Gt,t("div",Qt,[s(P,{gutters:""},{default:o(()=>[(c(!0),m(_,null,q(l.service,u=>(c(),T(V,{key:u,cols:"12",sm:"4"},{default:o(()=>[t("div",Ot,[t("div",null,[s(w,{icon:u.icon,size:"50",class:"pa-8 text-grey-lighten-2"},null,8,["icon"])]),t("div",Yt,[t("h3",Jt,f(u.title),1),Wt,s(a,{to:"#",variant:"text",class:"pl-0 text-primary"},{default:o(()=>[$("Learn More")]),_:1})])])]),_:2},1024))),128))]),_:1})])])}const Kt=g(jt,[["render",Zt]]);const Xt={setup(){return{imageUrl:new URL("/house-state/assets/clients",self.location).href}},data:()=>({teamList:[{id:1,src:"/user-1",title:"Jean Smith",explain:"Quos quia provident consequuntur culpa facere ratione maxime commodi voluptates id repellat",href:"https://github.com/majidakhoulani"},{id:2,src:"/user-2",title:"Hush Raven",explain:"Quos quia provident consequuntur culpa facere ratione maxime commodi voluptates id repellat",href:"https://github.com/majidakhoulani"},{id:3,src:"/user-3",title:"Alex King",explain:"Quos quia provident consequuntur culpa facere ratione maxime commodi voluptates id repellat",href:"https://github.com/majidakhoulani"},{id:4,src:"/user-4",title:"Hush Raven",explain:"Quos quia provident consequuntur culpa facere ratione maxime commodi voluptates id repellat",href:"https://github.com/TaiseerAlmedani"}]}),mounted(){U.init()}},es={class:"pt-8 pb-16 bg-primary"},ts=t("div",{class:"text-center pb-16"},[t("h1",{class:"text-h3 pa-4 text-white"},"Our Agents"),t("p",{class:"text-subtitle-2 text-grey-lighten-2"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit est facilis maiores")],-1),ss={class:"text-center"},as={align:"center"},os={class:"w-100 pa-2"},ns=["textContent"],is=["textContent"],ls={href:"#",class:"ma-2"},rs=["href"],cs={href:"#",class:"ma-2"};function us(e,n,p,d,l,r){return c(),m("section",es,[ts,t("div",ss,[s(P,{"no-gutters":""},{default:o(()=>[(c(!0),m(_,null,q(e.teamList,a=>(c(),T(V,{key:a.id,cols:"12",sm:"3",class:"d-flex mb-6 justify-space-around","data-aos":"fade-up","data-aos-anchor-placement":"top-bottom","data-aos-duration":"2000"},{default:o(()=>[t("div",as,[t("div",null,[s(R,{src:`${d.imageUrl}${a.src}.jpg`,height:"200px",width:"200px",cover:"",class:"rounded-circle mb-4"},null,8,["src"])]),t("div",os,[t("h3",{class:"mt-6 font-weight-bold text-white",color:"#212529",textContent:f(a.title)},null,8,ns),t("p",{class:"mt-2 mb-4 text-grey-lighten-2",textContent:f(a.explain)},null,8,is),t("a",ls,[s(w,{color:"white"},{default:o(()=>[$(" mdi-twitter ")]),_:1})]),t("a",{href:a.href,class:"ma-2"},[s(w,{color:"white"},{default:o(()=>[$(" mdi-github ")]),_:1})],8,rs),t("a",cs,[s(w,{"x-large":"",color:"white"},{default:o(()=>[$(" mdi-linkedin ")]),_:1})])])])]),_:2},1024))),128))]),_:1})])])}const ds=g(Xt,[["render",us]]),ms="/house-state/assets/cards/cover_bg_1.jpg";const ps={setup(){return{imageUrl:new URL("/house-state/assets/testimonials",self.location).href}},data(){return{testimonials:[{description:" Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgr right at the coast of the Semantics, a large language ocean.",src:"/testimonials-4",title:"John Doe",subtitle:"Sales",height:"298"},{description:" Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgr right at the coast of the Semantics, a large language ocean.",src:"/testimonials-6",title:"Mia Asano",subtitle:"Sales",height:"260"},{description:" Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgr right at the coast of the Semantics, a large language ocean.",src:"/testimonials-5",title:"Jusef Aswan",subtitle:"Sales",height:"298"}]}},mounted(){U.init()}},hs={class:"pt-8 pb-16 bg-grey-lighten-4"},fs=t("div",{class:"text-center pb-16 pt-4"},[t("h1",{class:"text-h3 pa-4 text-primary"},"Happy Clients")],-1),_s={class:"text-center pt-2"},gs={class:"ma-4"},vs={class:"testimonial-container added-box"};function xs(e,n,p,d,l,r){return c(),m("section",hs,[s(R,{src:ms,cover:""},{default:o(()=>[fs,t("div",_s,[s(P,null,{default:o(()=>[(c(!0),m(_,null,q(l.testimonials,a=>(c(),T(V,{key:e.card,cols:"12",sm:"4","data-aos":"fade-left","data-aos-offset":"300","data-aos-easing":"ease-in-sine","data-aos-duration":"2000"},{default:o(()=>[t("div",gs,[s(Ge,{color:"primary",indeterminate:"",height:"5",class:"w-100"}),s(te,{height:a.height,class:"pa-4 rounded-0"},{default:o(()=>[t("div",vs,[s(ee,{class:"testimonial text-left"},{default:o(()=>[s(w,{icon:"mdi-format-quote-open",size:"25",class:"rounded-circle text-left",color:"primary"}),$(" "+f(a.description)+" ",1),s(w,{icon:"mdi-format-quote-close text-right",size:"25",class:"rounded-circle",color:"primary"})]),_:2},1024),t("div",null,[s(R,{src:`${d.imageUrl}${a.src}.jpg`,alt:"user",width:"50",height:"50",class:"rounded-circle ma-auto"},null,8,["src"]),t("div",null,[s(j,{textContent:f(a.title)},null,8,["textContent"]),s(E,{textContent:f(a.subtitle)},null,8,["textContent"])])])])]),_:2},1032,["height"])])]),_:2},1024))),128))]),_:1})])]),_:1})])}const bs=g(ps,[["render",xs]]),$s={components:{HeroSection:Pe,ServiceSection:Kt,ProductSection:Dt,TeamSection:ds,BlogSection:Ct,ContactSection:qt,FooterSection:Ie,TestimonialsSection:bs,ModelLogIn:ot,ModelRegister:xt}};function ys(e,n,p,d,l,r){const a=h("HeroSection"),u=h("ServiceSection"),G=h("ProductSection"),Q=h("TestimonialsSection"),O=h("TeamSection"),Y=h("BlogSection"),L=h("ContactSection"),S=h("FooterSection");return c(),m(_,null,[s(a),s(u),s(G),s(Q),s(O),s(Y),s(L),s(S)],64)}const Us=g($s,[["render",ys]]);export{Us as default};
