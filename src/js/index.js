//import key from './key';
import frontPage from './front-page';
const CMS = `https://coop-fund.firebaseio.com/pages.json?auth=Mf0D24zhDbEjiKFvViQo8jjjapVhj8iNtFIxRVx7`;
const main = document.getElementsByTagName('main')[0];

let pageDirectory = [];

const renderImage = () => {

}
// const parseContent = (content, key) => {
// 	 {
// 		return './assets/'
// 	} else return content;
// }

let count = 0;
const renderElementForFrontPage = (elem, page) => {
	if (count === 0) {
		let section = page.firstElementChild;
		// console.log('section', section);
		let a = document.createElement('a');
		a.class = 'anchor-100px';
		a.id = 'bucket-anchor-ref';
		section.append(a);
		let tag = renderElement(elem);
		console.log('tag: ', tag);
		section.append(tag);
		console.log('section: ', section);
	} 
	count++
}

const renderElement = (elem, page) => {
	if (elem.page === 1) null; // renderElementForFrontPage(elem, page);
	else {
		let tag = elem.key !== 'img' ? document.createElement(elem.key) : document.createElement('div');
		if (elem.key === 'img') tag.id = elem.class;
		else tag.innerHTML = elem.content;
		page.append(tag);
	}
}

const renderContent = (content) => {
	let pageCount = 0;
	content.forEach(entry => {
		const page = entry.page;
		if (pageDirectory[page] === undefined) {
			pageDirectory[page] = [entry]
			pageCount++
		} else pageDirectory[page].push(entry);
	});
	console.log('pageDirectory: ', pageDirectory);

	let count = 1;
	while (count < pageCount) {
		console.log('count: ', count);
		if (count !== 1) {
			let pageContent = pageDirectory[count];
			let page = document.createElement('article');
			// make front page id
			main.append(page);

			pageContent.forEach(elem => {
				renderElement(elem, page);
			})
			count++
		}
	}
}

const fetchData = () => {
	fetch(CMS)
		.then(res => res.json())
		.then(content => renderContent(content))
		.catch(err => console.warn(err));
}

const init = () => {
	console.log('frontpage: ', frontPage());
	fetchData();
	main.append(frontPage());
}

init();
