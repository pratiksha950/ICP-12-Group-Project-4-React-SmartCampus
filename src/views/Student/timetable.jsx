import React from "react";

export default function TimeTable() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-indigo-100 to-purple-100 px-3 sm:px-6 py-4">
      
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-indigo-700 mb-4 sm:mb-6">
        Class Timetable
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] sm:min-w-full max-w-6xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="p-2 sm:p-3 text-sm sm:text-base text-center">Time</th>
              <th className="p-2 sm:p-3 text-sm sm:text-base text-center">Monday</th>
              <th className="p-2 sm:p-3 text-sm sm:text-base text-center">Tuesday</th>
              <th className="p-2 sm:p-3 text-sm sm:text-base text-center">Wednesday</th>
              <th className="p-2 sm:p-3 text-sm sm:text-base text-center">Thursday</th>
              <th className="p-2 sm:p-3 text-sm sm:text-base text-center">Friday</th>
            </tr>
          </thead>

          <tbody className="text-center text-sm sm:text-base">
            <tr className="hover:bg-slate-50 transition">
              <td className="p-2 sm:p-3 font-medium">9 - 10</td>
              <td className="p-2 sm:p-3">Math</td>
              <td className="p-2 sm:p-3">English</td>
              <td className="p-2 sm:p-3">Physics</td>
              <td className="p-2 sm:p-3">Computer</td>
              <td className="p-2 sm:p-3">Math</td>
            </tr>

            <tr className="hover:bg-slate-50 transition">
              <td className="p-2 sm:p-3 font-medium">10 - 11</td>
              <td className="p-2 sm:p-3">Physics</td>
              <td className="p-2 sm:p-3">Math</td>
              <td className="p-2 sm:p-3">Chemistry</td>
              <td className="p-2 sm:p-3">English</td>
              <td className="p-2 sm:p-3">Computer</td>
            </tr>

            <tr className="hover:bg-slate-50 transition">
              <td className="p-2 sm:p-3 font-medium">11 - 12</td>
              <td className="p-2 sm:p-3">Chemistry</td>
              <td className="p-2 sm:p-3">Computer</td>
              <td className="p-2 sm:p-3">Math</td>
              <td className="p-2 sm:p-3">Physics</td>
              <td className="p-2 sm:p-3">English</td>
            </tr>

            <tr className="hover:bg-slate-50 transition">
              <td className="p-2 sm:p-3 font-medium">12 - 1</td>
              <td className="p-2 sm:p-3 font-semibold">Lunch</td>
              <td className="p-2 sm:p-3 font-semibold">Lunch</td>
              <td className="p-2 sm:p-3 font-semibold">Lunch</td>
              <td className="p-2 sm:p-3 font-semibold">Lunch</td>
              <td className="p-2 sm:p-3 font-semibold">Lunch</td>
            </tr>

            <tr className="hover:bg-slate-50 transition">
              <td className="p-2 sm:p-3 font-medium">1 - 2</td>
              <td className="p-2 sm:p-3">English</td>
              <td className="p-2 sm:p-3">Physics</td>
              <td className="p-2 sm:p-3">Computer</td>
              <td className="p-2 sm:p-3">Math</td>
              <td className="p-2 sm:p-3">Chemistry</td>
            </tr>

            <tr className="hover:bg-slate-50 transition">
              <td className="p-2 sm:p-3 font-medium">2 - 3</td>
              <td className="p-2 sm:p-3">Computer</td>
              <td className="p-2 sm:p-3">Chemistry</td>
              <td className="p-2 sm:p-3">English</td>
              <td className="p-2 sm:p-3">Physics</td>
              <td className="p-2 sm:p-3">Math</td>
            </tr>

            <tr className="hover:bg-slate-50 transition">
              <td className="p-2 sm:p-3 font-medium">3 - 4</td>
              <td className="p-2 sm:p-3">Math Lab</td>
              <td className="p-2 sm:p-3">Physics Lab</td>
              <td className="p-2 sm:p-3">Chemistry Lab</td>
              <td className="p-2 sm:p-3">Computer Lab</td>
              <td className="p-2 sm:p-3">English Lab</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
