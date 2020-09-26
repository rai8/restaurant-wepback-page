//alert("Hello Brenda")
//console.log("Hello Brenda")
import loadPage from './landingPage'
import renderHome from './about'
import renderContact from './contact'
import renderMenu from './menu'
import './style.css'

render()

function navBarEvents(){
    const homeBtn= document.getElementById('home')
    const menuBtn= document.getElementById('menu')
    const contactBtn= document.getElementById('contact')

    homeBtn.addEventListener('click', renderHome)
    menuBtn.addEventListener('click', renderMenu)
    contactBtn.addEventListener('click', renderContact)

}

function render(){
    loadPage()
    renderHome()
    navBarEvents()
}