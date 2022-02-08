import { Link } from "react-router-dom";
import { Group_obj,Group_key_arr } from "./NavList";
import { useState } from "react";

function Navbar(){
    return(
         // It's the Navigation Bar, always above the container!!
         <div>
            {/* Page Name */}
            <div>
                <Link to={"/"} >Home</Link>
            </div>

         {/* Group Links */}
         <div>
             {
                 Group_key_arr.map((key) => {
                     return (
                         <div key={key}>
                             <div>
                                 <Link
                                     to={`/page/${Group_obj[key]}/1`}
                                 >{key}</Link>
                             </div>
                         </div>
                     )
                 })
             }
             {/* 🎄 Merry Christmas! */}
             <div><Link to={`/search/christmas`}>Christmas🎄</Link></div>
         </div>
         </div>
    );
        
        
}

export default Navbar;