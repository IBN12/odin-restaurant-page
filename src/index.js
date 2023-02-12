/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: index.js
// Description: This is the main source page where all modules are imported.
// Notes: N/A
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import LoadHomePage from "./home";
import LoadMenuPage from "./menu";
import LoadDrinksPage from "./drinks";
import LoadAboutUsPage from "./about-us";
import InitialPageLoad from "./initial-page-load";

let count = 0;

initial();

function NavSelection(){
    count++;
    console.log(`Count: ${count}`);

    const homeButton = document.querySelector('#home-button');
    const menuButton = document.querySelector('#menu-button');
    const drinksButton = document.querySelector('#drinks-button');
    const aboutUsButton = document.querySelector('#about-us-button');

    homeButton.addEventListener('click', LoadHomePage);
    menuButton.addEventListener('click', LoadMenuPage);
    drinksButton.addEventListener('click', LoadDrinksPage);
    aboutUsButton.addEventListener('click', LoadAboutUsPage);

    console.log("Outside of the Event Listeners in the Navigation Selection function..."); // Testing
}

function initial(){
    InitialPageLoad();
    LoadHomePage();
    NavSelection();
}

