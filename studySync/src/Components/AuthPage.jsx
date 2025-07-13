import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LogIn from './LogIn';
import SignUp from './SignUp';

const AuthPage = () => {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode"); // "login" or "signup"
  const [isLogIn, setIsLogIn] = useState(mode !== "signup"); // default to login

  useEffect(() => {
    if (mode === "signup") {
      setIsLogIn(false);
    } else {
      setIsLogIn(true);
    }
  }, [mode]);

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#0f172a] px-4">
      <div className="w-full max-w-md p-6 sm:p-8 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl text-white">
        {/* Tab Switcher */}
        <div className="flex justify-between mb-6 bg-white/10 rounded-full p-1">
          <button
            onClick={() => setIsLogIn(false)}
            className={`w-1/2 py-2 rounded-full transition ${
              !isLogIn ? "bg-white text-indigo-600 font-semibold" : "text-white"
            }`}
          >
            Sign Up
          </button>
          <button
            onClick={() => setIsLogIn(true)}
            className={`w-1/2 py-2 rounded-full transition ${
              isLogIn ? "bg-white text-indigo-600 font-semibold" : "text-white"
            }`}
          >
            Log In
          </button>
        </div>
        {isLogIn ? <LogIn setIsLogIn={setIsLogIn} /> : <SignUp setIsLogIn={setIsLogIn} />}
      </div>
    </div>
  );
};

export default AuthPage;
