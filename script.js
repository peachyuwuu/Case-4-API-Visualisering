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
    
    console.log("test");
    
    fetch(`https://images-api.nasa.gov/search?q=${search.value}`)
        .then(response => response.json())
        .then((data) => {
    
            console.log(data);
    
            // document.body.innerHTML = `<img src="${data.url}"><input type="text" placeholder="Type here"><button>Search</button>`
    
            for (let i = 0; i < data.length; i++) {
                const element = data[i];
                
                document.body.innerHTML += `<img src="${element.href}">`
    
                console.log(element);
            }
        });
    
});