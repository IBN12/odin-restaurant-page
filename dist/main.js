(()=>{"use strict";const e=function(){console.log("The home page has loaded");const e=document.querySelector("#content");e.classList.remove("menu-page-background"),e.classList.add("home-page-background")},t=function(){console.log("The menu page has loaded");const e=document.querySelector("#content");e.classList.remove("home-page-background"),e.classList.add("menu-page-background")};console.log("This is the main source page."),e(),function(){const e=document.querySelector("#content");console.log(e),e.setAttribute("style","border: 1px solid red;");const t=document.createElement("div");t.classList.add("navigation-content");const n=document.createElement("button");n.setAttribute("id","menu-button"),n.textContent="Menu";const o=document.createElement("button");o.setAttribute("id","home-button"),o.textContent="Home",t.appendChild(o),t.appendChild(n),e.appendChild(t)}(),function(){const n=document.querySelector("#menu-button"),o=document.querySelector("#home-button");n.addEventListener("click",t),o.addEventListener("click",e)}()})();