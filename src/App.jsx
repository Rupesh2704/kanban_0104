import React, { useState, useEffect } from 'react';
import KanbanBoard from './components/KanbanBoard';
import GroupingSelector from './components/GroupingSelector';
import SortingSelector from './components/SortingSelector';
import './App.css';

function App() {
  const [tickets, setTickets] = useState([]);
  // groupby with default value status
  const [groupBy, setGroupBy] = useState('status');
    // sortby with default value priority
  const [sortBy, setSortBy] = useState('priority');

  useEffect(() => {
    const fetchData = async () => {

      // Data comming and saved in json format --API DATA
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      const data = await response.json();  // saved ia JSON
      setTickets(data.tickets);   //
    };
    fetchData();
  }, []);


  // Logic for grouping and sorting tickets
  // Taking label form groupby and push into groups array;
  const groupedTickets = tickets.reduce((groups, ticket) => {
    const key = ticket[groupBy];
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(ticket);
    return groups;
  }, {});



  //Saving as sorted ticket array accourding to cretira selected on website
  const sortedTickets = Object.keys(groupedTickets).map((key) => ({
    group: key,
    tickets: groupedTickets[key].sort((a, b) => {
      if (sortBy === 'priority') {   // dropdown
        return b.priority - a.priority;  // higher - lower  // sort in dec order
      } else {
        return a.title.localeCompare(b.title);  // compare acc.. title 
      }
    }),
  }));


  // jsx
  return (
    <div className="app">
      <div className="selectors">
        {/* Both are drop down */}
        <GroupingSelector groupBy={groupBy} setGroupBy={setGroupBy} /> 
        <SortingSelector sortBy={sortBy} setSortBy={setSortBy} />
      </div>

      {/* Columns displayed here  */}
      <KanbanBoard tickets={sortedTickets} />
    </div>
  );
}

export default App;
