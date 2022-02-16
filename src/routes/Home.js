import { useState,useEffect } from "react";
import { Group_obj, Group_key_arr } from "../components/NavList"
import { Link } from "react-router-dom";
import Load from "../components/Load";
import Slide from "../components/Slide"
import styles from "./Home.module.css";

function Home(){
    const [loading,setLoading] = useState(true);
    const [movies, setMovies]=useState([])
    const getMovies = async()=>{
    const json=await (
      await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    )).json();
    setMovies(json.data.movies);
    setLoading(false);  
  };
  useEffect(()=>{
    getMovies();
  },[])
  console.log(movies);
  return (
    <div>
      {loading?
        <Load/> :
        <div>
        {Group_key_arr.map((group) => {
        return (
          <div key={group}>
            <div className={styles.title}>
              <div className={styles.titleBox}>
                <Link to={`/page/${Group_obj[group]}/1`}
                style={{"display":"flex", "flexDirection":"row", "alignContent":"center"}}>
                  <div><span>{group}</span></div>
                </Link>
              </div>
            </div>
            <Slide ytsApi={`https://yts.mx/api/v2/list_movies.json?limit=10&${Group_obj[group]}&sort_by=rating`} />
          </div>
          )
        })}
        <div className={styles.footer}>
        <div className={styles.copyright}>
          <h3 className={styles.copyright_letter}>
            Copyright belongs to eunnj
          </h3>
        </div>
      </div>
    </div>
        
      }
      
    </div>
  );
}

export default Home;