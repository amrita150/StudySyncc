const HeroSection = () =>{
    return(
       <div className="w-full flex flex-col items-center justify-center px-4">

            <div className="flex justify-center items-center pb-3">
                <h1 className="text-6xl sm:text-5xl mt-2 pt-1 justify-center text-center font-bold text-transparent bg-clip-text bg-gradient-to-l from-blue-500 via-purple-500 to-pink-500">
                    Smarter Study<br/>Starts Here</h1>
            </div>
            <div className="p-3">
                <p className="text-xl mb-3 text-center leading-relaxed">
                      AI-powered doubt solving and access to quality notes <br className="hidden sm:inline" />
                     & previous year questions – all in one place.
                </p>
            </div>
            <div>
                 <button className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 hover:from-blue-700 hover:to-pink-600 text-white px-8 py-3 rounded-full font-semibold mb-3 text-lg shadow-lg transition-transform hover:scale-105">
                     Get Started
                    </button>            
            </div>
        </div>
    )
}

export default HeroSection;