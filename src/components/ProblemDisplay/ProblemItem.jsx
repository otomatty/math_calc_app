import React from "react";

const ProblemItem = ({ problem }) => {
  return (
    <li>
      <div>問題: {problem.question}</div>
      <div>答え: {problem.answer}</div>
    </li>
  );
};

export default ProblemItem;
