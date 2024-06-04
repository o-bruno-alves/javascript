const myRequest = new XMLHttpRequest();

myRequest.open("GET", "https://api.jikan.moe/v4/top/anime");

myRequest.responseType = "json";

myRequest.send();

myRequest.addEventListener("load", () => {
    const animes = myRequest.response.data;
    const filterAnimes = animes.filter((anime) => anime.year === 2024);
        if (filterAnimes.length === 0) {
            console.log("Este ano não tem animes");
        } else {
            filterAnimes.forEach((anime) => console.log(anime));
        }
    });
