//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: about-us.js
// Description: This is the about us page for the application.
// Notes: N/A
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import bangkokThailand from '../dist/images/Bangkok-Thailand.png';
import france from '../dist/images/France.png';
import louisiana from '../dist/images/Louisiana.png';
import middleEast from '../dist/images/Middle-East.png';
import italy from '../dist/images/Italy.png';
import caribbean from '../dist/images/Caribbean.png';

// aboutUsItems module: Will produce the container items in the about us content section
const CreateItems = (()=>{
    const createItems = (aboutUsContent) => {
        for (let i = 0; i < 7; i++)
        {
            const aboutUsItems = document.createElement('div');
            aboutUsContent.appendChild(aboutUsItems);
        }
    }

    return {createItems};
})();

// RemovePreviousModuleContent(): Will remove content from the previous module.
function RemovePreviousModuleContent(){
    // Remove any content from the last modules main content section.
    const mainModuleContent = document.querySelector('.main-module-content');
    mainModuleContent.replaceChildren();

    // Remove the current module tab from the last module that the user was on.
    if (document.querySelector('#home-button').classList.contains('current-module-tab'))
    {
        document.querySelector('#home-button').classList.remove('current-module-tab');
    }
    else if (document.querySelector('#menu-button').classList.contains('current-module-tab'))
    {
        document.querySelector('#menu-button').classList.remove('current-module-tab');
    }
    else if (document.querySelector('#drinks-button').classList.contains('current-module-tab'))
    {
        document.querySelector('#drinks-button').classList.remove('current-module-tab');
    }
    else if (document.querySelector('#contact-us-button').classList.contains('current-module-tab'))
    {
        document.querySelector('#contact-us-button').classList.remove('current-module-tab');
    }
}

// AddCurrentModuleContent(): Will add content to the current module. 
function AddCurrentModuleContent(){
    const mainModuleContent = document.querySelector('.main-module-content');

    const aboutUsButton = document.querySelector('#about-us-button');
    aboutUsButton.classList.add('current-module-tab');

    const aboutUsContent = document.createElement('div');
    aboutUsContent.setAttribute('id', 'about-us-content');
    CreateItems.createItems(aboutUsContent);

    // Image One: Bangkok, Thailand
    const aboutUsItemImageOne = document.createElement('img');
    aboutUsItemImageOne.src = bangkokThailand;
    aboutUsContent.childNodes[0].appendChild(aboutUsItemImageOne);

    // Image Two: France
    const aboutUsItemImageTwo = document.createElement('img');
    aboutUsItemImageTwo.src = france;
    aboutUsContent.childNodes[1].appendChild(aboutUsItemImageTwo);

    // Image Three: Louisiana
    const aboutUsItemImageThree = document.createElement('img');
    aboutUsItemImageThree.src = louisiana;
    aboutUsContent.childNodes[2].appendChild(aboutUsItemImageThree);

    // Image Four: Middle East
    const aboutUsItemImageFour = document.createElement('img');
    aboutUsItemImageFour.src = middleEast;
    aboutUsContent.childNodes[4].appendChild(aboutUsItemImageFour);

    // Image Five: Italy
    const aboutUsItemImageFive = document.createElement('img');
    aboutUsItemImageFive.src = italy;
    aboutUsContent.childNodes[5].appendChild(aboutUsItemImageFive);

    // Image Six: Caribbean
    const aboutUsItemImageSix = document.createElement('img');
    aboutUsItemImageSix.src = caribbean;
    aboutUsContent.childNodes[6].appendChild(aboutUsItemImageSix);

    // Details:
    const para1 = document.createElement('p');
    para1.textContent = `Mosi's Restaurant was established in the year 2005, and since then has been claimed to be one of the 
    finest cultural eateries not only in Portland, but the state of Oregon. Our selection alone speaks for
    itself.`;

    const para2 = document.createElement('p');
    para2.textContent = `The establishment started as just a mere idea by young man who had a love for traveling. He brought
    his many experiences back to the states after traveling around the world learning about the history of various cultures
    and their traditions, above all, he expanded his knowledge in international culinary and cultural cuisine.`;

    const para3 = document.createElement('p');
    para3.textContent = `He first presented his new found knowledge to family and friends by cooking amazing cultural meals for
    them. He received a great amount of success from doing this and later went on to share it with his
    community, thus, Mosi's cultural eatery was born in Portland, the City of Roses.`;

    aboutUsContent.childNodes[3].appendChild(para1);
    aboutUsContent.childNodes[3].appendChild(para2);
    aboutUsContent.childNodes[3].appendChild(para3);

    mainModuleContent.appendChild(aboutUsContent);
}

// LoadAboutUsPage(): Loads all the methods needed for the module.
function LoadAboutUsPage(){
    RemovePreviousModuleContent();

    AddCurrentModuleContent();
}

export default LoadAboutUsPage;