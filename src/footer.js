
function footerPrakatHoo(){
    const footer = document.createElement('footer');

    footer.textContent=("Made by hokageCV");

    const contentDiv = document.getElementById('content');
    contentDiv.appendChild(footer);
}

export { footerPrakatHoo };