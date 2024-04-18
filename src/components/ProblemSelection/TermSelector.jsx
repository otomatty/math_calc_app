import React from "react";
import styled from "styled-components";

// スタイル定義
const Selector = styled.select`
  padding: 8px;
  margin: 10px;
  border-radius: 5px;
  border: 1px solid #007bff;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

// コンポーネント定義
const TermSelector = ({ selectedTerms, onSelect }) => {
  return (
    <Container>
      <Selector
        value={selectedTerms}
        onChange={(e) => onSelect(e.target.value)}
      >
        <option value="2">2項</option>
        <option value="3">3項</option>
        <option value="4">4項</option>
        <option value="5">5項</option>
      </Selector>
    </Container>
  );
};

export default TermSelector;
