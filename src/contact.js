function setBtnActive(id) {
	const activeBtn = document.querySelector('.tab.active');
	if (activeBtn) activeBtn.classList.remove('active');

	const homeBtn = document.getElementById(id);
	homeBtn.classList.add('active');
}

//creating section of the contact page
function createSection(name, details) {
	const section = document.createElement('section');
	section.classList.add('section');

	//title of the section
	const title = document.createElement('h2');
	title.classList.add('section-title');
	title.textContent = name;
	section.appendChild(title);

	//address information

	details.forEach(detail => {
		const description = document.createElement('p');
		description.classList.add('section-description');
		description.textContent = detail;
		section.appendChild(description);
	});
	return section;
}

//render the contact page
function renderContact() {
	const content = document.getElementById('tab-content');
	content.classList.add('flex-lay');
	content.classList.remove('grid-lay');
	content.textContent = '';
	setBtnActive('contact');

	const phoneSection = createSection('Phones', [
		'Safaricom : +2545433573106',
		'Airtel : +254784647383'
	]);
	const addressSection = createSection('Addreess', [
		'45th Street Moi Avenue',
		'Old Town Kibokoni Road'
	]);
	content.appendChild(phoneSection);
	content.appendChild(addressSection);
}

export default renderContact;
