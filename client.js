const data = loadData()
console.log(data)

const $moviesList = document.getElementById("moviesList")

renderMovies()

function renderMovies(){
    data.movies.forEach(movie => {
         const $movie = document.createElement("div")
         $movie.innerHTML = `<h1>${movie.name}</h1>`
         movie.reviews.forEach(review => {
            $movie.innerHTML += `<li>${review.rating}</li>`
         })
         $moviesList.append($movie)
    })
    
}


function loadData() {
    //JSON - JavaScript Object Notation
    const movies = [
    
        
    {
        //key : value
        "name" : "Braveheart",
        "genre" : "Action",
        "reviews" : [
            {
                "rating" : 5,
                "like" : true,
                "user" : {
                    "name" : "Ella DelVerne",
                    "gender" : "female",
                    "region" : "USA"
                }
            },
            {
                "rating" : 2,
                "like" : false,
                "user" : {
                    "name" : "Lily DelVerne",
                    "gender" : "female",
                    "region" : "USA"
                } 
            }
        ]
    },    
        
        
    {
        //key : value
        "name" : "Gladiator",
        "genre" : "Action",
        "reviews" : [
            {
                "rating" : 5,
                "like" : true,
                "user" : {
                    "name" : "Ella DelVerne",
                    "gender" : "female",
                    "region" : "USA"
                }
            },
            {
                "rating" : 1,
                "like" : false,
                "user" : {
                    "name" : "Lily DelVerne",
                    "gender" : "female",
                    "region" : "USA"
                }
            }
        ]
    }
     
        
    ]
    
    
    return{
        "movies" : movies
    } 
    
}