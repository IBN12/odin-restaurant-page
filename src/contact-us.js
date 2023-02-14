//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: contact-us.js
// Description: This is the contact us page for the application.
// Notes: N/A
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// CreateRows Module: Create Rows to contain the contact us info.
const CreateRows = (() => {
    const createRows = (contactUsContent) => {
        for (let i = 0; i < 4; i++)
        {
            const contactUsContentRow = document.createElement('div');
            contactUsContent.appendChild(contactUsContentRow);
        }
    }

    return {createRows};
})();

// RemovePreviousModuleContent(): Will remove content from the previous module.
function RemovePreviousModuleContent(){
    // Remove any content from the last modules main content section
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
    else if (document.querySelector('#about-us-button').classList.contains('current-module-tab'))
    {
        document.querySelector('#about-us-button').classList.remove('current-module-tab');
    }
}

// AddCurrentModuleContent(): Will add content to the current module.
function AddCurrentModuleContent(){
    const mainModuleContent = document.querySelector('.main-module-content');

    const contactUsButton = document.querySelector('#contact-us-button');
    contactUsButton.classList.add('current-module-tab');

    const contactUsContent = document.createElement('div');
    contactUsContent.setAttribute('id', 'contact-us-content');
    CreateRows.createRows(contactUsContent);

    const para1 = document.createElement('p');
    para1.textContent = `We serve everything from Levantine to South East Asian style cuisines. Incredible fusions that may 
    have you coming back for more.`
    contactUsContent.childNodes[0].appendChild(para1);

    const address1 = document.createElement('p');
    address1.textContent = 'Address';
    const address2 = document.createElement('p');
    address2.textContent = '9999 SW Critical Hit Ln, Portland, OR 90001';
    contactUsContent.childNodes[1].appendChild(address1);
    contactUsContent.childNodes[1].appendChild(address2); 

    const phoneNumber1 = document.createElement('p');
    phoneNumber1.textContent = 'Phone Number';
    const phoneNumber2 = document.createElement('p');
    phoneNumber2.textContent = '(281) 330-8004';
    contactUsContent.childNodes[2].appendChild(phoneNumber1);
    contactUsContent.childNodes[2].appendChild(phoneNumber2);

    const email1 = document.createElement('p');
    email1.textContent = 'Email';
    const email2 = document.createElement('p');
    email2.textContent = 'PowerUp@realEmail.com';
    contactUsContent.childNodes[3].appendChild(email1);
    contactUsContent.childNodes[3].appendChild(email2);

    mainModuleContent.appendChild(contactUsContent);
}

// LoadContactUsPage(): Loads all the methods needed for the module.
function LoadContactUsPage() {
    RemovePreviousModuleContent(); 

    AddCurrentModuleContent();
}

export default LoadContactUsPage;