import Pages from './pages';

const CMS = 'https://coopfund-61b6f.firebaseio.com/data.json?auth=zeRFmSs9gbS1cS9mQbPHxXTZENergP3PZdpkEYOP';
const fields = ['members', 'balance', 'projects'];

const render = (data) => {
	let i = 0;
	for (var page in Pages) {
		const id = `page-0${i}`;
		document.getElementById(id).innerHTML = Pages[page];
		i++
	};

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

export default init();