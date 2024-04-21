import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // useNavigateをインポート
import ProblemList from "./ProblemList";
import { generateProblems } from "../../utils/problemGenerator";

const ProblemConfirmScreen = () => {
  const [problems, setProblems] = useState([]);
  const location = useLocation(); // useLocationフックを使用してlocationオブジェクトを取得
  const navigate = useNavigate(); // useNavigateフックを追加

  useEffect(() => {
    const {
      selectedTypes,
      selectedFormats,
      terms,
      problemCount,
      includeNegatives,
    } = location.state;

    const newProblems = generateProblems(
      selectedTypes,
      selectedFormats,
      parseInt(terms),
      parseInt(problemCount),
      includeNegatives
    );
    setProblems(newProblems);
  }, [location.state]);

  // 戻るボタンのイベントハンドラ
  const handleBack = () => {
    navigate("/select", { state: location.state });
  };

  return (
    <div>
      <h1>問題確認</h1>
      <ProblemList problems={problems} />
      <button onClick={handleBack}>戻る</button> {/* 戻るボタンを追加 */}
    </div>
  );
};

export default ProblemConfirmScreen;
