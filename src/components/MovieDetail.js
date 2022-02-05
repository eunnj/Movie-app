import PropTypes from "prop-types";
import styles from "./MovieDetail.module.css"
function MovieDetail({coverImg,title,rating,runtime,genres,description_full}){
    return (
    <div className={styles.background}>
        <div>
          <img src={coverImg} alt={title} className={styles.movie_Img}/>
          <div className={styles.shortView_letters}>
            <h1>{title}</h1>
            <p>{rating ? `평점: ${rating} / 10` : null}</p>
            <p>{runtime ? `러닝타임: ${runtime} (분)` : null}</p>
                {
                genres ?
                    <div>
                    <b>{'장르'}</b>
                    <ul>{genres.map(g => <li key={g}>{g}</li>)}</ul>
                    </div>
                    : null
                }
            </div>
        </div>
            <div className={styles.descript}>
                <p>{description_full}</p>
            </div>
        </div>
    );
}

MovieDetail.propTypes={
    coverImg:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    rating:PropTypes.number,
    runtime:PropTypes.number,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired,
    description_full:PropTypes.string.isRequired,

}

export default MovieDetail;