import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./MovieGroup.module.css";

function MovieGroup({id,coverImg,title,rating,year,runtime,summary,genres}){
    return (
        <div>
          <img src={coverImg} alt={title}/>
          <div className={styles.title}>
          <Link to={`/movie/${id}`}>{title}</Link>
          </div>
          <p>{year ? `year: ${year}` : null}</p>
          <p>{rating ? `rating: ${rating} / 10` : null}</p>
          <p>{runtime ? `runtime: ${runtime} (min)` : null}</p>
          <p>{summary? summary.length>235?`${summary.slice(0,235)}...`:summary:null}</p>
          <ul>
            {genres&&genres.map((g)=>(
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
    );
}

MovieGroup.propTypes={
    id:PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    rating: PropTypes.number,
    runtime: PropTypes.number,
    download_count: PropTypes.number,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default MovieGroup;