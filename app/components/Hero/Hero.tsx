import React from "react";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import Greeting from "../Greeting/Greeting";

const Hero = () => {
    return (
        <div className="container mx-auto mt-10 px-5">
            <div className="flex w-full flex-col lg:flex-row">
                <div className="card rounded-box w-full lg:w-1/2 flex-grow place-items-center p-4">
                    <Greeting />
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className="card rounded-box w-full lg:w-1/2 flex-grow flex justify-center items-center p-4">            
                    <VideoPlayer />
                </div>
            </div>
        </div>
    )
}

export default Hero;
