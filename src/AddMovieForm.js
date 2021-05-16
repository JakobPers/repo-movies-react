import { render } from '@testing-library/react';
import React, {useState, useRef} from 'react';
import Movie from './Movie';

export default function AddMovieForm() {
    const [movies, setMovies] = useState([{
        id: 1,
        grade: 4,
        title: "Matrix"
    }, {
        id: 2,
        grade: 2,
        title: "Avengers"
    }, {
        id: 3,
        grade: 5,
        title: "Gladiator"
    }]);

    const titleRef = useRef();
    const ratingRef = useRef();

    function saveMovie(event) {
        if (titleRef.current.value === "") {
            alert("Du måste ange en titel för att kunna spara filmen");
            
        }
    
        else if (ratingRef.current.value === "0") {
            alert("Du måste ange ett betyg för att kunna spara filmen")
            
        } else {
            const newId = movies.length > 0 ? movies[movies.length - 1].id + 1 : 1;
            setMovies([...movies, {
                id: newId,
                grade: ratingRef.current.value,
                title: titleRef.current.value
            }]);

            titleRef.current.value = '';
            ratingRef.current.value = 0;
        }
    }

    function removeMovie(id){

        setMovies(movies.filter((item) => item.id !== id));

    }

    function sortAlph(event) {
        
        const alphSorted = movies.sort((a,b) => {
            if(a.title < b.title) return -1;
            if(a.title > b.title) return 1;
            return 0;
        });

        setMovies(JSON.parse(JSON.stringify(alphSorted)));

    }


    function sortGrade(event) {

        const gradeSorted = movies.sort((a,b) => {
            if(a.grade > b.grade) return -1;
            if(a.grade < b.grade) return 1;
            return 0;
        })

        setMovies(JSON.parse(JSON.stringify(gradeSorted)));

    }

    return (
        <div>
            <form id="add-movie">
            <fieldset>
                <legend>Lägg till en film</legend>

                <label htmlFor="title">Titel:</label>
                <input type="text" id="title" className="form-control" ref={titleRef}></input>

                <label htmlFor="rating">Betyg:</label>

                <select type="text" id="rating" className="form-control" ref={ratingRef}>
                    <option value="0">Välj betyg här...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

            </fieldset>
            </form> 
            <input type="submit" className="btn btn-success mt-3" value="Spara film" onClick={saveMovie}></input>

            <h1>Inlagda Filmer</h1>
            <ul className="list-group">
                {movies.map(movie => <Movie key={movie.id} item={movie} removeMovie={removeMovie} />) }
            </ul>
            <input type="submit" className="btn btn-success mt-3" value="Sortera Alph" onClick={sortAlph}></input>
            <input type="submit" className="btn btn-success mt-3" value="Sortera Grade" onClick={sortGrade}></input>
        </div>
    )
}