import PropTypes from "prop-types";

function MovieDetail({coverImg,title,rating,runtime,genres,summary}){
    return (
        <div>
          <img src={coverImg} alt={title}/>
          <p>{rating ? `rating: ${rating} / 10` : null}</p>
            <p>{runtime ? `runtime: ${runtime} (min)` : null}</p>
            {
              genres ?
                // genre is the 'array'
                <div>
                  <b>{'genres'}</b>
                  <ul>{genres.map(g => <li key={g}>{g}</li>)}</ul>
                </div>
                : null
            }
          <p>{summary}</p>
        </div>
    );
}

MovieDetail.propTypes={
    coverImg:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    rating:PropTypes.number,
    runtime:PropTypes.number,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired,
    summary:PropTypes.string

}

export default MovieDetail;