const NavBar = () => {
    return (
      <>
        <div className="flex items-center justify-between p-5 pl-6 ">
            <div>
                <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 ">StudySync</h1>
            </div>
            <div className="flex item center justify-between gap-4">
                <h4>Home</h4>              
                <h4>Features</h4>
                <h4>Notes</h4>
                <h4>Study Room</h4>
                <h4>Doubts</h4>            
                <h4>Login / Sign Up</h4>
            </div>
         </div>
        </>

        
    )
}

export default NavBar;