//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: about-us.js
// Description: This is the about us page for the application.
// Notes: N/A
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function LoadAboutUsPage(){
    console.log("The about us page has loaded"); // Testing

    const content = document.querySelector('#content');
    content.classList.remove('home-page-background');
    content.classList.remove('menu-page-background');
    content.classList.remove('drinks-page-background');
    content.classList.remove('contact-us-page-background');

    content.classList.add('about-us-page-background');
}

export default LoadAboutUsPage;