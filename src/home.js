
function summonHomePage(){
    const homePageContainer = document.createElement('div');
    homePageContainer.classList.add("homePage");

    const tagline = document.createElement('h2');
    tagline.textContent = ("Enjoy Classic Indian Snacks");
    homePageContainer.appendChild(tagline);
    

    const copyWrite = document.createElement('p');
    copyWrite.textContent = ("We have food from several Indian cusines");
    homePageContainer.appendChild(copyWrite);

    const contentDiv = document.getElementById('content');
    contentDiv.appendChild(homePageContainer);
}

export { summonHomePage };