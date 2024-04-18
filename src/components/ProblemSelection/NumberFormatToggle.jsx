import React from "react";
import styled from "styled-components";

// スタイル定義
const ToggleButton = styled.button`
  background-color: ${(props) => (props.isActive ? "#28a745" : "#ffffff")};
  color: ${(props) => (props.isActive ? "#ffffff" : "#000000")};
  border: 1px solid #28a745;
  padding: 8px 16px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.isActive ? "#218838" : "#f0f0f0")};
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

// コンポーネント定義
const NumberFormatToggle = ({ selectedFormat, onSelect }) => {
  const formats = ["整数", "分数", "少数"];

  return (
    <Container>
      {formats.map((format) => (
        <ToggleButton
          key={format}
          isActive={selectedFormat === format}
          onClick={() => onSelect(format)}
        >
          {format}
        </ToggleButton>
      ))}
    </Container>
  );
};

export default NumberFormatToggle;
