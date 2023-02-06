/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: index.js
// Description: This is the main source page where all modules are imported.
// Notes: N/A
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log("This is the main source page."); // Testing
import LoadHomePage from "./home";
import LoadMenuPage from "./menu";
import InitialPageLoad from "./initial-page-load";


initial();

function NavSection(){
    const menuPage = document.querySelector('#menu-button');
    const homePage = document.querySelector('#home-button');
    menuPage.addEventListener('click', LoadMenuPage);
    homePage.addEventListener('click', LoadHomePage);
}

// initial(): Function will load the initial contents for the user.
function initial() {
    LoadHomePage();
    InitialPageLoad();
    NavSection();
}

