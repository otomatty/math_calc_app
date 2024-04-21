import React from "react";
import { generateProblems } from "../../utils/problemGenerator";

const CreateProblemButton = ({
  selectedTypes,
  selectedFormats,
  terms,
  problemCount,
  includeNegatives,
  onCreateProblems, // コールバック関数をプロパティとして受け取る
}) => {
  // console.log(selectedTypes); // 受け取った selectedTypes を確認
  const handleCreateProblem = () => {
    const problems = generateProblems(
      selectedTypes,
      selectedFormats,
      parseInt(terms, 10),
      parseInt(problemCount, 10),
      includeNegatives
    );

    // コールバックを使用して生成された問題を親コンポーネントに渡す
    onCreateProblems(problems);
  };

  return <button onClick={handleCreateProblem}>問題作成</button>;
};

export default CreateProblemButton;
