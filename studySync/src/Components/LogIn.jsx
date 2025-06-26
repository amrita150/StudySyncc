import {useState} from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";


const LogIn = ({setIsLogIn}) => {
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[showPassword, setShowPassword] = useState(false);
  const[emailError, setEmailError] = useState("");
  const[passwordError, setPasswordError] = useState("")

  const handleSubmit= (e) => {
      e.preventDefault();
      //email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
          setEmailError("Invalid email address");
        } else{
          setEmailError("");
      } 
      //password validation
     if (!password.trim()) {
        setPasswordError("Password is required");
        return;
      }
      
      if (password.length < 6) {
        setPasswordError("Password must be at least 6 characters");
        return;
      }
      setPasswordError("");
    console.log("email is : " , email);
    console.log("password is : ", password);
  }

  return (
    <>
    {/* <div className="flex justify-center items-center px-4 py-12"> */}
      {/* <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-8 max-w-md w-full text-white"> */}
        <h1 className="text-2xl font-semibold text-center mb-6">Log In</h1>
        <form className="w-full space-y-4" onSubmit={handleSubmit} >
          <input
            type="text"
            placeholder="Email"
            name = "email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {emailError && <p className="text-sm text-red-500 mt-1 ml-1">{emailError}</p>}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 pr-12 rounded-xl bg-white/10 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xl cursor-pointer text-white"
             >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          {passwordError && <p className="text-sm text-red-500 mt-1 ml-1">{passwordError}</p>}

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition duration-300"
          >
            Log In
          </button>
        </form>

        {/* Forget Password */}
        <p className="text-center mt-4 text-sm text-white/80 hover:underline cursor-pointer">
          Forgot Password?
        </p>

        {/* Sign Up */}
        <p className="text-center mt-2 text-sm text-white/80">
          Don’t have an account?{' '}
          <span className="underline cursor-pointer" onClick={() => setIsLogIn(false)}>Sign Up</span>
        </p>
      {/* </div> */}
    {/* </div> */}
    </>
  );
};

export default LogIn;
