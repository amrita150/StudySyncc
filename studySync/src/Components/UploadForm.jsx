import { useState } from "react";

const UploadForm = () => {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [uploadedBy, setUploadedBy] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, subject, uploadedBy, file });
    alert("Upload logic coming soon!");
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-6 bg-white/10 p-6 rounded-xl shadow-md border border-white/20">
      <h2 className="text-2xl font-bold text-white mb-4 text-center">📤 Upload Notes or PYQs</h2>
      <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title of the Note"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-white/10 text-white placeholder-gray-400 px-4 py-2 rounded-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="bg-white/10 text-white placeholder-gray-400 px-4 py-2 rounded-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="text"
          placeholder="Uploaded by (your name)"
          value={uploadedBy}
          onChange={(e) => setUploadedBy(e.target.value)}
          className="bg-white/10 text-white placeholder-gray-400 px-4 py-2 rounded-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) => setFile(e.target.files[0])}
          className="text-white file:bg-indigo-600 file:border-none file:px-4 file:py-2 file:rounded file:text-white file:cursor-pointer"
        />
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-md transition duration-300"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default UploadForm;
