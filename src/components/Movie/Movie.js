import React from "react";

import css from "./Movie.module.css";
import { Link } from "react-router-dom";
import Stars from "../Stars/Stars";

const Movie = ({
  movie: {title, release_date, vote_average, backdrop_path, id },
}) => {
 // if(backdrop_path){
     return (

         <div className={css.movie}>
             <Link to={id.toString()}>
                 <img alt={''}
                     className={css.image}
                     src={`https://www.themoviedb.org/t/p/w220_and_h330_face${backdrop_path}`}
                 />
             </Link>
             <p className={css.nameFilm}>{title}</p>
             <p>{release_date}</p>
             {/*<p>{vote_average}</p>*/}
             <Stars vote_average={vote_average}/>
         </div>


     );
 // }

};

export default Movie;

// https://www.themoviedb.org/t/p/w440_and_h660_face/w2loOtr8rYmIh13xyKCYdWHu58F.jpg
