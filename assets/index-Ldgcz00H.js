(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();const k=[{category:"Pizzor",items:[{name:"Vesuvio",description:"ost, skinka"},{name:"Bolognese",description:"ost, köttfärssås"},{name:"Capricciosa",description:"ost, skinka, champinjoner"},{name:"Margarita",description:"ost"},{name:"Pescatore",description:"ost, tonfisk"},{name:"Hawaii",description:"ost, skinka, ananas"},{name:"Marinara",description:"ost, musslor, lök"},{name:"La Maffia",description:"ost, bacon, lök"}]},{category:"Souvlaki",items:[{name:"Grillspett - Fläsk",description:"Fläskarré, tomat, paprika, lök, tzatziki"},{name:"Grillspett - Kyckling",description:"Kycklingfilé, tomat, paprika, lök, tzatziki"},{name:"Grillspett - Lamm",description:"Lammfilé, tomat, paprika, lök, tzatziki"},{name:"Grillspett - Vegetarisk",description:"tomat, paprika, lök, majs, champinjoner, tzatziki"}]},{category:"Hamburgare",items:[{name:"Cheese Burger ",description:"Hellmans mayo, ketchup, rödlök, saltgurka, cheddarost"},{name:"Chicken Burger",description:"Krispig kycklingfilé, Hellmans mayo, krispsallad, tomat, lök"},{name:"Chilimayo Burger",description:"BBQ-sås, chilimayo, tomat, krispsallad, picklad rödlök, cheddarost"},{name:"Sourcream & Onion Burger",description:"Rostad lök, karamelliserad lök, cheddarost, Sourcream & Onion dressing"}]},{category:"Kebab",items:[{name:"Kebab i pitabröd",description:"kebabkött, sallad, tomat, gurka, lök, feferoni, valfri sås"},{name:"Kebabrulle",description:"kebabkött, sallad, tomat, gurka, lök feferoni, valfri sås"},{name:"Kebabtallrik",description:"kebabkött, sallad, tomat, gurka, lök, feferoni, pommes, valfri sås"},{name:"Kebabpizza",description:"kebabkött, ost, sallad tomat, gurka, lök, feferoni, valfri sås"}]},{category:"Grillat",items:[{name:"Ryggbiff med kappa",description:"serveras med grillade grönsaker, bearnaise, rödvinssås och pommes"},{name:"Oxfilé",description:"serveras med grillade grönsaker, bearnaise, rödvinssås och pommes"},{name:"Köttfest Xtra",description:"Tre olika grillade styckdetaljer serveras med grillade grönsaker, bearnaise, rödvinssås och pommes"},{name:"Entrecote",description:"serveras med grillade grönsaker, bearnaise, rödvinssås och pommes"}]},{category:"Falafel",items:[{name:"Falafelrulle",description:"falafel, sallad, tomat, gurka, lök, feferoni, valfri sås"},{name:"Falafeltallrik",description:"falafel, sallad, tomat, gurka, lök, feferoni, pommes, valfri sås"}]}],C=["Kebabpizza","Sourcream & Onion Burger"],b=["Kebabpizza","Sourcream & Onion Burger","Köttfest Xtra","Grillspett - Kyckling","Falafelrulle","Grillspett - Vegetarisk"],y=["Kebabpizza","Sourcream & Onion Burger","Köttfest Xtra","Grillspett - Kyckling","Falafelrulle","Grillspett - Vegetarisk"];function g(){let t=document.createElement("button");t.classList.add("menu-button");let e=document.createElement("p");return e.textContent="Meny",t.appendChild(e),t}function d(){let t=document.getElementById("daily"),e=document.createElement("h4");e.textContent="Dagens lunch 99:-";let n=document.createElement("p");n.textContent="må-fr 11-16",t.appendChild(e),t.appendChild(n)}function c(){let t=document.getElementById("allergies"),e=document.createElement("h4");e.textContent="Allergier? Fråga oss:",t.appendChild(e);let n=document.createElement("button");n.classList.add("contact-button");let r=document.createElement("p");r.textContent="Kontakt",n.appendChild(r),t.appendChild(n)}function f(){let t=document.getElementById("fresh"),e=document.createElement("h2");e.textContent="Alltid färska råvaror!",t.appendChild(e)}function h(){let t=document.getElementById("allDishes"),e=document.createElement("h4");e.textContent="Alla våra rätter:",t.appendChild(e);let n=g();t.appendChild(n)}function E(t){let e=document.createElement("div");e.classList.add("dish");let n=document.createElement("h4");n.textContent=t.name;let r=document.createElement("p");return r.textContent=t.description,e.appendChild(n),e.appendChild(r),e}function m(){let t=document.getElementById("recommendedDishes"),e=document.createElement("h2");e.textContent="Våra kunder rekommenderar",t.appendChild(e);function n(r){r.forEach(function(i){let a=k.flatMap(o=>o.items).find(o=>o.name===i);if(a){let o=E(a);t.appendChild(o)}})}if(window.innerWidth<768){n(C);let r=g();t.appendChild(r)}else window.innerWidth>=768&&window.innerWidth<1024?n(b):n(y)}function v(){let t=window.innerWidth;window.innerWidth<768?(d(),m(),c()):(t>=768&&t<1024,m(),d(),c(),f(),h())}document.addEventListener("DOMContentLoaded",()=>{v()});function B(){let t=document.getElementById("cookieContainer"),e=document.getElementById("cookie");function n(){t.style.display="none"}let r=document.createElement("p");r.className="message",r.textContent="Välkommen till Georgios Pizzeria! För den bästa upplevelsen på vår hemsida rekommenderar vi att du godkänner cookies.";let i=document.createElement("h4");i.textContent="Acceptera";let a=document.createElement("button");a.id="acceptButton",a.appendChild(i),a.addEventListener("click",n);let o=document.createElement("h4");o.textContent="Neka";let s=document.createElement("button");return s.id="rejectButton",s.appendChild(o),s.addEventListener("click",n),e.appendChild(r),e.appendChild(s),e.appendChild(a),n}function x(){const t=document.getElementById("menu"),e=document.createElement("div");e.classList.add("logo-container");const n=document.createElement("img");n.setAttribute("src","./assets/logotype.svg"),n.setAttribute("alt","Georgios Pizzeria Logo"),e.appendChild(n),t.appendChild(e);const r=document.createElement("h1");r.textContent="Meny",t.appendChild(r),k.forEach(i=>{const a=document.createElement("h2");a.textContent=i.category,t.appendChild(a);const o=document.createElement("div");o.classList.add("menu-container"),i.items.forEach(s=>{const l=document.createElement("div");l.classList.add("menu-item");const p=document.createElement("h3");p.textContent=s.name,l.appendChild(p);const u=document.createElement("p");u.textContent=s.description,l.appendChild(u),o.appendChild(l)}),t.appendChild(o)})}document.addEventListener("DOMContentLoaded",function(){B(),x()});const D=document.querySelector("#submitBtn"),L=document.querySelector("#addressField");L.addEventListener("input",function(){D.removeAttribute("disabled","")});
