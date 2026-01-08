import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const StudentDashboard = () => {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const storedStudent = localStorage.getItem("student");

    setStudent(JSON.parse(localStorage.getItem("student")));
  }, []);

  if (!student) {
    return (
      <h2 className="text-center text-lg sm:text-xl font-semibold mt-10">
        Loading Student Data...
      </h2>
    );
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Student Dashboard
        </h1>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6 mb-10 border border-blue-100">
          <div className="flex items-center gap-6">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Student"
              className="w-24 h-24 rounded-full border-4 border-blue-200"
            />
            <div>
              <h2 className="text-xl font-semibold text-blue-800 mb-2">
                Student Profile
              </h2>
              <p className="text-gray-700">
                <span className="font-semibold">Name:</span> {student.name}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Roll No:</span> {student.rollNo}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Department:</span> {student.department}
              </p>
            </div>
          </div>
        </div>

      
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Link
            to="/student/timetable"
            className="p-6 bg-white rounded-xl shadow hover:shadow-xl hover:scale-105 transition transform text-center text-gray-800 font-semibold"
          >
            Class Timetable
          </Link>
          <Link
            to="/student/notice"
            className="p-6 bg-white rounded-xl shadow hover:shadow-xl hover:scale-105 transition transform text-center text-gray-800 font-semibold"
          >
            Notices
          </Link>
          <Link
            to="/student/leave-application"
            className="p-6 bg-white rounded-xl shadow hover:shadow-xl hover:scale-105 transition transform text-center text-gray-800 font-semibold"
          >
            Leave Application
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default StudentDashboard;
