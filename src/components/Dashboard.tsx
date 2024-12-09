import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface DataItem {
  id: number;
  name: string;
  date: string;
  type: string;
}

const mockData: DataItem[] = [
  { id: 1, name: 'Sample Blog', date: '2024-12-01', type: 'Blog' },
  { id: 2, name: 'Sample Event', date: '2024-12-02', type: 'Event' },
  { id: 3, name: 'Sample Email Campaign', date: '2024-12-03', type: 'Email' },
  { id: 4, name: 'Sample Plan', date: '2024-12-04', type: 'Plan' },
];

const Dashboard: React.FC = () => {
  const [data, setData] = useState<DataItem[]>(mockData);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value.toLowerCase());
  };

  const handleDelete = (id: number) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  const handleEdit = (item: DataItem) => {
    navigate(`/dashboard/edit/${item.id}`, { state: item });
  };

  return (
    <div className="p-6 ml-64">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Dashboard</h1>
      <p className="text-gray-700 mb-6">
        Manage blogs, events, emails, and subscription plans.
      </p>

      {/* Search Input */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={handleSearch}
          className="w-full border border-gray-300 rounded-md p-4 outline-none"
        />
      </div>

      {/* Data Tables */}
      <div className="space-y-8">
        {['Blog', 'Event', 'Email', 'Plan'].map((category) => (
          <div key={category}>
            <h2 className="text-xl font-semibold mb-4">{category}s</h2>
            <table className="w-full border-collapse border border-gray-200 text-left">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2">Name</th>
                  <th className="border border-gray-300 p-2">Date</th>
                  <th className="border border-gray-300 pl-10 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data
                  .filter(
                    (item) =>
                      item.type === category &&
                      item.name.toLowerCase().includes(search)
                  )
                  .map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="border border-gray-300 p-2">{item.name}</td>
                      <td className="border border-gray-300 p-2">{item.date}</td>
                      <td className="border border-gray-300 pl-10 py-2 space-x-4">
                        <button
                          onClick={() => handleEdit(item)}
                          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                {!data.some(
                  (item) =>
                    item.type === category &&
                    item.name.toLowerCase().includes(search)
                ) && (
                  <tr>
                    <td
                      colSpan={3}
                      className="border border-gray-300 p-2 text-center text-gray-500"
                    >
                      No data available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
