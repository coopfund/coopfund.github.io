const CMS = 'https://coopfund-61b6f.firebaseio.com/data.json?auth=zeRFmSs9gbS1cS9mQbPHxXTZENergP3PZdpkEYOP';
const fields = ['members', 'balance', 'projects'];

const render = (data) => {
	fields.forEach(field => {
		document.getElementById(`js-${field}`).innerHTML = data[0][field];
	});
};

const init = () => {
	fetch(CMS)
		.then(res => res.json())
		.then(data => render(data))
		.catch(err => {console.warn(err)});
};

init();