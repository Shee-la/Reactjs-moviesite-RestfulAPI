import { useState, useEffect } from 'react';
//import './App.css';
import SearchIcon from './search.svg';

import MovieCard from './MovieCard';

//Here is your key: 405cb58a

//static variable
const API_URL = 'http://www.omdbapi.com?apikey=405cb58a';
//const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=405cb58a';


const App = () => {
//creating a state
const [movies, setMovies] = useState([]);
const [searchTerm, setSearchTerm] = useState("");

    //fetch data from api above
       
        /*calling a function that will fetch the movies*/
/*accepting search title that one wants to search*/
        const searchMovies = async (title) =>
{
    //call api
     const response = await fetch(`${API_URL}&S={title}`);
//once we get the response we have to get the data to a data object
const data = await response.json(); 
//output data of the movies
setMovies(data.Search); //poppulating the movies 
    }

useEffect (()=>
{
// call the search movies function
searchMovies('spiderman');
},[] );
/*empty dependancy array*/ 

    return(
// JSX application start
<div className = "App">
<h1>Movies Site</h1>

<div className = "search"> <input
placeholder='search for movies'
value={searchTerm}
onChange={(e) => setSearchTerm(e.target.value)}
/> 
<img
src={SearchIcon}
alt="search"
onClick={()=> searchMovies(searchTerm)}
/>
</div>

{
movies?.length > 0 
?(
/*map of the movie*/
<div className = "container">
{movies.map((movie)=>(
    <MovieCard movie={movie}/>
)
)} </div>
 ) :
(
    <div className ="empty">
<h2>No movies found</h2>
    </div>
)
}

</div>
    );
}
export default App; 