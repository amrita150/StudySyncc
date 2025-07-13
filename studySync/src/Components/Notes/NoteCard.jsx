// NoteCard.jsx
const NoteCard = ({ title, subject, uploadedBy, date, downloadUrl }) => {
  return (
   <div className="w-full flex items-center justify-center max-w-6xl mx-auto">
     <div className="flex items-center flex-col w-70 bg-white/10 border border-white/20 rounded-xl p-4 shadow-md hover:scale-[1.02] transition">
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-indigo-300">Subject: {subject}</p>
      <p className="text-sm text-gray-400">Uploaded by: {uploadedBy}</p>
      <p className="text-xs text-gray-500 mb-3">Uploaded on: {date}</p>
      <a
        href={downloadUrl}
        className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-4 py-2 rounded"
        download
      >
        Download
      </a>
    </div>
   </div>
  );
};

export default NoteCard;
