import React, { useState, useEffect } from 'react';
import KanbanBoard from './components/KanbanBoard';
import GroupingSelector from './components/GroupingSelector';
import SortingSelector from './components/SortingSelector';
import './App.css';

function App() {
  const [tickets, setTickets] = useState([]);
  const [groupBy, setGroupBy] = useState('status');
  const [sortBy, setSortBy] = useState('priority');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      const data = await response.json();
      setTickets(data.tickets);
    };
    fetchData();
  }, []);

  // Logic for grouping and sorting tickets
  const groupedTickets = tickets.reduce((groups, ticket) => {
    const key = ticket[groupBy];
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(ticket);
    return groups;
  }, {});

  const sortedTickets = Object.keys(groupedTickets).map((key) => ({
    group: key,
    tickets: groupedTickets[key].sort((a, b) => {
      if (sortBy === 'priority') {
        return b.priority - a.priority;
      } else {
        return a.title.localeCompare(b.title);
      }
    }),
  }));

  return (
    <div className="app">
      <div className="selectors">
        <GroupingSelector groupBy={groupBy} setGroupBy={setGroupBy} />
        <SortingSelector sortBy={sortBy} setSortBy={setSortBy} />
      </div>
      <KanbanBoard tickets={sortedTickets} />
    </div>
  );
}

export default App;