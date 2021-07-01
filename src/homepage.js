// Module to create website homepage
const homepage = (function () {

    const body = document.body;
    body.style.backgroundImage = "url('/src/b.jpg')";

    const content = document.getElementById('content')
    const middleSection = document.createElement('div');

    // Function to create website homepage.
    function createHomepage() {

        const middleSection = document.createElement('div');

        // Create Middle Section and append to content
        middleSection.classList.add('middleHome');
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

        // Add footer
        const footer = document.createElement('div');
        footer.classList.add('footer');
        content.appendChild(footer);
    }

    //Function to delte current pages contents when switching tabs
    function deletePageContents() {

        content.removeChild(content.lastChild);
        content.removeChild(content.lastChild);

    }

    return { createHomepage, deletePageContents, content, middleSection }

})();

export { homepage }


