// GroupingSelector.js
import React from 'react';
import './GroupingSelector.css';

function GroupingSelector({ groupBy, setGroupBy }) {
  return (
    <div className="grouping-selector">
      <label><i className="fas fa-filter"></i> Group by:</label>

      {/* setgroupBy this updatating the value of groupby */}
      <select value={groupBy} onChange={(e) => setGroupBy(e.target.value)}>
        <option value="status">Status</option>
        <option value="user">User</option>
        <option value="priority">Priority</option>
      </select>
    </div>
  );
}

export default GroupingSelector;
