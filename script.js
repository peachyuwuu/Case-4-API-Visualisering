// Använd fetch() för att testa API koden

// fetch('https://api.nasa.gov/planetary/apod?api_key=GrZaNTnebyHg8Y2vY7CBaAtgYyJviVsdVKMNt5zX')
//     .then((response) => response.json())
//     .then((data) => console.log(data));



// swapi
// fetch('https://swapi.dev/api/people/1/?format=json')
// .then((response) => response.json())
// .then((data) => console.log(data));


// Hämta bild från API:et



// fetch("https://api.nasa.gov/planetary/apod?api_key=GrZaNTnebyHg8Y2vY7CBaAtgYyJviVsdVKMNt5zX&count=10")

fetch("https://api.nasa.gov/planetary/apod?api_key=GrZaNTnebyHg8Y2vY7CBaAtgYyJviVsdVKMNt5zX&count=10")
    .then(response => response.json())
    .then((data) => {

        console.log(data);

        document.body.innerHTML = `<img src="${data[0].url}"><input type="text" placeholder="Type here"><button>Search</button>`

    });

