import React from 'react'

function Banner() {
    return (
        <div className='banner'>
            <div className='content'>
                <h1 className='title'>Movie Name</h1>
                <div className='bannerBtns'>
                    <button className='button'>Play</button>
                    <button className='button'>My List</button>
                </div>
                <h1 className='discription'>ReactJS Profilers is a tool for profiling the react components, It measures how many times the react Application is rendered and how much time the components take to be rendered.</h1>
            </div>
            <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner
