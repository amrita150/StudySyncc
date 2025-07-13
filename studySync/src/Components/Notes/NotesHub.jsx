import { useState } from "react";
import { Link } from "react-router-dom";
import notes from "../data/notesData";
import NoteCard from "./NoteCard";
import NotesTopBar from "./NotesTopBar";

const NotesHub = () => {
  const [isNotesTab, setIsNotesTab] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNotes = notes.filter((note) => {
    const isPYQ = note.title.toLowerCase().includes("pyq");
    const tabMatch = isNotesTab ? !isPYQ : isPYQ;

    const query = searchQuery.toLowerCase();
    const searchMatch =
      note.title.toLowerCase().includes(query) ||
      note.subject.toLowerCase().includes(query);

    return tabMatch && searchMatch;
  });

  return (
    <div className="min-h-screen px-4 py-10 bg-gradient-to-br from-black via-gray-900 to-indigo-900">
      <h1 className="text-3xl sm:text-4xl font-bold text-white text-center mb-6">
        Notes & PYQs Hub 📚
      </h1>

      <NotesTopBar
        isNotesTab={isNotesTab}
        setIsNotesTab={setIsNotesTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filteredNotes.map((note) => (
          <NoteCard key={note.id} {...note} />
        ))}
      </div>
    </div>
  );
};

export default NotesHub;
