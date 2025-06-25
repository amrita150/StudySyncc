import React from 'react';
import Home from './Components/Home';
import LogIn from './Components/LogIn';
import SignUp from './Components/SignUp';



const App = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-black via-gray-900 to-indigo-900 text-white'>
       <Home/>
       <LogIn/>
       <SignUp/>
    </div>
  );
};

export default App;