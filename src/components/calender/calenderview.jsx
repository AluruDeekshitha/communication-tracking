import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { format } from 'date-fns';

const CalendarView = () => {
  const [communications, setCommunications] = useState([]);
  const [filteredType, setFilteredType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

  // Sample communications data (replace with actual data)
  const allCommunications = [
    { id: 1, type: 'LinkedIn Post', date: '2024-12-20', notes: 'Initial outreach' },
    { id: 2, type: 'Email', date: '2024-12-22', notes: 'Follow-up email' },
    { id: 3, type: 'Phone Call', date: '2024-12-25', notes: 'Call regarding project' },
    { id: 4, type: 'LinkedIn Message', date: '2024-12-26', notes: 'Message follow-up' },
    { id: 1, type: 'LinkedIn Post', date: '2024-12-10', notes: 'Initial outreach' },
    { id: 2, type: 'Email', date: '2024-12-12', notes: 'Follow-up email' },
    { id: 3, type: 'Phone Call', date: '2024-12-15', notes: 'Call regarding project' },
    { id: 4, type: 'LinkedIn Message', date: '2024-12-16', notes: 'Message follow-up' },
  ];

  // Filter communications based on selected type and date range
  useEffect(() => {
    let filtered = allCommunications;

    // Apply type filter
    if (filteredType) {
      filtered = filtered.filter(comm => comm.type === filteredType);
    }

    // Apply date range filter
    if (startDate) {
      filtered = filtered.filter((comm) => new Date(comm.date) >= new Date(startDate));
    }
    if (endDate) {
      filtered = filtered.filter((comm) => new Date(comm.date) <= new Date(endDate));
    }

    setCommunications(filtered);
  }, [filteredType, startDate, endDate]);

  // Transform communications into FullCalendar event format
  const events = communications.map((comm) => ({
    title: comm.type,
    date: comm.date,
    description: comm.notes,
  }));

  const handleEventSubmit = (newEvent) => {
    setCommunications((prevCommunications) => [
      ...prevCommunications,
      newEvent,
    ]);
    setIsModalOpen(false); // Close modal after submission
  };

  return (
    <div className="calendar-container">
      <h1 className="text-2xl font-bold mb-4">Communication Calendar</h1>

      {/* Filter by Type */}
      <div className="filter-container mb-4">
        <select
          className="filter-dropdown"
          value={filteredType}
          onChange={(e) => setFilteredType(e.target.value)}
        >
          <option value="">All Communications</option>
          <option value="LinkedIn Post">LinkedIn Post</option>
          <option value="Email">Email</option>
          <option value="Phone Call">Phone Call</option>
          <option value="LinkedIn Message">LinkedIn Message</option>
        </select>
      </div>

      {/* Filter by Date Range */}
      <div className="date-range-container mb-4">
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="date-picker"
          placeholder="Start Date"
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="date-picker"
          placeholder="End Date"
        />
      </div>

      {/* FullCalendar */}
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        dateClick={(info) => {
          setSelectedDate(info.dateStr); // Set the selected date
          setIsModalOpen(true); // Show the modal for adding communication
        }}
      />

      {/* Event Creation Modal */}
      {isModalOpen && (
        <div className="modal">
          <h2>Create Communication for {selectedDate}</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const newEvent = {
                title: e.target.title.value,
                date: selectedDate,
                description: e.target.description.value,
              };
              handleEventSubmit(newEvent);
            }}
          >
            <input type="text" name="title" placeholder="Communication Type" />
            <textarea name="description" placeholder="Description"></textarea>
            <button type="submit">Save</button>
            <button type="button" onClick={() => setIsModalOpen(false)}>
              Close
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CalendarView;
