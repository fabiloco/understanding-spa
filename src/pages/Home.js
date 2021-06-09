import getData from '../utils/getData';

const Home = async () => {
    const characters = await getData();
    const view = `
        <div class="characters">
        ${characters.results.map(character => `
            <article class="character-item">
                <a href="#/${character.id}/">
                    <div>
                        <img src="${character.image}" alt="${character.name}">
                    </div>
                    <div>
                        <h2>${character.name}</h2>
                    </div>
                </a>
            </article>
        `).join('')}
        </div>
    `;
    return view;
}

export default Home;