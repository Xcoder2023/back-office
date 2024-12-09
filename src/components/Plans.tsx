import React from 'react';

interface Plan {
  id: number;
  schoolName: string;
  plan: string;
  dateSubscribed: string;
  contact: string;
  status: 'Active' | 'Inactive'; // Added status field
}

const plans: Plan[] = [
  { id: 1, schoolName: 'Greenwood High', plan: 'Premium', dateSubscribed: '2024-12-01', contact: 'info@greenwood.com', status: 'Active' },
  { id: 2, schoolName: 'Riverside Academy', plan: 'Basic', dateSubscribed: '2024-12-02', contact: 'contact@riverside.com', status: 'Inactive' },
];

const PlansTable: React.FC = () => {
  return (
    <div className="p-6 ml-64">
      <h2 className="text-2xl font-bold mb-4">Subscribed Plans</h2>
      <table className="w-full border-collapse border border-gray-200 text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">School Name</th>
            <th className="border border-gray-300 p-2">Plan</th>
            <th className="border border-gray-300 p-2">Date Subscribed</th>
            <th className="border border-gray-300 p-2">Contact</th>
            <th className="border border-gray-300 p-2">Status</th> {/* Added Status column */}
          </tr>
        </thead>
        <tbody>
          {plans.map((plan) => (
            <tr key={plan.id} className="hover:bg-gray-50">
              <td className="border border-gray-300 p-2">{plan.schoolName}</td>
              <td className="border border-gray-300 p-2">{plan.plan}</td>
              <td className="border border-gray-300 p-2">{plan.dateSubscribed}</td>
              <td className="border border-gray-300 p-2">{plan.contact}</td>
              <td className={`border border-gray-300 p-2 ${plan.status === 'Active' ? 'text-green-600' : 'text-red-600'}`}>
                {plan.status}
              </td> {/* Display status with conditional styling */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlansTable;
