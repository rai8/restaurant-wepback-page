//setting up the header

function setHeader(id, text) {
	const header = document.createElement('header');
	header.setAttribute('id', id);
	header.className = 'heading';
	const logo = document.createElement('h1');
	logo.textContent = text;
	header.appendChild(logo);
	return header;
}

//create a button
function createButton(id, text) {
	const btn = document.createElement('button');
	btn.setAttribute('id', id);
	const span = document.createElement('span');
	span.textContent = text;
	btn.appendChild(span);
	btn.classList.add('tab');
	return btn;
}
//setting up the navbar
function setNavbar(id) {
	const nav = document.createElement('nav');
	nav.setAttribute('id', id);

	const homeBtn = createButton('home', 'home');
	const menuBtn = createButton('menu', 'menu');
	const contactBtn = createButton('contact', 'contact');

	nav.appendChild(homeBtn);
	nav.appendChild(menuBtn);
	nav.appendChild(contactBtn);

	return nav;
}

//setting the main content on page loader
function createMain(id) {
	const main = document.createElement('main');
	main.setAttribute('id', id);
	return main;
}

//rendering the page

function loadPage() {
	const content = document.getElementById('content');

	//render the header
	const header = setHeader('header', 'Kendi Sea Foods');
	content.appendChild(header);

	//render the navbar
	const nav = setNavbar('nav');
	content.appendChild(nav);

	//render the navbar content
	const navContent = createMain('tab-content');
	content.appendChild(navContent);
}

export default loadPage;
