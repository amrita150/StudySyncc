import React from 'react';
import Home from './Components/Home';
import AuthPage from './Components/AuthPage';


const App = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-black via-gray-900 to-indigo-900 text-white'>
       <Home/>
       <AuthPage/>
    </div>
  );
};

export default App;