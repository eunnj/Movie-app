import { useEffect,useState  } from "react";
import {useParams} from "react-router-dom";
import MovieDetail from "../components/MovieDetail";

function Detail(){
    const {id}=useParams()
    const [movie, setMovie] = useState([]);
    const getMovie = async()=>{
        const json=await(
         await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json)
        setMovie(json.data.movie);
    }
    useEffect(()=>{
        getMovie();
    })
    return (
        <div>
            <MovieDetail
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                rating={movie.rating}
                runtime={movie.runtime}
                title={movie.title}
                genres={movie.genres}
                description_full={movie.description_full}/>
        </div>
        
    );
}
export default Detail;