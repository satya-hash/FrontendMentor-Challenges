let dicebtn = document.querySelector('.dice'),
	number = document.querySelector('.num'),
	quote = document.querySelector('.quote');
const URL = 'https://quotes15.p.rapidapi.com/quotes/random/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f4ed946d77mshd5f0c4382bf79a6p12940djsn3b386aa0f7de',
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
};

dicebtn.addEventListener('click', () => {
	
	getQuote();
})




async function getQuote() {
	const response = await fetch(URL, options);
	const data = await response.json();
	const [id, content] = [data.id,data.content];
	number.textContent = `advice # ${id}`;
	quote.textContent = `${content}`;
}


// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

