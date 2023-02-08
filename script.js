// Använd fetch() för att testa API koden

// fetch('https://api.nasa.gov/planetary/apod?api_key=GrZaNTnebyHg8Y2vY7CBaAtgYyJviVsdVKMNt5zX')
//     .then((response) => response.json())
//     .then((data) => console.log(data));



// swapi
// fetch('https://swapi.dev/api/people/1/?format=json')
// .then((response) => response.json())
// .then((data) => console.log(data));


// Hämta bild från API:et


// Lägg till &count=10 i slutet för att få en array med 10 slumpmässiga objekt

// fetch("https://api.nasa.gov/planetary/apod?api_key=GrZaNTnebyHg8Y2vY7CBaAtgYyJviVsdVKMNt5zX&count=10")



const searchButton = document.querySelector("button");

searchButton.addEventListener("click", function () {
    // e.preventDefault()

    let search = document.querySelector("input");

    // console.log("test");

    fetch(`https://images-api.nasa.gov/search?q=${search.value}`)
        .then(response => response.json())
        .then((data) => {

            console.log(data.collection.items);
            const items = data.collection.items;

            // document.body.innerHTML = `<img src="${data.url}"><input type="text" placeholder="Type here"><button>Search</button>`

            for (let i = 0; i < items.length; i++) {
                if (Array.isArray(items[i].links)) {
                    const image = items[i].links[0];

                    document.body.innerHTML += `<img src="${image.href}">`

                }
            }




            for (let i = 0; i < items.length; i++) {
                if (Array.isArray(items[i].data)) {

                    const info = items[i].data[0];

                    document.body.innerHTML += `<p>${info.description}</p>`

                }   
            }
        });

});