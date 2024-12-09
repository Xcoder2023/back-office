import React, { useState } from 'react';

interface Email {
  id: number;
  address: string;
}

const emails: Email[] = [
  { id: 1, address: 'user1@example.com' },
  { id: 2, address: 'user2@example.com' },
];

const EmailManagement: React.FC = () => {
  const [formData, setFormData] = useState({ subject: '', body: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email Sent:', formData);
    // Add logic to send email
    setFormData({ subject: '', body: '' });
  };

  return (
    <div className="p-6 ml-64">
      <h2 className="text-2xl font-bold mb-4">Manage Emails</h2>

      {/* Subscribed Emails Table */}
      <h3 className="text-xl font-semibold mb-2">Subscribers Emails</h3>
      <table className="w-full border-collapse border border-gray-200 text-left mb-6">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">Email Address</th>
          </tr>
        </thead>
        <tbody>
          {emails.map((email) => (
            <tr key={email.id} className="hover:bg-gray-50">
              <td className="border border-gray-300 p-2">{email.address}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Email Form */}
      <h3 className="text-xl font-semibold mb-2">Send Email</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Email Subject"
          className="w-full border border-gray-300 rounded-md p-3 outline-none"
        />
        <textarea
          name="body"
          value={formData.body}
          onChange={handleChange}
          placeholder="Email Body"
          className="w-full border border-gray-300 rounded-md p-3 outline-none"
        />
        <button type="submit" className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600">
          Send Email
        </button>
      </form>
    </div>
  );
};

export default EmailManagement;
