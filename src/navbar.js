// import { contentDiv } from "./index.js";

function navBarPrakatHoo(){
    const navDiv = document.createElement('nav');
    navDiv.classList.add("navbar");

    // display board
    const heading = document.createElement('h4');
    const textNode = document.createTextNode("નાશ્તો");

    heading.appendChild(textNode);
    navDiv.appendChild(heading);

    // menu buttons
    const navBtnDiv = document.createElement('div');
    navBtnDiv.classList.add("navBtn-container");

    const homeBtn =document.createElement('a');
    homeBtn.textContent = "HOME";
    navBtnDiv.appendChild(homeBtn);

    const menuBtn =document.createElement('a');
    menuBtn.textContent = "MENU";
    navBtnDiv.appendChild(menuBtn);

    const contactBtn =document.createElement('a');
    contactBtn.textContent = "CONTACT";
    navBtnDiv.appendChild(contactBtn);

    navDiv.appendChild(navBtnDiv);

    const contentDiv = document.getElementById('content');
    contentDiv.appendChild(navDiv);

}

export { navBarPrakatHoo } ;


