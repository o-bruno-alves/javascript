const loadAnimesByYear = async (year) => {
  const resposta = await fetch("https://api.jikan.moe/v4/top/anime");

  const dadosResposta = await resposta.json();
  const animesList = dadosResposta.data;

  const animesFiltered = animesList.filter(
    (animeItem) => animeItem.year === year
  );

  if (animesFiltered.length === 0) {
    console.log(`o ano ${year} não tem conteudos`);
  } else {
    animesFiltered.map((animeItem) => console.log(animeItem.title));
  }
};