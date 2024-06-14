import React, { useEffect, useState } from 'react'
import { API_KEY, imageUrl } from '../constants/config'
import axios from '../axios'
import ShimmerBanner from './ShimmerBanner'

function Banner() {

    const [movie, setMovie] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
            .then((responce) => {
                console.log(responce.data.results[5]);
                setMovie(responce.data.results[5])
                setLoading(false)
            })
            .catch((err) => {
                console.log('Failed to fetch data', err);
                setLoading(false)
            })
    }, [])

    return (
        <div style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})` }}
            className='banner'>
            {loading ? (
                <ShimmerBanner/>
            ) : (
                <div className='content'>
                    <h1 className='title'>{movie ? movie.title : ""}</h1>
                    <div className='bannerBtns'>
                        <button className='button'>Play</button>
                        <button className='button'>My List</button>
                    </div>
                    <h1 className='discription'>{movie ? movie.overview : ""}</h1>
                </div>
            )}
            <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner
