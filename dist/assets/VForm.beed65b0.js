import{j as p,k as v,h as b}from"./VTextField.c3a3ef76.js";import{bz as h,k as V,a2 as F}from"./index.d3c5f4dc.js";import{u as R}from"./VIcon.1f9ed10a.js";const P=h({name:"VForm",props:{...p()},emits:{"update:modelValue":a=>!0,submit:a=>!0},setup(a,i){let{slots:s,emit:m}=i;const r=v(a),n=V();function u(t){t.preventDefault(),r.reset()}function f(t){const o=t,e=r.validate();o.then=e.then.bind(e),o.catch=e.catch.bind(e),o.finally=e.finally.bind(e),m("submit",o),o.defaultPrevented||e.then(d=>{let{valid:c}=d;if(c){var l;(l=n.value)==null||l.submit()}}),o.preventDefault()}return R(()=>{var t;return F("form",{ref:n,class:"v-form",novalidate:!0,onReset:u,onSubmit:f},[(t=s.default)==null?void 0:t.call(s,r)])}),b(r,n)}});export{P as V};