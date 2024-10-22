import React from 'react';
import './TicketCard.css';
import highPriorityImg from '../assets/high-priority.jpg';
import lowPriorityImg from '../assets/low-priority.jpg';
import mediumPriorityImg from '../assets/medium-priority.jpg';
import noPriorityIcon from '../assets/No-priority.jpg';
import urgentPriorityColor from '../assets/urgent-priority-color.jpg';
import urgentPriorityGrey from '../assets/urgent-priority-grey.jpg';

function TicketCard({ ticket }) {
  const priorityImages = {
    0: noPriorityIcon,
    1: lowPriorityImg,
    2: mediumPriorityImg,
    3: highPriorityImg,
    4: urgentPriorityColor, 
  };

  return (
    <div className="ticket-card">
      <h4><img src={priorityImages[ticket.priority]} alt="Priority Icon" /> {ticket.title}</h4>
      <p>{ticket.description}</p>
      <p>Assigned to: {ticket.user}</p>
      <p>Status: {ticket.status}</p>
    </div>
  );
}

export default TicketCard;