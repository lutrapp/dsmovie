
import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { BASE_URL } from "utils/requests";
import { MoviePage } from "types/movie";

function Listing() {

    const [pageNumber, setPageNumber] = useState(0);
    const [page, setPage] = useState<MoviePage>(
        {
            content: [],
            last: true,
            totalPages: 0,
            totalElements: 0,
            size: 12,
            number: 0,
            first: true,
            numberOfElements: 0,
            empty: true
        }
    );

    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=title`) //pode ordenar por titul, id  etc
        .then(response => {
            const data = response.data as MoviePage; //moviePage foi definido em types
            setPage(data);
            //console.log(response.data);
            //setPageNumber(data.number);
        });

    }, [pageNumber]);
    // significa que o useEffect depende do pageNumber, quando ele mudar, será renderizado novamente

    //a seguir o que havia sido mockado antes
    // const movie = {
    //     id: 1,
    //     image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
    //     title: "The Witcher",
    //     count: 2,
    //     score: 4.5
    // };
    
    const handlePageChange = (newPageNumber : number) => {
        setPageNumber(newPageNumber);
    }

    return (
        <>
        {/* <p>{pageNumber}</p> */}
        <Pagination page={page} onChange={handlePageChange}/>
        <div className="container">
            <div className="row">
                {page.content.map(movie => {
                    return (
                        <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                    <MovieCard movie={movie} />
                </div>
                    )
                })}

                
            
            </div>

        </div>


        </>
    )
}

export default Listing;