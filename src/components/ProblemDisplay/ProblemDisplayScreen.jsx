import React, { useState, useEffect } from "react";
import { generateProblems } from "../../utils/problemGenerator"; // 正しいパスに注意してください
import ProblemList from "./ProblemList"; // 正しいパスに注意してください

const ProblemsDisplay = ({
  problemType,
  numberFormat,
  terms,
  problemCount,
  includeNegatives,
}) => {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    // コンポーネントがマウントされた時に問題を生成
    const newProblems = generateProblems(
      problemType,
      [numberFormat], // generateProblems関数は複数の形式を受け取るため、配列にする
      terms,
      problemCount,
      includeNegatives
    );
    setProblems(newProblems);
  }, [problemType, numberFormat, terms, problemCount, includeNegatives]);

  return (
    <div>
      <h2>生成された問題</h2>
      <ProblemList problems={problems} />
    </div>
  );
};

export default ProblemsDisplay;
