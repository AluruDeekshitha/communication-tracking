import React, { useState } from 'react';
import './tooltip.css'; // Ensure you create and style this file as needed

const Tooltip = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="tooltip-container"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && <div className="tooltip-box">{text}</div>}
    </div>
  );
};

export default Tooltip;
