import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AuthPage from "./components/AuthPage";
import NotesHub from "./components/Notes/NotesHub";
import AIDoubtAssistant from "./Components/AIDoubtAssistant";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-indigo-900 text-white">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/notes" element={<NotesHub />} />
        <Route path="/ai-doubt" element={<AIDoubtAssistant />} />
      </Routes>
    </div>
  );
};

export default App;
