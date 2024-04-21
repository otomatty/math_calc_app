import React from "react";
import styled from "styled-components";
import Description from "../../components/ui/Description";
import SelectBox from "../../components/common/Selectbox"; // ModernSelectBoxをインポート

// スタイル定義
const Container = styled.div`
  padding: 20px;
  background-color: #f8f9fa;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

// コンポーネント定義
const TermSelector = ({ selectedTerms, onSelect }) => {
  // セレクトボックスのオプション
  const options = [
    { value: "2", label: "2項" },
    { value: "3", label: "3項" },
    { value: "4", label: "4項" },
    { value: "5", label: "5項" },
  ];

  return (
    <>
      <Description
        number={4}
        text={"問題の項数を選択してください。"}
      ></Description>
      <Container>
        <SelectBox
          options={options}
          defaultValue={selectedTerms}
          onChange={(e) => onSelect(e.target.value)}
        />
      </Container>
    </>
  );
};

export default TermSelector;
