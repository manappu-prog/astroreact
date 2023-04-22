import React from 'react'
import VideoSwiper from './VideoSwiper';
import { videodata } from '../../resources/videodata';
import './Main.css'
import Banner from './Banner';

const Main = () => {
    return(
        <div className='main'>
            <VideoSwiper videoData={videodata}/>
            <Banner />
        </div>
    )
}

export default Main;