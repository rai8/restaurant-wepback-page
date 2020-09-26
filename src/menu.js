function setBtnActive(id) {
	const activeBtn = document.querySelector('.tab.active');
	if (activeBtn) activeBtn.classList.remove('active');

	const homeBtn = document.getElementById(id);
	homeBtn.classList.add('active');
}

function createFood(src, text, price, alt) {
	const food = document.createElement('div');
	food.classList.add('food');
	const img = document.createElement('img');
	img.setAttribute('src', src);
	img.setAttribute('alt', alt);

	const description = document.createElement('div');
	description.classList.add('description');

	const foodName = document.createElement('h3');
	foodName.textContent = text;

	const foodPrice = document.createElement('h2');
	foodPrice.textContent = price;

	description.appendChild(foodName);
	description.appendChild(foodPrice);

	food.appendChild(img);
	food.appendChild(description);
	return food;
}
function renderMenu() {
	const content = document.getElementById('tab-content');
	content.classList.add('grid-lay');
	content.classList.remove('flex-lay');

	content.textContent = '';
	setBtnActive('menu');

	const foods = [
		createFood(
			'https://images.unsplash.com/photo-1563372522-8e97eac82f62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
			'Cooked shrimps',
			'Ksh. 1200',
			'cooked shrimps'
		),
		createFood(
			'https://images.unsplash.com/photo-1559561723-cf7f94061108?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
			'Nom salad',
			'Ksh . 1800',
			'Nom salad'
		),
		createFood(
			'https://images.unsplash.com/photo-1588791174744-7e9bf4378277?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
			'Lobster',
			'Ksh. 850',
			'Lobster'
		),
		createFood(
			'https://images.unsplash.com/photo-1572438631563-a3429408a845?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
			'Octopus',
			'Ksh. 1800',
			'Octopus'
		),
		createFood(
			'https://images.unsplash.com/photo-1566370304680-599a65522649?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
			'Grilled Meat',
			'Ksh. 750',
			'Grilled Meat'
		),

		createFood(
			'https://images.unsplash.com/photo-1551085073-5dfcc8f05b88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
			'Seafood Kebaab',
			'Ksh. 750',
			'Seafood Kebaab'
		),
		createFood(
			'https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
			'Barbecue',
			'Ksh. 750',
			'Barbecue'
		),
		createFood(
			'https://images.unsplash.com/photo-1551463682-189bf47449d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
			'Fresh Lobster',
			'Ksh. 750',
			'Fresh Lobster'
		)
	];
	foods.forEach(food => {
		content.appendChild(food);
	});
}

export default renderMenu;
