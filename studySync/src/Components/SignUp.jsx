import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const SignUp = ({setIsLogIn}) =>{
    const[username, setUsername] = useState("");
    const[email, setEmail] =  useState("");
    const[password, setPassword] = useState("");
    const[showPassword, setShowPassword] = useState(false);
    const[emailError, showEmailError] = useState("");
    const[usernameError, showUsernameError] = useState("");
    const[passwordError, showPasswordError] = useState("")
    const[confirmPass, checkConfirmPass] = useState("");
    const[confirmPasswordError, showConfirmPasswordError] = useState("")
    const[showConfPassword, setShowConfPassword] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      //for username validation
      if(username==""){
        showUsernameError("Username is required")
      } else if(username.includes("@")){
        showUsernameError("Username should not contain @")
      } else{
        showUsernameError("")
      }

      //for email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(!emailRegex.test(email)){
        showEmailError("Email field is invalid");
      } else{
        showEmailError("");
      }

      //for password validation
      if(password < 8){
        showPasswordError("Min 8 characters required")
      } else if(!/[A-Z]/.test(password)){
        showPasswordError("Password must contain at least one uppercase letter")
      } else if(!/[a-z]/.test(password)){
        showPasswordError("Password must contain at least one uppercase letter")
      } else if (!/[0-9]/.test(password)) {
        showPasswordError("Password must contain at least one number");
      } else if (!/[!@#$%^&*(),._?":{}|<>]/.test(password)) {
        showPasswordError("Password must contain at least one special character");
      } else {
        showPasswordError("");
      }

      //for confirm password validation
      if(confirmPass==password){
        showConfirmPasswordError("");
      }else{
        showConfirmPasswordError("Passwords do not match")
      }


      console.log("username is: " , username );
      console.log("username is: " , email);
      console.log("username is: " , password);
      console.log("username is: " , confirmPass);
    }

    return (
      <>
    {/* // <div className="flex justify-center items-center px-4 py-12"> */}
      {/* // <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-8 max-w-md w-full text-white"> */}
        <h1 className="text-2xl font-semibold text-center mb-6">Sign Up</h1>

        <form className="w-full space-y-4" onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            onChange={(e) => {setUsername(e.target.value)}}
            className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {usernameError && <p className="text-sm text-red-500 mt-1 ml-1">{showUsernameError}</p> }

          <input
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
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

          <div className="relative">
            <input
            type={showConfPassword ? "text" : "password"}
            placeholder="Confirm Password"
            name="confPassword"
            value={confirmPass}
            onChange={(e) => {checkConfirmPass(e.target.value)}}
            className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <span
            onClick={() => setShowConfPassword(!showConfPassword)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xl cursor-pointer text-white"
            >
            {showConfPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          {confirmPasswordError && <p className="text-sm text-red-500 mt-1 ml-1">{confirmPasswordError}</p>}

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center mt-2 text-sm text-white/80">
          Already have an account{' '}
          <span className="underline cursor-pointer" onClick={() => {setIsLogIn(true)}}>Log In</span>
        </p>
      {/* // </div/> */}
    {/* // </div> */}
    </>
  );
};

export default SignUp;