<div className="flex items-center justify-between p-5 pl-6">
  <div>
    <h1 className="text-2xl text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-gray-100 via-gray-300 to-indigo-400">
      StudySync
    </h1>
  </div>

  {/* Desktop Links */}
  <div className="hidden md:flex items-center justify-between gap-4">
    <h4>Home</h4>
    <h4>Features</h4>
    <h4>Notes</h4>
    <h4>Study Room</h4>
    <h4>Doubts</h4>
    <h4>Login / Sign Up</h4>
  </div>

  {/* Mobile Menu Icon */}
  <div className="md:hidden">
    <HiMenu className="text-4xl text-white" />
  </div>
</div>