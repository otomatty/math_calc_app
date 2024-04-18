import React, { useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import ProblemTypeToggle from "./ProblemTypeToggle";
import NumberFormatToggle from "./NumberFormatToggle";
import TermSelector from "./TermSelector";
import ProblemCountSelector from "./ProblemCountSelector";
import PageCountSelector from "./PageCountSelector";
import IncludeNegativeNumbersToggle from "./IncludeNegativeNumbersToggle";

const ProblemSelectionScreen = () => {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [numberFormat, setNumberFormat] = useState("整数");
  const [terms, setTerms] = useState("2");
  const [problemCount, setProblemCount] = useState("10");
  const [pageCount, setPageCount] = useState("1");

  const [includeNegatives, setIncludeNegatives] = useState(false);

  const handleToggleIncludeNegatives = () => {
    setIncludeNegatives(!includeNegatives);
  };
  // Google Fonts から選んだフォントを適用
  const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
  }
`;

  const Container = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 20px; // コンテナのパディングを増やす
    background-color: #f8f9fa; // 背景色を明るく
    border-radius: 8px; // 角を丸く
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); // コンテナに影を追加
  `;

  return (
    <>
      <GlobalStyle />

      <Container>
        <h2>問題選択</h2>
        <ProblemTypeToggle
          selectedTypes={selectedTypes}
          onSelect={setSelectedTypes}
        />
        <NumberFormatToggle
          selectedFormat={numberFormat}
          onSelect={setNumberFormat}
        />
        <TermSelector selectedTerms={terms} onSelect={setTerms} />
        <ProblemCountSelector
          selectedCount={problemCount}
          onSelect={setProblemCount}
        />
        <PageCountSelector
          selectedPageCount={pageCount}
          onSelect={setPageCount}
        />
        <IncludeNegativeNumbersToggle
          includeNegatives={includeNegatives}
          onToggle={handleToggleIncludeNegatives}
        />
      </Container>
    </>
  );
};

export default ProblemSelectionScreen;
