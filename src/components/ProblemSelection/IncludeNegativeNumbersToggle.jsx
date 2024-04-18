import React from "react";

const IncludeNegativeNumbersToggle = ({ includeNegatives, onToggle }) => {
  return (
    <div>
      <label>
        <input type="checkbox" checked={includeNegatives} onChange={onToggle} />
        負の数を含む
      </label>
    </div>
  );
};

export default IncludeNegativeNumbersToggle;
