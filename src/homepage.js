// Module to create website homepage
const homepage = (function () {

    const content = document.getElementById('content')
    const middleSection = document.createElement('div');

    // Function to create website homepage.
    function createHomepage() {


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
        middleText.innerText = "Hurry in to try limited time gourmet burgers and more. With some new craves, and all of your faves, Red Robin Gourmet Burgers and Brews has options for the whole family!"

    }

    function deletePageContents() {

        content.removeChild(content.lastChild);
        middleSection.removeChild(middleSection.lastChild);
        middleSection.removeChild(middleSection.lastChild);

    }

    return { createHomepage, deletePageContents, content, middleSection }

})();

export { homepage }


