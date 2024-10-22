// TicketCard.js
import React from 'react';
import './TicketCard.css';

function TicketCard({ ticket }) {
  const priorityLabels = ['No priority', 'Low', 'Medium', 'High', 'Urgent'];

  return (
    <div className="ticket-card">
      <h4><i className="fas fa-ticket-alt"></i> {ticket.title}</h4>
      <p>{ticket.description}</p>
      <span className={`priority priority-${ticket.priority}`}>{priorityLabels[ticket.priority]}</span>
      <p><i className="fas fa-user"></i> Assigned to: {ticket.user}</p>
      <p><i className="fas fa-check-circle"></i> Status: {ticket.status}</p>
    </div>
  );
}

export default TicketCard;
