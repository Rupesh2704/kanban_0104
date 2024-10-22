import React from 'react';
import './SortingSelector.css';
import downIcon from '../assets/down.jpg';

function SortingSelector({ sortBy, setSortBy }) {
  return (
    <div className="sorting-selector">
      <label><img src={downIcon} alt="Sort Icon" /> Sort by:</label>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="priority">Priority</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
}

export default SortingSelector;
