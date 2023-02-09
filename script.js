// fetch("https://api.nasa.gov/planetary/apod?api_key=GrZaNTnebyHg8Y2vY7CBaAtgYyJviVsdVKMNt5zX&count=10")



// Definierar searchButton och väljer ut den med querySelector
const searchButton = document.querySelector("button");

// Lägger till EventListener som kollar när man klickar på knappen och kör funktionen nedan
searchButton.addEventListener("click", function () {

    // Definerar sök-variabeln
    let search = document.querySelector("input");

    // Ett anrop görs från API:en med värdet från input field som användaren angett
    fetch(`https://images-api.nasa.gov/search?q=${search.value}`)
        .then(response => response.json())
        .then((data) => {

            console.log(data.collection.items);
            const items = data.collection.items;

            // En for-loop kollar om resultatet är en array och skriver sedan ut resultaten till DOM:en
            for (let i = 0; i < items.length; i++) {
                if (Array.isArray(items[i].links)) {

                    const image = items[i].links[0];

                    const info = items[i].data[0];

                    document.body.innerHTML += `<div class="content"><img src="${image.href}"><h1>${info.title}</h1><p>${info.description}</p></div>`

                }
            }

        });

});