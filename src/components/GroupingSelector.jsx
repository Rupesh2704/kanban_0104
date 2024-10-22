import React from 'react';
import './GroupingSelector.css';
import threeDotMenu from '../assets/3 dot menu.jpg';

function GroupingSelector({ groupBy, setGroupBy }) {
  return (
    <div className="grouping-selector">
      <label><img src={threeDotMenu} alt="Group By Menu" /> Group by:</label>
      <select value={groupBy} onChange={(e) => setGroupBy(e.target.value)}>
        <option value="status">Status</option>
        <option value="user">User</option>
        <option value="priority">Priority</option>
      </select>
    </div>
  );
}

export default GroupingSelector;