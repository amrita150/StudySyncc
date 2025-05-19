const HeroSection = () =>{
    return(
        <div className="flex justify-center items-center flex-col">
            <div className="flex justify-center items-center pb-3">
                <h1 className="text-6xl ml-40 mr-40 justify-center text-center font-bold text-transparent bg-clip-text bg-gradient-to-l from-blue-500 via-purple-500 to-pink-500">
                    THE FUTURE of <br/>Group Study</h1>
            </div>
            <div className="p-3">
                <p className="text-xl text-center">AI-powered study rooms, verified notes, <br /> and more, designed for seamless collaboration.</p>
            </div>
            <div>
                <button className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded pr-7 pl-7 text-2xl">Join Now</button>
            </div>
            <div>
                <p>Only for Verified College Students</p>
            </div>
        </div>
    )
}

export default HeroSection;