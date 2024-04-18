import React from "react";
import ProblemItem from "./ProblemItem"; // 正しいパスに注意してください

const ProblemList = ({ problems }) => {
  return (
    <ul>
      {problems.map((problem) => (
        <ProblemItem key={problem.id} problem={problem} />
      ))}
    </ul>
  );
};

export default ProblemList;
