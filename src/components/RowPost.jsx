import React, { useEffect, useState } from 'react'
import axios from '../axios'
import { imageUrl ,API_KEY} from '../constants/config'
import Youtube from 'react-youtube';

function RowPost(props) {

  const [movies, setMovies] = useState([])
  const [urlId, setUrlId] = useState('')

  useEffect(() => {
    axios.get(props.url).then((responce) => {
      console.log(responce.data);
      setMovies(responce.data.results)
    })
  }, [props.url])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    console.log(id);
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(responce => {
      if (responce.data.results.length !== 0) {
        setUrlId(responce.data.results[0])
      } else {
        console.log('Trailer not available');
      }
    })
  }

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">

        {movies.map((obj) =>
          <img onClick={() => handleMovie(obj.id)} 
          className={props.isSmall ? 'smallPoster' : 'poster'} 
          src={`${imageUrl + obj.backdrop_path}`} alt="poster" />
        )}

      </div>
        { urlId && <Youtube videoId={urlId.key} opts={opts}/>}
    </div>
  )
}

export default RowPost
