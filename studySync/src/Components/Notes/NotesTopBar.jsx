import { useState } from "react";
import UploadForm from "../UploadForm";

const NotesTopBar = ({ isNotesTab, setIsNotesTab, searchQuery, setSearchQuery }) => {
  const [showUpload, setShowUpload] = useState(false);

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 px-2">
        {/* Upload Button */}
        <button
          onClick={() => setShowUpload(!showUpload)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2 rounded-md transition"
        >
          + Upload New File
        </button>

        {/* Search Bar */}
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by title or subject..."
          className="flex-1 bg-white/10 text-white px-4 py-2 rounded-md placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        {/* Tabs */}
        <div className="flex gap-2">
          <button
            className={`px-4 py-2 rounded-md font-medium ${
              isNotesTab ? "bg-white text-black" : "bg-gray-700 text-white"
            }`}
            onClick={() => setIsNotesTab(true)}
          >
            Notes
          </button>
          <button
            className={`px-4 py-2 rounded-md font-medium ${
              !isNotesTab ? "bg-white text-black" : "bg-gray-700 text-white"
            }`}
            onClick={() => setIsNotesTab(false)}
          >
            PYQs
          </button>
        </div>
      </div>

      {/* Upload Form (toggle on top only) */}
      {showUpload && <UploadForm />}
    </>
  );
};

export default NotesTopBar;
