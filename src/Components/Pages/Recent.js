import React, {useState, useEffect} from 'react'
import axios from "axios";
import "./Recent.scss";

const imgUrl = "https://image.tmdb.org/t/p/original";
const apiKey = "74c257b2ab96e96eb699620d1028a78f";
const url = "https://api.themoviedb.org/3";
const popular = "popular";


const Recent = () => {
  const [popularMovies, setPopularMovies] = useState([]);

    
    useEffect(() => {
      const fetchPopular = async () => {
        const {
            data: { results },
        } = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`);
        setPopularMovies(results);
    };
    fetchPopular();
    }, []);
    //   console.log(movie);
    function truncate(str,n){
        return str?.length>n?str.substr(0,n-1)+"...":str;
    }
    return (
      <div
        className="banner3"
        style={{
          backgroundImage: popularMovies[0]
              ? `url(${`${imgUrl}/${popularMovies[0].poster_path}`})`
              : "rgb(16, 16, 16)",
         }}
   >
      {popularMovies[0] && <h1>{popularMovies[0].original_title}</h1>}
      {popularMovies[0] && <p>{popularMovies[0].overview}</p>}

        <div className="banner3_contetents">
          {/* title */}
          <h1 className="banner3_title">
            {popularMovies?.title || popularMovies?.name ||  popularMovies?.original_name}
          </h1>
          {/* button */}
          <button className="banner3_button">Download</button>
          <button className="banner3_button">Watch</button>
          {/* description */}
          <h1 className="banner3_desscription">{truncate( popularMovies?.overview,150)}</h1>
        </div>
        <div className='banner3_fadeBottom'></div>
        </div>
    );
  };
  

export default Recent