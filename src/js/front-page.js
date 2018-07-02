
const frontPage = () => {
	const template = `
		<section>
			<a class="anchor-100px" id="bucket-anchor-ref"></a>
		</section>
		<section id="stats">
			<div class="stat col-md-4">
				<div class="stat-header"></div>
			</div>
			<div class="stat col-md-4">
				<div class="stat-header"></div>
			</div>
			<div class="stat col-md-4">
				<div class="stat-header"></div>
			</div>
		</section>
		<section class="summary"></section>
	`;
	let article = document.createElement('article');
	article.id = 'front-page';
	article.innerHTML = template;
	return article;
}


export default frontPage;
