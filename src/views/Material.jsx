import { useState } from "react";
import materialdata from "../configs/materialdata.js";
import MaterialCard from "../components/MaterialCard";

function Material() {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [semester, setSemester] = useState("All");

  const filteredMaterials = materialdata.filter(item =>
    (department === "All" || item.department === department) &&
    (semester === "All" || item.semester === semester) &&
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      
      <h1 className="text-3xl font-bold">Study Materials</h1>
      <p className="text-gray-500 mt-1">
        Browse and download study materials from all departments
      </p>

     
      <div className="flex flex-wrap gap-4 mt-6">
        <input
          type="text"
          placeholder="Search materials by title, subject, or uploader..."
          className="flex-1 border rounded-lg px-4 py-2"
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border rounded-lg px-4 py-2"
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option>All</option>
          <option>CSE</option>
          <option>ECE</option>
          <option>ME</option>
          <option>CE</option>
          <option>EE</option>
        </select>

        <select
          className="border rounded-lg px-4 py-2"
          onChange={(e) => setSemester(e.target.value)}
        >
          <option>All</option>
          <option>Sem 3</option>
          <option>Sem 4</option>
          <option>Sem 5</option>
          <option>Sem 7</option>
        </select>
      </div>

      
      <p className="text-gray-500 mt-4">
        Showing {filteredMaterials.length} of {materialdata.length} materials
      </p>

     
      <div className="w-96">
        {filteredMaterials.map(item => (
          <MaterialCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default Material;
