import { navBarPrakatHoo } from "./navbar.js";
import { summonHomePage } from "./home.js";
import { summonMenuPage } from "./menu.js";
import { summonContactPage } from "./contact.js";
import { footerPrakatHoo } from "./footer.js";

const contentDiv = document.getElementById('content');


function homePageBanao(){
    contentDiv.replaceChildren();
    navBarPrakatHoo();
    summonHomePage();
    footerPrakatHoo();
}
function menuPageBanao(){
    contentDiv.replaceChildren();
    navBarPrakatHoo();
    summonMenuPage();
    footerPrakatHoo();
}
function contactPageBanao(){
    contentDiv.replaceChildren();
    navBarPrakatHoo();
    summonContactPage();
    footerPrakatHoo();    
}

homePageBanao();

document.addEventListener("click", (e) => {
    const target = e.target.textContent;
  
    if (target === "HOME") homePageBanao();
    if (target === "MENU") menuPageBanao();
    if (target === "CONTACT") contactPageBanao();
  });


console.log( " નાશ્તો કરવા હાલો " );