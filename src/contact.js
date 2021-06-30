import { homepage } from "./homepage";

// Module to create website contact page
const contactPage = (function () {

    const middleSection = homepage.middleSection;

    // Function to create website contact page.
    function createContactPage() {


        // Create Middle Section and append to content
        middleSection.classList.add('middle');
        content.appendChild(middleSection);

        //Add Image
        const image = document.createElement('img');
        image.src = '/src/logo.png'
        image.classList.add('logo');
        middleSection.appendChild(image);

        // Add text to middle section
        const middleText = document.createElement('div');
        middleSection.appendChild(middleText);
        middleText.classList.add('middleText');
        middleText.innerText = "Contact Info goes here."

    }

    return { createContactPage }

})();

export { contactPage }