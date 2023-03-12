// fetch("https://api.nasa.gov/planetary/apod?api_key=GrZaNTnebyHg8Y2vY7CBaAtgYyJviVsdVKMNt5zX&count=10")



// Definierar searchButton och väljer ut den med querySelector
const searchButton = document.querySelector("button");

// Definierar filterButton och väljer ut den med getElementById
const filterButton = document.getElementById("filterButton");



// Lägger till EventListener som kollar när man klickar på knappen och kör funktionen nedan
searchButton.addEventListener("click", function () {

    // Definerar sök-variabeln
    let search = document.querySelector("input");

    // Ett anrop görs från API:en med värdet från input field som användaren angett
    fetch(`https://images-api.nasa.gov/search?q=${search.value}`)
        .then(response => response.json())
        .then((data) => {

            // Om sökningen är tom visas meddelandet "No results found"
            if (!data.collection) {
                console.log("Array is empty");

                document.body.innerHTML =
                    `
                <header>
                <div class="header">
                <a href="landing.html">Home</a>
                </div>
                </header>
                
                <footer>
                &copy; Jonatan Saydi
                </footer>
                
                <div class="noResults"><p>No results found</p></div>
                `;

            } else {
                // console.log(data.collection);
                // console.log(data.collection.items);
                const items = data.collection.items;



                // En for-loop kollar om resultatet är en array och skriver sedan ut resultaten till DOM:en
                for (let i = 0; i < items.length; i++) {
                    if (Array.isArray(items[i].links)) {

                        const image = items[i].links[0];

                        const info = items[i].data[0];


                        document.body.innerHTML += `<div class="content"><img src="${image.href}"><h1>${info.title}</h1><p>${info.description}</p></div>`;
                    }
                }
                console.log(items);
            }
        });
});


filterButton.addEventListener("click", function filteredImages() {

    console.log("I have been clicked");

    let filteredDates = document.getElementById("filterButton");

    



});