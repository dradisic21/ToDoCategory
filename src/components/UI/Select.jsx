import React from 'react';
import '../../styles/Select.scss'; 

export function Select(props) {
  return (
    <div className="select-container">
      <select 
        value={props.value} 
        onChange={props.onChange} 
        className="select-element"
      >
        <option value={props.value}>
          {props.name}
        </option>
      </select>
    </div>
  );
}
