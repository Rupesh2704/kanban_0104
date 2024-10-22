import React from 'react';
import TicketCard from './TicketCard';
import './KanbanBoard.css';

// Group by status icons
import todoIcon from '../assets/Todo.jpg'; 
import inProgressIcon from '../assets/in-progress.jpg'; 
import backlogIcon from '../assets/Backlog.jpg'; 

// group by priority icons
import noPriorityIcon from '../assets/No-priority.jpg'; 
import lowPriorityIcon from '../assets/low-priority.jpg'; 
import mediumPriorityIcon from '../assets/medium-priority.jpg'; 
import highPriorityIcon from '../assets/high-priority.jpg'; 
import urgentPriorityIcon from '../assets/urgent-priority-color.jpg'; 
import downIcon from '../assets/user.png'

function KanbanBoard({ tickets }) {
  const columnIcons = {
    'Todo': todoIcon,
    'In progress': inProgressIcon,
    'Backlog': backlogIcon,
    0 : noPriorityIcon,
    1 : lowPriorityIcon,
    2 : mediumPriorityIcon,
    3 : highPriorityIcon ,
    4: urgentPriorityIcon ,
    'undefined' : downIcon
  };

  return (
    <div className="kanban-board">
      {tickets.map((group) => (
        <div key={group.group} className="kanban-column">
          
          <h3>
            <img src={columnIcons[group.group]} alt={`${group.group} Icon||`} style={{margin:"0 5px"}}/>
            {group.group}
          </h3>
          {group.tickets.map((ticket, index) => (
            <TicketCard key={index} ticket={ticket} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default KanbanBoard;
