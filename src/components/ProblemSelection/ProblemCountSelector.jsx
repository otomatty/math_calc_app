import React from "react";
import styled from "styled-components";

// スタイル定義
const Selector = styled.select`
  padding: 8px;
  margin: 10px;
  border-radius: 5px;
  border: 1px solid #28a745;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

// コンポーネント定義
const ProblemCountSelector = ({ selectedCount, onSelect }) => {
  const counts = [10, 20]; // 問題数の選択肢

  return (
    <Container>
      <Selector
        value={selectedCount}
        onChange={(e) => onSelect(e.target.value)}
      >
        {counts.map((count) => (
          <option key={count} value={count}>
            {count}問
          </option>
        ))}
      </Selector>
    </Container>
  );
};

export default ProblemCountSelector;
