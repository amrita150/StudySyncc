const HeroSection = () =>{
    return(
        <div className="flex justify-center items-center flex-col">
            <div>
                <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-blue-500 via-purple-500 to-pink-500 ">
                    THE FUTURE of Group Study</h1>
            </div>
            <div>
                <p className="text-2xl">AI-powered study rooms, verified notes, and more, designed for seamless collaboration.</p>
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