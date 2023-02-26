/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: index.js
// Description: This is the main source page where all modules are imported.
// Notes: N/A
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import LoadHomePage from "./home";
import LoadMenuPage from "./menu";
import LoadDrinksPage from "./drinks";
import LoadAboutUsPage from "./about-us";
import LoadContactUsPage from "./contact-us";
import InitialPageLoad from "./initial-page-load";


function NavSelection(){
    const homeButton = document.querySelector('#home-button');
    const menuButton = document.querySelector('#menu-button');
    const drinksButton = document.querySelector('#drinks-button');
    const aboutUsButton = document.querySelector('#about-us-button');
    const contactUsButton = document.querySelector('#contact-us-button');

    homeButton.addEventListener('click', LoadHomePage);
    menuButton.addEventListener('click', LoadMenuPage);
    drinksButton.addEventListener('click', LoadDrinksPage);
    aboutUsButton.addEventListener('click', LoadAboutUsPage);
    contactUsButton.addEventListener('click', LoadContactUsPage);
}

const initial = (() => {
    InitialPageLoad();
    LoadHomePage();
    NavSelection();
})();