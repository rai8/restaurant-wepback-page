//setting up the header

function setHeader(id, text){
    const header= document.createElement('header')
    header.setAttribute('id', id)
    header.className= "heading"
    const logo= document.createElement('h1')
    logo.textContent= text
    header.appendChild(logo)
    return header
}

//rendering the page

function loadPage(){
    const content= document.getElementById('content')

    //render the header
    const header = setHeader('header', "Kendi Sea Foods");
    content.appendChild(header)
}


export default loadPage