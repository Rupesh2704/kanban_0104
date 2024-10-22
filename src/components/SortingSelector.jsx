// SortingSelector.js
import React from 'react';
import './SortingSelector.css';

function SortingSelector({ sortBy, setSortBy }) {
  return (
    <div className="sorting-selector">
      <label><i className="fas fa-sort"></i> Sort by:</label>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="priority">Priority</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
}

export default SortingSelector;
