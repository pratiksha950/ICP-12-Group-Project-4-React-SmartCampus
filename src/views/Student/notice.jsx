import React, { useEffect, useState } from "react";
import NoticeCard from "./noticecard";
import NoTaskImg from "./assets/no-tasks.png";

function App() {
  const [notices, setNotices] = useState([]);
  const [newNotice, setNewNotice] = useState("");

  useEffect(() => {
    const savedNotices = JSON.parse(localStorage.getItem("notices"));
    if (savedNotices) setNotices(savedNotices);
  }, []);

  const saveToLocalStorage = (data) => {
    localStorage.setItem("notices", JSON.stringify(data));
  };

  const addNotice = () => {
    if (!newNotice.trim()) return;
    const updated = [newNotice, ...notices];
    setNotices(updated);
    saveToLocalStorage(updated);
    setNewNotice("");
  };

  const deleteNotice = (notice) => {
    const filtered = notices.filter((n) => n !== notice);
    setNotices(filtered);
    saveToLocalStorage(filtered);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-indigo-100 to-purple-100 px-3 sm:px-6 py-4">

    
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-indigo-700">
        Notice Board
      </h1>

      <p className="text-center text-sm sm:text-base text-gray-600 mb-4">
        {notices.length === 0
          ? "No notices available. Please add a notice"
          : "Latest notices"}
      </p>

      {notices.length === 0 && (
        <div className="flex justify-center items-center my-6 sm:my-8">
          <img
            src={NoTaskImg}
            alt="No Notices"
            className="w-40 sm:w-56 opacity-80"
          />
        </div>
      )}

      <div className="space-y-3 max-w-full sm:max-w-xl mx-auto">
        {notices.map((notice, index) => (
          <NoticeCard key={index} task={notice} deletTask={deleteNotice} />
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-3 max-w-full sm:max-w-xl mx-auto mt-6">
        <input
          type="text"
          placeholder="Add new notice..."
          value={newNotice}
          onChange={(e) => setNewNotice(e.target.value)}
          className="w-full px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button
          onClick={addNotice}
          className="w-full sm:w-auto px-5 py-2 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
        >
          Add Notice
        </button>
      </div>

      <button
        className="mt-6 block mx-auto px-6 py-2 rounded-xl bg-gray-700 text-white hover:bg-gray-800 transition text-sm sm:text-base"
        onClick={() => window.history.back()}
      >
        Back
      </button>
    </div>
  );
}

export default App;
