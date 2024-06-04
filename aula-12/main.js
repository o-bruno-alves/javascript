const myRequest = new XMLHttpRequest();
myRequest.open("GET", "https://dog.ceo/api/breeds/list/all");
myRequest.send();
myRequest.responseType = "json";

/* myRequest.onload = () => {
    console.log("terminou");
};

myRequest.onerror = () => {
    console.log("errou");
};

myRequest.onreadystatechange = () => {
    console.log("state changed");
};


myRequest.addEventListener("load", () => console.log("terminou"));

myRequest.addEventListener("load", () => console.log("myRequest.response")); */
