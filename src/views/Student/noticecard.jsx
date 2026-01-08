import { Trash2 } from "lucide-react";

function NoticeCard({ task, deletTask }) {
  return (
    <div className="notice-card flex items-center justify-between bg-white shadow-md rounded-xl px-4 py-3 hover:shadow-lg transition">
      
      <span className="notice-text text-slate-700 text-base break-words">
        {task}
      </span>

      <Trash2
        className="delete-icon text-red-500 hover:text-red-600 cursor-pointer transition"
        onClick={() => deletTask(task)}
      />
    </div>
  );
}

export default NoticeCard;
