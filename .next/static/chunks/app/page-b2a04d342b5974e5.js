(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9864:function(e,n,t){Promise.resolve().then(t.bind(t,917))},917:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return o}});var i=t(7437),a=t(2265),s=t(5654),r=t(6691),l=t.n(r);function o(){let[e,n]=(0,a.useState)(null),[t,r]=(0,a.useState)(null),[o,c]=(0,a.useState)(!1),[d,u]=(0,a.useState)(null),m="AIzaSyCUS4Py9esmWg2fOc7i8UZsH3ButPXI-8U";if(!m)return(0,i.jsx)("div",{className:"text-red-600 p-4 bg-red-100 rounded-lg",children:"Error: You must provide a Gemini API key"});let p=new s.$D(m).getGenerativeModel({model:"gemini-1.5-flash-latest",generationConfig:{maxOutputTokens:300}}),g=async e=>{var t;let i=null===(t=e.target.files)||void 0===t?void 0:t[0];if(i){if(!i.type.startsWith("image/")){u("Please upload a valid image file.");return}if(i.size>5242880){u("Image size should be less than 5MB.");return}let e=new FileReader;e.onloadend=async()=>{let t=e.result;n(t),await f(t)},e.readAsDataURL(i)}},f=async e=>{c(!0),u(null),r(null);try{let n=e.split(",")[1]||e,t=await p.generateContent({contents:[{role:"user",parts:[{text:"Carefully identify this plant. Provide these details in a clear, concise format: Common Name, Scientific Name, Brief Description, and Basic Care Tips. If unsure about identification, explain why."},{inlineData:{mimeType:"image/jpeg",data:n}}]}]}),i=await t.response.text();console.log("Full Gemini Response:",i);let a=h(i);!a.name||a.name.toLowerCase().includes("unable")||a.name.toLowerCase().includes("not identified")?(u("Plant could not be identified. Please try a clear, well-lit image of the entire plant."),r(null)):r(a)}catch(e){console.error("Identification Error:",e),e instanceof Error?u("Identification failed: ".concat(e.message)):u("An unexpected error occurred during plant identification.")}finally{c(!1)}},h=e=>({name:x(e,"Common Name")||x(e,"Name")||"Unknown Plant",scientificName:x(e,"Scientific Name"),description:x(e,"Description")||x(e,"Brief Description"),careInstructions:x(e,"Care Tips")||x(e,"Care Instructions")}),x=(e,n)=>{let t=RegExp("".concat(n,":?\\s*(.+?)(?:\n|$)"),"i"),i=e.match(t);return i?i[1].trim():void 0};return(0,i.jsxs)("div",{className:"bg-white shadow-lg rounded-xl p-6 space-y-6",children:[(0,i.jsxs)("div",{className:"border-2 border-dashed border-green-300 rounded-lg p-6 text-center",children:[(0,i.jsx)("input",{type:"file",accept:"image/*",onChange:g,className:"hidden",id:"plant-upload"}),(0,i.jsx)("label",{htmlFor:"plant-upload",className:"cursor-pointer inline-block px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition",children:e?"Change Image":"Upload Plant Image"})]}),e&&(0,i.jsx)("div",{className:"flex flex-col items-center",children:(0,i.jsx)(l(),{src:e,alt:"Uploaded plant",width:300,height:300,className:"rounded-lg shadow-md mb-4"})}),o&&(0,i.jsx)("div",{className:"text-center text-green-600 animate-pulse",children:"Identifying plant... This may take a moment."}),d&&(0,i.jsx)("div",{className:"bg-red-100 text-red-800 p-4 rounded-lg",children:d}),t&&(0,i.jsxs)("div",{className:"bg-green-50 p-6 rounded-lg space-y-4",children:[(0,i.jsx)("h2",{className:"text-2xl font-bold text-green-800",children:t.name}),t.scientificName&&(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"Scientific Name:"})," ",t.scientificName]}),t.description&&(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"Description:"})," ",t.description]}),t.careInstructions&&(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"Care Instructions:"})," ",t.careInstructions]})]})]})}}},function(e){e.O(0,[783,971,938,744],function(){return e(e.s=9864)}),_N_E=e.O()}]);