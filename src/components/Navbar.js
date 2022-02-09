import { Link } from "react-router-dom";
import { Group_obj,Group_key_arr } from "./NavList";
import styles from "./Navbar.module.css";

function Navbar(){
    return(
         // It's the Navigation Bar, always above the container!!
         <div className={styles.container}>
            {/* Page Name */}
            <div className={styles.pageName}>
                <Link to={"/"} >Home</Link>
            </div>

         {/* Group Links */}
         <div  className={styles.GroupLink}>
             {
                 Group_key_arr.map((key) => {
                     return (
                         <div className={styles.Link} key={key}>
                             <div className={styles.Link_sep}>
                                 <Link
                                     to={`/page/${Group_obj[key]}/1`}
                                 >{key}</Link>
                             </div>
                         </div>
                     )
                 })
             }
             {/* 🎄 Merry Christmas! */}
             <div className={styles.MerryChristMas}><Link to={`/search/christmas`}>Christmas🎄</Link></div>
         </div>
         </div>
    );
        
        
}

export default Navbar;