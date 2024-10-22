// KanbanBoard.js
import React from 'react';
import TicketCard from './TicketCard';
import './KanbanBoard.css';

function KanbanBoard({ tickets }) {
  return (
    <div className="kanban-board">
      {tickets.map((group) => (
        <div key={group.group} className="kanban-column">
          {/* name of specific group to be givin to column  */}
          <h3>{group.group}</h3>    
          {/* inserting card into column */}
          {group.tickets.map((ticket, index) => (

            // each tick sent to ticketcard
            <TicketCard key={index} ticket={ticket} />   
          ))}
        </div>
      ))}
    </div>
  );
}

export default KanbanBoard;
