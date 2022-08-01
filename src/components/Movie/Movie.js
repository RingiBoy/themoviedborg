import React from "react";

import css from "./Movie.module.css";
import { Link } from "react-router-dom";
import Stars from "../Stars/Stars";

const Movie = ({
  movie: {title, release_date, vote_average, backdrop_path, id },
}) => {
 if(backdrop_path){
     return (

         <div className={css.movie}>
             <Link to={id.toString()}>
                 <img alt={'title'}   
                     className={css.image}
                     
                     src={`https://www.themoviedb.org/t/p/w220_and_h330_face${backdrop_path}`}
                 />
             </Link>
             <p className={css.nameFilm}>{title}</p>
             <p>{release_date}</p>
            
             <Stars vote_average={vote_average}/>
         </div>


     );
 }
 return (

    <div className={css.movie}>
        <Link to={id.toString()}>
            <img alt={'title'}   
                className={css.image}
                
                src={`https://us.123rf.com/450wm/mathier/mathier1905/mathier190500002/134557216-no-thumbnail-image-placeholder-for-forums-blogs-and-websites.jpg`}
            />
        </Link>
        <p className={css.nameFilm}>{title}</p>
        <p>{release_date}</p>
       
        <Stars vote_average={vote_average}/>
    </div>


);
 

};

export default Movie;
