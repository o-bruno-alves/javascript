
const findAnimeByYear = async (year) => {
  try {
    const response = await fetch("https://api.jikan.moe/v4/top/anime", {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    const animesList = data.data;

    const animesFiltered = animesList.filter((animeItem) => {
      const releaseYear = new Date(animeItem.start_date).getFullYear();
      return releaseYear === year;
    });

    if (animesFiltered.length === 0) {
      console.log(`O ano ${year} não tem conteúdos.`);
    } else {
      animesFiltered.forEach((animeItem) => console.log(animeItem.title));
    }
  } catch (error) {
    console.log(`Erro: ${error.message}`);
  }
};

// Exemplo de chamada
const year = 2023;
findAnimeByYear(year);

