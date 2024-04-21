import React from "react";
import { InlineMath } from "react-katex";

const ProblemList = ({ problems }) => {
  return (
    <div>
      <h2>問題リスト</h2>
      <ul>
        {problems.map((problem, index) => (
          <li key={index}>
            <InlineMath math={problem} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProblemList;
