import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Character = async () => {
	const id = getHash();
	const character = await getData(id);
	const view = `
	<div class="characters-container">
		<div class="characters-inner">
			<article class="characters-image">
				<img src="${character.image}" alt="${character.name}">
			</article>
			<article class="characters-info">
				<h2>${character.name}</h2>
				<div class="info">
					<h3>Episodes: <span>${character.episode.length}</span></h3>
					<h3>Status: <span>${character.status}</span></h3>
					<h3>Species: <span>${character.species}</span></h3>
					<h3>Gender: <span>${character.gender}</span></h3>
					<h3>Origin: <span>${character.origin.name}</span></h3>
					<h3>Last location: <span>${character.location.name}</span></h3>
				</div>
			</article>
		</div>
	</div>
	`;
	return view;
};

export default Character;