import React, { useEffect, useState } from 'react'
import axios from '../axios'
import { imageUrl, API_KEY } from '../constants/config'
import Youtube from 'react-youtube';
import ShimmerPoster from './ShimmerPoster';


function RowPost(props) {

  const [movies, setMovies] = useState([])
  const [urlId, setUrlId] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(props.url)
      .then((responce) => {
        console.log(responce.data);
        setMovies(responce.data.results)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Failed to fetch data', err);
        setLoading(false)
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
      .catch((err) => {
        console.error('Failed to fetch movie', err);
      })
  }

  return (
    <div className='row'>
      <h2>{props.title}</h2>

      <div className="posters">
        {loading ? (
          Array.from({ length: 10 }, (_, index) => (
            <ShimmerPoster key={index} isSmall={props.isSmall} />
          ))
        ) : (
          movies.map((obj) => (
            <img onClick={() => handleMovie(obj.id)}
              className={props.isSmall ? 'smallPoster' : 'poster'}
              src={`${imageUrl + obj.backdrop_path}`}
              key={obj.id}
              alt="poster" />
          ))
        )}
      </div>
      
      {urlId && <Youtube videoId={urlId.key} opts={opts} />}
    </div>
  )
}

export default RowPost
