"use strict";(self.webpackChunkexample_business_site=self.webpackChunkexample_business_site||[]).push([[144],{9141:function(e,t,l){var c=l(7294),a=l(6619);t.Z=e=>{let{product:t}=e;const{cart:l,addToCart:n}=c.useContext(a.A);console.log(l);const{title:o,category:r,price:i,sale:s,salePrice:u}=t;return console.log(t),c.createElement("div",{className:"w-full flex flex-col"},c.createElement("div",{className:"py-48 text-9xl text-center text-rose-300 bg-slate-300"},o),c.createElement("div",{className:"px-2 flex flex-row justify-between"},c.createElement("p",null,"The Letter ",o),s?c.createElement("div",{className:"flex flex-row"},c.createElement("p",null,"$",u),c.createElement("p",{className:"ml-2 line-through"},"$",i)):c.createElement("p",null,"$",i)),c.createElement("p",{className:"pl-4 font-extralight"},"This is where a product description goes."),c.createElement("button",{onClick:()=>n(t),className:"mt-px px-2 h-8 shadow-md hover:shadow-none hover:border-green-500 hover:border-2"},"Add to Cart"))}},7075:function(e,t,l){l.d(t,{R:function(){return c}});const c=[{title:"A",category:"vow",price:1,quantity:1},{title:"B",category:"con",price:3,quantity:1},{title:"C",category:"con",price:3,quantity:1},{title:"D",category:"con",price:2,quantity:1},{title:"E",category:"vow",price:1,quantity:1},{title:"F",category:"con",price:4,quantity:1},{title:"G",category:"con",price:2,quantity:1},{title:"H",category:"con",price:4,quantity:1},{title:"I",category:"vow",price:1,quantity:1},{title:"J",category:"con",price:8,quantity:1},{title:"K",category:"con",price:5,quantity:1},{title:"L",category:"con",price:1,quantity:1},{title:"M",category:"con",price:3,quantity:1},{title:"N",category:"con",price:1,quantity:1},{title:"O",category:"vow",price:1,quantity:1},{title:"P",category:"con",price:3,quantity:1},{title:"Q",category:"con",price:10,quantity:1,sale:!0,salePrice:5},{title:"R",category:"con",price:1,quantity:1},{title:"S",category:"con",price:1,quantity:1},{title:"T",category:"con",price:1,quantity:1},{title:"U",category:"vow",price:1,quantity:1},{title:"V",category:"con",price:4,quantity:1},{title:"W",category:"con",price:4,quantity:1},{title:"X",category:"con",price:8,quantity:1,sale:!0,salePrice:4},{title:"Y",category:"oth",price:4,quantity:1,sale:!0,salePrice:2},{title:"Z",category:"con",price:10,quantity:1,sale:!0,salePrice:3}]},7210:function(e,t,l){l.r(t);var c=l(7294),a=l(9141),n=l(7075);t.default=()=>{const[e,t]=c.useState("all");let l=n.R;return"all"!==e&&(l=n.R.filter((t=>t.category===e))),c.createElement("main",null,c.createElement("nav",{className:"w-full bg-green-500"},c.createElement("ul",{className:"ml-4 py-2 flex flex-row gap-4"},"all"===e?c.createElement("button",{className:"font-bold underline"},"all"):c.createElement("button",{className:"font-light",onClick:()=>t("all")},"all"),"con"===e?c.createElement("button",{className:"font-bold underline"},"consonants"):c.createElement("button",{className:"font-light",onClick:()=>t("con")},"consonants"),"vow"===e?c.createElement("button",{className:"font-bold underline"},"vowels"):c.createElement("button",{className:"font-light",onClick:()=>t("vow")},"vowels"),"oth"===e?c.createElement("button",{className:"font-bold underline"},"other"):c.createElement("button",{className:"font-light",onClick:()=>t("oth")},"other"))),c.createElement("div",{className:"mt-4 w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-2"},l.map(((e,t)=>c.createElement(a.Z,{key:t,product:e})))))}}}]);
//# sourceMappingURL=component---src-pages-shop-tsx-8bf1ec429747854479a0.js.map