import { useState } from 'react';
import Sidebar  from './Sidebar';
const AIDoubtAssistant = () => {
  const [question, setQuestion] = useState('');
  const [responses, setResponses] = useState({});
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question.trim()) return;
    setLoading(true);
    setResponses({}); // clear old responses

    // Dummy delay to simulate AI typing — you can replace with API calls
    setTimeout(() => {
      setResponses({
        chatgpt: "The integral of sin(x) with respect to x is ∫ sin(x) dx = -cos(x) + C.",
        gemini: "The integral of sin(x) dx is -cos(x) + C.",
        deepseek: "∫ sin(x) dx = -cos(x) + C. This is a standard integral.",
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0e0e1f] to-[#1b1b2e] text-white flex">
      
         <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">AI Doubt Assistant</h1>

        {/* Input Field */}
        <div className="flex gap-4 mb-6">
          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask your academic question here..."
            className="flex-1 px-4 py-3 rounded bg-[#202030] text-white placeholder-gray-400"
          />
          <button
            onClick={handleAsk}
            disabled={loading || !question.trim()}
            className="px-6 py-3 rounded bg-gradient-to-r from-blue-500 to-purple-500 font-semibold text-white disabled:opacity-50"
          >
            Ask
          </button>
        </div>

        {/* Show User's Question */}
        {question && (
          <div className="bg-[#252540] p-4 rounded mb-4">
            <p className="text-purple-300 font-medium">{question}</p>
          </div>
        )}

        {/* Responses */}
        <div className="space-y-4">
          {["chatgpt", "gemini", "deepseek"].map((model) => (
            <div key={model} className="bg-[#202030] p-4 rounded shadow">
              <h2 className="text-lg font-semibold text-blue-400 capitalize">{model}</h2>
              <p className="mt-2 text-gray-200">
                {loading
                  ? <span className="italic text-gray-400">AI is typing...</span>
                  : responses[model]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIDoubtAssistant;
