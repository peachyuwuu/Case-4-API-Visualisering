// Lägg till &count=10 i slutet för att få en array med 10 slumpmässiga objekt

// fetch("https://api.nasa.gov/planetary/apod?api_key=GrZaNTnebyHg8Y2vY7CBaAtgYyJviVsdVKMNt5zX&count=10")



// Definierar searchButton och väljer ut den med querySelector
const searchButton = document.querySelector("button");

// Lägger till EventListener som kollar när man klickar på knappen och kör funktionen nedan
searchButton.addEventListener("click", function () {


    let search = document.querySelector("input");


    fetch(`https://images-api.nasa.gov/search?q=${search.value}`)
        .then(response => response.json())
        .then((data) => {

            console.log(data.collection.items);
            const items = data.collection.items;


            for (let i = 0; i < items.length; i++) {
                if (Array.isArray(items[i].links)) {

                    const image = items[i].links[0];

                    const info = items[i].data[0];

                    document.body.innerHTML += `<img src="${image.href}"><h1>${info.title}</h1><p>${info.description}</p>`

                }
            }

        });

});