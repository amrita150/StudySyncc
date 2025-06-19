const LogIn = () => {
  return (
    <div className="min-h-screen flex justify-center items-center px-4">
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-8 max-w-md w-full text-white">
        <h1 className="text-2xl font-semibold text-center mb-6">Log In</h1>

        {/* Inputs + Button */}
        <form className="w-full space-y-4">
          <input
            type="text"
            placeholder="Email"
            name="email"
            className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
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
          <span className="underline cursor-pointer">Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
