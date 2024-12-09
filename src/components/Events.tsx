import React, { useState } from 'react';

const ScheduleEventForm: React.FC = () => {
  const [formData, setFormData] = useState({
    eventName: '',
    eventDate: '',
    eventDescription: '',
    location: '',
    attendees: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Event Data:', formData);
    // Add logic to save the event
    setFormData({ eventName: '', eventDate: '', eventDescription: '', location: '', attendees: '' });
  };

  return (
    <div className="p-6 ml-64 w-[60%] mx-auto">
      <h2 className="text-2xl font-bold mb-4">Schedule an Event</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="eventName"
          value={formData.eventName}
          onChange={handleChange}
          placeholder="Event Name"
          className="w-full border border-gray-300 rounded-md p-4 outline-none"
        />
        <input
          type="date"
          name="eventDate"
          value={formData.eventDate}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-4 outline-none"
        />
        <textarea
          name="eventDescription"
          value={formData.eventDescription}
          onChange={handleChange}
          placeholder="Event Description"
          className="w-full border border-gray-300 rounded-md p-3 outline-none"
        />
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Event Location"
          className="w-full border border-gray-300 rounded-md p-4 outline-none"
        />
        <input
          type="text"
          name="attendees"
          value={formData.attendees}
          onChange={handleChange}
          placeholder="Attendees (comma-separated)"
          className="w-full border border-gray-300 rounded-md p-4 outline-none"
        />
        <button type="submit" className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600">
          Schedule Event
        </button>
      </form>
    </div>
  );
};

export default ScheduleEventForm;
