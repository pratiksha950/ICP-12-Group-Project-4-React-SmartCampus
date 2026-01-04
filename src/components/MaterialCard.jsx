function MaterialCard({ data }) {
  return (
    <div className="bg-white rounded-xl border p-5 shadow-sm hover:shadow-md transition">
      
     
      <span className="text-xs font-semibold border px-2 py-1 rounded-full">
        {data.type}
      </span>

      <h3 className="font-semibold text-lg mt-3">{data.title}</h3>
      <p className="text-gray-500 text-sm mt-1">{data.description}</p>

      
      <div className="flex flex-wrap gap-2 mt-3">
        <span className="bg-gray-100 px-2 py-1 text-xs rounded">
          {data.department}
        </span>
        <span className="bg-gray-100 px-2 py-1 text-xs rounded">
          {data.semester}
        </span>
        <span className="bg-gray-100 px-2 py-1 text-xs rounded">
          {data.subject}
        </span>
      </div>

      
      <div className="flex justify-between items-center mt-4">
        <p className="text-sm text-gray-500">
          {data.downloads} downloads · {data.size}
        </p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
          Download
        </button>
      </div>
    </div>
  );
}

export default MaterialCard;
