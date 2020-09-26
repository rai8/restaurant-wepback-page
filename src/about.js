 function createAboutSection(){
     const about= document.createElement('section')
     about.classList.add('section')


    // title
     const title= document.createElement('h2')
     title.classList.add('section-title')
     title.textContent= "About"
     about.appendChild(title)

     //description
     const description= document.createElement('p')
     description.classList.add('section-description')
     description.textContent = `
     Kendi seafood restaurant is a restaurant that specializes in seafood cuisine and seafood dishes, such as fish and shellfish. Dishes may include freshwater fish. 
     `
     about.appendChild(description)

     return about;
 }


 //listeing to which button is active

 function setBtnActive(id){
    const activeBtn = document.querySelector('.tab.active');
    if (activeBtn) activeBtn.classList.remove('active');
  
    const homeBtn = document.getElementById(id);
    homeBtn.classList.add('active');
 }

 //load the home page
function renderHome(){
    
        const content = document.getElementById('tab-content');
        content.classList.add('flex-lay');
        content.classList.remove('grid-lay');
      
        content.textContent = '';
      
        const aboutSection = createAboutSection();
      
        setBtnActive('home');
      
        content.appendChild(aboutSection);
}

export default renderHome