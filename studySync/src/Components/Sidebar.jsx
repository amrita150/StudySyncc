// src/components/Sidebar.jsx
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-[250px] bg-[#0f0f1f] p-4 border-r border-gray-800 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-white">🎓 StudySync</h2>

      <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-2 rounded mb-6">
        + New Chat
      </button>

      <nav className="space-y-4 text-md text-gray-300">
        <Link to="/" className="block hover:text-white">🏠 Home</Link>
        <Link to="/saved" className="block hover:text-white">💾 Saved Doubts</Link>
        <Link to="/settings" className="block hover:text-white">⚙️ Settings</Link>
      </nav>

      <input
        placeholder="Search..."
        className="mt-6 w-full p-2 rounded bg-[#1f1f2e] text-sm text-white placeholder-gray-400"
      />
    </div>
  );
};

export default Sidebar;
